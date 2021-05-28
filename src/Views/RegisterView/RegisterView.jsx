import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import RegisterForm from '../../components/RegisterForm';
import Loader from '../../components/Loader';

// Компонент страницы регистрации
export default function RegisterView() {
  const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Register contact | Phonebook';
  }, []);

  return (
    <main>
      <Title>Register contact in Phonebook</Title>

      <RegisterForm />

      {isLoading && <Loader />}
    </main>
  );
}
