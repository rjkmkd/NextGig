import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <div>
      <nav className="py-2 flex justify-between items-center">
        <Link to={"/"}>
          <p className="py-1 px-4 text-2xl md:text-3xl lg:text-4xl font-semibold gradient-title">
            𝗡𝗲𝘅𝘁𝗚𝗶𝗴
          </p>
        </Link>

        <div className="px-4 py-2">
          {/* <Button variant="outline">LogIn</Button> */}

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}

export default Header
