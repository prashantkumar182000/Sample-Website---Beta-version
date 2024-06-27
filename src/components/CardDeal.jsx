import { c1 } from "../assets";
import styles, { layout } from "../style";
import Button_service from "./Button_service";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Reliable, Scalable, and Feature-Rich <span className="text-gradient sm:block ">SMS API.</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Available in all programming languages, integration with our SMS API for developers is quick, easy, and seamless. Built for developers by developers, explore quick-start guides, code snippets, SDKs, and more.
      </p>

      <Button_service styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={c1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
