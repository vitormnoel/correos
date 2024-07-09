import { FormEvent } from "react";

function form({ ...props }) {
  return (
    <form form="search" className="grid grid-cols-2 gap-10">
      <input
        className="border rounded"
        id="search"
        type="text"
        placeholder={props.placeholder}
      />
      <button className="bg-blue-500 text-white font-semibold px-4 rounded uppercase hover:bg-blue-700 duration-300">
        Search
      </button>
    </form>
  );
}

export default form;
