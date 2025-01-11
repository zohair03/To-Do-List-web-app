import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function ToDoItem(props) {
  const [isDone, setDone] = useState(false);

  function handleClick() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="listAndDelete">
      <li
        onClick={handleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.item}
      </li>
      <DeleteOutlineIcon onClick={() => props.handleDelete(props.id)} />
    </div>
  );
}

export default ToDoItem;
