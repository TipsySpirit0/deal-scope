import ContactForm from "./Contactform";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="container flex items-center text-black flex-col p-3">
        <h1 className="font-roboto m-3 border-b w-fit border-black text-2xl font-bold">
          About Dealscope
        </h1>
        <p>
          Welcome to DealScope, your trusted platform for comparing prices
          across multiple e-commerce websites in one place.
          <br />
          We understand how time-consuming and frustrating it can be to jump
          between different online stores looking for the best deal. That's why
          we created this platform — to simplify your shopping experience and
          help you save both time and money.
          <br /> <br />
          Our system automatically collects and updates product prices from
          leading e-commerce websites like Jumia, Slot, and Jiji, using advanced
          web scraping technology. With just a few clicks, you can:
          <br />
          1. Compare prices for the same product across different vendors
          <br />
          2. View product details such as descriptions, images, and
          specifications
          <br />
          3. Find the best deals available online
          <br />
          Whether you're shopping for gadgets, electronics, or household items,
          SmartPrice empowers you to make informed decisions without the hassle.
          <br />
          <br />
          Our mission is to provide you with a seamless and efficient shopping
          experience. We are constantly working to expand our database and
          improve our services to meet your needs.
          <br />
          <br />
          Have any issues? Contact us below
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
