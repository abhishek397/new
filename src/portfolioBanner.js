import Head from "next/head";
import Image from "next/image";
import Img from "./images/portfolio-banner.fad1379a.jpg";
import Php from "./images/php-logo.png";
export default function PortfolioBanner() {
  return (
    <section className="internal-banner banner">
      <img src={Img} alt="" className="img-responsive" />
      <div className="overlay-banner">
        <h1>
          <span>
            <img src={Php} alt="php-icon" />
          </span>
        </h1>
        <h2>
          We <span>Create </span>
          And Customize Applications To Enhance
          <span>User Experience</span>
        </h2>
        <p>
          We are superior at creating, designing and implementation of web
          technologies
        </p>
        <h6>
          <a
            className="hvr-sweep-to-right hvr-wobble-vertical"
            target="new"
            href="/hire-dedicated-developer/"
          >
            Hire Dedicated Developers <span className="arrowRight"></span>
          </a>
          <a
            className="hvr-sweep-to-right hvr-wobble-vertical portfolio"
            href="/contact"
          >
            Contact Us <span className="arrowRight"></span>
          </a>
        </h6>
      </div>
    </section>
  );
}
