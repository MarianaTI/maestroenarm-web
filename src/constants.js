export const rankingUsers = [
  {
    username: "Angel Ricardez",
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    point: 24.0008,
  },
  {
    username: "Rodrigo Caraveo",
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    point: 25.7188,
  },
  {
    username: "Mariana Trujillo",
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    point: 22.7305,
  },
  {
    username: "Carlos Hernandez",
    university: "Universidad Nacional Autónoma de México",
    specialty: "Cardiología",
    point: 23.4956,
  },
  {
    username: "Laura Gonzalez",
    university: "Instituto Politécnico Nacional",
    specialty: "Neurología",
    point: 24.9652,
  },
  {
    username: "Juan Martinez",
    university: "Universidad Autónoma Metropolitana",
    specialty: "Ortopedia",
    point: 21.6497,
  },
  {
    username: "Ana Lopez",
    university: "Universidad Iberoamericana",
    specialty: "Pediatría",
    point: 22.4568,
  },
];

export default {
  clinicalCases: [
    {
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar sem in rhoncus euismod. In quis porta ex, vitae dapibus lacus. Duis cursus orci in mauris pretium volutpat. Curabitur congue lacus et fringilla dignissim. Pellentesque ullamcorper mollis purus vel fermentum. Aenean et eros finibus, convallis est eget, convallis arcu. Sed ullamcorper nulla justo, et molestie mi feugiat vitae. Aliquam porta ipsum eu interdum lobortis. Sed et elit sem. Aliquam luctus ullamcorper libero, et sollicitudin metus tempor malesuada. Proin porta porta volutpat. Curabitur a nibh vitae libero egestas porttitor.",
      questions: [
        {
          label: "Pregunta uno",
          answers: [
            {
              label: "Respuesta uno",
              isCorrect: false,
            },
            {
              label: "Respuesta dos",
              isCorrect: true,
            },
            {
              label: "Respuesta tres",
              isCorrect: false,
            },
            {
              label: "Respuesta cuatro",
              isCorrect: false,
            },
          ],
        },
        {
          label: "Pregunta dos",
          answers: [
            {
              label: "Respuesta uno",
              isCorrect: false,
            },
            {
              label: "Respuesta dos",
              isCorrect: true,
            },
            {
              label: "Respuesta tres",
              isCorrect: false,
            },
            {
              label: "Respuesta cuatro",
              isCorrect: false,
            },
          ],
        },
        {
          label: "Pregunta tres",
          answers: [
            {
              label: "Respuesta uno",
              isCorrect: false,
            },
            {
              label: "Respuesta dos",
              isCorrect: true,
            },
            {
              label: "Respuesta tres",
              isCorrect: false,
            },
            {
              label: "Respuesta cuatro",
              isCorrect: false,
            },
          ],
        },
      ],
      feedback: {
        text: "Esto es un feedback, te estoy explicando que la respuesta correcta era blablabla porque es logico que el blablabla es lo mejor",
      },
    },
  ],
};
