import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './Card.module.scss';

const Card = ({ title, children, className }) => {
  return (
    <section className={`${styles.card} ${className || ''}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <div className={styles.cardOptions}>
          <BsThreeDotsVertical className={styles.cardOptionsIcon} />
        </div>
      </div>

      <div className={styles.cardBody}>{children}</div>
    </section>
  );
};

export default Card;
