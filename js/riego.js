/* HortelanoUrbano.es — Datos de riego */

/*
  litros_semana: litros por planta a la semana en condiciones normales (20-25°C)
  factor_zona: multiplicador por zona climática
  factor_estacion: multiplicador por estación
  frecuencia_dias: cada cuántos días regar (verano / resto del año)
  contenedor_extra: litros adicionales si está en maceta (pierden humedad más rápido)
  consejo: consejo clave de riego
*/

const RIEGO_BASE = {
  tomate:        { litros: 3.5, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.5, consejo: 'Riego uniforme y constante. La irregularidad provoca "blossom end rot" (podredumbre apical). Regar siempre en la base.' },
  pimiento:      { litros: 2.5, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.5, consejo: 'No tolera el encharcamiento. Mejor riego frecuente y moderado que riego abundante y espaciado.' },
  berenjena:     { litros: 3.0, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.5, consejo: 'Le gusta el calor y el agua. Mulching alrededor reduce las necesidades de riego a la mitad.' },
  calabacin:     { litros: 4.0, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 1.0, consejo: 'Gran consumidor de agua. El mulching es muy recomendable para conservar la humedad.' },
  pepino:        { litros: 3.0, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.5, consejo: 'Riego regular y uniforme. La falta de agua produce pepinos amargos y torcidos.' },
  lechuga:       { litros: 1.0, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.3, consejo: 'Prefiere riegos frecuentes y moderados. En verano, regar al atardecer para evitar quemaduras.' },
  espinaca:      { litros: 0.8, frecuencia_verano: 2, frecuencia_resto: 3, contenedor: 0.2, consejo: 'Planta de clima frío. En verano reduce el riego porque tiende a espigarse con calor y humedad.' },
  zanahoria:     { litros: 0.5, frecuencia_verano: 2, frecuencia_resto: 4, contenedor: 0.2, consejo: 'Riego moderado y regular. El suelo siempre húmedo pero nunca encharcado. La sequía bifurca las raíces.' },
  radano:        { litros: 0.3, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.1, consejo: 'El riego irregular hace que los rábanos sean huecos y picantes. Mantener humedad constante.' },
  cebolla:       { litros: 0.8, frecuencia_verano: 3, frecuencia_resto: 5, contenedor: 0.2, consejo: 'Reducir el riego cuando las hojas empiecen a amarillear: señal de que el bulbo ya madura.' },
  ajo:           { litros: 0.5, frecuencia_verano: 5, frecuencia_resto: 7, contenedor: 0.1, consejo: 'Muy resistente a la sequía. Reducir drásticamente el riego en mayo-junio para que el bulbo madure.' },
  puerro:        { litros: 1.2, frecuencia_verano: 2, frecuencia_resto: 3, contenedor: 0.3, consejo: 'Riego regular durante todo el ciclo. En verano aportar mulching para conservar la humedad.' },
  brocoli:       { litros: 2.0, frecuencia_verano: 2, frecuencia_resto: 3, contenedor: 0.5, consejo: 'Especialmente importante el riego regular durante la formación de la cabeza.' },
  acelga:        { litros: 1.5, frecuencia_verano: 1, frecuencia_resto: 3, contenedor: 0.3, consejo: 'Tolera el calor pero necesita agua. En verano las hojas grandes pierden mucha agua por transpiración.' },
  judia_verde:   { litros: 1.5, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.3, consejo: 'Crítico el riego durante la floración. La falta de agua en este momento provoca caída de flores.' },
  guisante:      { litros: 1.0, frecuencia_verano: 2, frecuencia_resto: 3, contenedor: 0.2, consejo: 'Prefiere el frío y aguanta bien la sequía. En primavera calurosa, aumentar el riego.' },
  fresa:         { litros: 1.5, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.5, consejo: 'Riego en la base, nunca sobre los frutos. La humedad en los frutos favorece el moho gris (Botrytis).' },
  tomate_cherry: { litros: 2.5, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.5, consejo: 'Más resistente que el tomate normal. Riego regular para evitar el agrietado de los frutos.' },
  arandano:      { litros: 2.0, frecuencia_verano: 2, frecuencia_resto: 4, contenedor: 0.5, consejo: 'Regar con agua sin cal (filtrada o de lluvia). El agua calcárea sube el pH y daña al arándano.' },
  albahaca:      { litros: 0.5, frecuencia_verano: 1, frecuencia_resto: 2, contenedor: 0.2, consejo: 'Dejar secar ligeramente entre riegos. El encharcamiento pudre la raíz rápidamente.' },
  perejil:       { litros: 0.5, frecuencia_verano: 2, frecuencia_resto: 4, contenedor: 0.2, consejo: 'Riego moderado. Prefiere la sequía leve al encharcamiento.' },
  romero:        { litros: 0.3, frecuencia_verano: 7, frecuencia_resto: 14, contenedor: 0.1, consejo: 'Muy resistente a la sequía. Uno de los problemas más comunes es el exceso de riego. Solo regar cuando el sustrato esté seco.' },
  tomillo:       { litros: 0.2, frecuencia_verano: 7, frecuencia_resto: 14, contenedor: 0.1, consejo: 'Mediterráneo puro. Aguanta meses sin agua. El exceso de riego es su principal enemigo.' },
  menta:         { litros: 0.8, frecuencia_verano: 1, frecuencia_resto: 3, contenedor: 0.3, consejo: 'Le gusta la humedad más que otras aromáticas. En verano puede necesitar riego diario.' },
  oregano:       { litros: 0.3, frecuencia_verano: 5, frecuencia_resto: 10, contenedor: 0.1, consejo: 'Muy resistente a la sequía. Regar solo cuando el sustrato esté seco. El exceso de agua lo mata.' }
};

/* Factores por zona climática */
const FACTOR_ZONA = {
  atlantica:          0.7,
  continental_fria:   0.9,
  continental_calida: 1.2,
  mediterranea:       1.0,
  semiarida:          1.4,
  subtropical:        1.3
};

/* Factores por estación */
const FACTOR_ESTACION = {
  primavera: 0.8,
  verano:    1.4,
  otono:     0.7,
  invierno:  0.4
};

function getEstacionActual() {
  const mes = new Date().getMonth();
  if (mes >= 2 && mes <= 4) return 'primavera';
  if (mes >= 5 && mes <= 8) return 'verano';
  if (mes >= 9 && mes <= 10) return 'otono';
  return 'invierno';
}

function calcularRiego(plantaId, zonaId, numPlantas, esMaceta) {
  const base   = RIEGO_BASE[plantaId];
  const fZona  = FACTOR_ZONA[zonaId]  || 1.0;
  const est    = getEstacionActual();
  const fEst   = FACTOR_ESTACION[est] || 1.0;

  const litrosBase = base.litros * fZona * fEst;
  const extra      = esMaceta ? (base.contenedor || 0) : 0;
  const litrosPorPlanta = litrosBase + extra;
  const litrosTotales   = litrosPorPlanta * numPlantas;

  const frecDias = est === 'verano' ? base.frecuencia_verano : base.frecuencia_resto;

  /* Litros por sesión */
  const litrosSesion = (litrosTotales / 7) * frecDias;

  return {
    litros_semana:  Math.round(litrosTotales * 10) / 10,
    litros_sesion:  Math.round(litrosSesion * 10) / 10,
    frecuencia_dias: frecDias,
    estacion: est,
    consejo: base.consejo
  };
}
