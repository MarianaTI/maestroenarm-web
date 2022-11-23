import * as libphonenumber from "libphonenumber-js";
import { useEffect, useState } from "react";

const Prueba = () => {
  const [value, setValue] = useState("");
  useEffect(() => {});
  return (
    <div>
      <input
        type="tel"
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            const parsedPhonenumber = libphonenumber.parsePhoneNumberFromString(
              value,
              "+1"
            );
            if (parsedPhonenumber) {
              e.preventDefault();
              setValue(
                libphonenumber.formatIncompletePhoneNumber(
                  parsedPhonenumber.nationalNumber.slice(0, -1),
                  "+1"
                )
              );
            }
          }
        }}
        onChange={(e) => {
          setValue(
            libphonenumber.formatIncompletePhoneNumber(e.target.value, "US")
          );
        }}
        value={value}
      />
    </div>
  );
};

export default Prueba;
