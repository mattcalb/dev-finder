import React from "react";
import { TextInputField } from "./styles";

interface TextInput {
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  required: boolean;
}

const Input: React.FC<TextInput> = ({
  placeholder,
  value,
  onChange,
}: TextInput) => {
  return (
    <TextInputField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
