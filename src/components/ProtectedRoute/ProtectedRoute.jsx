import { Navigate } from "react-router-dom";

function ProtectedRoute({ loggiedIn, element }) {
	if (!loggiedIn) {
		return <Navigate to="/" />;
	}

	return element;
}

export default ProtectedRoute;