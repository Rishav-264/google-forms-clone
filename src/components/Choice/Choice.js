import React, { useState, useRef, useEffect } from 'react';
import styles from './choice.module.css';

const Choice = () => {
  const [numberOfChoices, setNumberOfChoices] = useState([0]);
  const [choices, setChoices] = useState(['Default']);
  const counter = useRef(0);
  let choice_id = 0;

  const addOption = () => {
    counter.current = counter.current + 1;
    setNumberOfChoices([...numberOfChoices, counter.current]);
  };

  const testFunction = e => {
    console.log('Choice Number', e.target.id);
    let temp = choices;
    choices[e.target.id] = e.target.value;
    setChoices(temp);
  };

  useEffect(() => {
    console.log('Choices', choices);
  }, [choices]);

  return (
    <>
      {numberOfChoices.map((elem, index) => {
        return (
          <div className={styles.choice_container}>
            <input type="radio" value={choices[index]} name="test"></input>
            <input
              type="text"
              placeholder="Enter Option"
              className={styles.option_text}
              id={choice_id++}
              onChange={testFunction}
            ></input>
            <p className={styles.add_button} onClick={addOption}>
              +
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Choice;
