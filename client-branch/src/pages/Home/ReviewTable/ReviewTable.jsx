import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewRow from './ReviewRow';
import styles from './ReviewTable.module.scss';

const ReviewTable = ({ data, itemsPerPage = 5 }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePaginateClick = (e) => {
    setItemOffset((e.selected * itemsPerPage) % data.length);
  };

  if (!data) {
    return <p className={styles.empty}>There are no reviews yet.</p>;
  }

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Customer</th>
            <th>Order</th>
            <th>Comment</th>
            <th>Rating</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {currentItems.map((review, index) => (
            <ReviewRow key={index} data={review} />
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel='...'
        onPageChange={handlePaginateClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        nextLabel='Next'
        previousLabel='Previous'
        renderOnZeroPageCount={null}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        containerClassName={styles.page}
        activeClassName='active'
      />
    </>
  );
};

export default ReviewTable;
