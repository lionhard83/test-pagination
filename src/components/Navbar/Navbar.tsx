import { Link, useLocation } from "react-router-dom"
import "../Navbar/Navbar.css"

export const Navbar = () => {
    const {pathname} = useLocation();
    const lines = [{root: '/', name: 'Home'}, {root: '/dashboard', name: 'Dashboard'}]
      .map(({root, name}, index) => (<li key={index}><Link to={root}>{name}</Link></li>));

    return  (<div className="navbar bg-neutral text-neutral-content">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {lines}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {lines}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>)
  //   return (<ul>
  //     {links.map(({root, name}, index) => 
  //       <li key={index}><Link  to={root} className={pathname === root ? 'selected': ''}>{name}</Link></li>
  //     )}
  // </ul>
  
}