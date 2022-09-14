import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface ICategoryForm {
  category: string;
}

function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const handleValid = ({ category }: ICategoryForm) => {
    console.log(category);
    setCategories((cat) => [...cat, category]);
    setValue("category", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("category")} />
        <button>Add Category</button>
      </form>
    </div>
  );
}

export default CreateCategory;
