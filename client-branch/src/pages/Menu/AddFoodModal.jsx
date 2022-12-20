import Modal from 'react-modal';
import styles from './AddFoodModal.module.scss';
import { useState } from "react";

const AddFoodModal = ({ isOpen, setIsOpen }) => {
    const [food, setFood] = useState({
        TENMONAN: '',
        GIA: '',
        MOTA: '',
        HINHANHTD: false,
        MALAT: '1',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFood({ ...food, [name]: value });
    };

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
            <div>
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
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        name='MOTA'
                        onChange={onChange}
                        value={food.MOTA}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default AddFoodModal;