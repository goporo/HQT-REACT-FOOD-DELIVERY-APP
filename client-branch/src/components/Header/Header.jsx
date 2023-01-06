import { IoLocationSharp } from 'react-icons/io5';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const MACN = 1;

function Header() {
  const [selectedStatusOption, setSelectedStatusOption] = useState(null);
  const [shopInfo, setShopInfo] = useState(null);

  const statusOptions = [
    {
      value: 'AVAILABLE',
      label: 'Opening'
    },
    {
      value: 'LOCKED',
      label: 'Closed'
    }
  ]

  useEffect(() => {
    axios.put('http://localhost:5000/user/profile/3', {
      MAND: MACN,
    }).then(res => {
      if (!res.data.success) {
        return;
      }

      const status = res.data.data[0].TINHTRANGCH.toUpperCase().trim();

      setShopInfo({
        TENCH: res.data.data[0].TENCH,
        TG_HD_MO: res.data.data[0].TG_HD_MO,
        TG_HD_DONG: res.data.data[0].TG_HD_DONG,
      });

      if (status === 'AVAILABLE') {
        setSelectedStatusOption(statusOptions[0]);
      } else if (status === 'LOCKED') {
        setSelectedStatusOption(statusOptions[1]);
      }
    })
  }, [setSelectedStatusOption]);

  const handleStatusChange = (selectedOption) => {
    axios.patch('http://localhost:5000/supplier/shop', {
      ...shopInfo,
      TINHTRANGCH: selectedOption.value,
      MACN
    }).then(res => {
      if (res.data.success) {
        setSelectedStatusOption(selectedOption);
      }
    })
  }

  return (
    <header className={styles.header}>
      <div className={styles.location}>
        <input type='text' className={styles.locationInput} />
        <IoLocationSharp className={styles.locationIcon} />
      </div>

      <div className={styles.account}>
        <div className={styles.accountWrapper}>
          <p className={styles.accountName}>Bún bò Thanh Hằng</p>
          <span className={styles.accountBranchName}>Chi nhánh Thành Thái</span>
        </div>

        <div className={styles.accountAvatarBox}>
          <img
            src='https://i.pravatar.cc/300'
            alt='Avatar'
            className={styles.accountAvatar}
          />
        </div>
      </div>

      <div className={styles.status}>
        <Select
          value={selectedStatusOption}
          onChange={handleStatusChange}
          options={statusOptions}
        />
      </div>
    </header>
  );
}

export default Header;
