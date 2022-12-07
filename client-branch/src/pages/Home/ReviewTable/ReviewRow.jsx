import RatingStars from 'components/RatingStars/RatingStars';
import styles from './ReviewTable.module.scss';

const ReviewRow = ({ data }) => {
  return (
    <tr className={styles.tableRow}>
      <td>
        <div className={styles.customer}>
          <img
            className={styles.avatar}
            src={data.customer.avatar}
            alt='Avatar'
          />
          <p className={styles.name}>{data.customer.name}</p>
        </div>
      </td>
      <td className={styles.order}>{data.order}</td>
      <td className={styles.comment}>{data.comment}</td>
      <td>
        <RatingStars data={data.rating} />
      </td>
      <td className={styles.date}>{data.date}</td>
    </tr>
  );
};

export default ReviewRow;
