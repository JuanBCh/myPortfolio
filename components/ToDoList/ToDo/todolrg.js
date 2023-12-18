"use client";

import { useState } from "react";
import style from "./todo.module.css";
import { SaveOnLS } from "@/components/Utilities/utilities";

export function ToDoLrg({ onClick }) {
  return (
    <div
      className={`${style.todo} ${style.toDoLrg}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      <div>
        <span>Titulo</span>
        <span>Fecha</span>
      </div>
      <p>Descripcion de la tarea</p>
      <div>
        <button>Borrar</button>
        <button>Hecha</button>
      </div>
    </div>
  );
}

export function EditToDo({ newOne }) {
  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
    done: false,
  });

  const manageToDo = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form
      className={`${style.editableToDo} ${newOne ? style.newOne : undefined}`}
      onSubmit={(e) => {
        e.preventDefault();
        SaveOnLS("todos", data);
      }}
    >
      <div>
        <input
          name="title"
          placeholder="Title"
          type="text"
          value={data.title}
          onChange={(e) => manageToDo(e)}
        />
        <input
          name="date"
          placeholder="Date"
          type="date"
          value={data.date}
          onChange={(e) => manageToDo(e)}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        value={data.description}
        onChange={(e) => manageToDo(e)}
      />
      <div>
        <button type="submit">Done</button>
      </div>
    </form>
  );
}
