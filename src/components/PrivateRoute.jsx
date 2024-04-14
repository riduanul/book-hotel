// PrivateRoute.js
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
  
    return (
      <Route
        {...rest}
        element={auth.isAuthenticated ? children : <Navigate to="/login" replace />}
      />
    );
}

export default PrivateRoute;
