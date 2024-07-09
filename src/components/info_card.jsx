import Image from "next/image.js";

import Button from "./simple_button.jsx";
import Title from "./title.jsx";

function infoCard({ ...props }) {
  return (
    <div
      className={`bg-slate-50 rounded-md py-6 px-10 grid md:grid-cols-4 lg:block items-center gap-8`}
    >
      {props.image ? (
        <Image
          className="hidden md:block col-span-1 max-h-[10vh]"
          src={props.image}
          width={200}
          height={200}
        />
      ) : null}

      <div className={`col-span-3 ${props.class}`}>
        <Title h2={props.title} classTitle="text-xl font-semibold" />
        <p className="lg:min-h-28">{props.text || "no text"}</p>

        <Button text={props.button} href={props.href} />
      </div>
    </div>
  );
}

export default infoCard;
