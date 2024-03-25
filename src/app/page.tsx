"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo.type";

import { AddTodoForm } from "./components/add-todo-form/add-todo-form.component";
import { TodoList } from "./components/todo-list/todo-list.component";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      userId: 1,
      title: "Wave hello! 👋",
      completed: false,
      id: 1,
    },
    {
      userId: 1,
      title: "Get Coffee ☕☕☕",
      completed: false,
      id: 2,
    },
    {
      userId: 1,
      title: "Go to Work ⚒",
      completed: false,
      id: 3,
    },
    {
      userId: 1,
      title: "Write Code 💻",
      completed: false,
      id: 4,
    },
  ]);

  return (
    <>
      <AddTodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
