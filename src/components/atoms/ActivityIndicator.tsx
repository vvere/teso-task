import styled from 'styled-components';
import colors from 'themes/colors';

const ActivityIndicator = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${colors.purple};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  align-self: center;
  animation: rotation 1s linear infinite;
  margin: 32px;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ActivityIndicator;
