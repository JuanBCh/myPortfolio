"use client";

import { useState } from "react";
import styles from "./todo.module.css";
import { ToDoLrg } from "./todolrg";

export default function ToDo() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className={styles.todo} onClick={() => setOpen(!open)}>
        <span>Titulo</span>
        <span>Fecha</span>
      </div>
    );
  } else {
    return <ToDoLrg onClick={() => setOpen(!open)} />;
  }
}
