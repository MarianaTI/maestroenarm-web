export const rankingUsers = [
  {
    name: "Angel Ricardez",
    profilePicture: true,
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    point: 24.0008,
  },
  {
    name: "Rodrigo Caraveo",
    profilePicture: true,
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    point: 25.7188,
  },
  {
    name: "Mariana Trujillo",
    profilePicture: true,
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    point: 22.7305,
  },
  {
    name: "Carlos Hernandez",
    profilePicture: true,
    university: "Universidad Nacional Autónoma de México",
    specialty: "Cardiología",
    point: 23.4956,
  },
  {
    name: "Laura Gonzalez",
    profilePicture: true,
    university: "Instituto Politécnico Nacional",
    specialty: "Neurología",
    point: 24.9652,
  },
  {
    name: "Juan Martinez",
    profilePicture: true,
    university: "Universidad Autónoma Metropolitana",
    specialty: "Ortopedia",
    point: 21.6497,
  },
  {
    name: "Ana Lopez",
    profilePicture: true,
    university: "Universidad Iberoamericana",
    specialty: "Pediatría",
    point: 22.4568,
  },
  {
    name: "Jesus Alberto Rodriguez",
    profilePicture: true,
    university: "Universidad de la Riviera Maya",
    specialty: "Ortopedia",
    point: 21.6498,
  },
];

export const userAccount = [
  {
    email: "mariana@hotmail.com",
    password: "mariana123",
  },
  {
    email: "angel@hotmail.com",
    password: "angel123",
  },
  {
    email: "cloe@hotmail.com",
    password: "cloe123",
  },
];

export const userRegister = [
  {
    namee: "Sugey",
    lastname: "Rosado",
    email: "syra478xd@gmail.com",
    password: "123sugey",
    confirmpassword: "123sugey",
  },
];

export const videosInterest = [];

export const clinicalCases = {
  1: {
    id: 1,
    case: "Un paciente de 55 años acude a la consulta con dolor abdominal intenso y fiebre. Después de realizar un examen físico y pruebas de laboratorio, se diagnostica una apendicitis aguda. Como cirujano general, debes determinar el tratamiento más adecuado para esta condición y brindar las recomendaciones correspondientes.",
    speciality: "Cirugía General",
    subSpeciality: "Cirugía General",
    book: "https://www.uandes.cl/wp-content/uploads/2020/02/Manual-de-Cirugia-UANDES.pdf",
    feedbackGeneral:
      "En este caso específico, el tratamiento más apropiado para la apendicitis aguda es la apendicectomía, que consiste en la extirpación quirúrgica del apéndice inflamado. La apendicectomía es el procedimiento estándar para el manejo de la apendicitis y ayuda a prevenir complicaciones graves. Los antibióticos pueden administrarse antes o después de la cirugía, pero no son suficientes como tratamiento único. Las recetas caseras no son efectivas en el tratamiento de la apendicitis aguda. Siempre es crucial buscar atención médica especializada en Cirugía General para garantizar un manejo adecuado de esta condición.",
    question: [
      {
        id: 1,
        text: "¿Cuál es el tratamiento más adecuado para una fractura de hueso?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la opción C) Apendicectomía. La apendicectomía es el tratamiento estándar para la apendicitis aguda, ya que implica la extirpación quirúrgica del apéndice inflamado. Esto ayuda a prevenir complicaciones graves asociadas con la apendicitis.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Antibióticos",
            answer:
              "Respuesta incorrecta. Si bien los antibióticos pueden administrarse antes o después de la apendicectomía, no son suficientes como tratamiento único para la apendicitis aguda. La extirpación quirúrgica del apéndice es esencial para resolver la condición.",
          },
          {
            id: 2,
            option: "B",
            text: "Fisioterapia",
            answer:
              "Respuesta incorrecta. La fisioterapia no tiene un papel en el tratamiento de la apendicitis aguda. La apendicectomía es el enfoque principal para abordar esta condición.",
          },
          {
            id: 3,
            option: "C",
            text: "Apendicectomia",
            answer:
              "Respuesta correcta. La apendicectomía es el tratamiento estándar para la apendicitis aguda, ya que implica la extirpación quirúrgica del apéndice inflamado. Esto ayuda a prevenir complicaciones graves asociadas con la apendicitis.",
          },
          {
            id: 4,
            option: "D",
            text: "Receta casera",
            answer: "Respuesta incorrecta. Son mitos.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál es la complicación más común asociada a la apendicitis aguda no tratada?",
        correctAnswer: 3,
        feedbackQuestion:
          "En este pregunta, la respuesta correcta es la opción C: Inmovilización. La inmovilización es un tratamiento común y efectivo para las fracturas de hueso, ya que ayuda a estabilizar la lesión y promover la correcta recuperación del hueso fracturado.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Peritonitis",
            answer:
              "Respuesta incorrecta. Los antibióticos no son el tratamiento principal para una fractura de hueso.",
          },
          {
            id: 2,
            option: "B",
            text: "Neumonía",
            answer:
              "Respuesta incorrecta. La fisioterapia puede ser útil durante la rehabilitación después de una fractura, pero no es el tratamiento inicial.",
          },
          {
            id: 3,
            option: "C",
            text: "Hipertensión arterial",
            answer:
              "Respuesta correcta. La inmovilización es un tratamiento común para las fracturas óseas, ya que ayuda a estabilizar y permitir la recuperación adecuada del hueso fracturado.",
          },
          {
            id: 4,
            option: "D",
            text: "Artritis",
            answer: "Respuesta incorrecta. Son mitos.",
          },
        ],
      },
    ],
  },
];


