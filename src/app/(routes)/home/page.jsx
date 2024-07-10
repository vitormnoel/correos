import Title from "../../../components/title.jsx";
import Banner from "../../../components/banner.jsx";
import InfoCard from "../../../components/info_card.jsx";
import Card from "../../../components/card.jsx";
import Info from "../../../components/info.jsx";

function homePage() {
  return (
    <>
      <Banner
        image="/images/test.svg"
        text="Wheter it's for a move, a gift, or any other occasion, make your
            shipments easy and cost-effective to ensure they arrive at their
            destination on time."
        button="learn more"
      />

      <section className="my-20 px-8 md:container m-auto">
        <Title h2="Quick Access" classTitle="mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <InfoCard
            image="/images/sections/3.svg"
            title="Customs Management"
            text="Find out how to complete the customs formalities you need."
            button="more info"
            href=""
          />
          <InfoCard
            image="/images/sections/2.svg"
            title="DGT Procedures"
            text="Carry out your DGT procedures online easeily and simply or visit any of our offices."
            button="more info"
            href=""
          />
          <InfoCard
            image="/images/sections/3.svg"
            title="Administrative Procedures"
            text="Carry out your procedures quiclkly and securely."
            button="more info"
            href=""
          />
        </div>
      </section>

      <section >
        <Info
          title="Online store"
          text="Buy everything you need online for your postal deliveries (envelopes, packaging, stamps, etc). We also offer Correos merchandise, products for stamp collectors, and gifts to delight your loved ones."
          image="/images/sections/store.svg"
          class="flex flex-row-reverse gap-10 items-center"
          div="justify-center hidden md:flex"
          button="more info"
          href=""
        />
      </section>

      <section className="my-20 flex flex-col gap-20 px-8 md:container m-auto">
        <Card
          image="/images/sections/company.jpg"
          subtitle="Company"
          title="Correos for your business"
          text="Power your small and medium-sixed business success with our shipment and logistics. Our team of experts can help you address the ever changing need or your customers."
          imageLeft="-"
          button="explore our solutions"
          href=""
        />

        <Card
          image="/images/sections/shippers.jpg"
          subtitle="For all shippers"
          title="Documents shipping"
          text="Send your documents quickly and securely with Correos. We offer a wide range of services to meet your needs."
          imageRight="-"
          button="explore our services"
          href=""
        />

        <Card
          image="/images/sections/container.jpg"
          subtitle="Business only"
          title="Cargo shipping"
          text="Discover shipping and logistics service options from Correos Global Forwarding."
          imageLeft="-"
          button="explore our services"
          href=""
        />

        <Info
          image="/images/sections/blog.jpg"
          classImage="w-[100vw]"
          title="Stay up to date"
          classTitle="mt-6"
          text="The latest news and updates from Correos. At blog.correos.es we don't want you to miss out on anything. That's why we offer you a space where you can find all the information you need about news, launches, services, and tips about our serices. Take a look!"
          button="visit our blog"
          href=""
        />
      </section>
    </>
  );
}

export default homePage;
