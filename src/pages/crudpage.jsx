import { Button, Input } from "antd";
import { useState } from "react";

const CrudPage = () => {
  const [todo, setTodo] = useState([]);
  const [textInput, setTextInput] = useState([]);
  return (
    <div style={{ marginLeft: 50 }}>
      <h1>CRUD Operation : Creat, Read, Update, Delete.</h1>
      <h2>Todo Application</h2>
      <h3>Create</h3>

      <Input
        
        allowClear
        style={{ width: 500 }}
        onChange={(elements) => {
          console.log(elements.target.value);
          setTextInput(elements.target.value);
        }}
      />
      <br></br>
      <Button
        onClick={() => {
          setTodo([...todo, textInput]);
        }}
        style={{ marginTop: 10 }}
      >
        ADD TODO
      </Button>

      <h3>LIST TODO : </h3>
      {todo.map((data) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              const newData = todo.filter((filterData) => filterData !== data);
              console.log(newData);
              setTodo(newData);
            }}
          >
            {data}
          </li>
        );
      })}
    </div>
  );
};
export default CrudPage;
