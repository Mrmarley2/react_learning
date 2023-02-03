import styled from "styled-components";

// style of all components imported from styled-components
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  display:inline-block;
  border: none;
  background-color: purple;
  color: white;
  height: 25px;
  width: 80px;
  border-radius: 2px;
  cursor: pointer;
  margin-left:2%;
`;

export const Text = styled.input`
  border: 2px solid #000;
  width: 150px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
  height: 15px;
`;

export const TaskCount = styled.span`
  margin: 10px;
`;

export const Tasks = styled.div`
`;

export const List = styled.li`
  display: flex;
  justify-content: flex-end;
  width: auto;
  margin-top: 2%;
  align-items: center;
`;