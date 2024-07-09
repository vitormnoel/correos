import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

import NavBar from "./navbar.jsx";

function header() {
  return (
    <header className="py-2 z-20 sticky top-0 right-0 left-0 px-8 md:px-32 flex justify-between border-t-8 bg-white border-slate-900 shadow-md">
      <div className="flex items-center gap-4">
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
      </div>

      <div className="flex items-center gap-2">
        <FaUser />
        <h2 className="cursor-pointer uppercase">login</h2>
      </div>
    </header>
  );
}

export default header;
