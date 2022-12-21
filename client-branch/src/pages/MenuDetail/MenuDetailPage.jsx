import { useEffect, useRef, useState } from 'react';
import { BsPencilSquare, BsSave, BsTrash } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import foods from '../../assets/fake-data/foods';
import styles from './MenuDetailPage.module.scss';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const MenuDetailPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef(null);
  const imageUploadRef = useRef(null);
  const navigate = useNavigate();
  const MACN = '1'; // TODO: edit later

  const [typeOptions, setTypeOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setFood({ ...food, MALAT: selectedOption.value });
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    fetch('http://localhost:5000/supplier/1').then(res => res.json()).then(d => {
      const { data: { foods } } = d;

      const food = foods.find((food) => food.MAMONAN.trim() === id);

      fetch('http://localhost:5000/food/type', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()).then((data) => {
        const options = data.types.map((type) => {
          return {
            value: type.MALAT,
            label: type.TENLAT,
          }
        });

        setFood({ ...food });
        setSelectedOption(food.MALAT ? options.find((option) => option.value === food.MALAT) : null);
        setTypeOptions(options);
        setIsLoading(false);
      });
    })
  }, [id, setFood, setIsLoading, setTypeOptions, setSelectedOption]);

  const deleteFood = () => {
    fetch('http://localhost:5000/supplier/food', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MACN,
        MAMONAN: food.MAMONAN?.trim(),
        TENMONAN: food.TENMONAN?.trim(),
        GIA: food.GIA,
        MOTA: food.MOTA?.trim(),
        HINHANHTD: food.HINHANHTD,
        TINHTRANG: 'DELETED',
        MALAT: food.MALAT?.trim(),
      })
    }).then(res => res.json()).then(d => {
      navigate('/menu');
    }).catch(err => {
      console.log(err);
    })

    setIsEditing(false);
  };

  const editFood = () => {
    setIsEditing(true);
    titleInputRef.current.focus();
  };

  const updateFood = () => {
    fetch('http://localhost:5000/supplier/food', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MACN,
        MAMONAN: food.MAMONAN?.trim(),
        TENMONAN: food.TENMONAN?.trim(),
        GIA: food.GIA,
        MOTA: food.MOTA?.trim(),
        HINHANHTD: food.HINHANHTD,
        DIACHIHINHANHTD: food.DIACHIHINHANHTD,
        TINHTRANG: food.TINHTRANG?.trim(),
        MALAT: food.MALAT?.trim(),
      })
    }).then(res => res.json()).then(d => {
      console.log(d);
    }).catch(err => {
      console.log(err);
    })

    setIsEditing(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });

    if (name === 'DIACHIHINHANHTD') {
      setFood({ ...food, [name]: value, HINHANHTD: !!value });
    } else {
      setFood({ ...food, [name]: value });
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/assets/imgs/food-detail.png" alt='food-detail' />
        <h2>Food detail</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.foodDetail}>
          <div className={styles.foodImageWrapper}>
            <img
              className={styles.foodImage}
              src={food.DIACHIHINHANHTD || 'http://yummyverse.net/images/default.png'}
              alt={food.TENMONAN}
            />
          </div>

          <div className={styles.foodDetailWrapper}>
            <input type='file' hidden ref={imageUploadRef} accept='image/*' />

            <div className={styles.inputGroup}>
              <label htmlFor='title'>Name</label>
              <input
                id='title'
                name='TENMONAN'
                onChange={onChange}
                value={food.TENMONAN}
                readOnly={!isEditing}
                ref={titleInputRef}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='price'>Price</label>
              <input
                id='price'
                name='GIA'
                onChange={onChange}
                value={food.GIA}
                readOnly={!isEditing}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='image'>Image</label>
              <input
                id='image'
                name='DIACHIHINHANHTD'
                onChange={onChange}
                readOnly={!isEditing}
                value={food.DIACHIHINHANHTD || ''}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='type'>Type</label>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={typeOptions}
                menuPortalTarget={document.body}
                isDisabled={!isEditing}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                name='MOTA'
                onChange={onChange}
                value={food.MOTA || ''}
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