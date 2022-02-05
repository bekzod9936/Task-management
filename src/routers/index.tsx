import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const LogIn = lazy(() => import('pages/login'));
const SignUp = lazy(() => import('pages/signup'));

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routers;
