import Image from "next/image.js";

import Title from "./title.jsx";
import OutButton from "./outlined_button.jsx";

function info({ ...props }) {
  return (
    <section
      className={`bg-stone-100 px-6 md:px-20 py-10 rounded-md ${props.class}`}
    >
      {props.image ? (
        <div className={`w-full h-[30vh] overflow-hidden ${props.div}`}>
          <Image
            src={props.image}
            width={250}
            height={100}
            sizes="100vw"
            className={`${props.classImage}`}
          />
        </div>
      ) : null}
      <div>
        <Title h2={props.title} classTitle={props.classTitle} />
        <div className="border-b-2 border-blue-600 w-[200px] mb-6" />
        <p className="mb-12">{props.text}</p>
        <OutButton text={props.button} href={props.href} />
      </div>
    </section>
  );
}

export default info;
