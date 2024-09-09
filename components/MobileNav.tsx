"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuBurger } from "react-icons/ci";

const links = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact Me", path: "/contact" },
];
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <div className='flex pr-10'>
            <Sheet>
                <SheetTrigger > <CiMenuBurger size="25" className='text-accent'/> </SheetTrigger>
                <SheetContent>
                    {links.map((link, index) => {
                        return (
                            <div className='flex items-center pt-5'>
                                <Link 
                                    href={link.path} key={index} 
                                    className={`${
                                    pathname == link.path ? 'text-accent border-b-2 border-accent' : 'text-white'}
                                    hover:text-accent transition-all`}>{link.name}
                                </Link>
                                <br></br>
                            </div>
                        )
                    })}
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
