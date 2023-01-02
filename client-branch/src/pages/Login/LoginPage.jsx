import styles from './LoginPage.module.scss';
import { useState } from 'react';

const LoginPage = () => {
  const [data, setData] = useState({
    TENTK: '',
    MATKHAUTK: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()).then((data) => {
      console.log(data);
    });
  }

  return <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.imageWrapper}>
        <img src='/assets/imgs/loginP.jpg' alt='login' className={styles.image} />
      </div>
    </div>

    <div className={styles.right}>
      <h1 className={styles.title}>Log in</h1>

      <form className={styles.form} onSubmit={login}>
        <div className={styles.inputGroup}>
          <label htmlFor='TENTK'>Username</label>
          <input type='text' id='TENTK' value={data.TENTK} onChange={handleChange} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='MATKHAUTK'>Password</label>
          <input type='password' id='MATKHAUTK' value={data.MATKHAUTK} onChange={handleChange} />
        </div>

        <button className={styles.button} type='submit'>Log in</button>
      </form>

      <div className={styles.register}>
        <p>
          Don't have an account?{' '}
          <a href='#'>Register</a>
        </p>
      </div>
    </div>
  </div>;
}

export default LoginPage;