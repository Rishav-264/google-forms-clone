import React, { useState, useEffect } from 'react';
import styles from './input.module.css';

import { MdDeleteOutline } from 'react-icons/md';

import Choice from '../Choice/Choice';

export const Input = ({ inputType, id, removeField }) => {
  const [type, setType] = useState(inputType);

  useEffect(() => {
    setType(inputType);
  }, [inputType]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.remove_button}>
          <MdDeleteOutline
            className={styles.remove_icon}
            onClick={() => {
              removeField(id);
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Question"
          className={styles.question}
        ></input>
        {type === 'text' && (
          <div id={id}>
            <input
              type="text"
              placeholder="Enter Text"
              className={styles.answer_text}
            ></input>
          </div>
        )}
        {type === 'choice' && (
          <div id={id}>
            <Choice />
          </div>
        )}
        {type === 'checkbox' && <div></div>}
        {type === 'file' && (
          <div className={styles.answer_file_container} id={id}>
            <input
              type="file"
              name="file_upload"
              className={styles.answer_file}
            />
            <label for="file_upload">Choose a file</label>
          </div>
        )}
        {type === 'slider' && (
          <div id={id}>
            <input
              type="range"
              className={styles.answer_slider}
              name="vol"
              min="0"
              max="100"
            ></input>
          </div>
        )}
        <div className={styles.required_container}>
          <span>Required</span>
          <label className={styles.switch}>
            <input type="checkbox"></input>
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
    </>
  );
};
