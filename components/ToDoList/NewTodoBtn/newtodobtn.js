"use client";

import { useState } from "react";
import { EditToDo } from "../ToDo/todolrg";
import styles from "./newtodobtn.module.css";

export default function NewToDoBtn() {
  const [add, setAdd] = useState(false);

  return (
    <>
      <button onClick={() => setAdd(true)}>Add To Do</button>
      {!add ? undefined : <EditToDo newOne />}
    </>
  );
}
