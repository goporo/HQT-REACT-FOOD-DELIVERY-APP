import Modal from 'react-modal';
import styles from './AddFoodModal.module.scss';
import Select from 'react-select';
import { useState, useEffect } from "react";

const AddFoodModal = ({ isOpen, setIsOpen }) => {
    const [food, setFood] = useState({
        TENMONAN: '',
        GIA: 40000,
        MOTA: '',
        HINHANHTD: false,
        DIACHIHINHANHTD: '',
        MALAT: null,
    });

    const [typeOptions, setTypeOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === 'DIACHIHINHANHTD') {
            setFood({ ...food, [name]: value, HINHANHTD: !!value });
        } else {
            setFood({ ...food, [name]: value });
        }
    };

    const handleSelectChange = (selectedOption) => {
        setFood({ ...food, MALAT: selectedOption.value });
        setSelectedOption(selectedOption);
    };

    const handleOnAdd = async () => {
        const response = await fetch('http://localhost:5000/supplier/food/1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(food),
        })

        const data = await response.json();

        if (data.success) {
            setIsOpen(false, true);

            setFood({
                TENMONAN: '',
                GIA: 40000,
                MOTA: '',
                HINHANHTD: false,
                DIACHIHINHANHTD: '',
                MALAT: null,
            });
        } else {
            alert(data.message);
        }
    };

    useEffect(() => {
        if (isOpen) {
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

                setFood({ ...food, MALAT: options[0].value });
                setTypeOptions(options);
            });
        }
    }, [isOpen, setTypeOptions]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }
            }}
            contentLabel="Add Modal"
        >
            <div className={styles.container}>
                {
                    food.HINHANHTD && (
                        <div className={styles.imageWrapper}>
                            <img
                                className={styles.foodImage}
                                src={food.DIACHIHINHANHTD}
                                alt={food.TENMONAN}
                            />
                        </div>
                    )
                }

                <div>
                    <h2 className={styles.heading}>Add Food</h2>

                    <div className={styles.inputGroup}>
                        <label htmlFor='title'>Name</label>
                        <input
                            id='title'
                            name='TENMONAN'
                            onChange={onChange}
                            value={food.TENMONAN}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor='price'>Price</label>
                        <input
                            id='price'
                            name='GIA'
                            onChange={onChange}
                            value={food.GIA}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor='image'>Image</label>
                        <input
                            id='image'
                            name='DIACHIHINHANHTD'
                            onChange={onChange}
                            value={food.DIACHIHINHANHTD}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor='type'>Type</label>
                        <Select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            options={typeOptions}
                            menuPortalTarget={document.body}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            id='description'
                            name='MOTA'
                            onChange={onChange}
                            value={food.MOTA || ''}
                        />
                    </div>

                    <div className={styles.buttonGroup}>
                        <button className={styles.button} onClick={handleOnAdd}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </Modal >
    )
}

export default AddFoodModal;