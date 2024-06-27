import { c3 } from "../assets";
import styles, { layout } from "../style";
import Button_service from "./Button_service";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Enhanced <span className="text-gradient sm:block ">Analytics</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Real-time graphical view for monitoring and troubleshooting.Optimize your SMS delivery, measure the effectiveness of your campaigns, and improve ROI. Always be in the know which messages customers have received and which are missed.
      </p>

      <Button_service styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={c3} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
