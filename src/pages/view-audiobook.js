import React from "react";
import CustomIndividualAudiobook from "../components/CustomIndividualAudiobook";

const PageAudiobooks = () => {
  return (
    <div style={{display: "flex"}}>
      <CustomIndividualAudiobook
        name="Nombre del audiolibro"
        author="Lorem ipsum dolor sit amet."
        storyteller="Lorem ipsum dolor sit amet."
        duration="Lorem ipsum dolor sit amet."
        gender="Lorem ipsum dolor sit amet."
        topics="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        price="0.00"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      Componente de interesado
    </div>
  );
};

export default PageAudiobooks;
