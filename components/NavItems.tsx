'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
const navItems:{label:string,href:string}[]=[
    {label:'Home',href:'/'},
    {label:'Companions',href:'/companions'},
    {label:'My Journey',href:'/my-journey'}
]

const NavItems = () =>{

    const pathname=usePathname();


  return (
      <nav className="flex items-center gap-4">
          {navItems.map(({label,href})=> {
              return (
                  <Link
                      href={href}
                      key={label}
                      className={cn(pathname===href?'text-primary font-semibold' : 'text-gray-500')}>
                      {label}
                  </Link>
              )
          })}
      </nav>

  );
}

export default NavItems;
