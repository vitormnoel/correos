import Image from "next/image";

import Title from "./title.jsx";
import Button from "./button.jsx";

function banner({ children, ...props }) {
  return (
    <section
      id="banner"
      className={`bg-white pt-8 grid lg:grid-cols-2 gap-20 justify-items-center items-center px-8 ${props.class}`}
    >
      <Image
        src={props.image}
        alt="home"
        width={500}
        height={300}
        sizes="100vw"
        priority
      />

      <article>
        <Title h3="packages" h2="National & International Shipments" />

        <p className="md:pr-32">{props.text || null}</p>

        <Button text={props.button || null} />
      </article>
    </section>
  );
}

export default banner;
