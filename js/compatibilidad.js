/* HortelanoUrbano.es — Compatibilidad de plantas y huertos predefinidos */

/* ============================================================
   COMPATIBILIDAD
   Estructura por planta: { buenas: [{id, razon}], malas: [{id, razon}] }
   ============================================================ */
const COMPATIBILIDAD = {

  tomate: {
    buenas: [
      { id: 'albahaca',    razon: 'La albahaca repele mosca blanca y pulgón, y se dice que mejora el sabor del tomate.' },
      { id: 'perejil',     razon: 'El perejil atrae insectos beneficiosos que controlan plagas del tomate.' },
      { id: 'zanahoria',   razon: 'La zanahoria airea el suelo alrededor de las raíces del tomate.' },
      { id: 'lechuga',     razon: 'La lechuga aprovecha la sombra del tomate y ocupa el suelo bajo él sin competir.' },
      { id: 'ajo',         razon: 'El ajo repele araña roja, pulgón y hongos del tomate.' },
      { id: 'tomate_cherry', razon: 'Mismas necesidades y cuidados; se pueden plantar juntos sin problema.' }
    ],
    malas: [
      { id: 'berenjena',   razon: 'Son de la misma familia (solanáceas) y comparten plagas y enfermedades, especialmente en espacios pequeños.' },
      { id: 'pimiento',    razon: 'Comparten enfermedades fúngicas al ser solanáceas. En espacios reducidos, evita mezclarlos.' },
      { id: 'pepino',      razon: 'Compiten agresivamente por agua y nutrientes, y pueden compartir enfermedades.' }
    ]
  },

  pimiento: {
    buenas: [
      { id: 'albahaca',    razon: 'La albahaca repele pulgón y mosca blanca, plagas habituales del pimiento.' },
      { id: 'zanahoria',   razon: 'Conviven bien al ocupar distintas capas del suelo.' },
      { id: 'lechuga',     razon: 'La lechuga aprovecha la sombra parcial del pimiento sin competir.' },
      { id: 'perejil',     razon: 'Atrae polinizadores que mejoran la fructificación del pimiento.' }
    ],
    malas: [
      { id: 'tomate',      razon: 'Misma familia, mismas enfermedades. Planta juntos solo si tienes mucho espacio.' },
      { id: 'berenjena',   razon: 'Todas las solanáceas juntas en poco espacio concentran enfermedades.' },
      { id: 'guisante',    razon: 'Los guisantes pueden transmitir hongos que afectan al pimiento.' }
    ]
  },

  berenjena: {
    buenas: [
      { id: 'albahaca',    razon: 'La albahaca actúa como planta trampa para pulgones, protegiéndola.' },
      { id: 'tomillo',     razon: 'El tomillo repele la mosca blanca y la araña roja, enemigos comunes.' },
      { id: 'zanahoria',   razon: 'Conviven sin competir al tener sistemas radiculares distintos.' }
    ],
    malas: [
      { id: 'tomate',      razon: 'Misma familia; concentran enfermedades fungicidas en poco espacio.' },
      { id: 'pimiento',    razon: 'Todas las solanáceas juntas amplifican el riesgo de plagas y enfermedades.' }
    ]
  },

  calabacin: {
    buenas: [
      { id: 'judia_verde', razon: 'La judía fija nitrógeno en el suelo que aprovecha el calabacín.' },
      { id: 'ajo',         razon: 'El ajo repele el oídio, la principal amenaza fúngica del calabacín.' },
      { id: 'menta',       razon: 'La menta ahuyenta hormigas y pulgones. Planta siempre en maceta separada.' },
      { id: 'perejil',     razon: 'Atrae polinizadores esenciales para la fructificación del calabacín.' }
    ],
    malas: [
      { id: 'pepino',      razon: 'Son de la misma familia (cucurbitáceas) y compiten por recursos en espacios pequeños.' },
      { id: 'tomate',      razon: 'Compiten agresivamente por nutrientes y espacio en macetas o huertos pequeños.' }
    ]
  },

  pepino: {
    buenas: [
      { id: 'lechuga',     razon: 'La lechuga crece rápido bajo los pepinos aprovechando la sombra antes de que se cierren.' },
      { id: 'zanahoria',   razon: 'Conviven sin competir; las zanahorias airean el suelo alrededor del pepino.' },
      { id: 'albahaca',    razon: 'La albahaca repele pulgones y mosca blanca del pepino.' },
      { id: 'judia_verde', razon: 'Las judías enriquecen el suelo con nitrógeno que aprovecha el pepino.' }
    ],
    malas: [
      { id: 'calabacin',   razon: 'Misma familia, compiten por espacio y nutrientes.' },
      { id: 'tomate',      razon: 'Compiten por agua y nutrientes; pueden intercambiar enfermedades.' },
      { id: 'pimiento',    razon: 'En espacios reducidos pueden estresarse mutuamente.' }
    ]
  },

  lechuga: {
    buenas: [
      { id: 'radano',      razon: 'El rábano ahuyenta el escarabajo de la lechuga y aprovecha el espacio entre plantas.' },
      { id: 'zanahoria',   razon: 'Perfectas compañeras: la lechuga cubre el suelo y la zanahoria crece en profundidad.' },
      { id: 'tomate',      razon: 'La lechuga aprovecha la sombra del tomate en verano, evitando que se espigue.' },
      { id: 'tomate_cherry', razon: 'Igual que con el tomate; la sombra del cherry protege la lechuga del calor.' },
      { id: 'espinaca',    razon: 'Mismos requisitos de agua y temperatura; cosecha escalonada perfecta.' }
    ],
    malas: [
      { id: 'perejil',     razon: 'El perejil puede inhibir el crecimiento de la lechuga en espacios muy reducidos.' }
    ]
  },

  espinaca: {
    buenas: [
      { id: 'lechuga',     razon: 'Mismas condiciones de frío; ocupan espacio distinto y se cosechan juntas.' },
      { id: 'fresa',       razon: 'La espinaca actúa como cobertura del suelo entre las fresas.' },
      { id: 'ajo',         razon: 'El ajo repele babosas y pulgones que atacan las hojas de espinaca.' },
      { id: 'zanahoria',   razon: 'Raíces en capas diferentes; se aprovecha el espacio perfectamente.' }
    ],
    malas: []
  },

  zanahoria: {
    buenas: [
      { id: 'cebolla',     razon: 'El clásico compañero: el olor de la cebolla confunde a la mosca de la zanahoria, y viceversa.' },
      { id: 'lechuga',     razon: 'La lechuga cubre el suelo entre zanahorias reduciendo hierbas adventicias.' },
      { id: 'tomate',      razon: 'Las zanahorias airean el suelo alrededor de las raíces del tomate.' },
      { id: 'perejil',     razon: 'El perejil atrae insectos beneficiosos que controlan la mosca de la zanahoria.' }
    ],
    malas: [
      { id: 'arandano',    razon: 'El arándano necesita sustrato ácido que perjudica las zanahorias.' }
    ]
  },

  radano: {
    buenas: [
      { id: 'lechuga',     razon: 'El rábano repele el escarabajo de la lechuga y llena los huecos entre plantas.' },
      { id: 'zanahoria',   razon: 'El rábano siembra rápido y marca las hileras de zanahoria mientras esta germina.' },
      { id: 'espinaca',    razon: 'Perfectos compañeros de otoño-invierno; mismos ritmos y condiciones.' }
    ],
    malas: [
      { id: 'pepino',      razon: 'El pepino puede amargar el sabor del rábano si están muy próximos.' }
    ]
  },

  cebolla: {
    buenas: [
      { id: 'zanahoria',   razon: 'El clásico compañero: se confunden mutuamente sus plagas específicas.' },
      { id: 'tomate',      razon: 'La cebolla repele trips y pulgones del tomate.' },
      { id: 'lechuga',     razon: 'La cebolla repele babosas que atacan la lechuga.' },
      { id: 'brocoli',     razon: 'La cebolla repele la mariposa de la col que pone huevos en el brócoli.' }
    ],
    malas: [
      { id: 'guisante',    razon: 'Los alliums (cebolla, ajo, puerro) inhiben el crecimiento de todas las leguminosas.' },
      { id: 'judia_verde', razon: 'Los alliums inhiben las leguminosas; mantenlos separados siempre.' }
    ]
  },

  ajo: {
    buenas: [
      { id: 'tomate',      razon: 'El ajo repele araña roja, pulgón y hongos del tomate. Combinación clásica.' },
      { id: 'fresa',       razon: 'El ajo previene el moho gris (Botrytis), principal enemigo de la fresa.' },
      { id: 'brocoli',     razon: 'Repele mariposas y babosas que atacan las coles y crucíferas.' },
      { id: 'zanahoria',   razon: 'El ajo confunde la mosca de la zanahoria con su olor intenso.' }
    ],
    malas: [
      { id: 'guisante',    razon: 'Todos los alliums inhiben el crecimiento de las leguminosas.' },
      { id: 'judia_verde', razon: 'El ajo inhibe la fijación de nitrógeno de las leguminosas.' },
      { id: 'arandano',    razon: 'El ajo eleva el pH del sustrato, perjudicando al arándano que necesita acidez.' }
    ]
  },

  puerro: {
    buenas: [
      { id: 'zanahoria',   razon: 'El olor del puerro confunde la mosca de la zanahoria y viceversa.' },
      { id: 'apio',        razon: 'Conviven bien y se benefician mutuamente.' },
      { id: 'brocoli',     razon: 'El puerro repele insectos que atacan las crucíferas.' }
    ],
    malas: [
      { id: 'guisante',    razon: 'Los alliums (puerro incluido) inhiben las leguminosas.' },
      { id: 'judia_verde', razon: 'Incompatibles: el puerro inhibe la fijación de nitrógeno de las judías.' }
    ]
  },

  brocoli: {
    buenas: [
      { id: 'cebolla',     razon: 'La cebolla repele la mariposa de la col que pone huevos en el brócoli.' },
      { id: 'ajo',         razon: 'El ajo repele mariposas, babosas y hongos de las crucíferas.' },
      { id: 'romero',      razon: 'El romero ahuyenta la mosca de la col con su olor intenso.' },
      { id: 'tomillo',     razon: 'El tomillo repele la mariposa blanca de la col.' }
    ],
    malas: [
      { id: 'tomate',      razon: 'Compiten por nutrientes y pueden inhibirse mutuamente.' }
    ]
  },

  acelga: {
    buenas: [
      { id: 'lechuga',     razon: 'Mismas condiciones; la cosecha escalonada de ambas aprovecha bien el espacio.' },
      { id: 'cebolla',     razon: 'La cebolla repele plagas que atacan las hojas de acelga.' },
      { id: 'zanahoria',   razon: 'Raíces en capas distintas; conviven sin competir.' }
    ],
    malas: []
  },

  judia_verde: {
    buenas: [
      { id: 'calabacin',   razon: 'La judía fija nitrógeno que aprovecha el calabacín, un gran consumidor.' },
      { id: 'zanahoria',   razon: 'La judía enriquece el suelo con nitrógeno que aprovecha la zanahoria.' },
      { id: 'pepino',      razon: 'Las judías fertilizan el suelo que aprovecha el pepino.' },
      { id: 'lechuga',     razon: 'La lechuga crece bien bajo las judías aprovechando la sombra parcial.' }
    ],
    malas: [
      { id: 'cebolla',     razon: 'Todos los alliums inhiben el crecimiento de las leguminosas.' },
      { id: 'ajo',         razon: 'El ajo inhibe la fijación de nitrógeno que es la principal ventaja de las judías.' },
      { id: 'puerro',      razon: 'Los alliums y las leguminosas son incompatibles en espacios reducidos.' }
    ]
  },

  guisante: {
    buenas: [
      { id: 'zanahoria',   razon: 'Los guisantes fertilizan el suelo con nitrógeno y conviven bien con la zanahoria.' },
      { id: 'lechuga',     razon: 'Misma temporada (primavera y otoño-invierno); se cosechan juntos.' },
      { id: 'espinaca',    razon: 'Perfectos compañeros de temporada fría; se complementan en la cosecha.' },
      { id: 'radano',      razon: 'El rábano marca los surcos del guisante y ahuyenta algunas plagas.' }
    ],
    malas: [
      { id: 'cebolla',     razon: 'Los alliums inhiben el crecimiento de todos los guisantes y leguminosas.' },
      { id: 'ajo',         razon: 'El ajo inhibe la fijación de nitrógeno que es la ventaja de los guisantes.' }
    ]
  },

  fresa: {
    buenas: [
      { id: 'ajo',         razon: 'El ajo previene el moho gris (Botrytis), la enfermedad más común de la fresa.' },
      { id: 'espinaca',    razon: 'La espinaca cubre el suelo entre fresas reduciendo la evaporación.' },
      { id: 'perejil',     razon: 'El perejil repele babosas y atrae polinizadores para las flores de fresa.' },
      { id: 'tomillo',     razon: 'El tomillo actúa como repelente general de insectos dañinos.' }
    ],
    malas: [
      { id: 'brocoli',     razon: 'Las crucíferas pueden inhibir el crecimiento de las fresas.' }
    ]
  },

  tomate_cherry: {
    buenas: [
      { id: 'albahaca',    razon: 'Combinación perfecta: la albahaca repele plagas y se dice que mejora el sabor.' },
      { id: 'lechuga',     razon: 'La lechuga aprovecha la sombra del cherry; cosecha escalonada ideal.' },
      { id: 'perejil',     razon: 'El perejil atrae insectos beneficiosos y repele algunas plagas.' },
      { id: 'tomate',      razon: 'Mismas necesidades y cuidados; se pueden cultivar juntos sin problema.' }
    ],
    malas: [
      { id: 'pimiento',    razon: 'Solanáceas juntas en poco espacio; riesgo de enfermedades compartidas.' },
      { id: 'berenjena',   razon: 'Misma familia; en espacios pequeños concentran plagas y hongos.' }
    ]
  },

  arandano: {
    buenas: [
      { id: 'menta',       razon: 'La menta ahuyenta trips e insectos dañinos; ambos toleran algo de acidez.' }
    ],
    malas: [
      { id: 'ajo',         razon: 'El ajo sube el pH del sustrato; el arándano necesita sustrato muy ácido.' },
      { id: 'zanahoria',   razon: 'Necesitan sustratos opuestos: el arándano ácido, la zanahoria neutro.' }
    ]
  },

  albahaca: {
    buenas: [
      { id: 'tomate',      razon: 'La combinación más clásica: repele plagas y mejora el sabor del tomate.' },
      { id: 'pimiento',    razon: 'Repele pulgón y mosca blanca, las principales plagas del pimiento.' },
      { id: 'tomate_cherry', razon: 'Igual que con el tomate: excelente compañera.' },
      { id: 'pepino',      razon: 'La albahaca repele pulgones que suelen atacar el pepino.' }
    ],
    malas: [
      { id: 'romero',      razon: 'Compiten por los mismos polinizadores y pueden inhibirse mutuamente.' }
    ]
  },

  perejil: {
    buenas: [
      { id: 'tomate',      razon: 'El perejil atrae insectos beneficiosos que controlan plagas del tomate.' },
      { id: 'zanahoria',   razon: 'El perejil atrae depredadores naturales de la mosca de la zanahoria.' },
      { id: 'fresa',       razon: 'Repele babosas y atrae polinizadores para las flores de fresa.' }
    ],
    malas: [
      { id: 'lechuga',     razon: 'En macetas muy pequeñas, el perejil puede inhibir el crecimiento de la lechuga.' }
    ]
  },

  romero: {
    buenas: [
      { id: 'brocoli',     razon: 'El romero ahuyenta la mosca de la col con su fuerte olor.' },
      { id: 'zanahoria',   razon: 'Repele la mosca de la zanahoria de forma muy efectiva.' },
      { id: 'fresa',       razon: 'El romero actúa como repelente general en el huerto.' }
    ],
    malas: [
      { id: 'albahaca',    razon: 'Compiten por polinizadores y pueden inhibirse mutuamente en espacios pequeños.' },
      { id: 'pepino',      razon: 'El romero puede inhibir el crecimiento del pepino.' }
    ]
  },

  tomillo: {
    buenas: [
      { id: 'brocoli',     razon: 'Repele la mariposa blanca de la col, que pone sus huevos en el brócoli.' },
      { id: 'berenjena',   razon: 'El tomillo ahuyenta mosca blanca y araña roja del entorno.' },
      { id: 'fresa',       razon: 'Atrae abejas para polinizar y repele insectos dañinos.' },
      { id: 'calabacin',   razon: 'El tomillo actúa como repelente general y atrae polinizadores.' }
    ],
    malas: []
  },

  menta: {
    buenas: [
      { id: 'calabacin',   razon: 'La menta ahuyenta hormigas y pulgones. Planta siempre en maceta separada.' },
      { id: 'tomate',      razon: 'Repele pulgones y mosca blanca. Recuerda: siempre en maceta propia.' },
      { id: 'arandano',    razon: 'Ambas toleran algo de acidez y la menta repele trips del arándano.' }
    ],
    malas: []
  },

  oregano: {
    buenas: [
      { id: 'tomate',      razon: 'El orégano repele pulgones y atrae polinizadores; combinación de cocina perfecta.' },
      { id: 'pimiento',    razon: 'Atrae insectos beneficiosos y repele plagas del pimiento.' },
      { id: 'calabacin',   razon: 'El orégano atrae polinizadores esenciales para la fructificación del calabacín.' }
    ],
    malas: []
  }

};

