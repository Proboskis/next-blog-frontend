"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import NextLink from "next/link";

import {AcmeLogo} from "@next-blog/app/components/acme-logo";
import {usePathname} from "next/navigation";
import {Tabs, Tab} from "@nextui-org/tabs";
import {useState} from "react";

const Navigation = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out"
  ];

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathName === `home`
    },
    {
      href: `/about`,
      label: "About",
      active: pathName === `about`
    },
    {
      href: `/contacts`,
      label: "Contacts",
      active: pathName === `contacts`
    }
  ];

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary"
        ]
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo/>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar for larger viewports */}
      <NavbarContent className="hidden sm:flex gap-12" justify="end">
        <NavbarBrand>
          <AcmeLogo/>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        {routes.map(route => (
          <NavbarItem
            key={route.href}
            isActive={pathName === route.href}
          >
            <Link
              isBlock
              className="text-xl px-5 py-2"
              {...(pathName === route.href ? {color: "default"} : {color: "foreground"})}
              href={route.href}
              aria-current="page"
              as={NextLink}
            >
              {route.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/*}
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="#" as={NextLink}>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      */}

      {/* Toggleable menu for smaller viewports */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;