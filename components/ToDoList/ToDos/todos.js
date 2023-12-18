"use client";

import { useEffect, useState } from "react";
import ToDo from "../ToDo/todo";
import styles from "./todos.module.css";

export default function ToDos() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setData(localStorage.getItem("todos"));
  }, []);
  console.log(data);

  return (
    <section className={styles.todos}>
      {/* {data.length < 1 ? (
        <p>Loading...</p>
      ) : (
        data.map((d, k) => {
          return <ToDo key={k} data={d} />;
        })
      )} */}
    </section>
  );
}
