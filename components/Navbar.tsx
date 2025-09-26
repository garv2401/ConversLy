import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import {SignInButton,SignedIn,SignedOut,UserButton} from "@clerk/nextjs";

const Navbar = () => {
  return (

        <nav className="navbar border border-b-fuchsia-100">
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <Image src="/images/Conversly-logo-c-1.jpg" width={100} height={100} alt="logo"/>
            </div>
          </Link>

          <div className="flex items-center gap-8">
              <NavItems/>
              <SignedOut>
                  <SignInButton>
                      <button className="btn-signin border border-purple-400 text-purple-400">Sign In</button>
                  </SignInButton>
              </SignedOut>

              <SignedIn>
                  <UserButton/>
              </SignedIn>
          </div>
        </nav>

  );
}

export default Navbar;
