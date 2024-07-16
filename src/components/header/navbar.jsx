import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function navBar() {
  return (
    <nav className="flex items-center gap-16">
      <ul className="hidden md:flex gap-10 capitalize font-medium">
        <li className="hover:text-blue-600 duration-300">
          <Link href="/">home</Link>
        </li>
        <li className="hover:text-blue-600 duration-300">
          <Link href="/track">track</Link>
        </li>
        <li className="hover:text-blue-600 duration-300">
          <Link href="/ship">ship</Link>
        </li>
        <li className="hover:text-blue-600 duration-300">
          <Link href="/customer-service">customer service</Link>
        </li>
      </ul>

      <div className="flex items-center gap-2 bg-blue-300 px-4 py-2 rounded">
        <h2 className="cursor-pointer font-medium capitalize">sign in</h2>
      </div>
      {/* <Popover className="relative">
        <PopoverButton>Menu</PopoverButton>
        <PopoverPanel anchor="bottom" className="flex flex-col">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </PopoverPanel>
      </Popover> */}
    </nav>
  );
}

export default navBar;
