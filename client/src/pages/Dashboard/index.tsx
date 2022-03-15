import { useState } from "react";

import { FaUsers, FaUserAlt } from "react-icons/fa";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdCatchingPokemon } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { GiChampions } from "react-icons/gi";

import "./main.css";

const Dashboard = () => {
  const [toggledActive, setToggledActive] = useState(false);
  const [buttonActive, setButtonActive] = useState("users");

  const handleToggledActive = (): void => {
    setToggledActive(!toggledActive);
  };

  const handleButtonActive = (item: string): void => {
    setButtonActive(item);
  };

  return (
    <div className={toggledActive ? "d-flex toggled" : "d-flex"} id="wrapper">
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 text-primary fs-4 fw-bold text-uppercase">
          Dashboard
        </div>

        <ul className="list-group">
          <button
            type="button"
            className={
              buttonActive === "users"
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action text-dark"
            }
            aria-current="true"
            onClick={() => handleButtonActive("users")}
          >
            <i className="me-2">
              <FaUsers />
            </i>{" "}
            Users
          </button>
          <button
            type="button"
            className={
              buttonActive === "pokemon"
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action text-dark"
            }
            aria-current="true"
            onClick={() => handleButtonActive("pokemon")}
          >
            <i className="me-2">
              <MdCatchingPokemon />
            </i>{" "}
            Pokemon
          </button>
          <button
            type="button"
            className={
              buttonActive === "leagues"
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action text-dark"
            }
            aria-current="true"
            onClick={() => handleButtonActive("leagues")}
          >
            <i className="me-2">
              <GiChampions />
            </i>{" "}
            Leagues
          </button>
          <button
            type="button"
            className={
              buttonActive === "pokedex"
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action text-dark"
            }
            aria-current="true"
            onClick={() => handleButtonActive("pokedex")}
          >
            <i className="me-2">
              <IoMdPhonePortrait />
            </i>{" "}
            Pokedex
          </button>
        </ul>
      </div>

      <div className="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              id="menu-toggle"
              className="text-primary fs-4 me-3"
              onClick={handleToggledActive}
            >
              <AiOutlineAlignLeft />
            </i>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <i className="me-2">
                <FaUserAlt />
              </i>{" "}
              ChichaDios
            </ul>
          </div>
        </nav>

        <div className="container-fluid px-4">
          <div className="row g-3 my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
