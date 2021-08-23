import axios from "axios";
import { useState } from "react";
import { ITodoState } from "../../App";

export function useHandleValue() {
  const token = localStorage.getItem("access-token");

  const apiUrl = "https://candidate.neversitup.com/todo";

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [todolist, setTodolist] = useState<ITodoState[]>([]);

  // getValue
  const getTodolist = async () => {
    const res = await axios.get(`${apiUrl}/todos/`, config);
    setTodolist(res.data);
  };

  // Create
  const handleCreatetodo = async ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    try {
      await axios.post(
        `${apiUrl}/todos/`,
        {
          title,
          description,
        },
        config
      );
      await getTodolist();
    } catch (err) {
      console.error(err);
    }
  };

  //update
  const handleUpdate = async ({
    id,
    title,
    description,
  }: {
    id: string;
    title: string;
    description: string;
  }) => {
    try {
      await axios.put(
        `${apiUrl}/todos/${id}`,
        {
          title,
          description,
        },
        config
      );
      await getTodolist();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete
  const handleDelete = async (id: string) => {
    await axios.delete(`${apiUrl}/todos/${id}`, config);
    await getTodolist();
  };

  return {
    todolist,
    handleDelete,
    handleCreatetodo,
    getTodolist,
    handleUpdate,
  };
}
