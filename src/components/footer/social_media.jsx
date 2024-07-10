import { BsTwitterX, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

function socialMedia({ ...props }) {
  return (
    <div className="border-t border-slate-300 pt-6 flex flex-col gap-8">
      <div>
        <h3 className="font-semibold mb-4">Download the App</h3>

        <ul className="flex gap-4">
          <li className="h-[6vh] w-[15vw] bg-green-100">
            <a href={""}></a>
          </li>
          <li className="h-[6vh] w-[15vw] bg-red-100">
            <a href={""}></a>
          </li>
          <li className="h-[6vh] w-[15vw] bg-sky-100">
            <a href={""}></a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 capitalize">Follow us</h3>
        <ul className="flex gap-8 mb-8">
          <li>
            <a href={""} className="hover:text-blue-700 duration-300">
              <BsYoutube size={22} />
            </a>
          </li>
          <li>
            <a href={""} className="hover:text-blue-700 duration-300">
              <BsLinkedin size={22} />
            </a>
          </li>
          <li>
            <a href={""} className="hover:text-blue-700 duration-300">
              <BsTwitterX size={22} />
            </a>
          </li>
          <li>
            <a href={""} className="hover:text-blue-700 duration-300">
              <BsInstagram size={22} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default socialMedia;
