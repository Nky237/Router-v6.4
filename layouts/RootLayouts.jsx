import { NavLink, Outlet } from "react-router-dom"

const RootLayouts = () => {
  return (
    <div className="root-layout">
    <header>
        <h1>JHENNAJOBS</h1>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
    </header>
    <main>
      <Outlet />
    </main>
    </div>
  )
}

export default RootLayouts