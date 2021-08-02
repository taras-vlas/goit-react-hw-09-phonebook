import { useEffect } from 'react';                /*** рефакторинг на хуки*/
import { useSelector } from 'react-redux';        /*** рефакторинг на хуки*/

import { authSelectors } from '../../redux/auth'; /*** рефакторинг на хуки*/

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';
import Loader from '../../components/Loader';

// Компонент сторінки автозирації
const LoginPage = () => {
//export default function LoginPage() {   // або use функціональний підхід 
  const isLoading = useSelector(authSelectors.getLoading); /*** рефакторинг на хуки*/ // Селектор статуса загрузки з контактів
  

  /* 
   *  Схожий на componentDidMount и componentDidUpdate:
   */
  useEffect(() => {
    // Оновлює назву докуммента, використовуючи API браузера
    document.title = 'Log in to App .';
  }  , []  );     // Сетить title строрінки при маунті компонента

  
  return (
    <main>
      <Title>Log in to Phonebook</Title>  

      <LoginForm />

      {isLoading && <Loader> L-OOO-G </Loader>}  
    </main>
  );
}

export default LoginPage;

