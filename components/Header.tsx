import React from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Logo from './Logo';

const Header = () => {
    return (
        <div className="bg-background text-foreground  flex flex-col">
            <header className="py-6 px-4 md:px-6 border-b">
                <div className="max-w-6xl mx-auto flex items-center justify-between">

                    {/* left side */}
                    <Logo />

                    {/* for mobiles */}
                    <div className='xl:hidden md:hidden flex justify-end'>
                        <MobileNav />
                    </div>

                    {/* for desktop */}
                    <div className="hidden md:flex">
                        <Nav />
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header;