/* Devuelve las plants compatibles entre sí de una lista (para el planificador) */
function getPuntajeCompatibilidad(plantasIds) {
  let positivos = 0, negativos = 0;
  const conflictos = [];
  const sinergias  = [];

  for (let i = 0; i < plantasIds.length; i++) {
    for (let j = i + 1; j < plantasIds.length; j++) {
      const a = plantasIds[i], b = plantasIds[j];
      const compA = COMPATIBILIDAD[a];
      const compB = COMPATIBILIDAD[b];
      if (!compA || !compB) continue;

      const buenaAB = compA.buenas?.some(x => x.id === b);
      const buenaBA = compB.buenas?.some(x => x.id === a);
      const malaAB  = compA.malas?.some(x => x.id === b);
      const malaBA  = compB.malas?.some(x => x.id === a);

      if (buenaAB || buenaBA) {
        positivos++;
        const razon = compA.buenas?.find(x => x.id === b)?.razon
                   || compB.buenas?.find(x => x.id === a)?.razon;
        sinergias.push({ a: PLANTAS[a]?.nombre, b: PLANTAS[b]?.nombre, razon });
      }
      if (malaAB || malaBA) {
        negativos++;
        const razon = compA.malas?.find(x => x.id === b)?.razon
                   || compB.malas?.find(x => x.id === a)?.razon;
        conflictos.push({ a: PLANTAS[a]?.nombre, b: PLANTAS[b]?.nombre, razon });
      }
    }
  }
  return { positivos, negativos, sinergias, conflictos };
}

