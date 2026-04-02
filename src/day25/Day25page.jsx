import Counter from "./counter/counter";
import UserForm from "./user-form/userform";
import DataFetch from "./data-fetch/DataFetch";
import { useState } from "react";
import InputControl from "./input/InputControl";

const Day25page = () => {
  const  [text , setText] = useState("");

  return (
    <>
      <h1>Day25</h1>
      <Counter />
      <UserForm />
      <DataFetch />
      <inputControl value={text} onValueChange={setText} />
      <p>Text: {text}</p>
    </>
  );
};

export default Day25page;