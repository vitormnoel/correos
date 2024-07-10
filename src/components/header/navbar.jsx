import Link from "next/link";

function navBar() {
  return (
    <nav>
      <ul className="hidden md:flex gap-10 uppercase">
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
    </nav>
  );
}

export default navBar;
