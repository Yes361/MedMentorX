'use client'

import {
    Navbar,
    NavbarContent, 
    NavbarItem, 
    Link,
    Avatar,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function NavBarProfile() {
    const { data: session } = useSession()

    return (
        <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name={session!.user?.name!}
                        size="sm"
                        src={session!.user?.image || "/default-avatar.png"}
                    />                                  
                </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{session!.user?.name}</p>
                </DropdownItem>
                <DropdownItem key="settings">
                    <Link href="/settings">
                        My Settings
                    </Link>
                </DropdownItem>
                <DropdownItem key="profile">
                    <Link href="/profile">
                        My Profile
                    </Link>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    <Link href='/api/auth/signout'>
                        Log Out
                    </Link>
                </DropdownItem>
            </DropdownMenu>         
            </Dropdown>
        </NavbarContent>
    )
}