import React from "react";
import { Group, FormInputLabel, Input } from "./form-input.styles.jsx";

const FormInput = (props) => {
  const { label, ...otherProps } = props;
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