export const audiobooksInterest = [
  {
    id:4 ,
    img: "/img/audiobooks/audiolibro4.png",
    imgFront: "/img/individualAudiobooks/audiobook4-front.png",
    imgBack: "/img/individualAudiobooks/audiobook4-back.png",
    name: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    storyteller: "Dennis Boutsikaris",
    duration: "21 horas y 41 minutos",
    topics: "Genética, historia de la ciencia, avances tecnológicos y terapias genéticas.",
    price: 139.0,
    detail: "Siddhartha Mukherjee explora la historia del descubrimiento del genoma humano y los avances científicos que han revolucionado nuestra comprensión de la genética y su impacto en la medicina.",
  },
  {
    id: 5,
    img: "/img/audiobooks/audiolibro5.png",
    imgFront: "/img/individualAudiobooks/audiobook5-front.png",
    imgBack: "/img/individualAudiobooks/audiobook5-back.png",
    name: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    storyteller: "Sunil Malhotra y Cassandra Campbell",
    duration: "5 horas y 35 minutos",
    topics:
      "Vida, muerte, ética médica, neurocirugía y búsqueda de significado.",
    price: 209.00,
    detail: " El autor, un neurocirujano diagnosticado con cáncer terminal, comparte su perspectiva única sobre la vida, la muerte y el significado en este poderoso testimonio.",
  },
  {
    id: 6 ,
    img: "/img/audiobooks/audiolibro6.png",
    imgFront: "/img/individualAudiobooks/audiobook6-front.png",
    imgBack: "/img/individualAudiobooks/audiobook6-back.png",
    name: "The Checklist Manifesto: How to Get Things Right",
    author: "Atul Gawande",
    storyteller: "John Bedford Lloyd",
    duration: "6 horas y 32 minutos",
    topics: "Seguridad del paciente, errores médicos, calidad de atención y gestión de tareas.",
    price: 216.77,
    detail: "Atul Gawande explora cómo el uso de listas de verificación en medicina y otros campos puede mejorar la seguridad del paciente y prevenir errores médicos.",
  },
];

export const videosInterest = [];


