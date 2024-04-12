import React, { useEffect } from 'react';
import './App.css'
import { TodoList } from './components/TodoList/TodoList';
import { TodoInput } from './components/TodoInput/TodoInput';
import { SortItem } from './components/SortItem/SortItem';
import { useAppDispatch } from './components/store/hooks';
import { getInitialStore } from './components/store/Slice';

export const App : React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/getTodos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then(data => {
        dispatch(getInitialStore(data))
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error)
    })
}, [])

  return (
    <>
      <TodoInput/>
      <SortItem/>
      <TodoList/>
    </>
  )
}

