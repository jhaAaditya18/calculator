import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setcalVal("");

    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);

    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