export default {
  "clinicalCases": [
    {
      "id": 1,
      "case": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "speciality": "Cirugía General",
      "sub-speciality": "Cirugía General",
      "book": "https://www.uandes.cl/wp-content/uploads/2020/02/Manual-de-Cirugia-UANDES.pdf",
      "question": [
        {
          "id": 1,
          "text": "¿Cuál es el tratamiento más adecuado para una fractura de hueso?",
          "correctAnswer": 3,
          "feedbackQuestion": "En este pregunta, la respuesta correcta es la opción C: Inmovilización. La inmovilización es un tratamiento común y efectivo para las fracturas de hueso, ya que ayuda a estabilizar la lesión y promover la correcta recuperación del hueso fracturado.",
          "answers": [
            {
              "id": 1,
              "option": "A",
              "text": "Antibióticos",
              "answer": "Respuesta incorrecta. Los antibióticos no son el tratamiento principal para una fractura de hueso."
            },
            {
              "id": 2,
              "option": "B",
              "text": "Fisioterapia",
              "answer": "Respuesta incorrecta. La fisioterapia puede ser útil durante la rehabilitación después de una fractura, pero no es el tratamiento inicial."
            },
            {
              "id": 3,
              "option": "C",
              "text": "Inmovilización",
              "answer": "Respuesta correcta. La inmovilización es un tratamiento común para las fracturas óseas, ya que ayuda a estabilizar y permitir la recuperación adecuada del hueso fracturado."
            },
            {
              "id": 4,
              "option": "D",
              "text": "Receta casera",
              "answer": "Respuesta incorrecta. Son mitos."
            }
          ]
        },
        {
          "id": 2,
          "text": "¿SOY LA PREGUNTA DOS?",
          "correctAnswer": 3,
          "feedbackQuestion": "En este pregunta, la respuesta correcta es la opción C: Inmovilización. La inmovilización es un tratamiento común y efectivo para las fracturas de hueso, ya que ayuda a estabilizar la lesión y promover la correcta recuperación del hueso fracturado.",
          "answers": [
            {
              "id": 1,
              "option": "A",
              "text": "Antibióticos",
              "answer": "Respuesta incorrecta. Los antibióticos no son el tratamiento principal para una fractura de hueso."
            },
            {
              "id": 2,
              "option": "B",
              "text": "Fisioterapia",
              "answer": "Respuesta incorrecta. La fisioterapia puede ser útil durante la rehabilitación después de una fractura, pero no es el tratamiento inicial."
            },
            {
              "id": 3,
              "option": "C",
              "text": "Inmovilización",
              "answer": "Respuesta correcta. La inmovilización es un tratamiento común para las fracturas óseas, ya que ayuda a estabilizar y permitir la recuperación adecuada del hueso fracturado."
            },
            {
              "id": 4,
              "option": "D",
              "text": "Receta casera",
              "answer": "Respuesta incorrecta. Son mitos."
            }
          ]
        }
      ],
      "feedbackGeneral": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      "id": 2,
      "case": "Se presenta el caso de un paciente de 60 años de edad con un bulto abdominal. El paciente experimenta molestias abdominales, pérdida de peso involuntaria y aumento progresivo de tamaño del bulto en los últimos meses. Los estudios de imagen revelan la presencia de un tumor sólido en el hígado de aproximadamente 5 cm de diámetro, confirmado como carcinoma hepatocelular. Se planifica una resección hepática para extirpar el segmento afectado y realizar una reconstrucción de la vía biliar durante el procedimiento. El paciente se somete a una hepatectomía parcial con resección en cuña del segmento hepático afectado. Durante la cirugía, se confirma la ausencia de metástasis en otros órganos y se procede a la reconstrucción de la vía biliar mediante una anastomosis biliodigestiva. Se establece un programa de seguimiento para evaluar la función hepática, controlar la cicatrización y detectar posibles complicaciones o recurrencias del carcinoma hepatocelular.",
      "speciality": "Cirugía General",
      "sub-speciality": "Cirugía General",
      "book": "https://www.uandes.cl/wp-content/uploads/2020/02/Manual-de-Cirugia-UANDES.pdf",
      "question": [
        {
          "id": 1,
          "text": "¿Cuál es el objetivo principal de la resección hepática en el tratamiento del carcinoma hepatocelular?",
          "correctAnswer": 4,
          "feedbackQuestion": "En este pregunta, la respuesta correcta es la opción C: Inmovilización. La inmovilización es un tratamiento común y efectivo para las fracturas de hueso, ya que ayuda a estabilizar la lesión y promover la correcta recuperación del hueso fracturado.",
          "answers": [
            {
              "id": 1,
              "option": "A",
              "text": "Controlar los síntomas relacionados con el tumor",
              "answer": "Respuesta incorrecta. Esta opción no es el objetivo principal de la resección hepática en el tratamiento del carcinoma hepatocelular. Si bien la resección puede aliviar los síntomas asociados con el tumor, como el dolor abdominal, su objetivo principal es extirpar completamente el tumor y potencialmente lograr la curación o el control prolongado de la enfermedad."
            },
            {
              "id": 2,
              "option": "B",
              "text": "Prevenir la diseminación metastásica",
              "answer": "Respuesta incorrecta. La prevención de la diseminación metastásica es un objetivo importante en el tratamiento del cáncer, pero la resección hepática se realiza principalmente en tumores localizados sin metástasis distantes. El objetivo principal de la resección hepática en el carcinoma hepatocelular es extirpar completamente el tumor primario y potencialmente mejorar la supervivencia a largo plazo."
            },
            {
              "id": 3,
              "option": "C",
              "text": "Mejorar la función hepática",
              "answer": "Respuesta incorrecta. Si bien la resección hepática puede tener un impacto en la función hepática, especialmente en casos de enfermedad hepática subyacente, su objetivo principal no es mejorar la función hepática. El objetivo principal es extirpar completamente el tumor primario."
            },
            {
              "id": 4,
              "option": "D",
              "text": "Extirpar el tumor completamente",
              "answer": "Respuesta correcta. La resección hepática tiene como objetivo principal la extirpación completa del tumor primario en el tratamiento del carcinoma hepatocelular. Al extirpar el tumor por completo, se busca lograr la curación o el control prolongado de la enfermedad."
            }
          ]
        }
      ],
      "feedbackGeneral": "En este caso clínico, se abordó la especialidad de Cirugía General, con enfoque en la subespecialidad de Cirugía General. Se presentó el caso de un paciente con un tumor hepático maligno, donde se evaluaron los estudios diagnósticos y se planificó una resección hepática para extirpar completamente el tumor. Durante la cirugía, se realizaron procedimientos adicionales, como la reconstrucción de la vía biliar. Se destacó la importancia del seguimiento postoperatorio para detectar complicaciones y posibles recurrencias. El objetivo principal de la resección hepática fue extirpar el tumor por completo, con el fin de brindar la mejor oportunidad de curación o control prolongado del carcinoma hepatocelular."
    }
  ],
};

