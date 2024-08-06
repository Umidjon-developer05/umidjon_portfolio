"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState ,Fragment} from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"


export default function Navbar() {
  const session = useSession();

  
  return (
    <div className="flex   w-full justify-end" >
      <nav className="flex justify-between   px-8 py-3  ">
      {
         session?.data?.user?.email === process.env.NEXT_PUBLIC_EMAIL ?
         <Link className= "p-2" href={`${session?.data?.user?.email === process.env.NEXT_PUBLIC_EMAIL?'/addTopic':'/'}`}>
            <Button>Add Topic</Button>
          </Link>
            : <div></div>
      }
        <Menu as="div"  className={'flex gap-10'}>
     
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-10 m-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <button onClick={()=>signOut('/')}>
                            Sign out
                            </button>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
    </nav>
    </div>
  );
}
