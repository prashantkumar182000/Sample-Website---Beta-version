import { c2 } from "../assets";
import styles, { layout } from "../style";
import Button_service from "./Button_service";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Multi-Lingual <span className="text-gradient sm:block ">Support.</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Converse with your audience in their local language and take your customer engagement to the next level. Build customer confidence as you send messages in their regional language anywhere across the world.
      </p>

      <Button_service styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={c2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
