import Link from "next/link";

function listItem({ text, href, ...props }) {
  return (
    <li className="font-extralight capitalize text-sm">
      <Link
        className={`hover:underline hover:text-blue-700 underline-offset-4 ${props.class}`}
        href={href || ""}
      >
        {text || "link"}
      </Link>
    </li>
  );
}

export default listItem;
