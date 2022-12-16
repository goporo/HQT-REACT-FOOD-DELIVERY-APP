import { useEffect, useRef, useState } from 'react';
import { BsPencilSquare, BsSave, BsTrash } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import foods from '../../assets/fake-data/foods';
import styles from './MenuDetailPage.module.scss';

const MenuDetailPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef(null);
  const imageUploadRef = useRef(null);

  useEffect(() => {
    const food = foods.find((food) => food.id === id);
    setFood(food);
    setIsLoading(false);
  }, [id, setFood, setIsLoading]);

  const deleteFood = () => {
    console.log('delete');
  };

  const editFood = () => {
    setIsEditing(true);
    titleInputRef.current.focus();
    console.log('edit');
  };

  const updateFood = () => {
    setIsEditing(false);
    console.log('update');
  };

  const onImageClick = () => {
    console.log('image clicked');

    imageUploadRef.current.click();

    imageUploadRef.current.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFood({ ...food, image: reader.result });
      };

      reader.readAsDataURL(file);
    };
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src='/assets/imgs/food-detail.png' alt='food-detail' />
        <h2>Food detail</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.foodDetail}>
          <div className={styles.foodImageWrapper}>
            <img
              className={styles.foodImage}
              src={food.image}
              alt={food.title}
            />
            {isEditing && (
              <div className={styles.overlay} onClick={onImageClick}>
                <BsPencilSquare className={styles.overlayBtnIcon} />
              </div>
            )}
          </div>

          <div className={styles.foodDetailWrapper}>
            <input type='file' hidden ref={imageUploadRef} accept='image/*' />

            <div className={styles.inputGroup}>
              <label htmlFor='title'>Name</label>
              <input
                id='title'
                name='title'
                onChange={onChange}
                value={food.title}
                readOnly={!isEditing}
                ref={titleInputRef}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='price'>Price</label>
              <input
                id='price'
                name='price'
                onChange={onChange}
                value={food.price}
                readOnly={!isEditing}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='rating'>Rating</label>
              <input id='rating' readOnly={true} value={food.rating} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                name='description'
                onChange={onChange}
                value={food.description}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className={styles.btns}>
          {isEditing ? (
            <button onClick={updateFood}>
              <BsSave className={styles.btnIcon} />
            </button>
          ) : (
            <button onClick={editFood}>
              <BsPencilSquare className={styles.btnIcon} />
            </button>
          )}

          <button onClick={deleteFood}>
            <BsTrash className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailPage;