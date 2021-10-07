import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';

const MainNavbar = () => {
  return (
    <>
      <Navbar 
        alignLinks="right"
        brand={<a className="brand-logo" href="/">HandyMan</a>}
        id="mobile-nav"
        menuIcon={<Icon>Menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,

        }}
      >
        <NavItem href="/">
         Home
        </NavItem>
        <NavItem href="/Workers">
          workers
        </NavItem> 
        <NavItem href="/Services">
          Services
        </NavItem>
        <NavItem href="/About">
          About
        </NavItem>
        
        
        
              
        
      </Navbar>
      
    </>
  )
}

export default MainNavbar;


  