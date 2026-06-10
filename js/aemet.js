/* HortelanoUrbano.es — Integración AEMET */

const AEMET_KEY  = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJJbWFndTkwQGljbG91ZC5jb20iLCJqdGkiOiJjYzk4MjE5ZC0xNTg3LTQ2MWQtOTdmYi04NDQzZmI5YTFmZjgiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTc4MTA3NTQxOCwidXNlcklkIjoiY2M5ODIxOWQtMTU4Ny00NjFkLTk3ZmItODQ0M2ZiOWExZmY4Iiwicm9sZSI6IiJ9.y6KdPAMq39W7lRlI6APODRgTCCYMXl9EbOLLnqbaUi0';
const AEMET_BASE = 'https://opendata.aemet.es/opendata/api';

/* Mapa código INE de provincia → zona climática del calendario */
const PROV_ZONA = {
   2: 'continental_calida',  3: 'mediterranea',      4: 'semiarida',
   5: 'continental_fria',    6: 'continental_calida', 7: 'mediterranea',
   8: 'mediterranea',        9: 'continental_fria',  10: 'continental_calida',
  11: 'semiarida',          12: 'mediterranea',      13: 'continental_calida',
  14: 'semiarida',          15: 'atlantica',         16: 'continental_calida',
  17: 'mediterranea',       18: 'semiarida',         19: 'continental_calida',
  20: 'atlantica',          21: 'semiarida',         22: 'continental_fria',
  23: 'semiarida',          24: 'continental_fria',  25: 'mediterranea',
  26: 'continental_calida', 27: 'atlantica',         28: 'continental_calida',
  29: 'semiarida',          30: 'mediterranea',      31: 'continental_fria',
  32: 'atlantica',          33: 'atlantica',         34: 'continental_fria',
  35: 'subtropical',        36: 'atlantica',         37: 'continental_fria',
  38: 'subtropical',        39: 'atlantica',         40: 'continental_fria',
  41: 'semiarida',          42: 'continental_fria',  43: 'mediterranea',
  44: 'continental_fria',   45: 'continental_calida',46: 'mediterranea',
  47: 'continental_fria',   48: 'atlantica',         49: 'continental_fria',
  50: 'continental_calida', 51: 'subtropical',       52: 'subtropical'
};

let _municipiosCache = null;

/* Descarga y cachea el listado completo de municipios de AEMET */
async function _cargarMunicipios() {
  if (_municipiosCache) return _municipiosCache;
  const r1   = await fetch(`${AEMET_BASE}/maestro/municipios?api_key=${AEMET_KEY}`);
  const j1   = await r1.json();
  if (j1.estado !== 200) throw new Error(j1.descripcion || 'Error AEMET municipios');
  const r2   = await fetch(j1.datos);
  _municipiosCache = await r2.json();
  return _municipiosCache;
}

/* Normaliza texto para comparación sin tildes ni mayúsculas */
function _norm(s) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/**
 * buscarMunicipio(nombre)
 * Devuelve hasta 8 municipios cuyo nombre contiene el texto buscado.
 * Cada elemento: { id: "id28079", nombre: "Madrid" }
 */
async function buscarMunicipio(nombre) {
  const lista = await _cargarMunicipios();
  const q = _norm(nombre.trim());
  if (!q) return [];
  return lista
    .filter(m => _norm(m.nombre).includes(q))
    .slice(0, 8);
}

/**
 * obtenerClimaYZona(codMunicipio)
 * Recibe el id de municipio AEMET (ej. "id28079") y devuelve la clave
 * de zona climática correspondiente a las definidas en data.js.
 * Usa el código de provincia como base y refina con la predicción si está disponible.
 */
async function obtenerClimaYZona(codMunicipio) {
  const num      = codMunicipio.replace('id', '');
  const provCode = parseInt(num.substring(0, 2), 10);
  const zonaBase = PROV_ZONA[provCode] || 'mediterranea';

  try {
    const r1 = await fetch(
      `${AEMET_BASE}/prediccion/especifica/municipio/diaria/${codMunicipio}?api_key=${AEMET_KEY}`
    );
    const j1 = await r1.json();
    if (j1.estado !== 200) return zonaBase;

    const r2   = await fetch(j1.datos);
    const data = await r2.json();
    const dias = data[0]?.prediccion?.dia || [];
    if (!dias.length) return zonaBase;

    /* Medias de temperaturas del pronóstico */
    const tmaxArr = dias.map(d => d.temperatura?.maxima).filter(v => v != null);
    const tminArr = dias.map(d => d.temperatura?.minima).filter(v => v != null);
    if (!tmaxArr.length) return zonaBase;

    const avgMax = tmaxArr.reduce((a, b) => a + b, 0) / tmaxArr.length;
    const avgMin = tminArr.reduce((a, b) => a + b, 0) / tminArr.length;
    const mes    = new Date().getMonth(); // 0=Ene … 11=Dic

    /* Ajuste fino para Canarias / Ceuta / Melilla aunque ya estén en zonaBase */
    if ([35, 38, 51, 52].includes(provCode)) return 'subtropical';

    /* En verano (jun-ago): detectar zonas muy cálidas */
    if (mes >= 5 && mes <= 7) {
      if (avgMax >= 35) return (zonaBase === 'continental_calida' || zonaBase === 'semiarida')
        ? zonaBase : 'semiarida';
    }

    /* En invierno (dic-feb): detectar zonas muy frías */
    if (mes === 11 || mes <= 1) {
      if (avgMin <= -2) return (zonaBase === 'continental_fria') ? zonaBase : 'continental_fria';
    }

    return zonaBase;
  } catch {
    return zonaBase;
  }
}
