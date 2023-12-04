import "./App.css";

import { GiCardBurn } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";
import { VscWholeWord } from "react-icons/vsc";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
        <h1 className="mb-5 text-3xl text-pink-500">Mini-Gamies</h1>
        <div className="grid h-52 w-64 grid-cols-2 justify-items-center gap-5">
          <Link
            to="/card-match"
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-300 hover:animate-pulse hover:bg-white hover:bg-opacity-80"
          >
            <GiCardBurn size={70} />
          </Link>
          <Link
            to="/tic-tac-toe"
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-300 hover:animate-pulse hover:bg-white hover:bg-opacity-80"
          >
            <CiMedicalCross size={70} />
          </Link>
          <Link
            to="/word-search"
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-300 hover:animate-pulse hover:bg-white hover:bg-opacity-80"
          >
            <VscWholeWord size={70} />
          </Link>
          <Link
            to="/trivia"
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-300 hover:animate-pulse hover:bg-white hover:bg-opacity-80"
          >
            <FaQuestion size={70} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
