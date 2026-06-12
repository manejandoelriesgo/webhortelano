/* HortelanoUrbano.es — Base de datos v2 */

const MESES = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
const MESES_FULL = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

/* ============================================================
   ZONAS CLIMÁTICAS
   ============================================================ */
const ZONAS = {
  atlantica: {
    nombre: 'Zona Atlántica',
    label: 'Atlántica — Galicia, Asturias, Cantabria, País Vasco',
    provincias: ['A Coruña','Lugo','Ourense','Pontevedra','Asturias','Cantabria','Vizcaya','Guipúzcoa','Álava'],
    descripcion: 'Lluvias frecuentes, veranos suaves, inviernos templados'
  },
  continental_fria: {
    nombre: 'Continental Fría',
    label: 'Continental Fría — Burgos, Soria, Ávila, Navarra interior, León',
    provincias: ['Burgos','Soria','Ávila','Segovia','León','Palencia','Valladolid','Zamora','Salamanca','Navarra','Huesca','Teruel'],
    descripcion: 'Inviernos muy fríos, veranos cálidos, heladas frecuentes'
  },
  continental_calida: {
    nombre: 'Continental Cálida',
    label: 'Continental Cálida — Madrid, Toledo, Extremadura, Zaragoza',
    provincias: ['Madrid','Toledo','Cuenca','Guadalajara','Albacete','Ciudad Real','Cáceres','Badajoz','Zaragoza','La Rioja'],
    descripcion: 'Veranos muy calurosos, inviernos fríos, sequía estival'
  },
  mediterranea: {
    nombre: 'Mediterránea',
    label: 'Mediterránea — Valencia, Barcelona costa, Murcia, Baleares',
    provincias: ['Barcelona','Girona','Tarragona','Lleida','Castellón','Valencia','Alicante','Murcia','Baleares'],
    descripcion: 'Veranos secos y calurosos, inviernos suaves'
  },
  semiarida: {
    nombre: 'Semiárida',
    label: 'Semiárida — Almería, Alicante sur, Granada, Sureste',
    provincias: ['Almería','Granada','Jaén','Málaga','Sevilla','Huelva','Cádiz','Córdoba'],
    descripcion: 'Muy caluroso en verano, precipitaciones escasas'
  },
  subtropical: {
    nombre: 'Subtropical',
    label: 'Subtropical — Canarias, Málaga costa, Ceuta',
    provincias: ['Las Palmas','Santa Cruz de Tenerife','Ceuta','Melilla'],
    descripcion: 'Temperaturas cálidas todo el año, sin heladas'
  }
};

/* Devuelve el id de zona a partir del nombre de provincia */
function getZona(provincia) {
  for (const [id, z] of Object.entries(ZONAS)) {
    if (z.provincias.includes(provincia)) return id;
  }
  return 'mediterranea';
}

/* ============================================================
   PROVINCIAS (orden alfabético)
   ============================================================ */
const PROVINCIAS = [
  'A Coruña','Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
  'Baleares','Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón',
  'Ceuta','Ciudad Real','Córdoba','Cuenca','Girona','Granada','Guadalajara',
  'Guipúzcoa','Huelva','Huesca','Jaén','La Rioja','Las Palmas','León','Lleida',
  'Lugo','Madrid','Málaga','Melilla','Murcia','Navarra','Ourense','Palencia',
  'Pontevedra','Salamanca','Santa Cruz de Tenerife','Segovia','Sevilla','Soria',
  'Tarragona','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'
];

/* ============================================================
   BASE DE DATOS DE PLANTAS
   Estructura de calendar por zona:
   { siembra: [meses 0-11], trasplante: [meses], cosecha: [meses] }
   ============================================================ */
