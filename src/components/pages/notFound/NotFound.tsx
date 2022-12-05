import styled from 'styled-components';
import colors from 'themes/colors';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <h2>Page not found</h2>
    </Container>
  );
};

export default NotFound;
