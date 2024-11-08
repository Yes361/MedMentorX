'use client'

import {
    Navbar,
    NavbarContent, 
    NavbarItem, 
    Link,
    Divider,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import NavBarProfile from "./NavBarProfile";
import { HomeIcon } from "lucide-react";

export default function MainHeaderNav() {
  const { data: session } = useSession()

  return (
    <>
      <Navbar>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              <HomeIcon />
            </Link>
          </NavbarItem>
          
          <NavbarItem>
            <Link color="foreground" href="/health-news">
              Health News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/courses">
              Courses
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/flashcards">
              Flashcards
            </Link>
          </NavbarItem>
        </NavbarContent>

        

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            {!session &&
              <Link href="/api/auth/signin">Login</Link>
            }
          </NavbarItem>
        </NavbarContent>

        {session && <NavBarProfile />}

      </Navbar>
    <Divider />
    </>
  );
}