const PLANTAS = {

  /* ---- HORTALIZAS ---- */
  tomate: {
    nombre: 'Tomate',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'El rey de los huertos. Requiere calor y sol directo.',
    espacio_min: 40,
    tiempo_cosecha: '60-80 días desde trasplante',
    litros_maceta: 20, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas de tomate variado', desc: 'Pack con 10 variedades de tomate', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta de 30L', desc: 'Ideal para tomates en terraza', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato para hortalizas', desc: 'Mezcla especial con perlita', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono tomates y pimientos', desc: 'Fórmula específica para frutos', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Necesita mínimo 6 horas de sol directo al día','Entutora las ramas cuando alcance 30 cm','Elimina los brotes laterales (chupones) cada semana','Riega por la base, nunca sobre las hojas']
    },
    calendar: {
      atlantica:         { siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      continental_fria:  { siembra:[2,3], trasplante:[4,5], cosecha:[7,8,9] },
      continental_calida:{ siembra:[1,2,3], trasplante:[3,4], cosecha:[6,7,8,9] },
      mediterranea:      { siembra:[1,2,3], trasplante:[3,4], cosecha:[6,7,8,9] },
      semiarida:         { siembra:[0,1,2], trasplante:[2,3], cosecha:[5,6,7,8] },
      subtropical:       { siembra:[0,1,2,8,9], trasplante:[2,3,9,10], cosecha:[5,6,7,11,0] }
    }
  },

  pimiento: {
    nombre: 'Pimiento',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'Exige calor. Produce abundantemente en verano.',
    espacio_min: 40,
    tiempo_cosecha: '70-90 días desde trasplante',
    litros_maceta: 15, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas de pimiento variado', desc: 'Dulces, picantes y de asar', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 25L con sistema riego', desc: 'Incluye reserva de agua', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato premium hortalizas', desc: 'pH equilibrado para pimientos', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono líquido pimiento', desc: 'Rico en potasio para frutos', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Muy sensible al frío, no trasplantar antes de 15°C','Necesita tutor cuando crece','El riego uniforme evita el blossom end rot','Los pimientos verdes se pueden cosechar antes de madurar']
    },
    calendar: {
      atlantica:         { siembra:[1,2], trasplante:[4,5], cosecha:[7,8,9] },
      continental_fria:  { siembra:[2,3], trasplante:[5], cosecha:[7,8,9] },
      continental_calida:{ siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      mediterranea:      { siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      semiarida:         { siembra:[0,1], trasplante:[2,3], cosecha:[5,6,7,8,9] },
      subtropical:       { siembra:[0,1,8,9], trasplante:[2,3,10], cosecha:[5,6,7,11,0] }
    }
  },

  berenjena: {
    nombre: 'Berenjena',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'Amante del calor. Produce durante todo el verano.',
    espacio_min: 50,
    tiempo_cosecha: '70-80 días desde trasplante',
    litros_maceta: 20, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas berenjena negra', desc: 'Variedad listada tradicional española', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 30L rectangular', desc: 'Perfecta para terrazas', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato universal con perlita', desc: 'Excelente drenaje garantizado', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono granulado humus de lombriz', desc: 'Natural y de liberación lenta', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Precisa de calor: no aguanta menos de 15°C','Poda las ramas más débiles para concentrar la producción','Recolecta cuando la piel brille y antes de que amarillee','Enemiga del escarabajo de la patata']
    },
    calendar: {
      atlantica:         { siembra:[2,3], trasplante:[4,5], cosecha:[7,8,9] },
      continental_fria:  { siembra:[3], trasplante:[5], cosecha:[7,8] },
      continental_calida:{ siembra:[2,3], trasplante:[4], cosecha:[6,7,8] },
      mediterranea:      { siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      semiarida:         { siembra:[1,2], trasplante:[3], cosecha:[5,6,7,8] },
      subtropical:       { siembra:[0,1,8,9], trasplante:[2,3,10], cosecha:[5,6,7,11] }
    }
  },

  calabacin: {
    nombre: 'Calabacín',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'De las hortalizas más productivas y fáciles de cultivar.',
    espacio_min: 60,
    tiempo_cosecha: '45-55 días desde siembra directa',
    litros_maceta: 25, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas calabacín verde', desc: 'Alta germinación garantizada', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta cuadrada 50L', desc: 'Amplio espacio para raíces', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato con abono incorporado', desc: 'Listo para usar desde el primer día', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado líquido', desc: 'Estimula el crecimiento rápido', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Siembra directa: 2-3 semillas por golpe a 2 cm de profundidad','Cosechar cuando mida 15-20 cm para mayor sabor','Una sola planta produce abundantemente','Regar en la base para evitar el mildiu']
    },
    calendar: {
      atlantica:         { siembra:[3,4,5], trasplante:[], cosecha:[6,7,8,9] },
      continental_fria:  { siembra:[4,5], trasplante:[], cosecha:[6,7,8] },
      continental_calida:{ siembra:[3,4,7,8], trasplante:[], cosecha:[5,6,7,9,10] },
      mediterranea:      { siembra:[2,3,4,7,8], trasplante:[], cosecha:[4,5,6,7,9,10] },
      semiarida:         { siembra:[2,3,7,8], trasplante:[], cosecha:[4,5,6,9,10] },
      subtropical:       { siembra:[0,1,2,8,9,10], trasplante:[], cosecha:[3,4,5,10,11,0] }
    }
  },

  pepino: {
    nombre: 'Pepino',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Rápido y refrescante. Ideal para el verano.',
    espacio_min: 30,
    tiempo_cosecha: '50-65 días desde siembra',
    litros_maceta: 18, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas pepino variado', desc: 'Pepino largo, corto y para encurtir', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta con soporte trepadora', desc: 'Incluye red de escalada', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato ligero bien drenado', desc: 'Mezcla óptima para cucurbitáceas', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono para cucurbitáceas', desc: 'Fórmula específica para pepino', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Planta trepadora: necesita soporte o red','Riego abundante y constante (sin encharcamiento)','Cosechar antes de que amarillee para estimular más frutos','Muy sensible al frío: no plantar antes de mayo en zonas frías']
    },
    calendar: {
      atlantica:         { siembra:[3,4,5], trasplante:[], cosecha:[6,7,8] },
      continental_fria:  { siembra:[4,5], trasplante:[], cosecha:[6,7,8] },
      continental_calida:{ siembra:[3,4,5], trasplante:[], cosecha:[5,6,7,8] },
      mediterranea:      { siembra:[3,4,5,6], trasplante:[], cosecha:[5,6,7,8,9] },
      semiarida:         { siembra:[2,3,4,5], trasplante:[], cosecha:[4,5,6,7,8] },
      subtropical:       { siembra:[0,1,2,3,9,10], trasplante:[], cosecha:[2,3,4,5,11,0] }
    }
  },

  lechuga: {
    nombre: 'Lechuga',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Perfecta para principiantes. Rápida y sin complicaciones.',
    espacio_min: 20,
    tiempo_cosecha: '45-60 días',
    litros_maceta: 12, perenne: false, comparte_maceta: true, unidades_por_maceta: 3,
    amazon: {
      semillas: { nombre: 'Semillas lechuga mix', desc: '5 variedades: romana, batavia, lollo...', tag: 'imagu90-21' },
      maceta:   { nombre: 'Jardinera balcón 60cm', desc: 'Ideal para lechugas en fila', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato para hortalizas de hoja', desc: 'Ligero y con buena retención', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado hoja verde', desc: 'Para lechugas y hojas en general', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Ideal para principiantes: rápida y sin complicaciones','Soporta algo de sombra (media sombra en verano es positivo)','Sembrar cada 15-20 días para cosecha continua','En verano puede subir a flor (espigarse): plantar variedades de verano']
    },
    calendar: {
      atlantica:         { siembra:[0,1,2,3,7,8,9,10], trasplante:[2,3,8,9], cosecha:[3,4,5,10,11] },
      continental_fria:  { siembra:[1,2,3,7,8,9], trasplante:[3,4,8,9], cosecha:[4,5,10,11] },
      continental_calida:{ siembra:[0,1,2,8,9,10,11], trasplante:[2,3,9,10], cosecha:[3,4,5,10,11,0] },
      mediterranea:      { siembra:[0,1,2,8,9,10,11], trasplante:[2,9,10], cosecha:[3,4,5,10,11,0] },
      semiarida:         { siembra:[0,1,2,8,9,10,11], trasplante:[1,2,9,10], cosecha:[2,3,4,10,11,0] },
      subtropical:       { siembra:[0,1,2,3,8,9,10,11], trasplante:[1,2,9,10], cosecha:[2,3,4,5,10,11,0] }
    }
  },

  espinaca: {
    nombre: 'Espinaca',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Planta de temporada fría. Siembra en otoño e invierno.',
    espacio_min: 15,
    tiempo_cosecha: '40-50 días',
    litros_maceta: 12, perenne: false, comparte_maceta: true, unidades_por_maceta: 4,
    amazon: {
      semillas: { nombre: 'Semillas espinaca gigante', desc: 'Variedad de hoja grande muy productiva', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta rectangular 40cm', desc: 'Perfecta para espinacas en ventana', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato hortalizas de hoja', desc: 'Rico en nitrógeno orgánico', tag: 'imagu90-21' },
      abono:    { nombre: 'Humus de lombriz granulado', desc: 'Abono natural para hoja verde', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Planta de clima frío: ideal para otoño, invierno y primavera','Con calor tiende a espigarse: cosechar rápido en verano','Siembra directa a 2-3 cm de profundidad','Cosechar las hojas exteriores para prolongar la planta']
    },
    calendar: {
      atlantica:         { siembra:[0,1,2,3,8,9,10,11], trasplante:[], cosecha:[2,3,4,5,10,11,0] },
      continental_fria:  { siembra:[2,3,8,9,10], trasplante:[], cosecha:[4,5,10,11] },
      continental_calida:{ siembra:[0,1,2,8,9,10,11], trasplante:[], cosecha:[2,3,4,10,11,0] },
      mediterranea:      { siembra:[0,1,2,8,9,10,11], trasplante:[], cosecha:[2,3,4,10,11,0] },
      semiarida:         { siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[1,2,3,11,0] },
      subtropical:       { siembra:[0,1,2,3,10,11], trasplante:[], cosecha:[1,2,3,4,11,0] }
    }
  },

  zanahoria: {
    nombre: 'Zanahoria',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'Raíz de cultivo directo. Exige suelo suelto y profundo.',
    espacio_min: 10,
    tiempo_cosecha: '70-80 días',
    litros_maceta: 12, perenne: false, comparte_maceta: true, unidades_por_maceta: 8,
    amazon: {
      semillas: { nombre: 'Semillas zanahoria Nantesa', desc: 'Variedad clásica dulce y productiva', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta profunda 40cm', desc: 'Mínimo 30cm de profundidad para raíces', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato sin piedras para raíces', desc: 'Textura fina, ideal para zanahorias', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono bajo en nitrógeno', desc: 'Exceso de N bifurca las raíces', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Siembra directa SIEMPRE: no tolera el trasplante','Suelo muy suelto y sin piedras (bifurcan las raíces)','Aclara cuando tengan 5 cm, dejando 5-8 cm entre plantas','Cosechar tirando suavemente cuando la corona sea naranja']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4,7,8], trasplante:[], cosecha:[5,6,7,9,10,11] },
      continental_fria:  { siembra:[3,4,7], trasplante:[], cosecha:[6,7,9,10] },
      continental_calida:{ siembra:[2,3,4,7,8], trasplante:[], cosecha:[5,6,7,9,10] },
      mediterranea:      { siembra:[1,2,3,7,8,9], trasplante:[], cosecha:[4,5,6,9,10,11] },
      semiarida:         { siembra:[1,2,8,9], trasplante:[], cosecha:[4,5,10,11] },
      subtropical:       { siembra:[0,1,2,8,9,10], trasplante:[], cosecha:[3,4,5,10,11,0] }
    }
  },

  radano: {
    nombre: 'Rábano',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'El más rápido del huerto. Listo en 25 días.',
    espacio_min: 8,
    tiempo_cosecha: '25-35 días',
    litros_maceta: 8, perenne: false, comparte_maceta: true, unidades_por_maceta: 10,
    amazon: {
      semillas: { nombre: 'Semillas rábano Cherry Belle', desc: 'Redondo, rojísimo y muy rápido', tag: 'imagu90-21' },
      maceta:   { nombre: 'Jardinera poco profunda 30cm', desc: 'Los rábanos son superficiales', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato fino y ligero', desc: 'Para que los rábanos crezcan sin obstáculos', tag: 'imagu90-21' },
      abono:    { nombre: 'Compost casero en pastilla', desc: 'Enriquece cualquier sustrato', tag: 'imagu90-21' }
    },
    tips: {
      general: ['El vegetal más rápido: listo en 25-35 días','Cosechar cuando tenga el tamaño de una moneda pequeña','Si se pasa, se vuelve picante y hueco','Siembra cada 10 días para cosecha continua']
    },
    calendar: {
      atlantica:         { siembra:[1,2,3,4,8,9,10], trasplante:[], cosecha:[2,3,4,5,9,10,11] },
      continental_fria:  { siembra:[3,4,8,9], trasplante:[], cosecha:[4,5,9,10] },
      continental_calida:{ siembra:[1,2,3,8,9,10,11], trasplante:[], cosecha:[2,3,4,9,10,11,0] },
      mediterranea:      { siembra:[0,1,2,3,8,9,10,11], trasplante:[], cosecha:[1,2,3,4,9,10,11,0] },
      semiarida:         { siembra:[0,1,2,8,9,10,11], trasplante:[], cosecha:[1,2,3,9,10,11,0] },
      subtropical:       { siembra:[0,1,2,3,9,10,11], trasplante:[], cosecha:[1,2,3,4,10,11,0] }
    }
  },

  cebolla: {
    nombre: 'Cebolla',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Cultivo imprescindible. Se puede plantar de bulbillo o de semilla.',
    espacio_min: 10,
    tiempo_cosecha: '90-120 días',
    litros_maceta: 10, perenne: false, comparte_maceta: true, unidades_por_maceta: 5,
    amazon: {
      semillas: { nombre: 'Bulbillos de cebolla blanca', desc: 'Fácil de plantar, resultados seguros', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta rectangular larga', desc: 'Espacio para varias cebollas en fila', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato hortalizas con drenaje', desc: 'No aguanta el encharcamiento', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono fosfórico para bulbos', desc: 'Engorda los bulbos subterráneos', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Plantar bulbillos es más fácil que semillas','Dejar el cuello de la cebolla asomando fuera de la tierra','Cuando las hojas se doblen y amarilleen, ya están listas','Curar al sol 2 semanas antes de guardar']
    },
    calendar: {
      atlantica:         { siembra:[0,1,7,8], trasplante:[2,3,9], cosecha:[6,7,10,11] },
      continental_fria:  { siembra:[1,2,8], trasplante:[3,4,9], cosecha:[7,8,11] },
      continental_calida:{ siembra:[0,1,8,9], trasplante:[2,3,10], cosecha:[5,6,11,0] },
      mediterranea:      { siembra:[0,1,8,9], trasplante:[2,3,10], cosecha:[5,6,11,0] },
      semiarida:         { siembra:[9,10,11], trasplante:[11,0,1], cosecha:[4,5,6] },
      subtropical:       { siembra:[9,10,11], trasplante:[11,0,1], cosecha:[3,4,5] }
    }
  },

  ajo: {
    nombre: 'Ajo',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Se planta en otoño y se cosecha en primavera. Muy sencillo.',
    espacio_min: 10,
    tiempo_cosecha: '150-180 días',
    litros_maceta: 8, perenne: false, comparte_maceta: true, unidades_por_maceta: 5,
    amazon: {
      semillas: { nombre: 'Cabezas ajo blanco para siembra', desc: 'Ajo local de calidad, muy productivo', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta profunda para ajos', desc: 'Profundidad mínima 20cm', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato con buena aireación', desc: 'Fundamental para bulbos sanos', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono de otoño para bulbos', desc: 'Abonado de fondo en la plantación', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Plantar dientes individuales, el extremo puntiagudo hacia arriba','A 5 cm de profundidad y 10 cm entre dientes','Cuando las hojas amarilleen (junio), es hora de cosechar','Dejar secar 2-3 semanas en lugar seco y ventilado']
    },
    calendar: {
      atlantica:         { siembra:[9,10,11], trasplante:[], cosecha:[5,6] },
      continental_fria:  { siembra:[9,10], trasplante:[], cosecha:[5,6] },
      continental_calida:{ siembra:[9,10,11], trasplante:[], cosecha:[5,6] },
      mediterranea:      { siembra:[9,10,11], trasplante:[], cosecha:[4,5] },
      semiarida:         { siembra:[9,10,11], trasplante:[], cosecha:[4,5] },
      subtropical:       { siembra:[10,11,0], trasplante:[], cosecha:[3,4,5] }
    }
  },

  puerro: {
    nombre: 'Puerro',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'Cultivo de temporada fría. Lento pero muy sabroso.',
    espacio_min: 15,
    tiempo_cosecha: '120-150 días',
    litros_maceta: 10, perenne: false, comparte_maceta: true, unidades_por_maceta: 5,
    amazon: {
      semillas: { nombre: 'Semillas puerro gigante Carentan', desc: 'Variedad tradicional muy resistente', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta alta 40cm profundidad', desc: 'El puerro necesita mucha profundidad', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato enriquecido con compost', desc: 'Alta fertilidad para cultivos lentos', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono orgánico lenta liberación', desc: 'Ideal para cultivos de larga duración', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Trasplantar cuando los plantones tengan el grosor de un lápiz','Plantar en agujeros profundos de 15 cm sin tapar del todo','El blanqueo: aporcar tierra alrededor para obtener parte blanca más larga','Muy resistente al frío: aguanta heladas']
    },
    calendar: {
      atlantica:         { siembra:[1,2,3], trasplante:[4,5,6], cosecha:[9,10,11,0] },
      continental_fria:  { siembra:[2,3], trasplante:[5,6], cosecha:[9,10,11] },
      continental_calida:{ siembra:[1,2,3], trasplante:[4,5], cosecha:[9,10,11,0] },
      mediterranea:      { siembra:[1,2,3], trasplante:[4,5], cosecha:[9,10,11,0] },
      semiarida:         { siembra:[1,2,8], trasplante:[3,4,9], cosecha:[7,8,11,0] },
      subtropical:       { siembra:[0,1,8,9], trasplante:[2,3,10], cosecha:[6,7,11,0] }
    }
  },

  brocoli: {
    nombre: 'Brócoli',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'Nutritivo y versátil. Se cultiva en otoño-primavera.',
    espacio_min: 50,
    tiempo_cosecha: '70-90 días',
    litros_maceta: 15, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas brócoli Calabrese', desc: 'Variedad italiana muy productiva', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta grande 40L', desc: 'El brócoli necesita espacio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato rico en calcio', desc: 'Esencial para las crucíferas', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono para crucíferas', desc: 'Equilibrado para col, brócoli y coliflor', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Cosechar la cabeza central antes de que abra en flor amarilla','Después de cosechar la cabeza central, brotan cabezas laterales durante semanas','Riego uniforme evita el pelado de las hojas','Buen compañero: zanahorias y cebollas']
    },
    calendar: {
      atlantica:         { siembra:[2,3,7,8], trasplante:[4,5,9], cosecha:[7,8,11,0] },
      continental_fria:  { siembra:[3,7], trasplante:[5,9], cosecha:[7,8,11] },
      continental_calida:{ siembra:[2,3,7,8], trasplante:[4,5,9], cosecha:[6,7,11,0] },
      mediterranea:      { siembra:[1,2,7,8], trasplante:[3,4,9], cosecha:[5,6,11,0] },
      semiarida:         { siembra:[1,2,8,9], trasplante:[3,4,10], cosecha:[5,6,0,1] },
      subtropical:       { siembra:[8,9,10], trasplante:[10,11], cosecha:[0,1,2] }
    }
  },

  acelga: {
    nombre: 'Acelga',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Muy resistente y productiva. Aguanta calor y frío.',
    espacio_min: 25,
    tiempo_cosecha: '50-60 días',
    litros_maceta: 12, perenne: false, comparte_maceta: true, unidades_por_maceta: 3,
    amazon: {
      semillas: { nombre: 'Semillas acelga arcoíris mix', desc: 'Tallos rojos, amarillos y blancos', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 20L para hortalizas', desc: 'Tamaño ideal para acelgas', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato con buen drenaje', desc: 'No le gusta el encharcamiento', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono orgánico pellets', desc: 'Lenta liberación para cultivos largos', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Cosechar las hojas exteriores para que la planta siga produciendo','Una de las más tolerantes al calor entre las de hoja','Riega con regularidad para hojas tiernas','Aguanta bien las heladas ligeras']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4,7,8,9], trasplante:[3,4,5,9,10], cosecha:[5,6,7,8,11,0] },
      continental_fria:  { siembra:[3,4,7,8], trasplante:[4,5,9], cosecha:[6,7,10,11] },
      continental_calida:{ siembra:[2,3,4,7,8,9], trasplante:[3,4,9,10], cosecha:[5,6,7,10,11,0] },
      mediterranea:      { siembra:[1,2,3,7,8,9], trasplante:[2,3,8,9], cosecha:[4,5,6,10,11,0] },
      semiarida:         { siembra:[1,2,8,9,10], trasplante:[2,3,9,10], cosecha:[4,5,10,11,0] },
      subtropical:       { siembra:[0,1,2,8,9,10,11], trasplante:[1,2,9,10], cosecha:[3,4,5,10,11,0] }
    }
  },

  judia_verde: {
    nombre: 'Judía verde',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Muy productiva en verano. De mata baja o enrame.',
    espacio_min: 20,
    tiempo_cosecha: '55-70 días',
    litros_maceta: 15, perenne: false, comparte_maceta: true, unidades_por_maceta: 4,
    amazon: {
      semillas: { nombre: 'Semillas judía verde Bobby', desc: 'Mata baja, sin hilos, muy productiva', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 15L con sustrato', desc: 'Tamaño perfecto para judías de mata', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato ligero para leguminosas', desc: 'Bien aireado y drenante', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono bajo en nitrógeno', desc: 'Las leguminosas fijan su propio N', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Las leguminosas fertilizan el suelo: fijan nitrógeno','Siembra directa: 3 semillas por golpe','Cosechar antes de que las vainas engorden demasiado','Las de enrame necesitan tutor o red']
    },
    calendar: {
      atlantica:         { siembra:[4,5,6], trasplante:[], cosecha:[6,7,8,9] },
      continental_fria:  { siembra:[5,6], trasplante:[], cosecha:[7,8,9] },
      continental_calida:{ siembra:[4,5,6,7], trasplante:[], cosecha:[6,7,8,9] },
      mediterranea:      { siembra:[3,4,5,6,7], trasplante:[], cosecha:[5,6,7,8,9] },
      semiarida:         { siembra:[3,4,5,6], trasplante:[], cosecha:[5,6,7,8] },
      subtropical:       { siembra:[2,3,4,5,9,10], trasplante:[], cosecha:[4,5,6,7,11,0] }
    }
  },

  guisante: {
    nombre: 'Guisante',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Planta de temporada fría. Se siembra en otoño o primavera.',
    espacio_min: 10,
    tiempo_cosecha: '60-80 días',
    litros_maceta: 15, perenne: false, comparte_maceta: true, unidades_por_maceta: 4,
    amazon: {
      semillas: { nombre: 'Semillas guisante tirabeque', desc: 'Se come la vaina entera, muy dulce', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta con red para trepar', desc: 'Los guisantes son trepadores', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato fresco y nutritivo', desc: 'Le gusta el fresco primaveral', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono fosfórico y potásico', desc: 'Para favorecer la floración y fruto', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Planta de frío: la primavera calurosa les perjudica','Siembra directa: enterrar 3-4 cm','Necesita soporte para trepar','Cosechar frecuentemente para estimular más producción']
    },
    calendar: {
      atlantica:         { siembra:[0,1,2,9,10], trasplante:[], cosecha:[3,4,5,11,0] },
      continental_fria:  { siembra:[2,3,9,10], trasplante:[], cosecha:[5,6,11] },
      continental_calida:{ siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[3,4,5,11,0] },
      mediterranea:      { siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[2,3,4,11,0] },
      semiarida:         { siembra:[9,10,11,0], trasplante:[], cosecha:[2,3,4,0] },
      subtropical:       { siembra:[9,10,11,0,1], trasplante:[], cosecha:[0,1,2,3] }
    }
  },

  /* ---- FRUTAS ---- */
  fresa: {
    nombre: 'Fresa',
    categoria: 'fruta',
    dificultad: 'facil',
    descripcion: 'Perfecta para macetas. Produce en primavera y otoño.',
    espacio_min: 20,
    tiempo_cosecha: '30-40 días tras flor',
    litros_maceta: 10, perenne: true, comparte_maceta: true, unidades_por_maceta: 3,
    amazon: {
      semillas: { nombre: 'Plantas de fresa remontante', desc: 'Produce dos veces al año', tag: 'imagu90-21' },
      maceta:   { nombre: 'Macetero vertical fresas', desc: 'Cultivo en vertical ahorra espacio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato específico fresas', desc: 'pH ligeramente ácido ideal', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono fresas y aromáticas', desc: 'Potencia el sabor y la producción', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Las variedades remontantes producen primavera y otoño','Enterrar solo las raíces: la corona (base de hojas) debe quedar visible','Regar en la base para evitar podredumbre del fruto','Los estolones (tallos rastreros) producen plantas nuevas gratis']
    },
    calendar: {
      atlantica:         { siembra:[7,8], trasplante:[8,9], cosecha:[4,5,6,9,10] },
      continental_fria:  { siembra:[7,8], trasplante:[8,9], cosecha:[5,6,10] },
      continental_calida:{ siembra:[7,8], trasplante:[8,9], cosecha:[3,4,5,9,10] },
      mediterranea:      { siembra:[7,8], trasplante:[8,9], cosecha:[3,4,5,9,10] },
      semiarida:         { siembra:[7,8,9], trasplante:[9,10], cosecha:[2,3,4,9,10] },
      subtropical:       { siembra:[8,9], trasplante:[9,10], cosecha:[1,2,3,10,11] }
    }
  },

  tomate_cherry: {
    nombre: 'Tomate cherry',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Más fácil que el tomate normal. Ideal para balcones.',
    espacio_min: 25,
    tiempo_cosecha: '50-65 días desde trasplante',
    litros_maceta: 15, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas tomate cherry mix', desc: 'Amarillo, naranja, rojo y negro', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 20L con soporte', desc: 'Con tutor incluido para el tallo', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato tomates y frutas', desc: 'Alta fertilidad para producciones', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono tomate líquido', desc: 'Aplicar cada 15 días en floración', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Más resistente y productivo que el tomate normal','Aguanta algo más el calor y la sequía','Cosechar cuando estén completamente rojos','Un solo arbusto puede producir cientos de frutos']
    },
    calendar: {
      atlantica:         { siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      continental_fria:  { siembra:[2,3], trasplante:[4,5], cosecha:[7,8,9] },
      continental_calida:{ siembra:[1,2,3], trasplante:[3,4], cosecha:[6,7,8,9,10] },
      mediterranea:      { siembra:[1,2,3], trasplante:[3,4], cosecha:[5,6,7,8,9,10] },
      semiarida:         { siembra:[0,1,2], trasplante:[2,3], cosecha:[5,6,7,8,9] },
      subtropical:       { siembra:[0,1,2,8,9], trasplante:[2,3,9,10], cosecha:[5,6,7,11,0] }
    }
  },

  arandano: {
    nombre: 'Arándano',
    categoria: 'fruta',
    dificultad: 'dificil',
    descripcion: 'Arbusto permanente. Requiere sustrato ácido específico.',
    espacio_min: 40,
    tiempo_cosecha: '2-3 años hasta plena producción',
    litros_maceta: 40, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta arándano azul en maceta', desc: 'Lista para plantar, 2 años de edad', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 30L para arándanos', desc: 'Con orificio de drenaje amplio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato ácido para arándanos', desc: 'pH 4.5-5.5 imprescindible', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono acidificante arándanos', desc: 'Mantiene el pH bajo necesario', tag: 'imagu90-21' }
    },
    tips: {
      general: ['CLAVE: necesita sustrato ácido pH 4.5-5.5 (sustrato de ericáceas)','Regar con agua sin cal o filtrada','Plantar dos variedades distintas para mejorar la polinización','Produce durante 20-30 años si se cuida correctamente']
    },
    calendar: {
      atlantica:         { siembra:[2,3,9,10], trasplante:[3,4,10], cosecha:[6,7,8] },
      continental_fria:  { siembra:[2,3,9], trasplante:[3,4], cosecha:[6,7,8] },
      continental_calida:{ siembra:[2,3,9,10], trasplante:[3,4,10], cosecha:[6,7] },
      mediterranea:      { siembra:[2,3,9,10], trasplante:[3,4,10], cosecha:[5,6,7] },
      semiarida:         { siembra:[9,10], trasplante:[10,11], cosecha:[4,5] },
      subtropical:       { siembra:[9,10,11], trasplante:[10,11], cosecha:[3,4] }
    }
  },

  /* ---- AROMÁTICAS ---- */
  albahaca: {
    nombre: 'Albahaca',
    categoria: 'aromatica',
    dificultad: 'media',
    descripcion: 'La aromática del verano. Necesita calor y sol.',
    espacio_min: 15,
    tiempo_cosecha: '30-40 días desde siembra',
    litros_maceta: 5, perenne: false, comparte_maceta: true, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas albahaca genovesa', desc: 'La variedad más aromática para cocina', tag: 'imagu90-21' },
      maceta:   { nombre: 'Kit hierbas aromáticas 3 macetas', desc: 'Para albahaca, perejil y cilantro', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato aromáticas y hierbas', desc: 'Drenaje excelente, poco abonado', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono líquido aromáticas', desc: 'Solo en verano, dosis baja', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Pinzar las flores nada más aparecer para que no amargue','Muy sensible al frío: no plantes antes de que pasen las heladas','Regar cuando el sustrato esté seco al tacto','Cosechar siempre desde las puntas hacia abajo']
    },
    calendar: {
      atlantica:         { siembra:[3,4], trasplante:[5], cosecha:[6,7,8,9] },
      continental_fria:  { siembra:[4,5], trasplante:[5,6], cosecha:[7,8,9] },
      continental_calida:{ siembra:[3,4], trasplante:[4,5], cosecha:[5,6,7,8,9] },
      mediterranea:      { siembra:[3,4,5], trasplante:[4,5], cosecha:[5,6,7,8,9,10] },
      semiarida:         { siembra:[2,3,4], trasplante:[3,4], cosecha:[4,5,6,7,8,9] },
      subtropical:       { siembra:[2,3,4,9,10], trasplante:[3,4,10], cosecha:[4,5,6,7,8,11,0] }
    }
  },

  perejil: {
    nombre: 'Perejil',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Bienal muy resistente. Crece en casi cualquier condición.',
    espacio_min: 10,
    tiempo_cosecha: '70-90 días desde siembra',
    litros_maceta: 8, perenne: false, comparte_maceta: true, unidades_por_maceta: 2,
    amazon: {
      semillas: { nombre: 'Semillas perejil rizado', desc: 'Variedad clásica muy aromática', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta cerámica 15cm', desc: 'Ideal para ventana o balcón', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato hierbas aromáticas', desc: 'Ligero y bien drenado', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado suave', desc: 'Para hojas más grandes y verdes', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Germinación lenta: 3-4 semanas (remojar semillas 12h antes)','Puede cultivarse casi todo el año en climas suaves','Las hojas se pueden congelar para conservarlas','No regar en exceso: prefiere sequía leve a encharcamiento']
    },
    calendar: {
      atlantica:         { siembra:[1,2,3,7,8,9], trasplante:[], cosecha:[4,5,6,7,9,10,11] },
      continental_fria:  { siembra:[2,3,8,9], trasplante:[], cosecha:[5,6,7,10,11] },
      continental_calida:{ siembra:[0,1,2,3,8,9,10], trasplante:[], cosecha:[3,4,5,6,10,11,0] },
      mediterranea:      { siembra:[0,1,2,3,8,9,10,11], trasplante:[], cosecha:[3,4,5,6,10,11,0] },
      semiarida:         { siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[2,3,4,11,0] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[1,2,3,4,11,0] }
    }
  },

  romero: {
    nombre: 'Romero',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Arbusto perenne mediterráneo. Se planta una vez y dura años.',
    espacio_min: 30,
    tiempo_cosecha: 'Perenne: cosechar durante todo el año',
    litros_maceta: 10, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta romero en maceta 15cm', desc: 'Lista para usar, ya crecida', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta terracota 25cm', desc: 'El barro favorece el drenaje del romero', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato pobre con arena', desc: 'Mezclar con arena 30% para drenaje', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono para mediterráneas', desc: 'Poco abono: se estresa con exceso', tag: 'imagu90-21' }
    },
    tips: {
      general: ['No regar en exceso: prefiere la sequía','Cuanto peor el sustrato, más aromático','Podar tras la floración para compactar la planta','Resistente a heladas ligeras (hasta -10°C algunas variedades)']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4], trasplante:[4,5], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      continental_fria:  { siembra:[3,4,5], trasplante:[5,6], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      continental_calida:{ siembra:[2,3,4], trasplante:[4,5], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      mediterranea:      { siembra:[2,3,4,9,10], trasplante:[3,4,10], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      semiarida:         { siembra:[2,3,9,10], trasplante:[3,4,10], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  tomillo: {
    nombre: 'Tomillo',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Muy resistente y aromático. Mínimo mantenimiento.',
    espacio_min: 20,
    tiempo_cosecha: 'Perenne: cosechar todo el año',
    litros_maceta: 5, perenne: true, comparte_maceta: true, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta tomillo común', desc: 'Listo para cocina, ya grande', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta terracota pequeña', desc: 'El tomillo no necesita mucho espacio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato drenante mediterráneo', desc: 'Arena y piedra pómez incluidas', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono mínimo para perennes', desc: 'Solo en primavera, dosis baja', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Casi indestructible si drena bien','Excelente compañero de tomates: repele plagas','Podar en primavera para renovar la planta','Soporta sequías prolongadas']
    },
    calendar: {
      atlantica:         { siembra:[3,4], trasplante:[4,5], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      continental_fria:  { siembra:[3,4,5], trasplante:[5,6], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      continental_calida:{ siembra:[2,3,4], trasplante:[4,5], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      mediterranea:      { siembra:[2,3,4,9,10], trasplante:[3,4,10], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      semiarida:         { siembra:[2,3,9,10], trasplante:[3,4,10], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  menta: {
    nombre: 'Menta',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Muy invasora: siempre en maceta propia. Resistente y aromática.',
    espacio_min: 20,
    tiempo_cosecha: 'Perenne desde primavera',
    litros_maceta: 8, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta menta piperita', desc: 'La más aromática para infusiones', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 20cm con plato', desc: 'Contener la menta es obligatorio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato húmedo para menta', desc: 'Le gusta más humedad que otras aromáticas', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado hojas', desc: 'Para hojas más grandes y jugosas', tag: 'imagu90-21' }
    },
    tips: {
      general: ['SIEMPRE en maceta separada: coloniza todo el huerto','Le gusta la humedad y la semisombra','Cosechar las puntas para que ramifique','En invierno desaparece y vuelve en primavera (perenne)']
    },
    calendar: {
      atlantica:         { siembra:[2,3], trasplante:[3,4], cosecha:[4,5,6,7,8,9,10] },
      continental_fria:  { siembra:[3,4], trasplante:[4,5], cosecha:[5,6,7,8,9] },
      continental_calida:{ siembra:[2,3,4], trasplante:[3,4,5], cosecha:[4,5,6,7,8,9,10] },
      mediterranea:      { siembra:[2,3,4], trasplante:[3,4,5], cosecha:[3,4,5,6,7,8,9,10,11] },
      semiarida:         { siembra:[2,3,9], trasplante:[3,4,10], cosecha:[3,4,5,6,7,8,9,10] },
      subtropical:       { siembra:[0,1,2,9,10], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  oregano: {
    nombre: 'Orégano',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Perenne de bajo mantenimiento. Ideal para balcones.',
    espacio_min: 20,
    tiempo_cosecha: 'Perenne',
    litros_maceta: 5, perenne: true, comparte_maceta: true, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta orégano griego', desc: 'El más aromático para pizza y pasta', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta cerámica 18cm', desc: 'Tamaño ideal para orégano', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato drenante mediterráneo', desc: 'No le gusta la humedad excesiva', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono orgánico suave aromáticas', desc: 'Solo en primavera', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Muy aromático al secarse: cosechar antes de florecer','Secar a la sombra en ramilletes','Resistente a la sequía y al calor','Podar a mediados de verano para segunda cosecha']
    },
    calendar: {
      atlantica:         { siembra:[3,4], trasplante:[4,5], cosecha:[5,6,7,8,9] },
      continental_fria:  { siembra:[4,5], trasplante:[5,6], cosecha:[6,7,8] },
      continental_calida:{ siembra:[3,4], trasplante:[4,5], cosecha:[5,6,7,8,9] },
      mediterranea:      { siembra:[2,3,4], trasplante:[3,4,5], cosecha:[4,5,6,7,8,9,10] },
      semiarida:         { siembra:[2,3], trasplante:[3,4], cosecha:[4,5,6,7,8,9] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  /* ---- HORTALIZAS (añadidas) ---- */

  pimiento_padron: {
    nombre: 'Pimiento padrón',
    categoria: 'hortaliza',
    dificultad: 'media',
    descripcion: 'La tapa gallega por excelencia. Fácil y muy productivo en verano.',
    espacio_min: 40,
    tiempo_cosecha: '65-80 días desde trasplante',
    litros_maceta: 15, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas pimiento de Padrón', desc: 'Variedad original gallega certificada', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 25L para pimientos', desc: 'Ideal para terraza y balcón', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato premium hortalizas', desc: 'pH equilibrado para pimientos', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono líquido pimiento', desc: 'Rico en potasio para frutos', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Cosechar en verde, pequeños (3-4 cm) para que no piquen','Cuanto más crecen, más probabilidad de que piquen','Necesita calor: no trasplantar antes de 15 °C','Riego uniforme sin encharcamiento']
    },
    calendar: {
      atlantica:         { siembra:[2,3], trasplante:[4,5], cosecha:[7,8,9] },
      continental_fria:  { siembra:[2,3], trasplante:[5], cosecha:[7,8,9] },
      continental_calida:{ siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      mediterranea:      { siembra:[1,2], trasplante:[3,4], cosecha:[6,7,8,9] },
      semiarida:         { siembra:[0,1], trasplante:[2,3], cosecha:[5,6,7,8,9] },
      subtropical:       { siembra:[0,1,8,9], trasplante:[2,3,10], cosecha:[5,6,7,11,0] }
    }
  },

  haba: {
    nombre: 'Haba',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Legumbre de invierno. Se siembra en otoño y cosecha en primavera.',
    espacio_min: 20,
    tiempo_cosecha: '90-120 días',
    litros_maceta: 15, perenne: false, comparte_maceta: true, unidades_por_maceta: 4,
    amazon: {
      semillas: { nombre: 'Semillas haba Aguadulce', desc: 'Variedad clásica española muy productiva', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta alta 20L', desc: 'Las habas necesitan algo de profundidad', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato nutritivo para leguminosas', desc: 'Bien aireado y con buen drenaje', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono fosfórico y potásico', desc: 'Favorece la formación de vainas', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Plantar en otoño para cosechar en primavera','Resistente al frío: aguanta heladas moderadas','Destopar las puntas cuando aparezcan los pulgones negros','Las leguminosas fertilizan el suelo con nitrógeno']
    },
    calendar: {
      atlantica:         { siembra:[9,10,11], trasplante:[], cosecha:[3,4,5] },
      continental_fria:  { siembra:[2,3], trasplante:[], cosecha:[5,6] },
      continental_calida:{ siembra:[9,10,11], trasplante:[], cosecha:[3,4,5] },
      mediterranea:      { siembra:[9,10,11], trasplante:[], cosecha:[2,3,4] },
      semiarida:         { siembra:[9,10,11], trasplante:[], cosecha:[2,3,4] },
      subtropical:       { siembra:[10,11,0], trasplante:[], cosecha:[1,2,3] }
    }
  },

  patata: {
    nombre: 'Patata',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Se cultiva en sacos o macetas grandes. Cosecha sorprendente.',
    espacio_min: 30,
    tiempo_cosecha: '70-120 días según variedad',
    litros_maceta: 30, perenne: false, comparte_maceta: false, unidades_por_maceta: 2,
    amazon: {
      semillas: { nombre: 'Patatas de siembra certificadas', desc: 'Variedades tempranas para maceta', tag: 'imagu90-21' },
      maceta:   { nombre: 'Saco de cultivo patatas 50L', desc: 'Diseñado con ventana de cosecha lateral', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato suelto para tubérculos', desc: 'Textura esponjosa para tubérculos grandes', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono fosfórico para tubérculos', desc: 'Engrosa los tubérculos bajo tierra', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Usar sacos de cultivo en terrazas: fácil cosecha y mucho rendimiento','Aporcar tierra cuando la planta mida 20 cm (repetir 2-3 veces)','Las variedades tempranas (60-70 días) son ideales para maceta','Cosechar cuando la planta se seque y ameri']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4], trasplante:[], cosecha:[6,7,8] },
      continental_fria:  { siembra:[3,4], trasplante:[], cosecha:[7,8] },
      continental_calida:{ siembra:[2,3], trasplante:[], cosecha:[5,6,7] },
      mediterranea:      { siembra:[1,2,3], trasplante:[], cosecha:[5,6,7] },
      semiarida:         { siembra:[1,2], trasplante:[], cosecha:[4,5,6] },
      subtropical:       { siembra:[0,1,2,9,10], trasplante:[], cosecha:[4,5,0,1] }
    }
  },

  calabaza: {
    nombre: 'Calabaza',
    categoria: 'hortaliza',
    dificultad: 'facil',
    descripcion: 'Muy productiva. Necesita mucho espacio pero poca atención.',
    espacio_min: 100,
    tiempo_cosecha: '90-120 días',
    litros_maceta: 40, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas calabaza cacahuete', desc: 'Variedad Butternut, muy sabrosa', tag: 'imagu90-21' },
      maceta:   { nombre: 'Contenedor grande 60L', desc: 'La calabaza necesita mucho sustrato', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato con abono incorporado', desc: 'Muy nutritivo para cucurbitáceas grandes', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado líquido', desc: 'Estimula el crecimiento vigoroso', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Una sola planta puede ocupar varios metros cuadrados','Cosechar cuando el pedúnculo se seque y la piel no se marque con la uña','Se conserva meses en lugar fresco y seco','Limitar a 2-3 frutos por planta para mayor tamaño']
    },
    calendar: {
      atlantica:         { siembra:[4,5], trasplante:[], cosecha:[9,10,11] },
      continental_fria:  { siembra:[4,5], trasplante:[], cosecha:[9,10] },
      continental_calida:{ siembra:[3,4,5], trasplante:[], cosecha:[8,9,10] },
      mediterranea:      { siembra:[3,4,5], trasplante:[], cosecha:[8,9,10] },
      semiarida:         { siembra:[3,4], trasplante:[], cosecha:[7,8,9] },
      subtropical:       { siembra:[2,3,4,9,10], trasplante:[], cosecha:[7,8,9,11,0] }
    }
  },

  /* ---- FRUTAS (añadidas) ---- */

  freson: {
    nombre: 'Fresón',
    categoria: 'fruta',
    dificultad: 'facil',
    descripcion: 'Fruto grande y dulce. Se planta en otoño y cosecha en primavera.',
    espacio_min: 25,
    tiempo_cosecha: '30-40 días tras floración',
    litros_maceta: 10, perenne: true, comparte_maceta: true, unidades_por_maceta: 3,
    amazon: {
      semillas: { nombre: 'Plantas fresón en maceta', desc: 'Variedad Camarosa de gran fruto', tag: 'imagu90-21' },
      maceta:   { nombre: 'Macetero vertical fresas y fresones', desc: 'Cultivo en vertical ahorra espacio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato específico fresas', desc: 'pH ligeramente ácido ideal', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono fresas y fresones', desc: 'Potencia el sabor y el tamaño del fruto', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Plantar en otoño para cosechar en primavera','Proteger los frutos con paja bajo las plantas','No confundir con fresa: el fresón es más grande y menos ácido','Riego en la base para evitar podredumbre gris']
    },
    calendar: {
      atlantica:         { siembra:[8,9], trasplante:[9,10], cosecha:[4,5,6] },
      continental_fria:  { siembra:[8,9], trasplante:[9,10], cosecha:[5,6] },
      continental_calida:{ siembra:[8,9], trasplante:[9,10], cosecha:[3,4,5] },
      mediterranea:      { siembra:[8,9], trasplante:[9,10], cosecha:[3,4,5] },
      semiarida:         { siembra:[9,10], trasplante:[10,11], cosecha:[2,3,4] },
      subtropical:       { siembra:[9,10], trasplante:[10,11], cosecha:[1,2,3] }
    }
  },

  frambuesa: {
    nombre: 'Frambuesa',
    categoria: 'fruta',
    dificultad: 'media',
    descripcion: 'Arbusto perenne muy productivo. Cosecha en verano y otoño.',
    espacio_min: 50,
    tiempo_cosecha: 'Perenne: cosecha desde el 2.º año',
    litros_maceta: 40, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta frambuesa Heritage', desc: 'Variedad remontante, dos cosechas al año', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 30L profunda', desc: 'Las frambuesas necesitan profundidad', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato ácido para frutos rojos', desc: 'pH 5.5-6.5 ideal para frambuesas', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono frutos rojos', desc: 'Potasio alto para mejorar sabor y color', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Plantar tallos (canes) en otoño o al final del invierno — aguantan bien el frío al estar en reposo','El primer año solo raíces: no exigir producción','Podar los tallos que ya produjeron hasta la base','Las variedades remontantes producen en verano y otoño']
    },
    calendar: {
      atlantica:         { siembra:[10,11,2,3], trasplante:[10,11,2,3], cosecha:[6,7,8,9,10] },
      continental_fria:  { siembra:[10,2,3], trasplante:[10,2,3], cosecha:[6,7,8,9] },
      continental_calida:{ siembra:[10,11,2,3], trasplante:[10,11,2,3], cosecha:[5,6,7,9,10] },
      mediterranea:      { siembra:[10,11,2,3], trasplante:[10,11,2,3], cosecha:[5,6,7,9,10] },
      semiarida:         { siembra:[10,11,2], trasplante:[10,11,2], cosecha:[4,5,6,9] },
      subtropical:       { siembra:[10,11,1,2], trasplante:[10,11,1,2], cosecha:[3,4,5,9,10] }
    }
  },

  sandia: {
    nombre: 'Sandía',
    categoria: 'fruta',
    dificultad: 'media',
    descripcion: 'Necesita calor y espacio. Las variedades mini son ideales para terraza.',
    espacio_min: 100,
    tiempo_cosecha: '80-100 días desde siembra',
    litros_maceta: 40, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas sandía mini Sugar Baby', desc: 'Frutos pequeños, perfectos para maceta', tag: 'imagu90-21' },
      maceta:   { nombre: 'Contenedor 50L con drenaje', desc: 'Para variedades mini en terraza', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato rico cucurbitáceas', desc: 'Mezcla nutritiva para frutos grandes', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono potásico para melón y sandía', desc: 'Aumenta el dulzor del fruto', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Las variedades mini (Sugar Baby) son las únicas viables en maceta','Necesita mínimo 6 h de sol directo','Limitar a 1-2 frutos por planta para mayor tamaño','Se golpea con el nudillo: sonido hueco = lista para cosechar']
    },
    calendar: {
      atlantica:         { siembra:[4,5], trasplante:[], cosecha:[8,9] },
      continental_fria:  { siembra:[4,5], trasplante:[], cosecha:[8,9] },
      continental_calida:{ siembra:[3,4,5], trasplante:[], cosecha:[7,8,9] },
      mediterranea:      { siembra:[3,4,5], trasplante:[], cosecha:[7,8,9] },
      semiarida:         { siembra:[3,4], trasplante:[], cosecha:[6,7,8] },
      subtropical:       { siembra:[2,3,4], trasplante:[], cosecha:[6,7,8] }
    }
  },

  melon: {
    nombre: 'Melón',
    categoria: 'fruta',
    dificultad: 'media',
    descripcion: 'Exige calor y sol. Las variedades piel de sapo son las más fáciles.',
    espacio_min: 80,
    tiempo_cosecha: '80-100 días desde siembra',
    litros_maceta: 40, perenne: false, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Semillas melón piel de sapo', desc: 'La variedad española más fácil y dulce', tag: 'imagu90-21' },
      maceta:   { nombre: 'Contenedor 40L rectangular', desc: 'Espacio mínimo para melón en terraza', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato nutritivo cucurbitáceas', desc: 'Alta fertilidad para frutos grandes', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono potásico dulzor melón', desc: 'Aumenta el azúcar en el fruto', tag: 'imagu90-21' }
    },
    tips: {
      general: ['El calor es imprescindible: no plantes antes de mayo en zonas frías','Limitar a 2-3 frutos por planta','Colocar una redecilla o raja bajo el fruto para que no toque el suelo','Maduro cuando el pedúnculo se agrieta y desprende aroma']
    },
    calendar: {
      atlantica:         { siembra:[4,5], trasplante:[], cosecha:[8,9] },
      continental_fria:  { siembra:[4,5], trasplante:[], cosecha:[8,9] },
      continental_calida:{ siembra:[3,4,5], trasplante:[], cosecha:[7,8,9] },
      mediterranea:      { siembra:[3,4,5], trasplante:[], cosecha:[7,8,9] },
      semiarida:         { siembra:[3,4], trasplante:[], cosecha:[6,7,8] },
      subtropical:       { siembra:[2,3,4], trasplante:[], cosecha:[6,7,8] }
    }
  },

  higo: {
    nombre: 'Higo',
    categoria: 'fruta',
    dificultad: 'facil',
    descripcion: 'Árbol mediterráneo perenne. En maceta grande produce durante décadas.',
    espacio_min: 60,
    tiempo_cosecha: 'Perenne: cosecha en verano y otoño',
    litros_maceta: 50, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta higuera en maceta', desc: 'Lista para plantar, variedad Brown Turkey', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 50L para árboles frutales', desc: 'Tamaño mínimo para higuera en terraza', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato frutal con perlita', desc: 'Buen drenaje para árboles en maceta', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono frutal de lenta liberación', desc: 'Una aplicación al año en primavera', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Muy resistente y longeva: produce durante décadas','En maceta grande produce higos perfectamente','Dos cosechas: brevas (junio) e higos (agosto-octubre)','Podar en invierno para controlar el tamaño']
    },
    calendar: {
      atlantica:         { siembra:[2,3], trasplante:[3,4], cosecha:[5,6,8,9,10] },
      continental_fria:  { siembra:[3,4], trasplante:[4,5], cosecha:[8,9] },
      continental_calida:{ siembra:[2,3], trasplante:[3,4], cosecha:[5,6,8,9,10] },
      mediterranea:      { siembra:[2,3], trasplante:[3,4], cosecha:[5,6,8,9,10] },
      semiarida:         { siembra:[2,3], trasplante:[3,4], cosecha:[5,6,7,8,9] },
      subtropical:       { siembra:[1,2,3], trasplante:[2,3,4], cosecha:[4,5,6,7,8,9] }
    }
  },

  limon: {
    nombre: 'Limón',
    categoria: 'fruta',
    dificultad: 'media',
    descripcion: 'Cítrico perenne ideal en maceta. Produce casi todo el año.',
    espacio_min: 50,
    tiempo_cosecha: 'Perenne: florece y fructifica todo el año',
    litros_maceta: 50, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Limonero en maceta 3L', desc: 'Variedad Verna, la más común en España', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 40L para cítricos', desc: 'Con buen drenaje inferior', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato específico cítricos', desc: 'pH 5.5-6.5 y muy drenante', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono cítricos con hierro quelado', desc: 'Previene la clorosis tan común en limoneros', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Meter en casa cuando baje de 5 °C en zonas frías','El exceso de agua es el principal problema: drenaje imprescindible','Abono con hierro quelado si las hojas amarillean con venas verdes','En maceta produce menos que en tierra pero durante décadas']
    },
    calendar: {
      atlantica:         { siembra:[3,4], trasplante:[4,5], cosecha:[0,1,2,3,10,11] },
      continental_fria:  { siembra:[4,5], trasplante:[5,6], cosecha:[10,11,0,1] },
      continental_calida:{ siembra:[3,4], trasplante:[4,5], cosecha:[10,11,0,1,2] },
      mediterranea:      { siembra:[2,3,4], trasplante:[3,4,5], cosecha:[10,11,0,1,2,3] },
      semiarida:         { siembra:[2,3], trasplante:[3,4], cosecha:[0,1,2,3,10,11] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  granada: {
    nombre: 'Granada',
    categoria: 'fruta',
    dificultad: 'facil',
    descripcion: 'Arbusto mediterráneo muy resistente a la sequía. Poca atención.',
    espacio_min: 60,
    tiempo_cosecha: 'Perenne: cosecha en otoño',
    litros_maceta: 50, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta granado en maceta', desc: 'Variedad Mollar de Elche, la más dulce', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 40L para arbustos frutales', desc: 'Tamaño adecuado para granado', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato frutal mediterráneo', desc: 'Bien drenado y con cal', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono frutal primaveral', desc: 'Una aplicación al inicio de la temporada', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Muy resistente a la sequía una vez establecido','Tolera suelos pobres y calcáreos','Cosechar cuando la piel cruje al presionar y tiene color rojo-marrón','Los frutos pueden quedar en el árbol semanas sin deteriorarse']
    },
    calendar: {
      atlantica:         { siembra:[2,3], trasplante:[3,4], cosecha:[9,10,11] },
      continental_fria:  { siembra:[3,4], trasplante:[4,5], cosecha:[9,10] },
      continental_calida:{ siembra:[2,3], trasplante:[3,4], cosecha:[9,10,11] },
      mediterranea:      { siembra:[2,3], trasplante:[3,4], cosecha:[9,10,11] },
      semiarida:         { siembra:[2,3], trasplante:[3,4], cosecha:[9,10,11] },
      subtropical:       { siembra:[1,2,3], trasplante:[3,4], cosecha:[8,9,10,11] }
    }
  },

  mora: {
    nombre: 'Mora',
    categoria: 'fruta',
    dificultad: 'facil',
    descripcion: 'Arbusto trepador muy productivo. Produce sin apenas cuidados.',
    espacio_min: 40,
    tiempo_cosecha: 'Perenne: cosecha en verano',
    litros_maceta: 40, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta mora sin espinas Chester', desc: 'Variedad sin espinas, muy productiva', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 30L con soporte celosía', desc: 'La mora necesita dónde trepar', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato frutos rojos ácido', desc: 'pH ligeramente ácido, bien drenado', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono frutos rojos NPK', desc: 'Estimula la producción de frutos', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Las variedades sin espinas son ideales para balcón','Cosechar solo las moras negras: las rojas aún no están maduras','Muy productiva: una planta da varios kilos al año','Podar en otoño los tallos que ya produjeron']
    },
    calendar: {
      atlantica:         { siembra:[10,11,2,3], trasplante:[10,11,2,3], cosecha:[6,7,8,9] },
      continental_fria:  { siembra:[2,3], trasplante:[2,3], cosecha:[7,8,9] },
      continental_calida:{ siembra:[10,11,2,3], trasplante:[10,11,2,3], cosecha:[6,7,8] },
      mediterranea:      { siembra:[10,11,2,3], trasplante:[10,11,2,3], cosecha:[5,6,7,8] },
      semiarida:         { siembra:[10,11,2], trasplante:[10,11,2], cosecha:[5,6,7] },
      subtropical:       { siembra:[10,11,1,2], trasplante:[10,11,1,2], cosecha:[4,5,6,7] }
    }
  },

  /* ---- AROMÁTICAS (añadidas) ---- */

  cilantro: {
    nombre: 'Cilantro',
    categoria: 'aromatica',
    dificultad: 'media',
    descripcion: 'Aromática de temporada fría. Se espiga rápido con el calor.',
    espacio_min: 10,
    tiempo_cosecha: '30-45 días desde siembra',
    litros_maceta: 8, perenne: false, comparte_maceta: true, unidades_por_maceta: 2,
    amazon: {
      semillas: { nombre: 'Semillas cilantro lento a boltar', desc: 'Variedad de siembra escalonada', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta cerámica 20cm', desc: 'Ideal para cilantro en ventana', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato ligero aromáticas', desc: 'Drenaje excelente para cilantro', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado suave hojas', desc: 'Potencia el crecimiento de hojas', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Siembra cada 3 semanas para cosecha continua','Con calor sube a flor muy rápido: sembrar en primavera y otoño','Siembra directa: no tolera el trasplante','Las semillas también se usan como especia (coriandro)']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4,8,9], trasplante:[], cosecha:[4,5,6,10,11] },
      continental_fria:  { siembra:[3,4,8,9], trasplante:[], cosecha:[5,6,10,11] },
      continental_calida:{ siembra:[2,3,8,9,10], trasplante:[], cosecha:[4,5,10,11,0] },
      mediterranea:      { siembra:[1,2,3,8,9,10], trasplante:[], cosecha:[3,4,5,10,11,0] },
      semiarida:         { siembra:[1,2,9,10], trasplante:[], cosecha:[3,4,11,0] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[2,3,4,11,0] }
    }
  },

  hierbabuena: {
    nombre: 'Hierbabuena',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Más suave que la menta. Ideal para infusiones y coctelería.',
    espacio_min: 20,
    tiempo_cosecha: 'Perenne desde primavera',
    litros_maceta: 8, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta hierbabuena en maceta', desc: 'Lista para usar, aroma suave y fresco', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 20cm con plato', desc: 'Contener la expansión es obligatorio', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato húmedo para mentas', desc: 'Le gusta más humedad que otras aromáticas', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado hojas', desc: 'Para hojas más grandes y aromáticas', tag: 'imagu90-21' }
    },
    tips: {
      general: ['SIEMPRE en maceta separada: como la menta, es invasora','Aguanta más sombra que otras aromáticas','Cosechar las puntas para que ramifique','Desaparece en invierno y rebrota en primavera']
    },
    calendar: {
      atlantica:         { siembra:[2,3], trasplante:[3,4], cosecha:[4,5,6,7,8,9,10] },
      continental_fria:  { siembra:[3,4], trasplante:[4,5], cosecha:[5,6,7,8,9] },
      continental_calida:{ siembra:[2,3,4], trasplante:[3,4,5], cosecha:[4,5,6,7,8,9,10] },
      mediterranea:      { siembra:[2,3,4], trasplante:[3,4,5], cosecha:[3,4,5,6,7,8,9,10,11] },
      semiarida:         { siembra:[2,3,9], trasplante:[3,4,10], cosecha:[3,4,5,6,7,8,9,10] },
      subtropical:       { siembra:[0,1,2,9,10], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  cebollino: {
    nombre: 'Cebollino',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Perenne fácil. Corta y vuelve a crecer indefinidamente.',
    espacio_min: 10,
    tiempo_cosecha: '60-90 días; perenne tras primer año',
    litros_maceta: 8, perenne: true, comparte_maceta: true, unidades_por_maceta: 3,
    amazon: {
      semillas: { nombre: 'Semillas cebollino fino', desc: 'El clásico para ensaladas y tortillas', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta cerámica 15cm', desc: 'Compacto, ideal para ventana de cocina', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato aromáticas y hierbas', desc: 'Ligero y bien drenado', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono nitrogenado líquido suave', desc: 'Aplicar cada mes en primavera-verano', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Cortar a 3-4 cm del suelo: rebrota en pocos días','Dividir las matas cada 2-3 años para rejuvenecer','Muy decorativo en flor: flores comestibles moradas','Ideal en la ventana de cocina para uso diario']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4,8,9], trasplante:[], cosecha:[4,5,6,7,8,9,10,11] },
      continental_fria:  { siembra:[3,4,8,9], trasplante:[], cosecha:[5,6,7,8,9,10] },
      continental_calida:{ siembra:[2,3,4,8,9], trasplante:[], cosecha:[3,4,5,6,7,8,9,10,11] },
      mediterranea:      { siembra:[1,2,3,8,9,10], trasplante:[], cosecha:[3,4,5,6,7,8,9,10,11] },
      semiarida:         { siembra:[1,2,3,9,10], trasplante:[], cosecha:[3,4,5,6,7,8,9,10] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  },

  laurel: {
    nombre: 'Laurel',
    categoria: 'aromatica',
    dificultad: 'facil',
    descripcion: 'Arbusto perenne mediterráneo. Hojas todo el año, sin cuidados.',
    espacio_min: 40,
    tiempo_cosecha: 'Perenne: cosechar hojas todo el año',
    litros_maceta: 30, perenne: true, comparte_maceta: false, unidades_por_maceta: 1,
    amazon: {
      semillas: { nombre: 'Planta laurel en maceta 20cm', desc: 'Lista para usar, hojas ya aromáticas', tag: 'imagu90-21' },
      maceta:   { nombre: 'Maceta 30L para laurel', desc: 'El laurel crece bastante: maceta generosa', tag: 'imagu90-21' },
      sustrato:  { nombre: 'Sustrato universal bien drenado', desc: 'Al laurel no le gustan los pies húmedos', tag: 'imagu90-21' },
      abono:    { nombre: 'Abono anual plantas perennes', desc: 'Una aplicación en primavera es suficiente', tag: 'imagu90-21' }
    },
    tips: {
      general: ['Las hojas secas son más aromáticas que las frescas','Resistente a la sequía y al frío moderado','Podar en primavera para mantener la forma','Se puede topierar en formas geométricas decorativas']
    },
    calendar: {
      atlantica:         { siembra:[2,3,4], trasplante:[3,4,5], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      continental_fria:  { siembra:[3,4,5], trasplante:[4,5,6], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      continental_calida:{ siembra:[2,3,4], trasplante:[3,4,5], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      mediterranea:      { siembra:[2,3,4,9,10], trasplante:[3,4,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      semiarida:         { siembra:[2,3,9,10], trasplante:[3,4,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] },
      subtropical:       { siembra:[0,1,2,9,10,11], trasplante:[2,3,10,11], cosecha:[0,1,2,3,4,5,6,7,8,9,10,11] }
    }
  }
};

/* ============================================================
   DATOS EXTRA — m² por planta y rendimiento estimado
   ============================================================ */
const PLANTA_EXTRA = {
  tomate:        { m2: 0.40, rendimiento: '3–5 kg por planta. Con 2 plantas, tomates para 2 personas todo el verano.', modo_siembra: 'unidad', densidad: 2 },
  pimiento:      { m2: 0.35, rendimiento: '1–2 kg por planta. Una planta produce pimientos durante 4 meses.', modo_siembra: 'unidad', densidad: 3 },
  berenjena:     { m2: 0.50, rendimiento: '8–15 frutos por planta durante todo el verano.', modo_siembra: 'unidad', densidad: 2 },
  calabacin:     { m2: 0.70, rendimiento: '1 planta produce abundantemente; con 2 m² tienes calabacines para toda la familia.', modo_siembra: 'unidad', densidad: 1 },
  pepino:        { m2: 0.25, rendimiento: '10–20 pepinos por planta en una temporada.', modo_siembra: 'unidad', densidad: 2 },
  lechuga:       { m2: 0.06, rendimiento: '1 cabeza cada 6 semanas. Sembrando en tandas, cosecha continua.', modo_siembra: 'unidad', densidad: 8 },
  espinaca:      { m2: 0.04, rendimiento: 'Hojas frescas en 40 días. Varias cosechas por ciclo.', modo_siembra: 'hilera', densidad: 33 },
  zanahoria:     { m2: 0.01, rendimiento: '1 zanahoria por planta. En 30 cm de hilera, 10–15 zanahorias.', modo_siembra: 'hilera', densidad: 60 },
  radano:        { m2: 0.01, rendimiento: 'El más rápido: cosecha en 25 días. En 0,1 m² obtienes 20–30 rábanos.', modo_siembra: 'hilera', densidad: 110 },
  cebolla:       { m2: 0.02, rendimiento: '1 cebolla por bulbillo. En 1 m², más de 50 cebollas.', modo_siembra: 'hilera', densidad: 33 },
  ajo:           { m2: 0.01, rendimiento: '1 cabeza por diente plantado. En 0,5 m², 30–40 cabezas de ajo.', modo_siembra: 'hilera', densidad: 50 },
  puerro:        { m2: 0.03, rendimiento: '1 puerro por planta. Lento pero muy abundante por metro cuadrado.', modo_siembra: 'hilera', densidad: 16 },
  brocoli:       { m2: 0.50, rendimiento: '1 cabeza central + numerosas yemas laterales durante semanas.', modo_siembra: 'unidad', densidad: 2 },
  acelga:        { m2: 0.07, rendimiento: 'Cosecha de hojas durante meses. 1 planta alimenta semanalmente.', modo_siembra: 'unidad', densidad: 6 },
  judia_verde:   { m2: 0.08, rendimiento: '200–300 g por planta. En 1 m², varios kg durante el verano.', modo_siembra: 'unidad', densidad: 4 },
  guisante:      { m2: 0.05, rendimiento: '100–200 g por planta. Varias cosechas en primavera.', modo_siembra: 'hilera', densidad: 8 },
  fresa:         { m2: 0.10, rendimiento: '200–400 g por planta. En primavera y otoño con variedades remontantes.', modo_siembra: 'unidad', densidad: 8 },
  tomate_cherry: { m2: 0.25, rendimiento: 'Cientos de frutos por planta. Ideal para balcones pequeños.', modo_siembra: 'unidad', densidad: 2 },
  arandano:      { m2: 0.40, rendimiento: '1–3 kg por arbusto a partir del 2.º año. Producción durante 20 años.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  albahaca:      { m2: 0.04, rendimiento: 'Hojas frescas toda la temporada si se poda regularmente.', modo_siembra: 'mata', unidades_sugeridas: 2 },
  perejil:       { m2: 0.03, rendimiento: 'Cosecha continua de hojas durante todo el año en climas suaves.', modo_siembra: 'mata', unidades_sugeridas: 2 },
  romero:        { m2: 0.20, rendimiento: 'Perenne: ramitas todo el año durante décadas.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  tomillo:       { m2: 0.15, rendimiento: 'Perenne: cosecha continua, especialmente aromático antes de florecer.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  menta:         { m2: 0.10, rendimiento: 'Muy productiva: hojas frescas de primavera a otoño cada año.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  oregano:       { m2: 0.10, rendimiento: 'Perenne muy aromático. Una planta cubre las necesidades de cocina.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  pimiento_padron: { m2: 0.35, rendimiento: '1–2 kg por planta. Una planta da pimientos de padrón durante todo el verano.', modo_siembra: 'unidad', densidad: 3 },
  haba:          { m2: 0.06, rendimiento: '300–500 g por planta. En 1 m², varios kg de habas frescas en primavera.', modo_siembra: 'hilera', densidad: 8 },
  patata:        { m2: 0.20, rendimiento: '500 g–1,5 kg por planta. En un saco de 50L, 2–4 kg de patatas.', modo_siembra: 'unidad', densidad: 5 },
  calabaza:      { m2: 1.00, rendimiento: '2–4 frutos por planta. Un fruto puede pesar 3–8 kg.', modo_siembra: 'unidad', densidad: 1 },
  freson:        { m2: 0.12, rendimiento: '300–600 g por planta. Frutos grandes en primavera.', modo_siembra: 'unidad', densidad: 8 },
  frambuesa:     { m2: 0.30, rendimiento: '1–2 kg por planta a partir del 2.º año. Cosecha en verano y otoño.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  sandia:        { m2: 1.00, rendimiento: '1–2 frutos por planta. Variedades mini: frutos de 2–4 kg.', modo_siembra: 'unidad', densidad: 1 },
  melon:         { m2: 0.80, rendimiento: '2–3 frutos por planta. Cada melón pesa 1–3 kg.', modo_siembra: 'unidad', densidad: 1 },
  higo:          { m2: 0.50, rendimiento: '3–8 kg por árbol a partir del 3.er año. Producción durante décadas.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  limon:         { m2: 0.40, rendimiento: '30–80 limones por árbol en maceta. Floración casi continua.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  granada:       { m2: 0.50, rendimiento: '5–15 kg por arbusto maduro. Las granadas se conservan meses.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  mora:          { m2: 0.30, rendimiento: '2–4 kg por planta al año. Muy productiva sin apenas cuidados.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  cilantro:      { m2: 0.03, rendimiento: 'Hojas frescas en 30 días. Sembrar en tandas para cosecha continua.', modo_siembra: 'mata', unidades_sugeridas: 3 },
  hierbabuena:   { m2: 0.10, rendimiento: 'Muy productiva: hojas frescas de primavera a otoño cada año.', modo_siembra: 'mata', unidades_sugeridas: 1 },
  cebollino:     { m2: 0.03, rendimiento: 'Cortar y vuelve a crecer: cosecha continua durante toda la temporada.', modo_siembra: 'mata', unidades_sugeridas: 2 },
  laurel:        { m2: 0.25, rendimiento: 'Perenne: hojas disponibles todo el año durante décadas.', modo_siembra: 'mata', unidades_sugeridas: 1 }
};

Object.entries(PLANTA_EXTRA).forEach(([id, extra]) => {
  if (PLANTAS[id]) Object.assign(PLANTAS[id], extra);
});

/* ============================================================
   HELPERS
   ============================================================ */

function getPlantasPorCategoria(cat) {
  if (cat === 'todas') return Object.entries(PLANTAS);
  return Object.entries(PLANTAS).filter(([,p]) => p.categoria === cat);
}

function getCalendario(plantaId, zonaId) {
  const planta = PLANTAS[plantaId];
  if (!planta) return null;
  return planta.calendar[zonaId] || planta.calendar['mediterranea'];
}

/* Devuelve array de 12 con tipo: 'siembra'|'trasplante'|'cosecha'|null */
function getCalendarioCompleto(plantaId, zonaId) {
  const cal = getCalendario(plantaId, zonaId);
  if (!cal) return null;
  return MESES.map((_, i) => {
    if (cal.cosecha.includes(i)) return 'cosecha';
    if (cal.trasplante.includes(i)) return 'trasplante';
    if (cal.siembra.includes(i)) return 'siembra';
    return null;
  });
}
