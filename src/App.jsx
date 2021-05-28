import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

//import { ToastContainer } from 'react-toastify';

import routes from './routes';
import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
//import AppFooter from './components/AppFooter';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() =>
  import('./Views/HomeView' /* webpackChunkName: "home-page" */),
);
const PhoneBookView = lazy(() =>
  import('./Views/PhoneBookView' /* webpackChunkName: "Phone-book-page" */),
);
const RegisterView = lazy(() =>
  import('./Views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./Views/LoginView' /* webpackChunkName: "login-page" */),
);
const PageNotFound = lazy(() =>
  import('./Views/PageNotFound' /* webpackChunkName: "404-page-not-found" */),
);

export default function App() {
  const dispatch = useDispatch();

  // Получение текущего юзера при маунте приложения
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          
          <PublicRoute
            exact path={routes.HOME}>
            <HomeView />
          </PublicRoute>

          <PublicRoute
            path={routes.REGISTRATION}
            restricted
            redirectTo={routes.PHONEBOOK}>
            <RegisterView />
          </PublicRoute>

          <PublicRoute
            path={routes.LOGIN}
            restricted
            redirectTo={routes.PHONEBOOK}>
            <LoginView />
          </PublicRoute>

          <PrivateRoute
            path={routes.PHONEBOOK}
            redirectTo={routes.LOGIN}>
            <PhoneBookView /> 
          </PrivateRoute>          

          <PublicRoute>
            <PageNotFound />
          </PublicRoute>
          
        </Switch>
      </Suspense>

      {/* <AppFooter /> */}

      {/* <ToastContainer autoClose={2500} /> */}
    </Container>
  );
}
