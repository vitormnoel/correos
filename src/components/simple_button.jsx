import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function button({ ...props }) {
  return (
    <div className="mt-6 w-max">
      <Link
        href={props.href || "/"}
        className={`font-semibold uppercase text-slate-500 hover:text-slate-800 duration-300 flex gap-2 items-center ${props.class}`}
      >
        <p>{props.text || "more info"}</p>
        <GoArrowUpRight size={20} title="arrow up - link" />
      </Link>
    </div>
  );
}

export default button;
