import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { menuItems } from "./constants/menu-items"
import { FaBookOpen } from "react-icons/fa"
import { BsWindowSidebar } from "react-icons/bs";


export const MenuItems = () => {    

    return (
        <NavigationMenu>
            <NavigationMenuList className='pt-14 flex flex-row text-white text-pretty lg:text-sm md:text-md sm:text-sm mobile:text-sm mobilesm:text-[12px]'>
                {menuItems.map((item, index) => ( 
                    <NavigationMenuItem key={index}>
                      {item.icon || item.title === 'menu-logo' ? (
                          <Link href={item.href} className="flex px-2 items-center cursor-pointer text-center hover:scale-110 transition ease-in-out duration-200">
                              <img className='flex w-14 mx-1' src={item.icon} alt='...' />
                          </Link>
                      ) : item.listItems ? (
                          <div >
                              <NavigationMenuTrigger className="flex text-md px-2 items-center cursor-pointer text-center hover:scale-105 transition ease-in-out duration-100">
                                  {item.title}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent className="bg-red-50 w-fit text-sm text-red-800">
                                  <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">      
                                      {item.listItems.map((listItem, index) => (
                                          <NavigationMenuLink asChild key={index}>
                                              <Link
                                                  className="flex h-full w-full select-none p-3 flex-col text-start justify-center rounded-xl hover:bg-red-800/25 hover:scale-105 transition ease-in-out duration-100"
                                                  href={listItem.href}
                                                  target={listItem.blank ? "_blank" : undefined}
                                              >
                                                  <div className="mb-2 mt-4 text-md font-bold">
                                                      {listItem.title}
                                                  </div>
                                                  <p className="text-[12px] leading-tight text-black">
                                                      {listItem.description}
                                                  </p>
                                              </Link>
                                          </NavigationMenuLink>
                                      ))}
                                      
                                  </ul>
                              </NavigationMenuContent>
                          </div>
                      ) : (
                          <Link href={item.href} className="flex px-2 items-center cursor-pointer text-center hover:scale-105 transition ease-in-out duration-100">
                              {item.title}
                          </Link>
                      )}
                    </NavigationMenuItem>  
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"