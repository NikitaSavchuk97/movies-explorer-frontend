import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ element }) {
  const { loggedIn } = useSelector((state) => state.loggedSlice);

  if (!loggedIn) {
    return <Navigate to='/' />;
  }

  return element;
}

export default ProtectedRoute;