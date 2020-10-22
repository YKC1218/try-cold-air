import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';

function Navigation() {
  return (
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/">主頁</Nav.Link>
    <Nav.Link href="/product">冷氣機型號</Nav.Link>
    <Nav.Link href="/contactus">聯絡方法</Nav.Link>
    <Nav.Link href="/aboutus">關於此網站</Nav.Link>
    

  </Nav>
  <Nav>
  <Nav.Link href="/create">add product</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

)
}
export default Navigation