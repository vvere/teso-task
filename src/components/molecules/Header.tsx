import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HamburgerIcon, LogoIcon } from 'assets/icons';
import colors from 'themes/colors';
import { debounce } from 'utils';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: ${colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkList = styled.nav`
  display: flex;
  padding-right: 16px;
`;

const LinkText = styled(Link)`
  color: ${colors.white};
  font-size: 16px;
  padding-left: 24px;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;

const IconContainer = styled.div`
  padding-right: 16px;
  cursor: pointer;
  z-index: 100;
`;

const LogoContainer = styled.div`
  z-index: 100;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  transform: ${({ open }: { open: boolean }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 100%;
  padding-top: 53px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const LinkColumnText = styled(Link)`
  padding-top: 48px;
  color: ${colors.white};
  font-size: 16px;
  padding-left: 40px;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 768);
    }, 500);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      {isMobile ? (
        <IconContainer onClick={() => setOpen(!open)}>
          <HamburgerIcon />
        </IconContainer>
      ) : (
        <LinkList>
          <LinkText to="server-list">Main</LinkText>
          <LinkText to="login">Login</LinkText>
        </LinkList>
      )}
      {isMobile && (
        <Menu open={open}>
          <LinkColumnText to="server-list">Main</LinkColumnText>
          <LinkColumnText to="login">Login</LinkColumnText>
        </Menu>
      )}
    </HeaderContainer>
  );
};

export default Header;
