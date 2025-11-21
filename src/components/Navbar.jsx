import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NewsNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/newsapp" },
    { name: "Trending", path: "/newsapp/trending" },
    { name: "Politics", path: "/newsapp/politics" },
    { name: "Sports", path: "/newsapp/sports" },
    { name: "Technology", path: "/newsapp/technology" },
    { name: "Entertainment", path: "/newsapp/entertainment" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">
          News<span className="text-gray-800">Hub</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.path)}
              className="hover:text-red-600 transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search news..."
            className="px-3 py-2 w-56 border rounded-md outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                navigate(link.path);
                setOpen(false);
              }}
              className="block w-full text-left py-2 font-medium text-gray-700 hover:text-red-600"
            >
              {link.name}
            </button>
          ))}

          <input
            type="text"
            placeholder="Search news..."
            className="mt-3 px-3 py-2 w-full border rounded-md outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
    </nav>
  );
}
