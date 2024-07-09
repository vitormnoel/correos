import Link from "next/link";

function navBar() {
  return (
    <nav>
      <ul className="hidden md:flex gap-4 capitalize py-2 border-l-2 border-slate-600 pl-4">
        <li className="hover:underline underline-offset-4">
          <Link href="/">home</Link>
        </li>
        <li className="hover:underline underline-offset-4">
          <Link href="/company">company</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navBar;
