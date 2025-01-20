import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        {/* <img src="/logo.png" alt="" className="w-8 h-8" /> */}
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="https://ik.imagekit.io/uekieknn4/logo.png"
          alt=""
          className="w-8 h-8"
        />
        {/* <Image
          src="https://ik.imagekit.io/uekieknn4/logo.png"
          alt="Gaunle Logo"
          w={32}
          h={32}
        /> */}
        <span>gaunleweb</span>
      </Link>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/Login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
