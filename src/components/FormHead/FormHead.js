import React from 'react';
import styles from './form-head.module.css';

const FormHead = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_name_container}>
          <input
            type="text"
            className={styles.form_name}
            placeholder="Form Title"
          ></input>
        </div>
        <div className={styles.form_description_container}>
          <textarea
            type="text"
            className={styles.form_description}
            placeholder="Form Description"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default FormHead;
