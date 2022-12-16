import { useState } from 'react';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleOnEdit = () => {
    setIsEditing(true);
  };

  const handleOnSave = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Profile</h1>
        <form className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter name' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' placeholder='Enter address' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone' placeholder='Enter phone' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='business'>Business</label>
            <input type='text' id='business' placeholder='Enter business' />
          </div>
        </form>

        <div className={styles.btns}>
          {isEditing ? (
            <button className={styles.btn} onClick={handleOnSave}>
              Save
            </button>
          ) : (
            <button className={styles.btn} onClick={handleOnEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;