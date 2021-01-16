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

  const infoMessage = (infoMessages: string[] = []) => {
    return infoMessages?.length ? (
      <div>
        {infoMessages.map((infoMaggage) => (
          <p>{infoMaggage}</p>
        ))}
      </div>
    ) : (
      ''
    );
  };

  const checkError = () => {};

  const errorMessage = (errorMessages: string[] = []) => {
    return errorMessages?.length ? (
      <div>
        {errorMessages.map((errorMessage) => (
          <p>{errorMessage}</p>
        ))}
      </div>
    ) : (
      ''
    );
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
                label="サンプル12"
                variant="outlined"
                error={isSubmit && true}
                helperText={infoMessage()}
                onChange={(e) => {
                  setSampleValue(e.currentTarget.value);
                  if (isSubmit) checkError();
                }}
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
