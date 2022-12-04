import styled from 'styled-components';
import colors from 'themes/colors';

const Input = styled.input`
  border-color: ${colors.lightGrey};
  border-width: 1px;
  border-radius: 5px;
  outline: none;
  padding: 13px 16px 13px 16px;
  width: calc(100% - 32px);
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    border-color: ${colors.purple};
  }
`;

export default Input;
