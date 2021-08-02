import { useEffect } from 'react';                /*** рефакторинг на хуки*/
import { useSelector } from 'react-redux';        /*** рефакторинг на хуки*/

import { authSelectors } from '../../redux/auth'; /*** рефакторинг на хуки*/

import Title from '../../components/Title';
import RegistrationForm from '../../components/RegistrationForm';
import Loader from '../../components/Loader';  /*** рефакторинг на хуки*/

// Компонент сторінки реєстрації
const RegistrationPage = () => {
//export default function RegisterPage() {  // або use функціональний підхід 
  const isLoading = useSelector(authSelectors.getIsAuthenticated); /*** рефакторинг на хуки*/ // Селектор статуса загрузки з контактів


  /* 
   *  Схожий на componentDidMount и componentDidUpdate:
   */
  useEffect(() => {
    // Оновлює назву докуммента, використовуючи API браузера
    document.title = 'Create account | Phonebook';
  }  , []  );     // Сетить title строрінки при маунті компонента


  return ( 
    <main>
      <Title>Create your account</Title>

      <RegistrationForm />

      {isLoading && <Loader> L-OOO-G Reg</Loader>}
    </main>
  );
}

export default RegistrationPage;
