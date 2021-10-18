import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './WritingBox.module.css';

type WritingBoxProps = {
  InputValue: string;
  setInputChange: (InputValue: string) => void;
};

export default function WritingBox({
  InputValue,
  setInputChange,
}: WritingBoxProps): JSX.Element {
  return (
    <TextareaAutosize
      className={styles.textfield}
      minRows={5}
      placeholder="Enter Text"
      value={InputValue}
      onChange={(event) => setInputChange(event.target.value)}
    />
  );
}
