import Link from "next/link";

function button({ ...props }) {
  return (
    <div className="my-8">
      <Link
        href={"/"}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded uppercase hover:bg-blue-700 duration-300"
        onClick={props.click}
      >
        {props.text || "click me"}
      </Link>
    </div>
  );
}

export default button;
