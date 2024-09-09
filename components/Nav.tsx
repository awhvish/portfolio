"use client";
import React from 'react';
import Link from 'next/link';

const links = [
  { name: "/", path: "/" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact Me", path: "mailto:high.avis.lowha@gmail.com" },
];

const Nav = () => {
  return (
        <>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link, index) => {
              return (
                <Link href={link.path} className="hover:underline underline-offset-4" prefetch={false}>{link.name}
                </Link>
              )
            ;})}
          </nav>
        </> 

  );
}

export default Nav;
