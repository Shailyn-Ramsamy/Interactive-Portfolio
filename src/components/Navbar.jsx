import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">SRM</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
                    About
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
                    Projects
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar