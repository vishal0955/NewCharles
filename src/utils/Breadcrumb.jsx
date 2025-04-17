import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
// import { cn } from "@/utils/cn"; // Optional: Classname utility function

const  BreadcrumbCustom =() => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const pathSegments = location.split("/").filter((segment) => segment !== "");

  // Create Breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => ({
    label: segment,
    path: `/${pathSegments.slice(0, index + 1).join("/")}`,
  }));

  return (
    <div className="p-2 flex items-center gap-2 text-gray-700">
      {/* Back & Forward Navigation */}
      <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => window.history.forward()} className="p-1 hover:bg-gray-100 rounded">
        <ChevronRight size={18} />
      </button>

      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm">
        <Link to="/" className="text-indigo-600 hover:underline">Home</Link>
        {breadcrumbItems.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {index !== breadcrumbItems.length - 1 ? (
              <Link to={item.path} className="text-indigo-600 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}

export default BreadcrumbCustom;
