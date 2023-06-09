import {NavLinkStyled, HeaderStyled} from './Header.styled'

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled>
      </nav>
      <button>Login</button>
    </HeaderStyled>
  );
}