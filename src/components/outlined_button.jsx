function button({ ...props }) {
  return (
    <div className="mt-4">
      <a href={props.href} className="py-2 px-6 cursor-pointer md:w-1/3 font-semibold uppercase border-2 border-blue-500 text-blue-500 hover:border-black rounded hover:text-black duration-300 text-center">
        {props.text || "button"}
      </a>
    </div>
  );
}

export default button;
