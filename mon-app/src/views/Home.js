import React from "react";
// import ButtonComponent from "../components/ButtonComponent";
import FondAccueil from "../assets/FondAccueil.jpg";
import HeaderHome from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import RulesModal from "../components/Rules";
import { useGlobalStatesContext } from "../shared/context/GlobalStates";


const Home = () => {
  const { userSession} =
    useGlobalStatesContext();
  return (
    <div
      style={{ backgroundImage: `url(${FondAccueil})`, height: "100vh" }}
      className="flex justify-center items-center flex-col">
      <h1 className="text-white text-8xl font-bold mb-8">
        LOUPS GAROU ONLINE
      </h1>
      <RulesModal />
      {userSession &&
        <Link
          to={`/join`}
          className="mt-4 text-white font-bold bg-clip-border p-2.5 bg-red-600 border-7 rounded-md">
          <button> Rejoindre </button>
        </Link>
      }
    </div>
  );
};

export default Home;
