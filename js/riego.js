/* HortelanoUrbano.es — Datos de riego (sistema por % del volumen de la maceta) */

/*
  pct_maceta: % del volumen de la maceta a aplicar por sesión de riego (método agronómico estándar:
              10-20% del volumen del sustrato por riego, según FAO/literatura de riego en contenedor).
  frecuencia_verano / frecuencia_resto: cada cuántos días regar.
  consejo: consejo clave de riego para esa planta.

  El litro real de cada sesión se calcula con: litros_maceta (de PLANTAS en data.js) × pct_maceta/100,
  ajustado por zona climática y estación. Esto escala automáticamente con el tamaño real de la maceta
  de cada planta, en vez de usar un litro fijo que no tiene en cuenta si la maceta es de 5L o de 50L.
*/

const RIEGO_BASE = {
  tomate         : { pct_maceta: 17, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Riego uniforme y constante. La irregularidad provoca \"blossom end rot\" (podredumbre apical). Regar siempre en la base." },
  pimiento       : { pct_maceta: 16, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "No tolera el encharcamiento. Mejor riego frecuente y moderado que riego abundante y espaciado." },
  berenjena      : { pct_maceta: 15, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Le gusta el calor y el agua. Mulching alrededor reduce las necesidades de riego a la mitad." },
  calabacin      : { pct_maceta: 16, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Gran consumidor de agua. El mulching es muy recomendable para conservar la humedad." },
  pepino         : { pct_maceta: 17, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Riego regular y uniforme. La falta de agua produce pepinos amargos y torcidos." },
  lechuga        : { pct_maceta: 8, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Prefiere riegos frecuentes y moderados. En verano, regar al atardecer para evitar quemaduras." },
  espinaca       : { pct_maceta: 7, frecuencia_verano: 2, frecuencia_resto: 3, consejo: "Planta de clima frío. En verano reduce el riego porque tiende a espigarse con calor y humedad." },
  zanahoria      : { pct_maceta: 4, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Riego moderado y regular. El suelo siempre húmedo pero nunca encharcado. La sequía bifurca las raíces." },
  radano         : { pct_maceta: 4, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "El riego irregular hace que los rábanos sean huecos y picantes. Mantener humedad constante." },
  cebolla        : { pct_maceta: 8, frecuencia_verano: 3, frecuencia_resto: 5, consejo: "Reducir el riego cuando las hojas empiecen a amarillear: señal de que el bulbo ya madura." },
  ajo            : { pct_maceta: 6, frecuencia_verano: 5, frecuencia_resto: 7, consejo: "Muy resistente a la sequía. Reducir drásticamente el riego en mayo-junio para que el bulbo madure." },
  puerro         : { pct_maceta: 12, frecuencia_verano: 2, frecuencia_resto: 3, consejo: "Riego regular durante todo el ciclo. En verano aportar mulching para conservar la humedad." },
  brocoli        : { pct_maceta: 13, frecuencia_verano: 2, frecuencia_resto: 3, consejo: "Especialmente importante el riego regular durante la formación de la cabeza." },
  acelga         : { pct_maceta: 13, frecuencia_verano: 1, frecuencia_resto: 3, consejo: "Tolera el calor pero necesita agua. En verano las hojas grandes pierden mucha agua por transpiración." },
  judia_verde    : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Crítico el riego durante la floración. La falta de agua en este momento provoca caída de flores." },
  guisante       : { pct_maceta: 7, frecuencia_verano: 2, frecuencia_resto: 3, consejo: "Prefiere el frío y aguanta bien la sequía. En primavera calurosa, aumentar el riego." },
  fresa          : { pct_maceta: 15, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Riego en la base, nunca sobre los frutos. La humedad en los frutos favorece el moho gris (Botrytis)." },
  tomate_cherry  : { pct_maceta: 17, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Más resistente que el tomate normal. Riego regular para evitar el agrietado de los frutos." },
  arandano       : { pct_maceta: 5, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Regar con agua sin cal (filtrada o de lluvia). El agua calcárea sube el pH y daña al arándano." },
  albahaca       : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Dejar secar ligeramente entre riegos. El encharcamiento pudre la raíz rápidamente." },
  perejil        : { pct_maceta: 6, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Riego moderado. Prefiere la sequía leve al encharcamiento." },
  romero         : { pct_maceta: 3, frecuencia_verano: 7, frecuencia_resto: 14, consejo: "Muy resistente a la sequía. Uno de los problemas más comunes es el exceso de riego. Solo regar cuando el sustrato esté seco." },
  tomillo        : { pct_maceta: 4, frecuencia_verano: 7, frecuencia_resto: 14, consejo: "Mediterráneo puro. Aguanta meses sin agua. El exceso de riego es su principal enemigo." },
  menta          : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 3, consejo: "Le gusta la humedad más que otras aromáticas. En verano puede necesitar riego diario." },
  oregano        : { pct_maceta: 6, frecuencia_verano: 5, frecuencia_resto: 10, consejo: "Muy resistente a la sequía. Regar solo cuando el sustrato esté seco. El exceso de agua lo mata." },
  pimiento_padron: { pct_maceta: 16, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Riego uniforme sin encharcamiento. El estrés hídrico aumenta el picor del fruto." },
  haba           : { pct_maceta: 8, frecuencia_verano: 2, frecuencia_resto: 3, consejo: "Leguminosa resistente. Riego moderado salvo en floración, donde es más exigente." },
  patata         : { pct_maceta: 10, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Riego regular hasta la floración; reducir luego para favorecer el engrosamiento del tubérculo." },
  calabaza       : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 3, consejo: "Gran consumidor de agua mientras crece la planta y el fruto; reducir cuando el fruto empieza a madurar." },
  freson         : { pct_maceta: 15, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Riego en la base para evitar podredumbre gris. Similar a la fresa pero algo más resistente." },
  frambuesa      : { pct_maceta: 8, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Riego regular, especialmente en floración y fructificación. No tolera la sequía prolongada." },
  sandia         : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 3, consejo: "Necesita riego abundante en floración y crecimiento del fruto; reducir cuando el fruto está casi maduro para concentrar azúcares." },
  melon          : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 3, consejo: "Riego abundante en crecimiento; reducir antes de la maduración para concentrar el aroma y el dulzor." },
  higo           : { pct_maceta: 6, frecuencia_verano: 3, frecuencia_resto: 7, consejo: "Resistente a la sequía una vez establecida. En maceta necesita más constancia que en tierra." },
  limon          : { pct_maceta: 6, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "El exceso de agua es el principal problema: drenaje imprescindible. Dejar secar la capa superior entre riegos." },
  granada        : { pct_maceta: 4, frecuencia_verano: 5, frecuencia_resto: 10, consejo: "Muy resistente a la sequía una vez establecida. Tolera suelos pobres; el exceso de riego es más peligroso que el déficit." },
  mora           : { pct_maceta: 8, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Riego regular en floración y fructificación. Muy productiva si no le falta agua en esa fase." },
  cilantro       : { pct_maceta: 9, frecuencia_verano: 2, frecuencia_resto: 3, consejo: "Con calor sube a flor muy rápido. Riego regular para retrasar la subida a semilla." },
  hierbabuena    : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 3, consejo: "Como la menta, le gusta la humedad. Aguanta más sombra que otras aromáticas." },
  cebollino      : { pct_maceta: 6, frecuencia_verano: 2, frecuencia_resto: 4, consejo: "Riego moderado y constante. Al ser de hoja fina, se recupera rápido tras un riego tras notarse seco." },
  laurel         : { pct_maceta: 5, frecuencia_verano: 5, frecuencia_resto: 10, consejo: "Resistente a la sequía y al frío moderado. Dejar secar entre riegos, no encharcar." },
  rucula         : { pct_maceta: 10, frecuencia_verano: 1, frecuencia_resto: 2, consejo: "Riega por la base, nunca sobre las hojas. Crecimiento rápido: no dejar secar entre riegos." },
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

function calcularRiego(plantaId, zonaId, numPlantas) {
  const base       = RIEGO_BASE[plantaId];
  const litrosMaceta = (typeof PLANTAS !== 'undefined' && PLANTAS[plantaId]?.litros_maceta) || 10;
  const fZona      = FACTOR_ZONA[zonaId] || 1.0;
  const est        = getEstacionActual();
  const fEst       = FACTOR_ESTACION[est] || 1.0;

  /* Litros por sesión = % del volumen de la maceta, ajustado por zona y estación */
  const litrosSesionPorPlanta = litrosMaceta * (base.pct_maceta / 100) * fZona * fEst;
  const litrosSesionTotales   = litrosSesionPorPlanta * numPlantas;

  const frecDias = est === 'verano' ? base.frecuencia_verano : base.frecuencia_resto;

  /* Litros semanales totales (para mostrar el resumen semanal) */
  const litrosSemana = (litrosSesionTotales / frecDias) * 7;

  return {
    litros_maceta:   litrosMaceta,
    litros_sesion:   Math.round(litrosSesionTotales * 10) / 10,
    litros_sesion_por_planta: Math.round(litrosSesionPorPlanta * 10) / 10,
    litros_semana:   Math.round(litrosSemana * 10) / 10,
    pct_maceta:      base.pct_maceta,
    frecuencia_dias: frecDias,
    estacion:        est,
    consejo:         base.consejo
  };
}
