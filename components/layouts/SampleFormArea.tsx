import { Button, Input, TextField } from '@material-ui/core';
import { SentimentSatisfied } from '@material-ui/icons';
import React, { useState } from 'react';
import TextFieldParts from '../parts/TextField';

const SampleFormArea = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(e.target.elements.name1.value);
          alert('sumbmit!');
        }}
      >
        <div className="p-5">
          <ul>
            <li>
              <TextFieldParts isSubmit={isSubmit}></TextFieldParts>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Button variant="contained" color="primary" type="submit">
            submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default SampleFormArea;
