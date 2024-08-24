import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookOpenCheck } from "lucide-react";
import TypewriterComponents from "typewriter-effect";

import { Button } from "./ui/button";
import AuthContext from "@/context/AuthContext";
import { ResizableImages } from "./ResizableImages";

export const Hero = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="mx-auto max-w-screen-xl w-full font-bold py-36 text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1 className="text-[#3f093d]">Your Daily Dose of Inspiration</h1>
        <div className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponents
            options={{
              strings: [
                "Tech & Innovation",
                "Lifestyle & Wellness",
                "Creative Inspirations",
                "Personal Stories",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-normal text-gray-700 my-4">
        At <span className="text-pink-600 font-bold">Postify</span>, we believe
        in the power of stories to ignite imaginations, foster connections, and
        inspire change. Every post you find here is crafted with love, passion,
        and a deep understanding of what it means to live in a world that's
        constantly evolving.
      </div>
      <Link to={isAuthenticated ? "/all-posts" : "/register"}>
        <Button
          variant="premium"
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold gap-2 mb-4"
        >
          Start Reading
          <BookOpenCheck />
        </Button>
      </Link>
      <div className="flex w-full flex-wrap text-left items-center justify-center mt-8">
        <div className="md:w-1/2 w-full flex flex-col justify-start items-start p-8">
          <h1 className="text-4xl font-bold">Dive Into the</h1>
          <h1 className="text-5xl font-bold h-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Extraordinary
          </h1>
          <p className="text-sm md:text-xl font-normal text-gray-700">
            In a sea of ordinary, we strive to stand out. Whether you're seeking
            fresh perspectives on technology, heartfelt personal reflections, or
            innovative ideas that push boundaries, our blog has something for
            everyone. Each article is designed to leave a lasting
            impression—challenging your thoughts, sparking curiosity, and
            fueling your creativity.
          </p>
        </div>
        <div className="md:w-1/2 w-full h-96">
          <ResizableImages />
        </div>
      </div>
    </div>
  );
};
