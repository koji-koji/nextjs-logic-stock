import { Button, Input, TextField } from '@material-ui/core';
import { SentimentSatisfied } from '@material-ui/icons';
import React, { useState } from 'react';

const FileFormUPloadArea = () => {
  const handleErrorMessage = () => {
    if (!isSubmit) {
      return '';
    }
    if (sampleValue === '') {
      return '入力してください。';
    }
    return '';
  };

  const infoMessage = () => {
    return `<p>aaa</p> </br> <p>bbb</p>`;
  };

  const [sampleValue, setSampleValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          debugger;
          e.preventDefault();
          console.log(e.target.elements.name1.value);
          alert('sumbmit!');
        }}
      >
        <div className="p-5">
          <ul>
            <li>
              <TextField
                id="outlined-basic"
                name="name1"
                label="サンプル1"
                variant="outlined"
                error={isSubmit && true}
                helperText={infoMessage() + handleErrorMessage()}
                onChange={(e) => {
                  setSampleValue(e.currentTarget.value);
                }}
                // helperText={'asdfsafdfas'}
                // helperText={(inputProps) => {
                //   debugger;
                //   return 'aaa';
                // }}
              />
              {isSubmit.toString()}
            </li>

            <li>
              <TextField
                id="outlined-basic2"
                name="name2"
                label="サンプル2"
                variant="outlined"
              />
            </li>
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

export default FileFormUPloadArea;
