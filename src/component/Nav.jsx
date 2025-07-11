import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button";

import { NavLink } from "react-router";

const Nav = () => {

    return (
        <div className="px-12 py-5 flex justify-between items-center bg-white">

            <h2 className="font-medium">Hostel</h2>

            <NavigationMenu>
                <NavigationMenuList className="flex gap-6">

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <NavLink to="/">Home</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <NavLink to="/explore">Explore</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <NavLink to="/about">About</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <NavLink to="/accomodation">Accomodation</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <NavLink to="/create">Create</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex gap-4 *:cursor-pointer">
                <Button variant="outline">Login</Button>
                <Button>Signup</Button>
            </div>
        </div>
    )
}

export default Nav;