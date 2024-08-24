import { useContext } from "react";
import { NotebookPen, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "../assets/logo.png";
import AuthContext from "../context/AuthContext";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  console.log({ user });
  return (
    <nav className="bg-[#3f0c3d] border-gray-200 sticky top-0 z-[9999]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  shadow-sm">
        {/* logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-20 w-20" alt="logo" />
          <span className="self-center text-3xl text-white font-semibold whitespace-nowrap">
            Postify
          </span>
        </Link>

        {/* search bar */}
        <div className="flex relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="h-4 w-4 text-white" />
          </div>
          <input
            type="text"
            className="block w-96 py-2 px-4 ps-10 text-sm border rounded-full bg-transparent border-white placeholder-white text-white focus:outline-none"
            placeholder="Type to search "
          />
        </div>

        {/* menu */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4 text-white">
            <Link to="/create-post">
              <Button
                variant="premium"
                className="rounded-full font-semibold gap-2"
              >
                Write Post
                <NotebookPen />
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback>
                    <User className="h-6 w-6 text-gray-700" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[99999]">
                <DropdownMenuItem>
                  <p className="font-bold">{user?.username}</p>
                </DropdownMenuItem>
                <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-white">
            <Link
              to="/login"
              className="py-2 px-6 border border-gray-400 rounded-full"
            >
              Login
            </Link>
            <Link
              to="/register"
            >
              <Button
                variant="premium"
                className="rounded-full font-semibold text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
