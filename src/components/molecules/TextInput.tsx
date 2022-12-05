import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { Input, InputError, Label } from 'components/atoms';

export interface Rules {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

interface TextInputProps {
  label: string;
  name: string;
  rules: Rules;
  placeholder?: string;
  type?: 'text' | 'password';
  error?: string | null;
  defaultValue?: string;
  control: Control<any>;
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const TextInput = ({
  control,
  rules,
  error,
  defaultValue,
  label,
  placeholder,
  name,
  type,
}: TextInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Controller
        render={({ field: { ref, ...field } }) => (
          <Input placeholder={placeholder} type={type} {...field} ref={ref} />
        )}
        name={name}
        defaultValue={defaultValue || ''}
        control={control}
        rules={rules}
      />
      {!!error && <InputError>{error}</InputError>}
    </Container>
  );
};

export default TextInput;
