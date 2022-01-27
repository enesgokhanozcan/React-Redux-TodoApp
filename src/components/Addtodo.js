import React,{useState} from 'react';
import './Addtodo.css'
import {useDispatch} from 'react-redux'
import { saveTodo } from '../features/todoSlice';


export const Addtodo = () => {
    const dispatch=useDispatch();

    const [data,setData]=useState('');
    console.log(data);
    
    //const[todo,setTodo]=useState('');

    const add=()=>{
        console.log('Data:',data)
        dispatch(saveTodo({
            item:data,
            done:false,
            id:Date.now()
        }))
    }

  return <div className='input'>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={add}>Add</button>
  </div>;
};