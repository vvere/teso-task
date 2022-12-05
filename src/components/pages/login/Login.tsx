import { Button, InputError } from 'components/atoms';
import { TextInput } from 'components/molecules';
import styled from 'styled-components';
import colors from 'themes/colors';
import { device } from 'themes/devices';
import { useForm } from 'react-hook-form';
import { getUserToken, UserCredentials } from 'api';
import { useAppDispatch } from 'store/types';
import { setToken } from 'store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

const rules = { required: true, minLength: 3 };

const errorMessage = 'Required and minimum 3 chars';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({ mode: 'onBlur' });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>();

  const onSubmit = async (payload: UserCredentials) => {
    setLoading(true);
    setError(null);

    getUserToken(payload)
      .then(({ data: { token } }) => {
        dispatch(setToken(token));
        navigate('/', { replace: true });
      })
      .catch(err => {
        setError(err?.message || 'Request failed');
        setLoading(false);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="User name"
        placeholder="User name"
        name="username"
        control={control}
        rules={rules}
        error={errors.username ? errorMessage : null}
      />
      <TextInput
        type="password"
        placeholder="Password"
        label="Password"
        name="password"
        rules={rules}
        control={control}
        error={errors.password ? errorMessage : null}
      />
      {error && <InputError>{error}</InputError>}
      <Button>{!loading ? 'Login' : 'Loading...'}</Button>
    </FormContainer>
  );
};

export default Login;
