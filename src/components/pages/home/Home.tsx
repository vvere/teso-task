import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import background from 'assets/images/contentbackground.png';
import { Header } from 'components/molecules';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Home = () => (
  <Container>
    <Header />
    <ContentContainer>
      <Outlet />
    </ContentContainer>
  </Container>
);

export default Home;
