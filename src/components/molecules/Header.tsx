import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HamburgerIcon, LogoIcon } from 'assets/icons';
import colors from 'themes/colors';
import { debounce } from 'utils';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/types';
import { device } from 'themes/devices';
import { setToken } from 'store/userSlice';

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
  padding-left: 40px;
  padding-top: 48px;
  font-family: Roboto;
  &:hover {
    opacity: 0.5;
  }

  @media ${device.tablet} {
    padding-top: 0px;
    padding-left: 40px;
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
  z-index: 50;
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  const { token } = useAppSelector(store => store.user);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 768);
    }, 0);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dispatch = useAppDispatch();

  const logOut = () => dispatch(setToken(null));

  const onMobileClick = isMobile ? () => setOpen(false) : undefined;

  const navList = token ? (
    <>
      <LinkText to="/" onClick={onMobileClick}>
        Main
      </LinkText>
      <LinkText to="server-list" onClick={onMobileClick}>
        Servers
      </LinkText>
      <LinkText
        to="login"
        onClick={() => {
          onMobileClick?.();
          logOut();
        }}
      >
        Logout
      </LinkText>
    </>
  ) : (
    <>
      <LinkText to="/" onClick={onMobileClick}>
        Main
      </LinkText>
      <LinkText to="login" onClick={onMobileClick}>
        Login
      </LinkText>
    </>
  );

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
        <LinkList>{navList}</LinkList>
      )}
      {isMobile && <Menu open={open}>{navList}</Menu>}
    </HeaderContainer>
  );
};

export default Header;
