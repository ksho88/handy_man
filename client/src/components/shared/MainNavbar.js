import Workers from '../handy_man/Handy_Man';

const MainNavbar = () =>  {
  return(
  <>
  <Navbar
  alignLinks="right"
  brand={<a classname="brand-log" href="/">Workers List</a>}
  id="mobile-nav"
  menuIcons={<Icon>menu</Icon>}
  options={{
    draggable: true, 
    inDuration: 250,
    onCloseEnd: null,
    onClosesTART: null,
    onOpenEnd: null,
    outDuration: 200, 
    preventScrolling: true
  }}
  >
    <NavItem href="/about">
    About
    </NavItem>
      <NavItem href="workers">
        Workers
      </NavItem>
  </Navbar>
  </>
  )
}

export default MainNavbar;