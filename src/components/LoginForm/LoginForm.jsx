// import { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import TextField from "@material-ui/core/TextField";

// import { authOperations } from '../../redux/auth/';
// //import styles from './LoginForm.module.scss';
// import styles from '../HookForm/HookForm.module.scss';

// const initialState = {
//   email: '',
//   password: '',
// };

// const LoginForm = ({ onLogin }) => {
//   const [state, setState] = useState(initialState);
//   const { email, password } = state;

//   const handleChange = event => {
//     const { name, value } = event.target;

//     setState(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     onLogin(state);

//     resetForm();
//   };

//   const resetForm = () => {
//     setState(initialState);
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
      
//       {/* <label className={styles.label}>
//         <span className={styles.text}>Email</span>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           className={styles.input}
//           placeholder="Your e-mail"
//           aria-label="Input for your email"
//           required
//         />
//       </label> */}

//         < div className={styles.HeaderWrapper}>
//           {/* <h3>Find contacts by name</h3> */}
//           <TextField
//             label = "Email"       // Фільтрувати:  placeholder="Contact name"
//             onChange={handleChange}  //{() => handleChange({})}
//             value={email}                   //{this.state.name}
//             // className={styles.input}
//             type="email"
//             name="email"
//             aria-label="Input for your Email"
//             placeholder="Should be your Email"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             //disabled={isLoading}
//             required
//           />
//         </div>

//       {/* <label className={styles.label}>
//         <span className={styles.text}>Password</span>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           className={styles.input}
//           placeholder="Your password"
//           aria-label="Input for your password"
//           required
//         />
//       </label> */}

//         < div className={styles.HeaderWrapper}>
//           {/* <h3>Find contacts by name</h3> */}
//           <TextField
//             label = "Password"       // Фільтрувати:  placeholder="Contact name"
//             onChange={handleChange}  //{() => handleChange({})}
//             value={password}                   //{this.state.name}
//             // className={styles.input}
//             type="password"
//             name="password"            
//             aria-label="Input for your password"
//             placeholder="Your password"
//             // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             //disabled={isLoading}
//             required
//           />
//         </div>

//       <div className={styles.container}>
//         <button type="submit" className={styles.button}>
//           Log in
//         </button>
//       </div>

//     </form>
//   );
// };


// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginForm);


// LoginForm.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };










// import { useState } from 'react';         /*** рефакторинг на хуки*/
import { useState, useCallback } from 'react';           /*** рефакторинг на хуки*/
import { useSelector, useDispatch } from 'react-redux';  /*** рефакторинг на хуки*/
// import { connect } from 'react-redux';   /*** рефакторинг на хуки*/
// import PropTypes from 'prop-types';      /*** рефакторинг на хуки*/
import TextField from "@material-ui/core/TextField";

import { authOperations, authSelectors } from '../../redux/auth/';
import styles from '../HookForm/HookForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

// Компонент форми авторизації
const LoginForm = () => {   //const LoginForm = ({ onLogin }) => {    /*** рефакторинг на хуки*/
//export default function LoginForm() {   // або use функціональний підхід
  const [state, setState] = useState(initialState);
  const { email, password } = state;



  const isLoading = useSelector(authSelectors.getLoading);  /*** рефакторинг на хуки*/  // Селектор статуса загрузки

  const dispatch = useDispatch();   /*** рефакторинг на хуки*/

  // dispatch операцію входу + useCallback
  const onLogin = useCallback(     /*** рефакторинг на хуки*/
    // (state) => {    //   (email, password) => {
    //   dispatch(authOperations.logIn(state));  //   (email, password) 
    (email, password) => {    //   (email, password) => {
      dispatch(authOperations.logIn(email, password) );  //   (email, password) 
    },
    [dispatch],
  );



  const handleChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onLogin(state);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      
      {/* <label className={styles.label}>
        <span className={styles.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          required
        />
      </label> */}

        < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
            label = "Email"       // Фільтрувати:  placeholder="Contact name"
            onChange={handleChange}  //{() => handleChange({})}
            value={email}                   //{this.state.name}
            // className={styles.input}
            type="email"
            name="email"
            aria-label="Input for your Email"
            placeholder="Should be your Email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              disabled={isLoading}
            required
          />
        </div>

      {/* <label className={styles.label}>
        <span className={styles.text}>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={styles.input}
          placeholder="Your password"
          aria-label="Input for your password"
          required
        />
      </label> */}

        < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
            label = "Password"       // Фільтрувати:  placeholder="Contact name"
            onChange={handleChange}  //{() => handleChange({})}
            value={password}                   //{this.state.name}
            // className={styles.input}
            type="password"
            name="password"            
            aria-label="Input for your password"
            placeholder="Your password"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              disabled={isLoading}
            required
          />
        </div>

      <div className={styles.container}>
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </div>

    </form>
  );
};


// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginForm);
export default LoginForm;

// LoginForm.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };