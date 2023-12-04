import React from "react";
import { Link } from "react-router-dom";

const Tictactoe = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <h1 className="absolute top-12 mb-5 text-3xl text-pink-500 md:top-24">
        <Link to="/">Mini-Gamies</Link>
      </h1>
      <span>Tic-tac-toe</span>
    </div>
  );
};

export default Tictactoe;
