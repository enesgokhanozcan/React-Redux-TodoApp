import React from 'react';
import './App.css';
import { Addtodo } from './components/Addtodo';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList=useSelector(selectTodoList)
  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__todoContainer'>
            {todoList.map(item=>(
              <TodoItem 
              name={item.item}
              done={item.done}
              id={item.id}
              />
            ))}
        </div>
        <Addtodo/>
      </div>
    </div>
  );
}

export default App;
