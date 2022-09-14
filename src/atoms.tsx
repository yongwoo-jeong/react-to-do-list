import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export let initCategories: string[] = ["TO_DO", "DOING", "DONE"];

export const categoryState = atom<string>({
  key: "category",
  default: initCategories[0],
});

export const categoriesState = atom<string[]>({
  key: "categoriesState",
  default: initCategories,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