/* ============================================================
   HUERTOS PREDEFINIDOS
   ============================================================ */
const HUERTOS_PREDEFINIDOS = [
  {
    id: 'balcon_mini',
    nombre: 'Balcón mínimo',
    m2_min: 0.5,
    m2_max: 1.5,
    tipo: 'balcon',
    plantas: ['tomate_cherry', 'albahaca', 'perejil'],
    descripcion: 'El kit de inicio perfecto para un balcón pequeño. El tomate cherry da frutos abundantes en poco espacio, la albahaca lo protege de plagas y juntos te dan los ingredientes básicos para una buena pasta o pizza casera. Solo necesitas 3 macetas.',
    beneficios: ['Frutos desde junio hasta octubre', 'La albahaca protege el tomate sin pesticidas', 'Ingredientes frescos para cocinar a diario', 'Mínimo mantenimiento (riego en días alternos)']
  },
  {
    id: 'balcon_familiar',
    nombre: 'Balcón familiar',
    m2_min: 2,
    m2_max: 4,
    tipo: 'balcon',
    plantas: ['tomate', 'pimiento', 'albahaca', 'lechuga', 'radano'],
    descripcion: 'Con 2-4 m² puedes cubrir las verduras de una familia de 2 personas durante el verano. El tomate y el pimiento dan el volumen, la lechuga y el rábano ofrecen cosechas rápidas mientras esperas los frutos grandes, y la albahaca protege toda la combinación.',
    beneficios: ['Cosecha escalonada: rábanos en 25 días, lechuga en 45, tomates en 90', 'La albahaca protege tomate y pimiento de forma natural', 'Ahorro estimado de 30-50€/mes en temporada alta', 'Fácil de gestionar: 15 minutos al día']
  },
  {
    id: 'terraza_verano',
    nombre: 'Terraza de verano',
    m2_min: 4,
    m2_max: 8,
    tipo: 'terraza',
    plantas: ['tomate', 'pepino', 'calabacin', 'albahaca', 'lechuga', 'cebolla'],
    descripcion: 'El huerto de verano completo para una terraza. El calabacín y el pepino son los más productivos por metro cuadrado; con una sola planta de cada uno tendrás producción continua. La lechuga y la cebolla llenan los huecos y la albahaca mantiene las plagas a raya.',
    beneficios: ['Un calabacín produce durante 3-4 meses sin parar', 'El pepino da cosechas semanales abundantes', 'La cebolla protege el entorno de plagas generales', 'Combinación de temporada alta: máxima producción en verano']
  },
  {
    id: 'todo_el_ano',
    nombre: 'Huerto 4 estaciones',
    m2_min: 5,
    m2_max: 10,
    tipo: 'terraza',
    plantas: ['tomate_cherry', 'lechuga', 'espinaca', 'zanahoria', 'ajo', 'fresa', 'perejil'],
    descripcion: 'Diseñado para cosechar durante todo el año. Las fresas producen en primavera y otoño, el tomate cherry en verano, la lechuga y espinaca en otoño e invierno, y el ajo y zanahoria en primavera. El ajo protege la fresa del moho gris y las zanahorias airean el suelo para todos.',
    beneficios: ['Cosecha los 12 meses del año', 'El ajo protege fresas y tomates de forma natural', 'Zanahoria + lechuga aprovechan el suelo en capas distintas', 'Ideal para aprender a gestionar la temporada completa']
  },
  {
    id: 'aromaticas_balcon',
    nombre: 'Jardín de aromáticas',
    m2_min: 0.5,
    m2_max: 2,
    tipo: 'balcon',
    plantas: ['albahaca', 'perejil', 'tomillo', 'romero', 'oregano'],
    descripcion: 'El huerto más fácil y útil para quien empieza. Cinco hierbas aromáticas que se usan a diario en la cocina y requieren mínimo mantenimiento. El romero y el tomillo son perennes, es decir, los plantas una vez y duran años. Ideal para ventanas y balcones pequeños con sol.',
    beneficios: ['Ahorro real en hierbas frescas (3-5€/semana)', 'Romero y tomillo son perennes: plántalos una vez', 'Mínima agua: todas aguantan la sequía', 'Repelen insectos en el balcón de forma natural']
  },
  {
    id: 'huerto_principiante',
    nombre: 'Huerto del principiante',
    m2_min: 1,
    m2_max: 3,
    tipo: 'balcon',
    plantas: ['tomate_cherry', 'lechuga', 'radano', 'albahaca'],
    descripcion: 'Cuatro plantas infalibles para quien nunca ha cultivado nada. El rábano estará listo en 25 días (verás resultados rápido), la lechuga en 6 semanas, y el tomate cherry en verano. La albahaca protege todo el conjunto. Una combinación pensada para motivar y no decepcionar.',
    beneficios: ['Primer resultado en solo 25 días (rábanos)', 'Todas son fáciles o muy fáciles de cultivar', 'Bajo riesgo de fracaso para el principiante', 'La albahaca protege las otras plantas naturalmente']
  },
  {
    id: 'jardin_basico',
    nombre: 'Huerto familiar básico',
    m2_min: 5,
    tipo: 'jardin',
    plantas: ['tomate', 'pimiento', 'lechuga', 'zanahoria', 'cebolla', 'perejil'],
    descripcion: 'Frutos, hojas y raíces que cubren las verduras de temporada para una familia. El tomate y el pimiento dan el volumen de verano, la lechuga y zanahoria se cogen escalonadas, la cebolla y el perejil protegen el conjunto de plagas.',
    beneficios: ['Producción continua de primavera a otoño', 'Cebolla y perejil protegen el entorno naturalmente', 'Combinación probada para huertos en tierra de 5-15 m²', 'Cosecha escalonada: lechugas y zanahorias mientras esperan los tomates']
  },
  {
    id: 'jardin_verano',
    nombre: 'Huerto de verano en tierra',
    m2_min: 10,
    tipo: 'jardin',
    plantas: ['tomate', 'pimiento', 'pepino', 'calabacin', 'albahaca', 'ajo'],
    descripcion: 'El huerto de verano clásico en tierra: máxima producción de frutos con protección natural. Un solo calabacín produce durante 3-4 meses seguidos; el pepino da cosechas semanales. El ajo y la albahaca mantienen las plagas a raya sin pesticidas.',
    beneficios: ['Producción de frutos durante todo el verano', 'Ajo y albahaca como protección natural sin productos químicos', 'Calabacín y pepino: los más productivos por m² de huerto', 'Ideal para huertos de 10-25 m²']
  },
  {
    id: 'jardin_cuatro_estaciones',
    nombre: 'Huerto 4 estaciones en tierra',
    m2_min: 20,
    tipo: 'jardin',
    plantas: ['tomate', 'pimiento', 'lechuga', 'espinaca', 'zanahoria', 'cebolla', 'ajo', 'perejil'],
    descripcion: 'El huerto completo para cosechar todo el año: frutos de verano, hojas en otoño e invierno, raíces y bulbos en primavera. El ajo protege fresas y tomates, las espinacas y lechugas ocupan el espacio en los meses fríos que los frutos dejan vacío.',
    beneficios: ['Cosecha los 12 meses sin dejar tierra vacía', 'Ajo y cebolla protegen el conjunto de plagas y hongos', 'Rotación natural de cultivos incorporada al diseño', 'Para huertos de 20 m² o más con experiencia media']
  }
];
