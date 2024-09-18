"use client"
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export default function Headers(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <div className="flex items-center space-x-4 justify-between mt-4 mx-4">
            <div>Emoji Generator</div>
            <div className="flex items-center space-x-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in" />
                </SignedIn>
                <div className="md:hidden">
                   <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                   </Button>
                </div>
            </div>
        </div>
    )
}