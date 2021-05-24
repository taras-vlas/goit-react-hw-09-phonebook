import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsAuthentific } from '../../redux/auth/authSelectors';

import style from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthentific);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={style}
      unmountOnExit
    >
      {stage => {
        return (
          <header className={style.AppBar}>
            <CSSTransition
              in={stage === 'entered'}
              timeout={500}
              classNames={style}
              unmountOnExit
            >
              <Navigation />
            </CSSTransition>

            {isAuthenticated ? <UserMenu /> : <AuthNav />}
          </header>
        );
      }}
    </CSSTransition>
  );
}

// const AppBar = ({ isAuthenticated }) => (
//   <CSSTransition
//     in={true}
//     appear={true}
//     timeout={500}
//     classNames={style}
//     unmountOnExit
//   >
//     {stage => {
//       return (
//         <header className={style.AppBar}>
//           <CSSTransition
//             in={stage === 'entered'}
//             timeout={500}
//             classNames={style}
//             unmountOnExit
//           >
//             <Navigation />
//           </CSSTransition>

//           {isAuthenticated ? <UserMenu /> : <AuthNav />}
//         </header>
//       );
//     }}
//   </CSSTransition>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthentific(state),
// });

// export default connect(mapStateToProps)(AppBar);
