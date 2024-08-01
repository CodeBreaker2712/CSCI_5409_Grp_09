"use client";
import { Button } from "@/components/ui/button";
import { INITIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import Logo from "../logo/logo";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { ProfileDropdown } from "../profile-dropdown/profile-dropdown";
import { ThemeToggler } from "../theme-toggler";
import { AuthContext } from "../../../Auth/AuthContext";
import React, { useContext } from "react";

export default function NavBar() {
  const context = useContext(AuthContext);

  // @ts-ignore
  const { isAuthenticated } = context;
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
      <div className="flex items-center gap-2">
        <Link href="/" prefetch={false}>
          <Logo />
        </Link>
      </div>
      {isAuthenticated ? (
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center text-sm font-medium">
            {INITIAL_LINKS.map((link, index) => {
              return (
                <Link key={index} href="#" prefetch={false}>
                  <Button variant="link" className="px-2">
                    {link.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
          <div className="flex gap-2">
            <ProfileDropdown />
            <ThemeToggler />
          </div>
        </div>
      ) : (
        <Link href="/login" prefetch={false}>
          <Button variant="link" className="px-2">
            Join Now
          </Button>
        </Link>
      )}
    </header>
  );
}
