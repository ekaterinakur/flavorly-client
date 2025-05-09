import styles from './Spinner.module.scss';

const Spinner = ({ size = '48px' }) => {
  return <div className={styles.spinner} style={{ width: size }}></div>;
};

export default Spinner;
