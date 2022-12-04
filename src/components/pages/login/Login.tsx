import { Button } from 'components/atoms';
import TextInput from '../../molecules/TextInput';
import styled from 'styled-components';
import colors from 'themes/colors';
import { device } from 'themes/devices';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 32px 32px;
  width: 100%;

  @media ${device.mobileS} {
    margin: 32px;
    padding: 32px 24px;
  }

  @media ${device.tablet} {
    width: 40%;
  }
`;

const Login = () => {
  return (
    <FormContainer>
      <TextInput label="User name" placeholder="User name" />
      <TextInput type="password" placeholder="Password" label="Password" />
      <Button>Login</Button>
    </FormContainer>
  );
};

export default Login;
