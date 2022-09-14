import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "Local",
  storage: localStorage,
});

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
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
