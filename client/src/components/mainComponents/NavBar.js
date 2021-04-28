/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    const navCss = css({
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa!important",
      });
return (
    <div css={navCss}>
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Navbar.Brand href="/">
              <i style={{ paddingRight: "5%" }} className="fas fa-home"></i>
              Home
            </Navbar.Brand>
          </Nav>
          <Nav>
            <NavDropdown title="User Mangement" id="nav-dropdown">
              <NavDropdown.Item href="/product">
                Add product
              </NavDropdown.Item>
              <NavDropdown.Item href="/displayProducts">
                Display products
              </NavDropdown.Item>
              <NavDropdown.Item href="/displayProductsHistory">
                Display products history
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};
export default NavBar;
