import FilteredCardList from "../../cardlists/FilteredCardList";
import styles from "./Categories.module.scss"


export default function Donation() {

  return (
    <section className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Донати на ЗСУ</h1>
      <p className={styles.cardsSectionText}>Цільові донати, що направляються на потреби військових підрозділів Збройних Сил України</p>

      <FilteredCardList property="category" value="Донат"/>

    </section>
  );
}
