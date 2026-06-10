/* HortelanoUrbano.es — Base de datos de plagas y enfermedades */

const PLAGAS = {

  pulgon: {
    nombre: 'Pulgón',
    tipo: 'insecto',
    icono: 'PU',
    descripcion: 'Insecto de 1-3 mm que forma colonias densas en brotes tiernos, tallos y envés de hojas. Hay cientos de especies; las más comunes en huertos son el pulgón verde, negro y lanígero.',
    sintomas: [
      'Colonias de insectos pequeños (verdes, negros o marrones) en brotes y envés de hojas',
      'Hojas enrolladas, arrugadas o amarillentas',
      'Presencia de melaza (líquido pegajoso brillante) sobre las hojas',
      'Hormigas que suben y bajan por el tallo (las pastorean por la melaza)',
      'Deformación de brotes y flores'
    ],
    plantas_afectadas: ['tomate','pimiento','berenjena','calabacin','pepino','lechuga','espinaca','acelga','judia_verde','guisante','fresa','tomate_cherry','albahaca'],
    tratamiento_ecologico: [
      { producto: 'Jabón potásico', uso: 'Diluir 2% en agua y pulverizar directamente sobre las colonias. Cubrir bien el envés de las hojas. Repetir cada 5-7 días.' },
      { producto: 'Aceite de neem', uso: 'Diluir 0,5% en agua con unas gotas de jabón como emulsionante. Pulverizar al atardecer. Muy efectivo como preventivo.' },
      { producto: 'Agua a presión', uso: 'Chorro de agua a presión para derribar las colonias. Útil como primer paso antes de aplicar jabón.' },
      { producto: 'Plantas repelentes', uso: 'Plantar albahaca, menta o lavanda cerca ahuyenta los pulgones de forma preventiva.' }
    ],
    tratamiento_quimico: 'Imidacloprid o pirimicarb en caso de infestación severa. Usar como último recurso, siempre con el tiempo de espera indicado.',
    prevencion: [
      'Revisar el envés de las hojas una vez a la semana',
      'Plantar albahaca o menta cerca como repelente natural',
      'Favorecer la presencia de mariquitas (sus principales depredadores)',
      'Evitar exceso de abono nitrogenado que favorece los brotes tiernos'
    ],
    amazon: [
      { nombre: 'Jabón potásico concentrado 1L', desc: 'Elimina pulgón, mosca blanca y araña roja por contacto. Ecológico.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Insecticida y fungicida ecológico de amplio espectro.' },
      { nombre: 'Pulverizador de mochila 1,5L', desc: 'Para aplicar tratamientos con cobertura uniforme.' },
      { nombre: 'Trampas amarillas adhesivas 10 ud', desc: 'Captura pulgones alados y otros insectos voladores.' },
      { nombre: 'Pirimicarb insecticida sistémico', desc: 'Específico para pulgón. Actúa desde dentro de la planta.' },
      { nombre: 'Crisopas contra pulgón (depredador)', desc: 'Control biológico: larvas que devoran colonias de pulgón.' },
      { nombre: 'Tierra de diatomeas 500g', desc: 'Barrera física ecológica contra insectos rastreros.' }
    ]
  },

  mosca_blanca: {
    nombre: 'Mosca blanca',
    tipo: 'insecto',
    icono: 'MB',
    descripcion: 'Pequeño insecto blanco de 1-2 mm que forma nubes al agitar la planta. Las larvas se fijan en el envés de las hojas y chupan la savia. Muy resistente si no se trata a tiempo.',
    sintomas: [
      'Nube de moscas blancas al agitar la planta',
      'Larvas blancas o amarillentas fijadas en el envés',
      'Melaza pegajosa que puede derivar en negrilla (hongo negro)',
      'Hojas amarillentas y debilitadas',
      'Reducción notable del vigor de la planta'
    ],
    plantas_afectadas: ['tomate','pimiento','berenjena','pepino','calabacin','tomate_cherry','albahaca'],
    tratamiento_ecologico: [
      { producto: 'Jabón potásico', uso: 'Pulverizar sobre el envés de las hojas cubriendo bien. Repetir cada 4-5 días durante 3 semanas.' },
      { producto: 'Aceite de neem', uso: 'Muy efectivo contra larvas. Pulverizar al atardecer para evitar quemaduras.' },
      { producto: 'Trampas cromotrópicas amarillas', uso: 'Colocar trampas pegajosas amarillas cerca de las plantas para capturar adultos.' },
      { producto: 'Verticillium lecanii', uso: 'Hongo entomopatógeno que ataca a la mosca blanca. Muy efectivo en invernadero.' }
    ],
    tratamiento_quimico: 'Spirotetramat o acetamiprid en infestaciones graves. Rotar productos para evitar resistencias.',
    prevencion: [
      'Colocar trampas amarillas preventivas al inicio de la temporada',
      'Revisar las plantas trasplantadas antes de introducirlas en el huerto',
      'Plantar albahaca como repelente',
      'Eliminar malas hierbas que pueden servir de reservorio'
    ],
    amazon: [
      { nombre: 'Trampas amarillas adhesivas 10 ud', desc: 'Captura mosca blanca adulta, trips y minador.' },
      { nombre: 'Jabón potásico concentrado 1L', desc: 'Insecticida de contacto. Mata larvas en el envés.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Muy eficaz contra larvas fijadas en el envés.' },
      { nombre: 'Spinosad insecticida ecológico 250ml', desc: 'Autorizado en agricultura ecológica. Alta eficacia.' },
      { nombre: 'Pulverizador eléctrico recargable', desc: 'Para cubrir bien el envés donde se esconde la mosca blanca.' },
      { nombre: 'Malla antiinsectos 50 mesh', desc: 'Protección física para evitar que los adultos lleguen a las plantas.' },
      { nombre: 'Verticillium lecanii (hongo entomopatógeno)', desc: 'Control biológico específico contra mosca blanca.' }
    ]
  },

  arana_roja: {
    nombre: 'Araña roja',
    tipo: 'acaro',
    icono: 'AR',
    descripcion: 'Ácaro de 0,3-0,5 mm prácticamente invisible a simple vista. Se multiplica explosivamente en condiciones de calor y sequedad. Forma telarañas en el envés de las hojas al avanzar la infestación.',
    sintomas: [
      'Puntitos amarillos o bronceados en el haz de las hojas (picaduras)',
      'Telarañas finas en el envés y entre hojas (infestación avanzada)',
      'Hojas con aspecto polvoriento, plateado o broncíneo',
      'Defoliación progresiva de abajo arriba',
      'Planta muy debilitada en pocas semanas si no se actúa'
    ],
    plantas_afectadas: ['tomate','pimiento','berenjena','pepino','calabacin','fresa','tomate_cherry'],
    tratamiento_ecologico: [
      { producto: 'Jabón potásico', uso: 'Pulverizar con especial atención al envés. La araña roja odia la humedad; repetir cada 3 días.' },
      { producto: 'Aceite de neem', uso: 'Muy efectivo. Aumentar la humedad ambiental al mismo tiempo.' },
      { producto: 'Azufre mojable', uso: 'Pulverización preventiva y curativa. No aplicar con calor extremo (>35°C).' },
      { producto: 'Phytoseiulus persimilis', uso: 'Ácaro depredador específico de araña roja. Muy efectivo en balcones y terrazas.' }
    ],
    tratamiento_quimico: 'Abamectina o bifenazato en infestaciones graves. La araña roja desarrolla resistencias rápidamente; rotar productos.',
    prevencion: [
      'Mantener humedad ambiental alta en verano (vaporizando agua)',
      'Revisar el envés de las hojas especialmente en julio y agosto',
      'Evitar el estrés hídrico de las plantas (riego regular)',
      'Eliminar restos de plantas infectadas al final de la temporada'
    ],
    amazon: [
      { nombre: 'Azufre mojable acaricida 500g', desc: 'El tratamiento más eficaz contra araña roja. Acaricida y fungicida.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Eficaz contra ácaros. Aumentar humedad al aplicar.' },
      { nombre: 'Jabón potásico concentrado 1L', desc: 'Acaricida de contacto, cubrir bien el envés.' },
      { nombre: 'Abamectina acaricida 100ml', desc: 'Para infestaciones graves con resistencia a otros productos.' },
      { nombre: 'Phytoseiulus persimilis (ácaro depredador)', desc: 'Control biológico: el mejor método para balcones y terrazas.' },
      { nombre: 'Pulverizador presión 1,5L con lanza', desc: 'Indispensable para llegar al envés de las hojas.' },
      { nombre: 'Termohigrómetro digital', desc: 'Monitoriza humedad y temperatura. La araña roja explota con calor y sequedad.' }
    ]
  },

  oidio: {
    nombre: 'Oídio (Ceniza)',
    tipo: 'hongo',
    icono: 'OI',
    descripcion: 'Hongo que forma un polvo blanco harinoso sobre las hojas. Favorecido por temperaturas suaves (15-25°C) y humedad ambiental alta, aunque paradójicamente también aparece con riego insuficiente.',
    sintomas: [
      'Polvo blanco harinoso sobre el haz de las hojas',
      'Las manchas se expanden hasta cubrir toda la hoja',
      'Hojas que se amarillean y secan bajo el polvillo',
      'Los brotes tiernos se deforman',
      'Avance rápido en tiempo húmedo y cálido'
    ],
    plantas_afectadas: ['calabacin','pepino','berenjena','tomate','fresa','guisante'],
    tratamiento_ecologico: [
      { producto: 'Bicarbonato sódico', uso: 'Disolver 1 cucharadita en 1L de agua con unas gotas de jabón. Pulverizar en las zonas afectadas cada 5 días.' },
      { producto: 'Azufre mojable', uso: 'El tratamiento más efectivo. Pulverizar preventivamente desde el inicio de la temporada.' },
      { producto: 'Leche diluida', uso: 'Mezcla 1:9 de leche y agua. Pulverizar en el haz. Eficacia demostrada contra oídio.' },
      { producto: 'Aceite de neem', uso: 'Eficaz como preventivo. Aplicar al inicio de la temporada y cada 15 días.' }
    ],
    tratamiento_quimico: 'Miclobutanil o tebuconazol en infestaciones graves o recurrentes.',
    prevencion: [
      'No mojar las hojas al regar (regar en la base)',
      'Asegurar buena ventilación entre plantas',
      'Eliminar hojas afectadas inmediatamente (no compostar)',
      'Tratar preventivamente con azufre al inicio de la temporada'
    ],
    amazon: [
      { nombre: 'Azufre mojable fungicida 500g', desc: 'El tratamiento de referencia contra oídio. Preventivo y curativo.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Fungicida e insecticida preventivo ecológico.' },
      { nombre: 'Fungicida cobre ecológico 500ml', desc: 'Para oídio, mildiu y enfermedades fúngicas en general.' },
      { nombre: 'Bicarbonato sódico alimentario 1kg', desc: 'Solución casera: 1 cucharadita/L de agua. Funciona contra oídio.' },
      { nombre: 'Propineb fungicida sistémico', desc: 'Para oídio resistente a tratamientos básicos.' },
      { nombre: 'Pulverizador eléctrico recargable', desc: 'Cobertura uniforme en todas las superficies de la planta.' },
      { nombre: 'Extracto de ajo concentrado 250ml', desc: 'Antifúngico e insecticida natural preventivo.' }
    ]
  },

  mildiu: {
    nombre: 'Mildiu',
    tipo: 'hongo',
    icono: 'MI',
    descripcion: 'Enfermedad fúngica que ataca especialmente al tomate en condiciones de humedad alta y noches frescas. Muy destructiva si no se detecta a tiempo; puede arrasar una planta en pocos días.',
    sintomas: [
      'Manchas amarillo-verdosas en el haz de las hojas',
      'Pelusilla blanca-violácea en el envés (el signo más característico)',
      'Las manchas se vuelven marrones y la hoja muere',
      'Avance rápido de abajo arriba',
      'En tomates, también ataca tallos y frutos (manchas marrones)'
    ],
    plantas_afectadas: ['tomate','tomate_cherry','pimiento','pepino','calabacin'],
    tratamiento_ecologico: [
      { producto: 'Caldo bordelés (cobre)', uso: 'El tratamiento clásico. Aplicar de forma preventiva y al detectar los primeros síntomas. Repetir cada 10-15 días.' },
      { producto: 'Oxicloruro de cobre', uso: 'Más estable que el caldo bordelés. Eficaz como preventivo y curativo.' },
      { producto: 'Cola de caballo', uso: 'Infusión concentrada pulverizada sobre las hojas. Refuerza las defensas de la planta.' }
    ],
    tratamiento_quimico: 'Metalaxil + mancozeb en infestaciones graves. Respetar los plazos de seguridad.',
    prevencion: [
      'Tratamientos preventivos con cobre cada 15 días en temporada húmeda',
      'Regar por goteo o en la base, nunca mojar las hojas',
      'Asegurar buena ventilación y espacio entre plantas',
      'Evitar los riegos por la tarde (las noches húmedas favorecen el hongo)'
    ],
    amazon: [
      { nombre: 'Caldo bordelés polvo 500g', desc: 'El tratamiento clásico y más efectivo contra mildiu.' },
      { nombre: 'Oxicloruro de cobre 500g', desc: 'Más estable que el caldo bordelés. Preventivo y curativo.' },
      { nombre: 'Fungicida cobre ecológico líquido 500ml', desc: 'Fácil de aplicar. Para mildiu y enfermedades fúngicas.' },
      { nombre: 'Cola de caballo extracto concentrado 500ml', desc: 'Refuerza las defensas naturales de la planta.' },
      { nombre: 'Metalaxil fungicida sistémico', desc: 'Para mildiu resistente a tratamientos con cobre.' },
      { nombre: 'Gotero por planta (kit 20 ud)', desc: 'Riega en la base sin mojar hojas: la mejor prevención del mildiu.' },
      { nombre: 'Malla de sombreo/lluvia 2x5m', desc: 'Reduce salpicaduras en lluvia que dispersan las esporas.' }
    ]
  },

  babosas: {
    nombre: 'Babosas y caracoles',
    tipo: 'molusco',
    icono: 'BA',
    descripcion: 'Los moluscos más comunes en huertos urbanos. Activos de noche y en días húmedos. Especialmente dañinos en plantas tiernas, lechugas y fresas. Pueden arrasar un semillero en una noche.',
    sintomas: [
      'Agujeros irregulares en hojas, especialmente en los bordes',
      'Rastro de baba plateada sobre las hojas y el suelo',
      'Daños concentrados en plantas a nivel del suelo',
      'Mayor actividad visible de noche o al amanecer',
      'Plántulas jóvenes completamente devoradas'
    ],
    plantas_afectadas: ['lechuga','espinaca','acelga','fresa','brocoli','guisante','radano'],
    tratamiento_ecologico: [
      { producto: 'Ferramol (fosfato férrico)', uso: 'Gránulos que se esparcen alrededor de las plantas. Apto para huertos ecológicos, inocuo para mascotas y fauna.' },
      { producto: 'Trampa de cerveza', uso: 'Enterrar un recipiente a ras del suelo y llenarlo de cerveza. Atrae y ahoga a las babosas. Vaciar cada 2 días.' },
      { producto: 'Cáscara de huevo o arena', uso: 'Crear una barrera de material áspero alrededor de las plantas. Dificulta el avance de babosas.' },
      { producto: 'Recogida manual nocturna', uso: 'Con linterna, recoger babosas a mano tras el anochecer. Efectivo en infestaciones moderadas.' }
    ],
    tratamiento_quimico: 'Metaldehído en gránulos. Atención: es tóxico para mascotas y fauna silvestre. Usar solo en casos extremos.',
    prevencion: [
      'Recoger manualmente las babosas de noche, especialmente en primavera',
      'Planta ajo o lavanda alrededor del huerto como barrera',
      'Eliminar escombros y escondites cerca del huerto',
      'Regar por la mañana para que el suelo esté seco por la noche'
    ],
    amazon: [
      { nombre: 'Ferramol antibabosas ecológico 1kg', desc: 'Fosfato férrico. Seguro para mascotas, fauna y huertos ecológicos.' },
      { nombre: 'Trampa babosas cebo profesional', desc: 'Trampa reutilizable con atrayente. Sin químicos.' },
      { nombre: 'Cinta adhesiva de cobre anti-babosas', desc: 'Barrera física que repele babosas con efecto eléctrico leve.' },
      { nombre: 'Tierra de diatomeas 500g', desc: 'Barrera en polvo efectiva. Irrita y deshidrata a los moluscos.' },
      { nombre: 'Metaldehído gránulos babosas', desc: 'Para casos extremos. Muy eficaz pero tóxico: sin mascotas cerca.' },
      { nombre: 'Malla de protección plantas 1x2m', desc: 'Protege plántulas tiernas que las babosas arrasan en una noche.' },
      { nombre: 'Linterna frontal de manos libres', desc: 'Para las recolecciones manuales nocturnas. Imprescindible.' }
    ]
  },

  trips: {
    nombre: 'Trips',
    tipo: 'insecto',
    icono: 'TR',
    descripcion: 'Insectos de 1-2 mm que raspan la superficie de las hojas y flores. Difíciles de ver a simple vista. Además de daño directo, pueden transmitir virus muy dañinos como el TSWV (bronceado del tomate).',
    sintomas: [
      'Plateado o bronceado en el haz de las hojas (raspado de la epidermis)',
      'Puntos oscuros de excremento sobre las hojas (muy característico)',
      'Flores deformadas o con manchas',
      'Frutos con cicatrices corchosas',
      'Deformación de brotes tiernos'
    ],
    plantas_afectadas: ['tomate','pimiento','pepino','cebolla','puerro','tomate_cherry'],
    tratamiento_ecologico: [
      { producto: 'Aceite de neem', uso: 'Muy eficaz. Pulverizar especialmente en las flores y brotes donde se concentran.' },
      { producto: 'Jabón potásico', uso: 'Aplicar cubriendo bien toda la planta incluidas flores. Repetir cada 5 días.' },
      { producto: 'Trampas azules adhesivas', uso: 'Los trips se sienten atraídos por el azul. Colocar trampas preventivas desde el inicio.' },
      { producto: 'Amblyseius cucumeris', uso: 'Ácaro depredador específico de trips. Muy eficaz en espacios cerrados.' }
    ],
    tratamiento_quimico: 'Spinosad (ecológico autorizado) o imidacloprid en infestaciones graves.',
    prevencion: [
      'Colocar trampas azules adhesivas desde el inicio de la temporada',
      'Inspeccionar flores regularmente (ahí se concentran los trips)',
      'Eliminar restos de cultivo al final de la temporada',
      'Mantener el huerto libre de malas hierbas que actúan de reservorio'
    ],
    amazon: [
      { nombre: 'Trampas azules adhesivas 10 ud', desc: 'Los trips se sienten atraídos por el azul. Captura preventiva.' },
      { nombre: 'Spinosad insecticida ecológico 250ml', desc: 'El más eficaz contra trips. Autorizado en agricultura ecológica.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Preventivo e insecticida de amplio espectro.' },
      { nombre: 'Jabón potásico 1L', desc: 'Cubrir flores y brotes donde se concentran los trips.' },
      { nombre: 'Amblyseius cucumeris (ácaro depredador)', desc: 'Control biológico específico para trips. Ideal en terrazas cerradas.' },
      { nombre: 'Lupa de jardinería 10x', desc: 'Para detectar trips (1-2mm) antes de que la infestación explote.' },
      { nombre: 'Pulverizador fino 1L', desc: 'Para llegar a flores y brotes donde los trips se esconden.' }
    ]
  },

  botrytis: {
    nombre: 'Botrytis (Moho gris)',
    tipo: 'hongo',
    icono: 'BO',
    descripcion: 'Hongo que ataca sobre todo fresas, lechugas y tomates en condiciones de alta humedad. Forma un moho gris esponjoso muy característico. Muy contagioso; las esporas se transportan por el aire.',
    sintomas: [
      'Moho gris esponjoso sobre flores, frutos y hojas',
      'Partes afectadas se ablandan y pudren rápidamente',
      'Manchas marrones que se cubren de polvo gris al tocarlas',
      'Frutos de fresa que se pudren antes de madurar',
      'Tallos con lesiones marrones que rodean el tallo'
    ],
    plantas_afectadas: ['fresa','lechuga','tomate','tomate_cherry','pepino','guisante'],
    tratamiento_ecologico: [
      { producto: 'Caldo bordelés', uso: 'Aplicar en cuanto se detecten los primeros síntomas y preventivamente en temporadas húmedas.' },
      { producto: 'Bicarbonato sódico', uso: 'Pulverizar sobre partes afectadas. Eliminar previamente el tejido afectado.' },
      { producto: 'Eliminar tejido infectado', uso: 'Retirar y destruir (no compostar) todas las partes afectadas inmediatamente.' }
    ],
    tratamiento_quimico: 'Iprodione o fludioxonil en infestaciones graves o recurrentes.',
    prevencion: [
      'Plantar ajo cerca de las fresas (prevención muy eficaz)',
      'Evitar mojar las flores y frutos al regar',
      'Asegurar buena circulación de aire entre plantas',
      'Eliminar frutos enfermos inmediatamente para evitar contagio'
    ],
    amazon: [
      { nombre: 'Caldo bordelés polvo 500g', desc: 'Preventivo y curativo de referencia para botrytis.' },
      { nombre: 'Iprodione fungicida sistémico', desc: 'Para botrytis grave o recurrente. Alta eficacia.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Fungicida preventivo. Aplicar al inicio de la temporada.' },
      { nombre: 'Fludioxonil fungicida contacto', desc: 'Para proteger fresas y tomates en momentos de riesgo.' },
      { nombre: 'Regadera con pitorro fino 5L', desc: 'Regar en la base sin mojar flores y frutos previene el botrytis.' },
      { nombre: 'Malla anti-lluvia/sombreo para plantas', desc: 'Reduce la humedad sobre los frutos que activa el hongo.' },
      { nombre: 'Tijera de poda desinfectable', desc: 'Para eliminar partes infectadas sin contaminar el resto de la planta.' }
    ]
  },

  minador: {
    nombre: 'Minador de hojas',
    tipo: 'insecto',
    icono: 'MN',
    descripcion: 'Larva de mosca (Liriomyza sp.) que excava galerías sinuosas dentro del tejido de las hojas. El daño es principalmente estético pero en infestaciones graves debilita mucho la planta.',
    sintomas: [
      'Galerías sinuosas o serpenteantes de color blanco-amarillento en las hojas',
      'Las galerías son el signo más característico e inconfundible',
      'Puntos blancos en el haz (picaduras de oviposición)',
      'Hojas con aspecto deteriorado y reducción fotosintética',
      'Más frecuente en tomate, pepino y apio'
    ],
    plantas_afectadas: ['tomate','tomate_cherry','pepino','pimiento','espinaca','acelga'],
    tratamiento_ecologico: [
      { producto: 'Aceite de neem', uso: 'Aplicar preventivamente; las larvas dentro de la hoja son difíciles de alcanzar una vez instaladas.' },
      { producto: 'Trampas amarillas', uso: 'Capturan los adultos antes de que pongan huevos.' },
      { producto: 'Eliminar hojas afectadas', uso: 'Retirar y destruir hojas con galerías para cortar el ciclo.' },
      { producto: 'Diglyphus isaea', uso: 'Insecto parasitoide específico del minador. Muy efectivo en invernadero y terraza.' }
    ],
    tratamiento_quimico: 'Ciromacina o abamectina. Difícil de tratar químicamente por la protección de la hoja.',
    prevencion: [
      'Colocar trampas amarillas desde el inicio de la temporada',
      'Inspeccionar regularmente el haz de las hojas',
      'Eliminar rápidamente las hojas con galerías',
      'Rotación de cultivos para romper el ciclo'
    ],
    amazon: [
      { nombre: 'Trampas amarillas adhesivas 10 ud', desc: 'Captura adultos de minador, mosca blanca y trips.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Preventivo: actúa sobre los huevos y larvas jóvenes.' },
      { nombre: 'Abamectina insecticida sistémico', desc: 'Para minador instalado. Penetra en el tejido de la hoja.' },
      { nombre: 'Spinosad ecológico 250ml', desc: 'Alternativa ecológica eficaz contra las larvas de minador.' },
      { nombre: 'Diglyphus isaea (parasitoide)', desc: 'Control biológico específico para minador. Muy eficaz en terraza.' },
      { nombre: 'Malla antiinsectos fina 50 mesh', desc: 'Impide que los adultos lleguen a poner huevos en las hojas.' },
      { nombre: 'Tijera de poda mini con funda', desc: 'Para eliminar y destruir hojas con galerías activas.' }
    ]
  },

  escarabajo_colorado: {
    nombre: 'Escarabajo de Colorado',
    tipo: 'insecto',
    icono: 'EC',
    descripcion: 'Escarabajo de rayas amarillas y negras de 1 cm que ataca exclusivamente a las solanáceas (tomate, pimiento, patata, berenjena). Tanto el adulto como las larvas devoran las hojas. Puede arrasar una planta en días.',
    sintomas: [
      'Hojas completamente devoradas (solo quedan los nervios)',
      'Presencia de escarabajos adultos de rayas amarillas y negras',
      'Larvas rojas-anaranjadas con puntos negros en el envés',
      'Puestas de huevos amarillos-anaranjados en el envés de las hojas',
      'Daño muy rápido y visible'
    ],
    plantas_afectadas: ['tomate','pimiento','berenjena','tomate_cherry'],
    tratamiento_ecologico: [
      { producto: 'Recogida manual', uso: 'Recoger adultos, larvas y puestas a mano. Sumergir en agua con jabón. Muy efectivo con revisiones diarias.' },
      { producto: 'Bacillus thuringiensis var. tenebrionis', uso: 'Bacteria específica contra las larvas jóvenes. Aplicar cuando se detecten las primeras larvas.' },
      { producto: 'Aceite de neem', uso: 'Repelente y larvicida. Aplicar preventivamente al inicio de la temporada.' }
    ],
    tratamiento_quimico: 'Imidacloprid o deltametrina en infestaciones graves. El escarabajo Colorado desarrolla resistencias muy rápido.',
    prevencion: [
      'Revisar el envés de las hojas a diario en mayo-junio',
      'Cubrir las plantas con malla antiinsectos al inicio de la temporada',
      'Plantar berenjena como planta trampa (le atrae más que el tomate)',
      'Rotación de cultivos: no plantar solanáceas en el mismo sitio cada año'
    ],
    amazon: [
      { nombre: 'Bacillus thuringiensis var. tenebrionis 250ml', desc: 'Bacteria ecológica específica contra larvas de escarabajo Colorado.' },
      { nombre: 'Malla antiinsectos 50 mesh 2x5m', desc: 'Protección física desde el trasplante. La mejor prevención.' },
      { nombre: 'Aceite de neem 250ml', desc: 'Repelente preventivo. Aplicar al inicio de la temporada en solanáceas.' },
      { nombre: 'Deltametrina insecticida 250ml', desc: 'Para infestaciones graves. Actúa rápido sobre adultos y larvas.' },
      { nombre: 'Guantes de jardinería con puntos de agarre', desc: 'Para la recogida manual de adultos y larvas.' },
      { nombre: 'Cubo con tapa hermética 5L', desc: 'Para depositar los insectos recolectados con agua y jabón.' },
      { nombre: 'Lupa 10x para jardín', desc: 'Para detectar puestas de huevos amarillos antes de que eclosionen.' }
    ]
  }

};

/* Mapa: planta → lista de plagas que la afectan */
const PLAGAS_POR_PLANTA = {};
Object.entries(PLAGAS).forEach(([id, p]) => {
  p.plantas_afectadas.forEach(planta => {
    if (!PLAGAS_POR_PLANTA[planta]) PLAGAS_POR_PLANTA[planta] = [];
    PLAGAS_POR_PLANTA[planta].push(id);
  });
});
