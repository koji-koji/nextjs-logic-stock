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

  const infoMessage = (infoMessages: string[] = []) => {
    return infoMessages?.length ? (
      <div>
        {/* 改行処理 */}
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
        {/* 改行処理 */}
        {errorMessages.map((errorMessage) => (
          <p>{errorMessage}</p>
        ))}
      </div>
    ) : (
      ''
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
        helperText={infoMessage()}
        onChange={(e) => {
          setSampleValue(e.currentTarget.value);
          if (isSubmit) checkError();
        }}
      />
    </>
  );
};
export default TextFieldParts;
