import styled from 'styled-components';
import Flexbox from './Flexbox';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: auto;
  
  @media only screen and (min-width: 1200px) {
	.container {
		max-width: 1170px;
	}
}
`;
const MenuItem = styled.div`
  -webkit-box-shadow: 0px 12px 15px rgba(36, 11, 12, 0.05);
  box-shadow: 0px 12px 15px rgba(36, 11, 12, 0.05);
	position: relative;
`;

const Logo = styled.div`
  padding: 10px;  
	display: inline-block;
	text-decoration: none;
`;

const NavMenu = styled.div`
  display: inline;
  margin-left: auto;

  @media only screen and (max-width: 991px) {
		display: none;
  }
`;

const MainMenu = styled.div`
  display: inline-block;
`;

const menu = [
  'home','rooms','about','board','location'
];


function Header() {

  const menuListItems = menu.map((item, index) =>
    <li key={index}>
      <Link to={'/'+item}>{item}</Link>
    </li>
  );

  return (
    <header>
      <MenuItem>
        <Container>

          <Flexbox type={'welcoming'}>
            <Logo>
              <Link to="/">
                <h3>5hp Pension</h3>
              </Link>
            </Logo>

            <NavMenu>
              <MainMenu>
                <ul>
                  {menuListItems}
                </ul>
              </MainMenu>
            </NavMenu>

          </Flexbox>

        </Container>
      </MenuItem>
    </header>
  );
}

export default Header;
