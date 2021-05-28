import PropTypes from 'prop-types';

import styles from './ButtonIcon.module.css';

// Компонент кнопки-иконки
export default function ButtonIcon({ children, onClick, ...restProps}) {
  //const classList = [className, style.button].join(' ');
  return (
    //<button className={classList} onClick={onClick} {...restProps}></button>
    
    <button
      type="button" className={styles.ButtonIcon} onClick={onClick} {...restProps}
    >
      {children}
    </button>
  );
}

ButtonIcon.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  //className: PropTypes.element,
  'aria-label': PropTypes.string.isRequired,
};
