import React,{ useState } from "react";
import { Container, Button, Text, List } from "./components/styled";
import "./App.css"

function App() {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");
  const [todoList, setTodoList] = useState([]);

  // this function is the on click for the add button
  // first checks to make sure no blank value is being added
  // informs user if task is blank
  // otherwise sets the task as the newest to do list item
  function addTask() {
    if(input==""){
      alert("You have not entered a task - please try again.");
    } else {
      const id = todoList.length + 1;
      // using spread syntax from previous tasks
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      setTodoList((listItem) => [
        ...listItem,
        { 
          id: id,
          content: input,
          complete: false,
          editing: false,
        }
      ]);
      setInput("");
    }      
  };

  // this function is the on click for the delete button
  // creates a new list with the removed value missing
  // then makes this the new stored state
  function removeTask(id) {
    let filteredList = todoList.filter(item => item.id !== id);
    setTodoList(filteredList);      
  };

    // this function is the on click for the complete button
  // first creates a map of the existing data
  // this map changes the complete value for the correct item
  // the map is stored as 'list' then set as the to do list
  function completeTask(id) {
    let list = todoList.map((listItem) => {
      let item = {};
      if (listItem.id == id) {
          item = { ...listItem, complete: !listItem.complete };
        } else item = { ...listItem };
        return item;
      });
      setTodoList(list);
  };

    // this function is the on click for the edit button
  // first creates a map of the existing data
  // if the item is not set to editing, changes to editing mode
  // if currently in editing mode, replaces the content with the edit
  // the map is stored as 'list' then set as the to do list
  function editTask(id) {
    let list = todoList.map((listItem) => {
      let item = {};
      if (listItem.id == id) {
        // check here to prevent blank values being added from edit
        if(listItem.editing == true & edit!=""){
          item = { ...listItem, editing: !listItem.editing, content: edit};
        } else {
          item = { ...listItem, editing: !listItem.editing};
        }          
        } else item = { ...listItem };
        return item;
    });
   
    setEdit("");
    setTodoList(list);
  };

  return (
      <Container>
        <div className="wide-box">
            <h2>To Do List</h2>
            <div className="add-box">
              <Text value={input} placeholder="Add a task here" onInput={(e) => setInput(e.target.value)} />
              <Button onClick={() => addTask()}>Add</Button>
            </div>            
          <div className="list-box">
            <ul className="to-do-list">
              {/* using index to ensure ids and keys are unique */}
              {todoList.map((todo, index) => {
                return (
                  <List
                    complete = {todo.complete}
                    editing = {todo.editing}
                    id = {index}                
                    key = {index}                
                    style = {{
                      listStyle: "none",
                      textDecoration: todo.complete && "line-through",
                    }}
                  > 
                    <span 
                    className="list-content"
                    style = {{
                      display: todo.editing && "none",
                    }}>
                      {todo.content}
                    </span>                    
                    <Text 
                    value = {edit}
                    placeholder={todo.content}
                    onInput={(e) => setEdit(e.target.value)}
                    style = {{
                      display: !todo.editing && "none",
                    }}
                    />                 
                    <div className="button-box">
                      <Button onClick={() => editTask(todo.id)}>Edit</Button>
                      <Button onClick={() => removeTask(todo.id)}>Delete</Button>
                      <Button onClick={() => completeTask(todo.id)}>Completed</Button>
                    </div>                    
                  </List>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    );
};
export default App;