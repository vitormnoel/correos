import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

import NavBar from "./navbar.jsx";

function header() {
  return (
    <header className="py-2 px-8 xl:px-32 flex justify-between items-center bg-white border-t-8 border-blue-500 shadow-md sticky top-0 right-0 left-0 z-20">
      <h1>
        <Link href="/">
          <Image
            src="/images/logo-correos.svg"
            width={50}
            height={50}
            alt="Correos logo"
          />
        </Link>
      </h1>

      <NavBar />

      <div className="flex items-center gap-2">
        <FaUser />
        <h2 className="cursor-pointer">login</h2>
      </div>
    </header>
  );
}

export default header;
