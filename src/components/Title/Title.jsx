import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Title.module.scss';

// Компонент заголовка для сторінок
const Title = ({ children }) => {
// export default function Title({ children }) {      // або use функціональний підхід
  
  const itemRef = createRef(null);

  return (
    <CSSTransition 
      in={true}
      appear={true}
      timeout={250}
      classNames={styles}
      nodeRef={itemRef}
    >
      <div className={styles.container}>
        <h1 className={styles.title} ref={itemRef}>
          {children}
        </h1>
      </div>
    </CSSTransition>
  );
};

Title.defaultProps = {
  children: [],
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
