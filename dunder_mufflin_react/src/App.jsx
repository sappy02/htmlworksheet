import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import EmployeeBadge from "./components/EmployeeBadge";
import {workers} from "./workers";
import {managers} from "./managers";
import "./App.css";
//  -----> This is the CEOs office [Michael Scott]
function App() {
  const [content, setContent] = useState("default ");

  const [manager, setManager] = useState()
  // const content = "default"

  const [currentEmployee, setCurrentEmployee] = useState({
    name: "Pam Beecher",
    position: "Receptionist",
    image: "https://upload.wikimedia.org/wikipedia/en/6/67/Pam_Beesley.jpg",
  });

  // -----> Using a "HOOK"
  // -------> useState --- useEffect---useContext--useReducer

  const changeMyContent = () => {
    setContent("This is the new content");
  };

  const changeEOTM = (worker) => {
    setCurrentEmployee(worker);
  };

  return (
    <>
      <Navbar />

      {currentEmployee.name === "Pam Beecher" ? (
        <h1>Hey {currentEmployee.name}</h1>
      ) : (
        <h1> Welcome our new EOTM {currentEmployee.name}</h1>
      )}

      {currentEmployee.name}

      <img src={currentEmployee.image} alt="" className="profile" />

      <hr />
      <button onClick={changeMyContent}>Change Me</button>
      <button onClick={changeEOTM}>Update Employee</button>

      <hr />

      {workers.map((staff, i) => {
        return (
          <div key={i}>
            <EmployeeBadge
              name={staff.name}
              position={staff.position}
              image={staff.image}
              setEmployee={setCurrentEmployee}
            />
          </div>
        );
      })}

    </>
  );
}

export default App;
