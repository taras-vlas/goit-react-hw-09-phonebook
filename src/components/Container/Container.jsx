import PropTypes from 'prop-types';
import styles from './Container.module.scss';

// Компонент контейнера
const Container = ({ children }) => {
//export default function Container({ children }) {     // або use функціональний підхід
  
  return (
  
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};