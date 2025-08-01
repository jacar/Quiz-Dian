export interface QuestionType {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  theme: string;
  type: 'general' | 'casuistica';
}

export const questions: QuestionType[] = [
  // TRIBUTARIO - 40 preguntas
  {
    id: 1,
    question: "¿Cuál es el plazo general para la prescripción de la acción de cobro de la administración?",
    options: [
      "3 años",
      "5 años",
      "6 años",
      "10 años"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "general"
  },
  {
    id: 2,
    question: "Una empresa presenta declaración de renta con patrimonio líquido de $800.000.000 y activos de $1.200.000.000. ¿Está obligada a llevar contabilidad?",
    options: [
      "No, porque no supera los límites",
      "Sí, por el patrimonio líquido",
      "Sí, por los activos totales",
      "Depende de los ingresos brutos"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 3,
    question: "¿Cuál es la tarifa del impuesto de renta para personas jurídicas en 2025?",
    options: [
      "30%",
      "32%",
      "35%",
      "33%"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "general"
  },
  {
    id: 4,
    question: "Un contribuyente vende un bien inmueble por $500.000.000 que había comprado por $300.000.000. ¿La ganancia ocasional está gravada?",
    options: [
      "No está gravada",
      "Sí, al 10%",
      "Sí, al 20%",
      "Depende del tiempo de tenencia"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 5,
    question: "¿Cuál es el valor de la UVT para el año gravable 2025?",
    options: [
      "$42.412",
      "$44.755",
      "$47.065",
      "$45.321"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "general"
  },
  {
    id: 6,
    question: "Una empresa de servicios factura $800.000.000 en el año. ¿Qué régimen de IVA debe aplicar?",
    options: [
      "Régimen común",
      "Régimen simplificado",
      "No responsable de IVA", 
      "Régimen especial"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 7,
    question: "¿Cuándo se causa el impuesto al consumo en restaurantes?",
    options: [
      "Al momento de la facturación",
      "Al momento del pago",
      "Al momento del consumo",
      "Al final del mes"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "general"
  },
  {
    id: 8,
    question: "Un trabajador independiente factura $4.000.000 mensuales. ¿Está obligado a declarar renta?",
    options: [
      "No, porque es trabajador independiente",
      "Sí, supera el tope de ingresos brutos",
      "Solo si tiene patrimonio superior a 4.500 UVT",
      "Depende de las consignaciones bancarias"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 9,
    question: "¿Cuál es la base mínima para el cálculo de la retención en la fuente por honorarios?",
    options: [
      "4 UVT",
      "10 UVT",
      "27 UVT",
      "No tiene base mínima"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "general"
  },
  {
    id: 10,
    question: "Una sociedad anónima distribuye dividendos por $100.000.000. ¿Cuál es el tratamiento tributario?",
    options: [
      "Exentos hasta 300 UVT por socio",
      "Gravados al 5% como ganancia ocasional",
      "Gravados al 7.5% como ganancia ocasional",
      "Exentos totalmente"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 11,
    question: "¿Cuál es el plazo para presentar la declaración de renta de personas naturales?",
    options: [
      "Agosto a octubre del año siguiente",
      "Marzo a junio del año siguiente",
      "Abril a agosto del año siguiente",
      "Febrero a junio del año siguiente"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 12,
    question: "Una empresa importa mercancías por USD $50.000. ¿Debe constituir garantía para diferir el pago de tributos aduaneros?",
    options: [
      "Sí, siempre",
      "No, está por debajo del mínimo",
      "Solo para el IVA",
      "Depende del país de origen"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 13,
    question: "¿Cuál es la tarifa del impuesto nacional al consumo para telefonía móvil?",
    options: [
      "4%",
      "8%",
      "16%",
      "19%"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 14,
    question: "Un contribuyente omite ingresos por $50.000.000 en su declaración. ¿Cuál es la sanción mínima?",
    options: [
      "20% del impuesto",
      "160% del mayor valor a pagar",
      "200% del mayor valor a pagar", 
      "100% del impuesto omitido"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 15,
    question: "¿Cuándo prescribe la facultad de la DIAN para determinar el impuesto?",
    options: [
      "2 años",
      "3 años",
      "5 años",
      "6 años"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "general"
  },
  {
    id: 16,
    question: "Una empresa presenta declaración sugerida y la acepta. Posteriormente encuentra errores. ¿Puede corregirla?",
    options: [
      "No, la declaración sugerida es definitiva",
      "Sí, dentro de los 2 años siguientes",
      "Solo si es a favor del contribuyente",
      "Sí, pero solo errores aritméticos"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 17,
    question: "¿Cuál es la tarifa de retención en la fuente para servicios prestados por personas naturales?",
    options: [
      "6%",
      "10%",
      "11%",
      "4%"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "general"
  },
  {
    id: 18,
    question: "Un contribuyente del régimen simple vende activos fijos por $200.000.000. ¿Debe declarar renta?",
    options: [
      "No, está en régimen simple",
      "Sí, por la ganancia ocasional",
      "Solo si supera otros topes",
      "Depende del tiempo de tenencia"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 19,
    question: "¿Cuál es el porcentaje mínimo de anticipo de renta para personas jurídicas?",
    options: [
      "75%",
      "100%",
      "25%",
      "50%"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 20,
    question: "Una empresa tiene pérdidas fiscales de $100.000.000 del año anterior. ¿Puede compensarlas?",
    options: [
      "Sí, sin límite de tiempo",
      "Sí, en los siguientes 12 años",
      "No, las pérdidas no se compensan",
      "Solo el 25% anual"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 21,
    question: "¿Cuál es la base gravable mínima del impuesto de renta para personas naturales?",
    options: [
      "1.340 UVT",
      "1.548 UVT", 
      "2.000 UVT",
      "No tiene mínima"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "general"
  },
  {
    id: 22,
    question: "Un extranjero no residente presta servicios en Colombia por 90 días. ¿Está obligado a declarar renta?",
    options: [
      "No, por no ser residente",
      "Sí, por prestar servicios en Colombia",
      "Solo si supera 1.400 UVT",
      "Depende del tipo de visa"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 23,
    question: "¿Cuál es la tarifa del gravamen a los movimientos financieros?",
    options: [
      "4 x 1000",
      "2 x 1000",
      "1 x 1000",
      "8 x 1000"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 24,
    question: "Una empresa constructora vende un proyecto habitacional. ¿Qué tarifa de IVA aplica?",
    options: [
      "19% sobre el valor total",
      "5% sobre el valor total",
      "Exenta de IVA",
      "19% solo sobre acabados"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 25,
    question: "¿Hasta cuándo puede la DIAN cobrar un impuesto determinado por ella?",
    options: [
      "3 años desde la notificación",
      "5 años desde la notificación",
      "10 años desde la causación",
      "6 años desde la ejecutoria"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "general"
  },
  {
    id: 26,
    question: "Un contribuyente solicita devolución de saldos a favor por $10.000.000. ¿Cuál es el plazo para resolver?",
    options: [
      "2 meses",
      "6 meses",
      "12 meses",
      "18 meses"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 27,
    question: "¿Cuál es la tarifa especial de renta para hoteles nuevos?",
    options: [
      "9% por 30 años",
      "15% por 20 años",
      "0% por 30 años",
      "No tienen tarifa especial"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 28,
    question: "Una sociedad por acciones simplificada tiene ingresos por $500.000.000. ¿Puede acogerse al régimen simple?",
    options: [
      "No, por su forma jurídica",
      "Sí, si cumple los demás requisitos",
      "Solo si tiene menos de 10 empleados",
      "Depende de los activos"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 29,
    question: "¿Cuál es el límite de ingresos brutos para declarar renta como persona natural?",
    options: [
      "1.400 UVT",
      "3.500 UVT",
      "4.500 UVT",
      "2.300 UVT"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 30,
    question: "Un contribuyente presenta declaración privada después del término. ¿Puede ser investigado?",
    options: [
      "No, porque ya declaró",
      "Sí, dentro de los 6 meses siguientes",
      "Sí, dentro de los 2 años siguientes",
      "Solo por omisión de activos"
    ],
    correctAnswer: 2,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 31,
    question: "¿Cuándo se entiende notificado un acto administrativo por correo?",
    options: [
      "Al día siguiente del envío",
      "A los 5 días hábiles del envío",
      "Cuando el contribuyente lo reciba",
      "A los 10 días hábiles del envío"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "general"
  },
  {
    id: 32,
    question: "Una empresa deduce gastos no deducibles por $30.000.000. ¿Cuál es el efecto fiscal?",
    options: [
      "Sanción del 200% del gasto",
      "Mayor impuesto de renta a pagar",
      "Pérdida del derecho a deducir",
      "Rechazo total de costos y gastos"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 33,
    question: "¿Cuál es la tarifa del impuesto al patrimonio para patrimonios líquidos superiores a $5.000 millones?",
    options: [
      "0,5%",
      "1%",
      "1,5%",
      "No existe impuesto al patrimonio"
    ],
    correctAnswer: 3,
    theme: "tributario",
    type: "general"
  },
  {
    id: 34,
    question: "Un banco cobra intereses por $1.000.000 a un cliente. ¿Debe practicar retención en la fuente?",
    options: [
      "Sí, como rendimientos financieros",
      "No, el banco no es agente retenedor",
      "Solo si supera 27 UVT",
      "No, los intereses están exentos"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 35,
    question: "¿Cuándo puede un contribuyente solicitar compensación de saldos a favor?",
    options: [
      "En cualquier momento",
      "Solo al presentar la declaración",
      "Después de 2 años",
      "Solo mediante aprobación previa"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 36,
    question: "Una empresa exportadora vende bienes al exterior por USD $100.000. ¿El IVA es?",
    options: [
      "19% sobre el valor FOB",
      "0% - excluido del impuesto",
      "5% tarifa preferencial",
      "Exento de IVA"
    ],
    correctAnswer: 3,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 37,
    question: "¿Cuál es el término para impugnar una liquidación oficial de revisión?",
    options: [
      "2 meses",
      "3 meses",
      "4 meses",
      "6 meses"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 38,
    question: "Un contribuyente del régimen simple factura servicios por $40.000.000 anuales. ¿Qué tarifa aplica?",
    options: [
      "0,5%",
      "1,5%",
      "2,5%",
      "No aplica régimen simple"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "casuistica"
  },
  {
    id: 39,
    question: "¿Cuál es el monto mínimo para que proceda el cobro coactivo?",
    options: [
      "13 UVT",
      "20 UVT",
      "27 UVT",
      "No tiene monto mínimo"
    ],
    correctAnswer: 0,
    theme: "tributario",
    type: "general"
  },
  {
    id: 40,
    question: "Una empresa realiza operaciones con vinculados económicos del exterior por USD $200.000. ¿Debe presentar declaración informativa?",
    options: [
      "No, está por debajo del mínimo",
      "Sí, debe presentar declaración",
      "Solo si son préstamos",
      "Depende del tipo de operación"
    ],
    correctAnswer: 1,
    theme: "tributario",
    type: "casuistica"
  },

  // ADUANERO - 30 preguntas
  {
    id: 41,
    question: "¿Cuál es el plazo general para el levante de mercancías después del arribo?",
    options: [
      "2 días hábiles",
      "5 días hábiles", 
      "10 días hábiles",
      "15 días hábiles"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 42,
    question: "Una empresa importa maquinaria por USD $80.000 bajo modalidad 4x1000. ¿Debe constituir garantía?",
    options: [
      "Sí, por el valor de los tributos",
      "No, aplica diferimiento automático",
      "Solo para el IVA",
      "Depende del país de origen"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 43,
    question: "¿Cuál es la tarifa del arancel para vehículos de transporte público?",
    options: [
      "0%",
      "5%",
      "15%",
      "35%"
    ],
    correctAnswer: 2,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 44,
    question: "Un usuario aduanero permanente importa materias primas por USD $50.000. ¿Cuál es el término para nacionalizar?",
    options: [
      "2 años",
      "1 año",
      "6 meses",
      "4 meses"
    ],
    correctAnswer: 3,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 45,
    question: "¿Cuándo se causa el abandono legal de mercancías en depósito?",
    options: [
      "A los 2 meses del arribo",
      "A los 6 meses del vencimiento del depósito",
      "Al año del arribo",
      "A los 4 meses del vencimiento del depósito"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 46,
    question: "Una empresa de zona franca vende al mercado nacional bienes por $100.000.000. ¿Qué gravamen aplica?",
    options: [
      "Arancel + IVA",
      "Solo IVA del 19%",
      "Solo arancel",
      "Exenta de gravámenes"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 47,
    question: "¿Cuál es el valor mínimo para requerir agente de aduanas?",
    options: [
      "USD $1.000",
      "USD $5.000",
      "No tiene mínimo",
      "USD $10.000"
    ],
    correctAnswer: 2,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 48,
    question: "Un importador presenta declaración con valor inferior al real por USD $20.000. ¿Cuál es la sanción?",
    options: [
      "200% del tributo omitido",
      "Decomiso de la mercancía",
      "100% del valor omitido",
      "Multa de 150% del tributo"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 49,
    question: "¿Cuándo prescribe la acción de cobro de tributos aduaneros?",
    options: [
      "3 años",
      "5 años",
      "10 años",
      "15 años"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 50,
    question: "Una empresa exporta café por USD $30.000. ¿Debe presentar declaración de exportación?",
    options: [
      "No, está por debajo del mínimo",
      "Sí, siempre se requiere",
      "Solo si es primera exportación",
      "Depende del país destino"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 51,
    question: "¿Cuál es el plazo para solicitar reposición contra liquidación de aforo?",
    options: [
      "10 días hábiles",
      "15 días hábiles",
      "30 días hábiles",
      "2 meses"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 52,
    question: "Un importador temporal no reexporta bienes en el plazo establecido. ¿Qué sucede?",
    options: [
      "Prórroga automática",
      "Pago de tributos + sanción",
      "Decomiso inmediato",
      "Conversión a importación ordinaria"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 53,
    question: "¿Cuál es la base gravable para el IVA en importaciones?",
    options: [
      "Valor FOB",
      "Valor CIF",
      "Valor CIF + arancel",
      "Valor en aduana"
    ],
    correctAnswer: 2,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 54,
    question: "Una empresa importa bajo Plan Vallejo bienes por USD $100.000. ¿Paga arancel?",
    options: [
      "Sí, tarifa plena",
      "No, exención total",
      "Solo si no cumple compromisos",
      "Tarifa reducida del 50%"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 55,
    question: "¿Qué organismo fija las tarifas arancelarias en Colombia?",
    options: [
      "DIAN",
      "Gobierno Nacional",
      "Congreso de la República",
      "Ministerio de Comercio"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 56,
    question: "Un viajero ingresa al país con mercancías por USD $2.500. ¿Debe pagar tributos?",
    options: [
      "No, está dentro de la franquicia",
      "Sí, sobre el exceso de USD 500",
      "Sí, sobre el total",
      "Solo si son bienes comerciales"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 57,
    question: "¿Cuál es el término máximo de permanencia en depósito privado?",
    options: [
      "1 año",
      "2 años",
      "6 meses",
      "18 meses"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 58,
    question: "Una empresa de transformación y ensamble no cumple el porcentaje mínimo de incorporación nacional. ¿Qué procede?",
    options: [
      "Revocatoria del programa",
      "Pago de la diferencia arancelaria",
      "Multa del 200%",
      "Suspensión temporal"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 59,
    question: "¿Cuándo se perfecciona la exportación?",
    options: [
      "Con la presentación de la declaración",
      "Con el embarque de la mercancía",
      "Con el pago del exportador",
      "Con la aceptación de la declaración"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 60,
    question: "Un importador presenta garantía bancaria por $50.000.000 para diferir tributos. ¿Cuál es el plazo máximo?",
    options: [
      "1 año",
      "2 años",
      "6 meses",
      "18 meses"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 61,
    question: "¿Cuál es el porcentaje máximo de reconocimiento físico que puede ordenar la DIAN?",
    options: [
      "10%",
      "15%",
      "3%",
      "No tiene límite"
    ],
    correctAnswer: 3,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 62,
    question: "Una empresa importa repuestos para maquinaria industrial por USD $25.000. ¿Qué arancel aplica?",
    options: [
      "0%",
      "5%",
      "10%",
      "Depende de la posición arancelaria"
    ],
    correctAnswer: 3,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 63,
    question: "¿Cuándo puede la DIAN ordenar la inmovilización de mercancías?",
    options: [
      "Solo con orden judicial",
      "Cuando presume irregularidades",
      "Solo en reconocimiento físico",
      "Con autorización del importador"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 64,
    question: "Un exportador de flores recibe incentivo del 2,5% sobre el valor FOB. ¿Es renta gravable?",
    options: [
      "No, es incentivo no constitutivo de renta",
      "Sí, es ingreso ordinario",
      "Solo la mitad es gravable",
      "Depende del destino"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 65,
    question: "¿Cuál es el término para controvertir una liquidación oficial de revisión aduanera?",
    options: [
      "10 días hábiles",
      "15 días hábiles",
      "30 días hábiles",
      "2 meses"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 66,
    question: "Una empresa de comercio exterior solicita devolución de tributos por exportación. ¿Cuál es el plazo de respuesta?",
    options: [
      "2 meses",
      "4 meses",
      "6 meses",
      "1 año"
    ],
    correctAnswer: 2,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 67,
    question: "¿Cuándo procede el levante automático de mercancías?",
    options: [
      "Siempre para usuarios altamente exportadores",
      "Para declaraciones sin selección de aforo",
      "Solo para importadores certificados OEA",
      "Nunca, siempre requiere revisión"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 68,
    question: "Un importador presenta declaración anticipada 15 días antes del arribo. ¿Es válida?",
    options: [
      "No, solo se puede anticipar 5 días",
      "Sí, puede anticiparse hasta 15 días",
      "Solo para ciertos regímenes",
      "No, debe ser simultánea al arribo"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "casuistica"
  },
  {
    id: 69,
    question: "¿Cuál es la sanción por no reexportar bienes en importación temporal?",
    options: [
      "100% del valor",
      "200% de los tributos",
      "Decomiso + 200% del valor",
      "Solo los tributos diferidos"
    ],
    correctAnswer: 1,
    theme: "aduanero",
    type: "general"
  },
  {
    id: 70,
    question: "Una zona franca especial vende servicios a empresa del territorio nacional por $200.000.000. ¿Qué tratamiento fiscal aplica?",
    options: [
      "Tarifa especial de renta 20%",
      "Exenta de renta",
      "Tarifa general 35%",
      "Depende del tipo de servicio"
    ],
    correctAnswer: 0,
    theme: "aduanero",
    type: "casuistica"
  },

  // PROCEDIMIENTO TRIBUTARIO - 30 preguntas
  {
    id: 71,
    question: "¿Cuál es el término para resolver un recurso de reconsideración?",
    options: [
      "2 meses",
      "6 meses",
      "1 año",
      "18 meses"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 72,
    question: "Un contribuyente recibe requerimiento especial y no responde. ¿Qué efecto tiene?",
    options: [
      "Se acepta tácitamente la propuesta",
      "Se archiva la investigación",
      "Se presumen ciertos los hechos",
      "Se aplica sanción por no responder"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 73,
    question: "¿Qué acto inicia formalmente una investigación tributaria?",
    options: [
      "La liquidación de revisión",
      "El auto de apertura",
      "El requerimiento especial",
      "El pliego de cargos"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 74,
    question: "Durante una investigación, la DIAN solicita información a un tercero que se niega a suministrarla. ¿Qué puede hacer?",
    options: [
      "Solicitar apoyo de la policía",
      "Aplicar multa por no colaborar",
      "Presumir los hechos investigados",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 75,
    question: "¿Cuándo queda en firme una liquidación oficial de corrección?",
    options: [
      "Con la notificación",
      "Al vencerse el término para impugnar",
      "Al pagar el contribuyente",
      "Cuando la acepta expresamente"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 76,
    question: "Un contribuyente presenta recurso de reposición extemporáneo. ¿La DIAN debe admitirlo?",
    options: [
      "Sí, siempre se admite",
      "No, por extemporaneidad",
      "Solo si hay justa causa",
      "Depende del monto en discusión"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 77,
    question: "¿Cuál es el término para presentar recurso de reposición?",
    options: [
      "1 mes",
      "2 meses",
      "3 meses",
      "4 meses"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 78,
    question: "Durante el proceso de cobro coactivo, el deudor presenta excepciones. ¿Cuál es el efecto?",
    options: [
      "Se suspende automáticamente el proceso",
      "Continúa el proceso normalmente",
      "Se resuelven antes de continuar",
      "Se remite a proceso ordinario"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 79,
    question: "¿Cuándo procede la compensación de oficio?",
    options: [
      "Siempre que existan saldos a favor",
      "Solo a solicitud del contribuyente",
      "Cuando se expida liquidación oficial",
      "En cualquier momento del proceso"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 80,
    question: "Un contribuyente solicita suspensión provisional de un acto administrativo. ¿Ante quién debe presentarla?",
    options: [
      "Ante la DIAN que profirió el acto",
      "Ante el Tribunal Administrativo",
      "Ante la Superintendencia de Sociedades",
      "Ante cualquier juez administrativo"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 81,
    question: "¿Cuál es el contenido mínimo de una liquidación oficial?",
    options: [
      "Solo el valor a pagar",
      "Hechos, normas aplicables y liquidación",
      "La sanción correspondiente",
      "Los recursos procedentes"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 82,
    question: "Durante una visita de fiscalización, el contribuyente puede solicitar la presencia de un testigo. ¿Es procedente?",
    options: [
      "No, la visita es reservada",
      "Sí, tiene derecho a un testigo",
      "Solo si es persona natural",
      "Solo en casos complejos"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 83,
    question: "¿Cuándo procede la revocatoria directa de un acto administrativo?",
    options: [
      "Cuando es contrario a la Constitución o la ley",
      "Solo a solicitud del contribuyente",
      "En cualquier momento",
      "Solo dentro de los 2 años siguientes"
    ],
    correctAnswer: 0,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 84,
    question: "Un contribuyente presenta corrección de su declaración después de notificado un auto de apertura. ¿Es válida?",
    options: [
      "No, perdió la oportunidad",
      "Sí, siempre puede corregir",
      "Solo si es a favor del fisco",
      "Solo errores aritméticos"
    ],
    correctAnswer: 0,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 85,
    question: "¿Cuál es el interés moratorio por no pagar oportunamente los impuestos?",
    options: [
      "DTF + 4 puntos",
      "Tasa de usura",
      "2% mensual",
      "Tasa de interés bancario corriente + 50%"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 86,
    question: "Durante una investigación, la DIAN encuentra indicios de evasión. ¿Puede ampliar el alcance?",
    options: [
      "No, debe ceñirse al auto inicial",
      "Sí, mediante auto modificatorio",
      "Solo con autorización superior",
      "Solo si el contribuyente acepta"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 87,
    question: "¿Cuándo prescribe la facultad sancionatoria de la DIAN?",
    options: [
      "A los 3 años",
      "A los 5 años",
      "Junto con la acción de cobro",
      "No prescribe"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 88,
    question: "Un contribuyente paga voluntariamente después de notificada la liquidación de revisión. ¿Qué descuentos aplican?",
    options: [
      "50% de sanción e intereses",
      "Solo reducción de sanción",
      "No aplican descuentos",
      "Descuento del 25%"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 89,
    question: "¿Cuál es el efecto de la firmeza de una liquidación oficial?",
    options: [
      "Se convierte en título ejecutivo",
      "Queda ejecutoriada",
      "Ambas son correctas",
      "Solo genera obligación de pagar"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 90,
    question: "Durante el cobro coactivo, el deudor puede proponer facilidades de pago. ¿Es procedente?",
    options: [
      "No, ya inició el cobro coactivo",
      "Sí, en cualquier estado del proceso",
      "Solo antes del embargo",
      "Solo si garantiza la totalidad"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 91,
    question: "¿Qué requisitos debe cumplir una providencia que ordene visita especial?",
    options: [
      "Solo indicar el contribuyente",
      "Motivos, alcance y funcionarios",
      "Autorización del jefe de división",
      "Concepto jurídico previo"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 92,
    question: "Un contribuyente no atiende citación para declarar en investigación. ¿Qué efecto tiene?",
    options: [
      "Se presumen ciertos los hechos",
      "Se aplica multa por desacato",
      "Se decreta su conducencia",
      "Se archiva la investigación"
    ],
    correctAnswer: 0,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 93,
    question: "¿Cuándo se interrumpe el término de prescripción?",
    options: [
      "Con la notificación del auto de apertura",
      "Con cualquier actuación de la administración",
      "Con el pago parcial del contribuyente",
      "Con la presentación de recursos"
    ],
    correctAnswer: 0,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 94,
    question: "Durante una investigación masiva, varios contribuyentes solicitan acumulación de procesos. ¿Es procedente?",
    options: [
      "Sí, por economía procesal",
      "No, cada proceso es independiente",
      "Solo si son del mismo sector",
      "Depende de la DIAN"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 95,
    question: "¿Cuál es el término máximo para resolver una petición?",
    options: [
      "15 días hábiles",
      "30 días hábiles",
      "2 meses",
      "3 meses"
    ],
    correctAnswer: 0,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 96,
    question: "Un funcionario de la DIAN comete irregularidades en una investigación. ¿El contribuyente puede solicitar impedimento?",
    options: [
      "No, solo recusación",
      "Sí, cuando existan causales",
      "Solo ante el superior jerárquico",
      "Solo ante autoridad judicial"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 97,
    question: "¿Cuándo puede la DIAN decretar embargo de cuentas bancarias?",
    options: [
      "Solo en cobro coactivo",
      "En cualquier proceso administrativo",
      "Con orden judicial previa",
      "Solo por deudas superiores a 100 UVT"
    ],
    correctAnswer: 0,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 98,
    question: "Un contribuyente presenta recurso de queja contra la DIAN por no resolver oportunamente. ¿Ante quién?",
    options: [
      "Ante el mismo funcionario",
      "Ante el superior jerárquico inmediato",
      "Ante el Tribunal Administrativo",
      "Ante la Procuraduría"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },
  {
    id: 99,
    question: "¿Cuál es el efecto de la caducidad en un proceso administrativo?",
    options: [
      "Archivo definitivo",
      "Suspensión temporal",
      "Pérdida de competencia",
      "Renovación del término"
    ],
    correctAnswer: 2,
    theme: "procedimiento",
    type: "general"
  },
  {
    id: 100,
    question: "Durante el trámite de una devolución, la DIAN solicita información adicional. ¿Se suspenden términos?",
    options: [
      "No, los términos son perentorios",
      "Sí, hasta que se suministre",
      "Solo por 30 días",
      "Depende del tipo de información"
    ],
    correctAnswer: 1,
    theme: "procedimiento",
    type: "casuistica"
  },

  // RÉGIMEN SANCIONATORIO - 20 preguntas
  {
    id: 101,
    question: "¿Cuál es la sanción por extemporaneidad en la presentación de declaración tributaria?",
    options: [
      "5% por cada mes de retardo",
      "10% por cada mes de retardo, sin exceder el 100%",
      "Multa fija de 10 UVT",
      "20% del impuesto a cargo"
    ],
    correctAnswer: 1,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 102,
    question: "Una empresa no lleva libros de contabilidad siendo obligada. Si sus ingresos son $500.000.000, ¿cuál es la sanción?",
    options: [
      "0,5% de los ingresos",
      "1% de los ingresos netos",
      "20.000 UVT",
      "0,5% de los ingresos brutos"
    ],
    correctAnswer: 3,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 103,
    question: "¿Cuándo se configura la conducta de omisión de activos?",
    options: [
      "Por no incluir activos en la declaración",
      "Por incluir activos ficticios",
      "Por valorar incorrectamente activos",
      "Por no depreciar activos"
    ],
    correctAnswer: 0,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 104,
    question: "Un contribuyente incluye deducciones improcedentes por $50.000.000. ¿Cuál es la sanción si es primera vez?",
    options: [
      "160% del mayor valor a pagar",
      "200% del mayor valor a pagar",
      "100% de la deducción improcedente",
      "Pérdida del derecho a deducir"
    ],
    correctAnswer: 0,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 105,
    question: "¿Cuál es la sanción por no expedir factura siendo obligado?",
    options: [
      "Multa equivalente al 10% del valor de la operación",
      "Clausura del establecimiento",
      "Pérdida del derecho a costos y gastos",
      "Multa de $234.000 por cada factura"
    ],
    correctAnswer: 3,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 106,
    question: "Una empresa no practica retención en la fuente por $5.000.000. ¿Cuál es la sanción?",
    options: [
      "100% del valor no retenido",
      "160% del valor no retenido",
      "200% del valor no retenido",
      "50% del valor no retenido"
    ],
    correctAnswer: 0,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 107,
    question: "¿Qué atenuante reduce la sanción al 75%?",
    options: [
      "Pago voluntario",
      "Primera vez",
      "Confesión",
      "Buena fe"
    ],
    correctAnswer: 2,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 108,
    question: "Un contador público autoriza estados financieros con irregularidades graves. ¿Cuál es la sanción?",
    options: [
      "Multa de 200 a 1.000 UVT",
      "Suspensión de la tarjeta profesional",
      "Multa equivalente al 20% de sus honorarios",
      "Inhabilitación por 5 años"
    ],
    correctAnswer: 0,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 109,
    question: "¿Cuándo se duplica una sanción tributaria?",
    options: [
      "Cuando es reincidencia dentro de los 5 años",
      "Cuando es reincidencia dentro de los 3 años",
      "Cuando supera 1.000 UVT",
      "Cuando hay ánimo de lucro"
    ],
    correctAnswer: 1,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 110,
    question: "Una empresa no reporta información exógena de proveedores. Si tiene 500 terceros, ¿cuál es la sanción?",
    options: [
      "1% de las compras no reportadas",
      "2 UVT por cada tercero no reportado",
      "Multa fija de 300 UVT",
      "5% del patrimonio líquido"
    ],
    correctAnswer: 1,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 111,
    question: "¿Cuál es la sanción por llevar doble contabilidad?",
    options: [
      "Clausura del establecimiento",
      "200% del mayor valor entre el impuesto omitido y el beneficio obtenido",
      "Pérdida de la personería jurídica",
      "Multa de 100 a 20.000 UVT"
    ],
    correctAnswer: 1,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 112,
    question: "Un agente retenedor consigna las retenciones 15 días después del vencimiento. ¿Hay sanción?",
    options: [
      "No, si paga intereses moratorios",
      "Sí, 20% del valor consignado extemporáneamente",
      "Solo intereses de mora",
      "Sí, 10% del valor no consignado oportunamente"
    ],
    correctAnswer: 1,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 113,
    question: "¿Cuándo procede la sanción de clausura?",
    options: [
      "Por no llevar libros de contabilidad",
      "Por no expedir facturas",
      "Por reincidencia en infracciones graves",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 114,
    question: "Una sociedad no presenta declaración de renta teniendo la obligación. ¿Cuál es la sanción mínima?",
    options: [
      "10 UVT",
      "20 UVT",
      "1% del patrimonio líquido",
      "670 UVT"
    ],
    correctAnswer: 3,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 115,
    question: "¿Qué sanción aplica por impedir u obstaculizar las funciones de fiscalización?",
    options: [
      "Multa de 50 a 100 UVT",
      "Clausura temporal",
      "Presunción de veracidad de los hechos investigados",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 116,
    question: "Un contribuyente corrige su declaración aumentando el impuesto antes de ser notificado de investigación. ¿Se reduce la sanción?",
    options: [
      "No hay sanción",
      "Se reduce al 25%",
      "Se reduce al 50%",
      "Aplica sanción completa"
    ],
    correctAnswer: 0,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 117,
    question: "¿Cuál es la sanción por no suministrar información requerida por la DIAN?",
    options: [
      "0,5% de los ingresos netos",
      "1% del patrimonio líquido",
      "Entre 1% y 2% de los ingresos brutos del año anterior",
      "Multa fija de 200 UVT"
    ],
    correctAnswer: 2,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 118,
    question: "Una empresa factura electrónicamente pero no cumple requisitos técnicos. ¿Cuál es la sanción?",
    options: [
      "Multa de $855.000 por factura",
      "Pérdida del derecho a costos y gastos",
      "Clausura del establecimiento",
      "No hay sanción específica"
    ],
    correctAnswer: 3,
    theme: "sancionatorio",
    type: "casuistica"
  },
  {
    id: 119,
    question: "¿Cuándo prescribe la acción sancionatoria tributaria?",
    options: [
      "A los 3 años de cometida la infracción",
      "A los 5 años de cometida la infracción",
      "A los 6 años de cometida la infracción",
      "No prescribe"
    ],
    correctAnswer: 1,
    theme: "sancionatorio",
    type: "general"
  },
  {
    id: 120,
    question: "Un contribuyente acepta los hechos y se acoge a confesión en proceso sancionatorio. ¿Cuál es el descuento?",
    options: [
      "25% de la sanción",
      "50% de la sanción",
      "75% de la sanción",
      "No hay descuento"
    ],
    correctAnswer: 0,
    theme: "sancionatorio",
    type: "casuistica"
  },

  // CÓDIGO DE COMERCIO - 20 preguntas
  {
    id: 121,
    question: "¿A partir de qué monto se considera un comerciante obligado a llevar contabilidad?",
    options: [
      "Activos brutos superiores a 500 SMMLV",
      "Ingresos brutos superiores a 3.000 SMMLV",
      "Ambas son correctas",
      "No hay monto mínimo"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "general"
  },
  {
    id: 122,
    question: "Una sociedad anónima con 50 accionistas quiere reformar estatutos para cambio de objeto social. ¿Qué mayoría requiere?",
    options: [
      "Mayoría absoluta de votos",
      "Mayoría calificada (70%)",
      "Unanimidad",
      "Según lo establezcan los estatutos"
    ],
    correctAnswer: 3,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 123,
    question: "¿Cuál es el plazo máximo para convocar a asamblea ordinaria?",
    options: [
      "31 de marzo",
      "30 de junio",
      "31 de diciembre",
      "No tiene plazo legal"
    ],
    correctAnswer: 0,
    theme: "comercial",
    type: "general"
  },
  {
    id: 124,
    question: "Un comerciante individual tiene deudas por $500.000.000 y activos por $200.000.000. ¿Puede solicitar concordato?",
    options: [
      "No, el concordato es solo para sociedades",
      "Sí, puede solicitar admisión a trámite",
      "Solo si es persona jurídica",
      "No, debe liquidar obligatoriamente"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 125,
    question: "¿Cuántos socios mínimo requiere una sociedad limitada?",
    options: [
      "1 socio",
      "2 socios",
      "5 socios",
      "25 socios"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "general"
  },
  {
    id: 126,
    question: "Una SAS con capital suscrito de $100.000.000 y pagado de $30.000.000 declara dividendos por $20.000.000. ¿Es válido?",
    options: [
      "No, no tiene utilidades suficientes",
      "Sí, si tiene reservas disponibles",
      "No, debe tener capital totalmente pagado",
      "Depende de la asamblea"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 127,
    question: "¿Cuál es la responsabilidad de los socios en una sociedad colectiva?",
    options: [
      "Limitada al monto de aportes",
      "Ilimitada y solidaria",
      "Limitada por acciones",
      "Según pacto social"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "general"
  },
  {
    id: 128,
    question: "Un establecimiento de comercio se vende por $200.000.000. El comprador se hace cargo de todas las deudas laborales. ¿Quién responde ante terceros?",
    options: [
      "Solo el comprador",
      "Solo el vendedor",
      "Ambos solidariamente",
      "Según lo pactado"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 129,
    question: "¿Qué libros debe llevar obligatoriamente todo comerciante?",
    options: [
      "Libro diario y libro mayor",
      "Libro diario e inventarios y balances",
      "Solo estados financieros",
      "Los que determine su contador"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "general"
  },
  {
    id: 130,
    question: "Una sociedad en comandita simple tiene socios gestores y comanditarios. ¿Los comanditarios pueden administrar?",
    options: [
      "Sí, sin restricciones",
      "No, pierden el beneficio de responsabilidad limitada",
      "Solo en casos especiales",
      "Según los estatutos"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 131,
    question: "¿Cuándo se perfecciona una sociedad comercial?",
    options: [
      "Con la firma del contrato",
      "Con la inscripción en Cámara de Comercio",
      "Con el pago del capital",
      "Con la primera asamblea"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "general"
  },
  {
    id: 132,
    question: "Un accionista de sociedad anónima con 30% de participación solicita inspección de libros. ¿Puede la sociedad negarse?",
    options: [
      "Sí, requiere autorización judicial",
      "No, es un derecho del accionista",
      "Solo si supera el 20%",
      "Depende de los estatutos"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 133,
    question: "¿Cuál es el plazo para registrar los libros de comercio?",
    options: [
      "30 días desde su apertura",
      "4 meses desde su apertura",
      "1 año desde su apertura",
      "No tiene plazo específico"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "general"
  },
  {
    id: 134,
    question: "Una empresa unipersonal decide convertirse en SAS. ¿Requiere liquidación previa?",
    options: [
      "Sí, debe liquidarse primero",
      "No, puede transformarse directamente",
      "Solo si tiene deudas",
      "Depende del capital"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 135,
    question: "¿Qué mayoría se requiere para decretar aumento de capital en sociedad anónima?",
    options: [
      "Mayoría absoluta",
      "Mayoría calificada",
      "La que establezcan los estatutos",
      "Unanimidad"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "general"
  },
  {
    id: 136,
    question: "Un gerente de SAS celebra contrato excediendo sus facultades estatutarias por $50.000.000. ¿El contrato es válido?",
    options: [
      "No, excedió sus facultades",
      "Sí, si el tercero actuó de buena fe",
      "Solo si lo ratifica la asamblea",
      "Depende del objeto social"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 137,
    question: "¿Cuándo prescribe la acción de responsabilidad contra administradores?",
    options: [
      "A los 2 años",
      "A los 3 años",
      "A los 5 años",
      "A los 10 años"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "general"
  },
  {
    id: 138,
    question: "Una sociedad limitada con 4 socios quiere excluir a uno por justa causa. ¿Qué mayoría requiere?",
    options: [
      "Mayoría simple",
      "Mayoría calificada",
      "75% de cuotas sociales",
      "Unanimidad de los demás"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "casuistica"
  },
  {
    id: 139,
    question: "¿Cuál es el término de duración máximo de una sociedad comercial?",
    options: [
      "30 años",
      "99 años",
      "Indefinido",
      "50 años"
    ],
    correctAnswer: 2,
    theme: "comercial",
    type: "general"
  },
  {
    id: 140,
    question: "Un factor de comercio celebra operaciones por $100.000.000 sin autorización expresa. ¿Qué efectos tiene?",
    options: [
      "Nulos los contratos",
      "Válidos si están dentro del giro ordinario",
      "Válidos con responsabilidad personal",
      "Requieren ratificación"
    ],
    correctAnswer: 1,
    theme: "comercial",
    type: "casuistica"
  },

  // DERECHO CONSTITUCIONAL - 20 preguntas
  {
    id: 141,
    question: "¿Cuál es el principio constitucional que fundamenta el sistema tributario colombiano?",
    options: [
      "Principio de legalidad",
      "Principio de equidad",
      "Principio de progresividad",
      "Todos los anteriores"
    ],
    correctAnswer: 3,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 142,
    question: "Un decreto de emergencia económica establece un nuevo impuesto. ¿Es constitucional?",
    options: [
      "Sí, por la emergencia",
      "No, viola el principio de legalidad",
      "Solo si es temporal",
      "Depende de la Corte Constitucional"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 143,
    question: "¿Qué artículo constitucional consagra el deber de contribuir?",
    options: [
      "Artículo 95",
      "Artículo 338",
      "Artículo 150",
      "Artículo 363"
    ],
    correctAnswer: 0,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 144,
    question: "Una ley tributaria establece tarifa diferencial para empresas según su tamaño. ¿Vulnera el principio de igualdad?",
    options: [
      "Sí, todas deben pagar igual",
      "No, es discriminación positiva justificada",
      "Solo si no tiene justificación razonable",
      "Depende del sector económico"
    ],
    correctAnswer: 2,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 145,
    question: "¿Qué organismo tiene competencia para declarar inexequible una norma tributaria?",
    options: [
      "Consejo de Estado",
      "Corte Constitucional",
      "Corte Suprema de Justicia",
      "Tribunal Constitucional"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 146,
    question: "Un municipio establece impuesto sobre la misma base gravable de un impuesto nacional. ¿Es válido?",
    options: [
      "Sí, los municipios son autónomos",
      "No, viola el principio de no concurrencia",
      "Solo con autorización nacional",
      "Depende del monto"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 147,
    question: "¿Cuál es el límite constitucional para la vigencia de facultades extraordinarias?",
    options: [
      "6 meses",
      "1 año",
      "2 años",
      "No tiene límite"
    ],
    correctAnswer: 0,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 148,
    question: "Una norma tributaria se aplica retroactivamente en perjuicio del contribuyente. ¿Es constitucional?",
    options: [
      "Sí, si mejora el recaudo",
      "No, viola el debido proceso",
      "Solo para infracciones",
      "Depende de la norma"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 149,
    question: "¿Qué mayoría requiere la aprobación de una ley tributaria en el Congreso?",
    options: [
      "Mayoría simple",
      "Mayoría absoluta",
      "Mayoría calificada",
      "Unanimidad"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 150,
    question: "El Gobierno declara emergencia económica para crear impuesto temporal. ¿Los decretos requieren refrendación del Congreso?",
    options: [
      "No, son autónomos",
      "Sí, dentro del año siguiente",
      "Solo si superan 6 meses",
      "Solo los tributarios"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 151,
    question: "¿Cuál es el fundamento constitucional del principio de capacidad contributiva?",
    options: [
      "Artículo 13 - Igualdad",
      "Artículo 363 - Sistema tributario",
      "Artículo 95 - Deberes",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 152,
    question: "Una ordenanza departamental crea contribución especial sin autorización legal. ¿Es válida?",
    options: [
      "Sí, por autonomía territorial",
      "No, viola la reserva de ley",
      "Solo si es para obra pública",
      "Depende del monto"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 153,
    question: "¿Qué control ejerce la Corte Constitucional sobre los actos administrativos?",
    options: [
      "Control previo obligatorio",
      "Control posterior excepcional",
      "No ejerce control",
      "Solo por vía de tutela"
    ],
    correctAnswer: 2,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 154,
    question: "Un contribuyente considera que una liquidación oficial viola el debido proceso. ¿Puede interponer tutela?",
    options: [
      "Sí, siempre procede",
      "No, debe agotar vía administrativa",
      "Solo si hay perjuicio irremediable",
      "Solo personas naturales"
    ],
    correctAnswer: 2,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 155,
    question: "¿Cuál es el término para presentar demanda de inconstitucionalidad contra ley tributaria?",
    options: [
      "1 año desde promulgación",
      "2 años desde promulgación",
      "No tiene término",
      "6 meses desde vigencia"
    ],
    correctAnswer: 2,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 156,
    question: "Una ley tributaria establece presunciones que no admiten prueba en contrario. ¿Es constitucional?",
    options: [
      "Sí, facilita la administración",
      "No, viola el debido proceso",
      "Solo para grandes contribuyentes",
      "Depende de la materia"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 157,
    question: "¿Qué características debe tener un tributo según la Constitución?",
    options: [
      "Justo y equitativo",
      "Eficiente en el recaudo",
      "Basado en capacidad de pago",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 158,
    question: "El Congreso delega facultades extraordinarias al Presidente para reformar el estatuto tributario. ¿Debe señalar marco general?",
    options: [
      "No, son facultades plenas",
      "Sí, debe ser preciso y definido",
      "Solo los objetivos generales",
      "Depende del término"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  },
  {
    id: 159,
    question: "¿Cuál es el alcance del principio de irretroactividad en materia tributaria?",
    options: [
      "Absoluto para todos los tributos",
      "Relativo, admite excepciones",
      "Solo para sanciones",
      "No aplica en materia tributaria"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "general"
  },
  {
    id: 160,
    question: "Una corporación autónoma regional establece tasa por uso del agua sin ley que la autorice. ¿Es constitucional?",
    options: [
      "Sí, por autonomía ambiental",
      "No, requiere autorización legal expresa",
      "Solo si es para conservación",
      "Depende de la tarifa"
    ],
    correctAnswer: 1,
    theme: "constitucional",
    type: "casuistica"
  }
];