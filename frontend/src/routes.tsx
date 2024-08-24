import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { Loading } from './components/Loading'

const HomePage = lazy(() => import("./pages/Home"))
const LoginPage = lazy(() => import("./pages/Login"))
const RegisterPage = lazy(() => import("./pages/Register"))


const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes
