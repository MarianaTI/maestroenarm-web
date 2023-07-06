import { clinicalCases } from "../constants";

export function getRandomClinicalCases(n) {
  const casosClinicos = Object.values(clinicalCases);
  const cantidadCasosClinicos = casosClinicos.length;

  if (n >= cantidadCasosClinicos) {
    // Si se solicita más casos clínicos de los disponibles, se devuelve el array de todos los IDs
    return casosClinicos.map((caso) => caso.id);
  } else {
    // Generar una copia del array de casos clínicos
    const casosClinicosCopia = JSON.parse(JSON.stringify(casosClinicos));

    // Obtener casos clínicos aleatorios sin duplicados
    const casosClinicosAleatorios = [];
    for (let i = 0; i < n; i++) {
      const indiceAleatorio = Math.floor(
        Math.random() * casosClinicosCopia.length
      );
      const casoClinicoAleatorio = casosClinicosCopia.splice(
        indiceAleatorio,
        1
      )[0];
      casosClinicosAleatorios.push(casoClinicoAleatorio.id);
    }

    return casosClinicosAleatorios;
  }
}
