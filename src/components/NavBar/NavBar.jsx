
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Link from '../Link/Link';
import { useState } from 'react';

const NavBar = () => {
    const [open,setOpen] =useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Product Detail", path: "/products/:id" },
        { id: 5, name: "Not Found", path: "*" },
      ];

      
    return (
        <nav className=' text-black bg-lime-300 p-8'>
            <div className='  md:hidden text-2xl' onClick={()=>setOpen(!open)}>
                {
                    open === true?<AiOutlineClose></AiOutlineClose>
                    :
                    <AiOutlineMenu></AiOutlineMenu>
                }
            
            </div>
            <ul className={` md:flex duration-1000 absolute bg-purple-700 md:bg-lime-300 px-6 ${open?'top-16':'-top-60'} md:static`}>
            {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;