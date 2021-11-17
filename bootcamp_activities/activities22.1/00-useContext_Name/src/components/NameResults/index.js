import React, { useContext } from "react";
import NameContext from "../../utils/NameContext";
import "./style.css";

function NameResults() {
  const { name, length } = useContext(NameContext);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{name}</h2>
        <p>{length}</p>
      </li>
    </ul>
  );
}
export default NameResults;
