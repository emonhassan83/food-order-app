import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-2xl mx-auto mt-8 text-gray-500 flex flex-col gap-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            amet enim beatae hic quos ipsam nulla, natus tempora aut eveniet
            optio voluptas repellendus quibusdam veniam velit rerum nostrum
            dolor rem eos, quod ex consectetur! Culpa, impedit eaque!{" "}
          </p>
          <p>
            Molestias voluptatibus quod doloremque, voluptate sed aliquid, nam
            officiis minus fuga dolorum tempora atque nulla. Sapiente quia,
            nulla voluptas fuga maxime non dicta dolorum ratione doloremque
            nostrum sit accusamus eius alias laboriosam quis?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eius quo ut eligendi voluptatum culpa?
          </p>
        </div>
      </section>

      <section className="text-center my-8" id="contact">
        <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a className="text-2xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-8">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
