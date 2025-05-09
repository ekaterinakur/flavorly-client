import styles from './FieldError.module.scss';

const FieldError = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default FieldError;
