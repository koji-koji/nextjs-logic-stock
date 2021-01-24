import { TextField } from '@material-ui/core';
import React, { FC, useState } from 'react';

type Props = {
  isSubmit: boolean;
};

const TextFieldParts: FC<Props> = (props) => {
  const { isSubmit } = props;
  const [sampleValue, setSampleValue] = useState('');

  const handleErrorMessage = () => {
    if (!isSubmit) {
      return '';
    }
    if (sampleValue === '') {
      return '入力してください。';
    }
    return '';
  };

  const checkError = () => {};

  const infoMessage = (infoMessages: string[] = []) => {
    return infoMessages?.length ? returnBreakMessage(infoMessages) : '';
  };

  const errorMessage = (errorMessages: string[] = []) => {
    return errorMessages?.length ? returnBreakMessage(errorMessages) : '';
  };

  const returnInfoAndErrorMessage = (
    infoMessages: string[] = [],
    errorMessages: string[] = []
  ) => {
    return returnBreakMessage(infoMessages.concat(errorMessages));
  };

  const returnBreakMessage = (messages: string[] = []) => {
    return (
      <div>
        {messages.map((message) => (
          <p>{message}</p>
        ))}
      </div>
    );
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        name="name1"
        label="サンプル12"
        variant="outlined"
        error={isSubmit && true}
        helperText={returnInfoAndErrorMessage()}
        onChange={(e) => {
          setSampleValue(e.currentTarget.value);
          if (isSubmit) checkError();
        }}
      />
    </>
  );
};
export default TextFieldParts;
