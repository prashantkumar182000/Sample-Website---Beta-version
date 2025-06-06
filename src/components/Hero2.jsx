import styles from "../style";
import { discount, whatsapp, shield } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/**<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */ }

        {/**<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={shield} alt="discount" className="w-[21px] h-[21px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Sign up</span> to recieve{" "}
            <span className="text-white">1000</span> free credits
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">WhatsApp</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 mt-12">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[38px] text-[32px] text-white ss:leading-[50.8px] leading-[75px] w-full">
          Next Generation Messaging
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
        Reach your customers globally with quick, scalable, and customizable message. Integrate our developer-friendly SMS API to send and receive text messages. Our distributed carrier network and intelligent routing ensure the highest delivery and lowest latency.        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={whatsapp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
