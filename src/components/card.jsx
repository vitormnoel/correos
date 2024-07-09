import Title from "./title.jsx";
import Button from "./simple_button.jsx";
import Image from "next/image.js";

function card({ ...props }) {
  return (
    <div className="rounded-md flex flex-col md:flex-row items-center">
      {props.imageLeft ? (
        <Image
          className="w-full md:inline relative left-0 top-0 md:left-5 rounded-t-md md:rounded-md"
          src={props.image}
          alt={props.alt || "no image"}
          width={600}
          height={100}
          sizes="50vw"
          priority
        />
      ) : null}

      <div className="bg-white p-10 shadow-xl rounded-b-md md:rounded-md z-10 w-full min-h-72 md:max-w-screen">
        <Title h3={props.subtitle} h2={props.title} classTitle="text-2xl" />
        <div className="border-b-2 border-blue-600 w-[100px]"/>
        <p className="lg:min-h-28 pt-4">{props.text || "no text"}</p>

        {props.button ? (
          <Button text={props.button} href={props.href} class="text-blue-600" />
        ) : null}
      </div>

      {props.imageRight ? (
        <Image
          className="hidden xl:inline relative xl:top-0 right-5 rounded-md"
          src={props.image}
          alt={props.alt || "no image"}
          width={600}
          height={300}
          sizes="100vw"
          priority
        />
      ) : null}
    </div>
  );
}

export default card;
