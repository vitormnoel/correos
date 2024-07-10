import Image from "next/image.js";
import List from "../list.jsx";
import Item from "../list_item.jsx";
import SocialMedia from "./social_media.jsx";

const year = new Date().getFullYear();

function footer() {
  return (
    <footer className="flex flex-col">
      <div className="container m-auto flex flex-col md:flex-row items-start gap-2 md:gap-10 px-4 pb-8">
        <List title="Quick links">
          <Item text="Customer service" href={"/"} />
          <Item text="Customer portal logins" href={"/"} />
          <Item text="Strategic Partner Directory" href={"/"} />
          <Item text="Developer Tools" href={"/"} />
          <Item text="Get a Quote" href={"/"} />
          <Item text="Business account" href={"/"} />
        </List>

        <List title="Our divisions">
          <Item text="Correos express" href={"/"} />
          <Item text="Correos paq" href={"/"} />
          <Item text="Correos market" href={"/"} />
          <Item text="Correos store" href={"/"} />
        </List>

        <List title="Industry sectors">
          <Item text="Auto-mobility" href={"/"} />
          <Item text="chemicals" href={"/"} />
          <Item text="consumer" href={"/"} />
          <Item text="energy" href={"/"} />
          <Item text="engineering and manufacturing" href={"/"} />
          <Item text="life sciences and helthcare" href={"/"} />
          <Item text="public sector" href={"/"} />
          <Item text="retail" href={"/"} />
          <Item text="technology" href={"/"} />
        </List>

        <List title="Company information">
          <Item text="Our company" href={"/"} />
          <Item text="Our history" href={"/"} />
          <Item text="Our values" href={"/"} />
          <Item text="Careers" href={"/"} />
        </List>
      </div>

      <div className="container m-auto px-4">
        <SocialMedia />
      </div>

      <div className="p-8 bg-stone-100">
        <div className="container m-auto flex flex-col md:flex-row gap-8 items-start md:items-center">
          <Image
            src="/images/logo-correos.svg"
            width={50}
            height={50}
            alt="Correos logo"
          />

          <ul className="flex flex-col md:flex-row gap-4">
            <Item text="cookies policy" class="text-xs" />
            <Item text="legal notice" class="text-xs" />
            <Item text="privacy policy" class="text-xs" />
            <Item text="security alert" class="text-xs" />
            <Item text="accessibility" class="text-xs" />
          </ul>
        </div>
        <p className="container m-auto font-extralight text-xs text-start mt-8">
          {year} © Correos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default footer;
