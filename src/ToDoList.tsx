import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFom {
  id: string;
  email: string;
  password1?: string;
  password2?: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFom>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IFom) => {
    if (data.password1 !== data.password2) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    //  setError("extraError", { message: "server offline" });
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("id", {
            required: "ID is Required",
            validate: (value) => !value.includes("admin"),
          })}
          placeholder="ID"
        />
        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver is  allowed.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input {...register("password1")} placeholder="Password" />
        <span>{errors?.password1?.message}</span>
        <input {...register("password2")} placeholder="Password Confirm" />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChage = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To Do Should Be Longer");
    }
    console.log("Submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChage} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

export default ToDoList;
