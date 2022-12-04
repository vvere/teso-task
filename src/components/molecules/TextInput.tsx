import styled from 'styled-components';
import { Input, Label } from '../atoms';

interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: 'text' | 'password';
  error?: string;
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const TextInput = ({ label, placeholder, type }: TextInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} />
    </Container>
  );
};

export default TextInput;
