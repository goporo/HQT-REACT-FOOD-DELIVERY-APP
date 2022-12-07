import { AiFillStar } from 'react-icons/ai';
import styles from './RatingStars.module.scss';

const RatingStars = ({ data }) => {
  return (
    <div className={styles.rating}>
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <AiFillStar
            key={index}
            className={index + 1 <= data ? styles.starLight : styles.starDark}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
