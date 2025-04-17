import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const userRole = localStorage.getItem("userRole");

    if (!userRole) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/not-found" />;
    }

    return children;
};

export default ProtectedRoute;
