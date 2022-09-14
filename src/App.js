import FormHead from './components/FormHead/FormHead';
import styles from './app.module.css';
import { Input } from './components/Input/Input';

import { useState, useRef, useEffect } from 'react';

function App() {
  const [numberOfInputs, setNumberOfInputs] = useState([
    { index: 0, type: 'file' },
  ]);
  const [inputTypes, setInputTypes] = useState(['file']);
  const counter = useRef(1);

  useEffect(() => {
    console.log('Number of Inputs', numberOfInputs);
  }, [numberOfInputs]);

  const addField = e => {
    setNumberOfInputs([
      ...numberOfInputs,
      { index: counter.current, type: e.target.textContent.toLowerCase() },
    ]);
    counter.current = counter.current + 1;
  };

  const removeField = id => {
    setNumberOfInputs(numberOfInputs.filter(elem => elem.index !== id));
  };

  return (
    <div className={styles.container}>
      <FormHead />
      <div className={styles.button_container}>
        <p className={styles.dropdown_button}>Add Field</p>
        <div className={styles.dropdown_content}>
          <a href="#text" onClick={addField} value="text">
            Text
          </a>
          <a href="#choice" onClick={addField} value="choice">
            Choice
          </a>
          <a href="#file" onClick={addField} value="file">
            File
          </a>
          <a href="#slider" onClick={addField} value="slider">
            Slider
          </a>
        </div>
      </div>
      {numberOfInputs.map(elem => {
        return (
          <Input
            inputType={elem.type}
            id={elem.index}
            removeField={removeField}
          />
        );
      })}
    </div>
  );
}

export default App;
