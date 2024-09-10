"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuBurger } from "react-icons/ci";

const links = [
    { name: "/", path: "/" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact Me", path: "mailto:high.avis.lowha@gmail.com" },
  ];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <div className='flex '>
            <Sheet>
                <SheetTrigger > <CiMenuBurger size="25" color='black' className='text-accent'/> </SheetTrigger>
                <SheetContent>
                    {links.map((link, index) => {
                        return (
                            <div className='flex items-center pt-5' key={index}>
                                <Link 
                                    href={link.path} 
                                    className={`${
                                    pathname == link.path ? 'text-accent border-b-2 border-accent' : 'text-white'}
                                    hover:text-accent transition-all`}>{link.name}
                                </Link>
                            </div>
                        )
                    })}
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
