import { useSelector, useDispatch } from "react-redux";
import React,{ useState } from "react";
import { add, remove, complete, change } from "./state/todo"
import { Container, Button, Text, List } from "./components/styled";
import "./App.css"

function App() {
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  // useSelector to find the required slices of state
  // only requires the data portion 
  const todoList = useSelector((state) => state.todo['data']);
  //console.log(todoList);

  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");
  
  // this function is the on click for the add button
  // first checks to make sure no blank value is being added
  // informs user if task is blank
  // otherwise sets the task as the newest to do list item
  function addTask() {
    if(input==""){
      alert("You have not entered a task - please try again.");
    } else {
      dispatch(add(input));
      setInput("");
    }      
  };

  // this function is the on click for the delete button
  // creates a new list with the removed value missing
  // then makes this the new stored state
  function removeTask(id) {
    dispatch(remove(id));     
  };

  // this function is the on click for the complete button
  // changes the styling of the list item
  function completeTask(id) {
    dispatch(complete(id));
  };

  // this function is the on click for the edit button
  // passes both id and the edit of content as an array
  // either changes the editing property of the list item
  // or changes the content and editing property of the list item
  function editTask(id, alter) {
    let array =[id, alter]
    dispatch(change(array)); 
    setEdit("");   
    
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
              {/* uses keys to iterate through the object */}
              {Object.keys(todoList).map((key) => {
                return (
                  <List
                    completed = {todoList[key]["completed"]}
                    editing = {todoList[key]["editing"]}
                    id = {key}                
                    key = {key}                
                    style = {{
                      listStyle: "none",
                      textDecoration: todoList[key]["completed"] && "line-through",
                    }}
                  > 
                    <span 
                    className="list-content"
                    style = {{
                      display: todoList[key].editing && "none",
                    }}>
                      {todoList[key].content}
                    </span>                    
                    <Text 
                    value = {edit}
                    placeholder={todoList[key].content}
                    onInput={(e) => setEdit(e.target.value)}
                    style = {{
                      display: !todoList[key].editing && "none",
                    }}
                    />                 
                    <div className="button-box">
                      <Button onClick={() => editTask(key, edit)}>Edit</Button>
                      <Button onClick={() => removeTask(key)}>Delete</Button>
                      <Button onClick={() => completeTask(key)}>Completed</Button>
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