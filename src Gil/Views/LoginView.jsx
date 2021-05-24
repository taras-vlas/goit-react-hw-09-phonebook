import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';

import Button from '../components/UI/Button';
import style from '../styles/AuthForm.module.css';
import Section from '../components/UI/Section';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(logIn({ email, password }));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onLogin();

    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Login to Phonebook">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Login</Button>
      </form>
    </Section>
  );
}





// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <Section title="Sing in to Phonebook">
//         <form onSubmit={this.handleSubmit} autoComplete="off">
//           <label className={style.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={style.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button type="submit">Sing in</Button>
//         </form>
//       </Section>
//     );
//   }
// }

LoginView.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

// const mapDispatchToProps = {
//   onLogin: logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
