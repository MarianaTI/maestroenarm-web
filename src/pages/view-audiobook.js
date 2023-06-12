import React from "react";
import CustomIndividualAudiobook from "../components/CustomIndividualAudiobook";

const ViewAudiobook = () => {
  return (
    <div>
      <CustomIndividualAudiobook
        name="Nombre del audiolibro"
        author="Lorem ipsum dolor sit amet."
        storyteller="Lorem ipsum dolor sit amet."
        duration="Lorem ipsum dolor sit amet."
        gender="Lorem ipsum dolor sit amet."
        topics="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
    </div>
  );
};

export default ViewAudiobook;