import { useState, useEffect } from 'react'
import LogoHome from '../logoHome/logoHome'
import Navbar from '../navbar/navbar'
import MainButtons from '../navbar/mainButtons'
import BreadCrumb from '../breadCrumb/breadCrumb'
function Header({menu, home, router }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 100 ? setStickyClass('fixed') : setStickyClass('');
            
        }
    };
    return (
        <>
        <header className={`${menuOpen ? 'open' : ''}`}>
            <div className={`full-width ${stickyClass}`}>
                <div className={`main-container `}>
                    <div className="main-head">
                        <LogoHome  menuOpen={menuOpen} />
                        <MainButtons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    </div>
                </div> 
                <Navbar menu={menu} menuOpen={menuOpen} />
            </div>
            
        </header>
        {!home && <BreadCrumb router={router} />}
        </>
    )
}

export default Header