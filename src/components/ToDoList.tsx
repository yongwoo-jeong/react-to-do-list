import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  initCategories,
  categoryState,
  IToDo,
  toDoSelector,
  categoriesState,
} from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

//
//

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const allCategories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <select value={category} onInput={onInput}>
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <CreateCategory />
      </div>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
