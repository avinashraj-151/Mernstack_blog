import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-bold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-t from-indigo-700 via-purple-400 to-pink-800 rounded-xl  text-white'>Codiwizz Blog</span>
                {/* Blog */}
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='search'
                    rightIcon={IoSearchOutline}
                    className='hidden lg:inline'
                >

                </TextInput>
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <IoSearchOutline></IoSearchOutline>
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='W-12 h-10  hidden sm:inline' color='gray' pill>
                    <FaMoon></FaMoon>
                </Button>
                <Link to='/sign-in'>
                    <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle></Navbar.Toggle>
            </div>
            <Navbar.Collapse >
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path == '/about'} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path == '/project'} as={'div'}>
                    <Link to='/project'>Project</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header