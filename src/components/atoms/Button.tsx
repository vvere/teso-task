import styled from 'styled-components';
import colors from 'themes/colors';

const Button = styled.button`
  background-color: ${colors.purple};
  border: none;
  color: ${colors.white};
  text-decoration: none;
  padding: 12px 28px 12px 28px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-family: Roboto;
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
