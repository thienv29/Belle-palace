import { Navbar, Nav, Container, NavDropdown, Col, Row } from "react-bootstrap";
import style from './header.module.css'
import { HiArrowNarrowRight } from "react-icons/hi";
import HeaderSub from "./components/header-sub/header-sub";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Header = ({infoPage}:any) =>{
 const router = useRouter();
 const path = router.asPath;
 console.log(info);
 
 
 useEffect(() => {
   path=='/' ?
   document.querySelector(`.main`)?.classList.add('color-primary')
   :document.querySelector(`a[href='${path}']`)?.classList.add('color-primary')
 }, [])
  return (<>
    <HeaderSub infoPage={infoPage} />
    <Navbar className={style.header}  expand="lg">
      <Container className="custom" >
        <Navbar.Brand href="/">
          <div className={style.logo}>
            <img src='/images/Belle-Palace-logo-9.png' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="">
            <Nav.Link className={`colCenter item-nav colorHover main `}  href="/">HOME</Nav.Link>
            <Nav.Link className={`colCenter item-nav colorHover `}  href="/service">SERVICES</Nav.Link>
            <Nav.Link className={`colCenter item-nav colorHover`}  href="/host-a-party">HOST A PARTY</Nav.Link>
            
          </Nav>
          <a className={style.btn_link} href={process.env.NEXT_PUBLIC_ONLINE_BOOKING}>
              <span className=" ">ONLINE BOOKING</span>
              <HiArrowNarrowRight className="" style={{marginLeft:"10px"}}/>  
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}


export default Header;
