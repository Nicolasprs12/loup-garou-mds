import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useGlobalStatesContext } from "../shared/context/GlobalStates";
import { requestManager } from "../config/requestFunction";
import FondAccueil from "../assets/FondAccueil.jpg";

const AccountFake = () => {
  const { userSession, informationMessage, setInformationMessage } =
    useGlobalStatesContext();

  const [isLoading, setIsLoading] = useState(true);
  const [accountInformation, setAccountInformation] = useState();
  const [modaleUpdate, setModaleUpdate] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState("");

  const fetchAccountInformation = async () => {
    try {
      const url_server = "http://localhost:4000/users/fetch";
      const response = await requestManager(url_server, "POST", userSession);
      console.log(response);
      if (response["isSuccess"]) {
        setAccountInformation(response.message);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error.message);
      setInformationMessage({
        title: "une erreur s'est produite",
        content: error.message,
      });
    }
    setIsLoading(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const url_server = "http://localhost:4000/users/update";
      const response = await requestManager(url_server, "POST", dataToUpdate);
      console.log(response);
      if (response.isSuccess) {
        setInformationMessage({
          title: "Succes",
          content: "Vos informations ont bien été modifié",
        });
        setAccountInformation(response.message);
      }
    } catch (error) {
      console.log(error.message);
      setInformationMessage({
        title: "Une erreur s'est produite",
        content: error.message,
      });
    }
    setDataToUpdate({});
  };
  useEffect(() => {
    fetchAccountInformation();
  }, []);
  return (
    <main>
      {informationMessage && (
        <div>
          <p>{informationMessage.title}</p>
          <p>{informationMessage.content}</p>
        </div>
      )}
      <div
        style={{ backgroundImage: `url(${FondAccueil})`, height: "100vh" }}
        className="flex justify-center items-center flex-col text-white">
        {/* {informationMessage && (
          <div>
            <h3>{informationMessage.title}</h3>{" "}
            <p>{informationMessage.content}</p>
          </div>
        )} */}

        {/* <button
          onClick={() => {
            console.log(accountInformation);
            console.log(Object.keys(accountInformation).length > 0);
          }}>
          Console
        </button> */}
        <h1 className="font-semibold text-xl pb-4">
          Mes informations personnelles
        </h1>
        <dic className="bg-red-500 p-8 rounded-lg">
          {accountInformation && Object.keys(accountInformation).length > 0 && (
            <div>
              <ul>
                {Object.keys(accountInformation).map((key, index) => {
                  if (key !== "_id")
                    return (
                      <li
                        className="text-xl"
                        key={index}
                        onClick={() => {
                          setModaleUpdate({
                            key: key,
                            value: accountInformation[key],
                          });
                        }}>
                        {}
                        {key} : {accountInformation[key]}{" "}
                        <button
                          onClick={() =>
                            setModaleUpdate({
                              key: key,
                              value: accountInformation[key],
                            })
                          }>
                          Changer
                        </button>
                      </li>
                    );
                })}
              </ul>
            </div>
          )}

          {modaleUpdate && (
            <div>
              <form className="pt-4" onSubmit={(e) => handleSubmitUpdate(e)}>
                <label htmlFor="update-input">
                  Modifier votre {modaleUpdate.key}
                </label>
                <input
                  onChange={(e) => {
                    setDataToUpdate({
                      id: accountInformation._id,
                      [`${modaleUpdate.key}`]: e.target.value.toLowerCase(),
                    });
                  }}
                  type="text"
                  name="update-input"
                  className="mx-4"
                  placeholder={modaleUpdate.value}
                />
                <button type="submit">Envoyer</button>
              </form>
            </div>
          )}
        </dic>
        <Link
          to={`/join`}
          className="mt-4 text-white font-bold bg-clip-border p-2.5 bg-red-600 border-7 rounded-md">
          <button> Retour </button>
        </Link>
      </div>
    </main>
  );
};

export default AccountFake;
