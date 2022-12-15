import { useState } from 'react';
import './App.css';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["宿題", "洗濯"]);
  const [completeTodos, setCompleteTodos] = useState(["掃除"]);
  const [todoText, setTodoText] = useState('');

  const onchangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  return (
    <>
      <div className="outline">
        <div className="imcompleteArea">
          <p className="title">未完了のtodo</p>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
                <li key={todo} className="todoList">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="completeArea">
          <p className="title2">完了のtodo</p>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <li key={todo} className="todoList">
                  <p>{todo}</p>
                  <button>戻す</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='inputArea'>
        <input placeholder='todoを入力' value={todoText} onChange={onchangeTodoText} />
        <button>追加</button>

      </div>
    </>
  );
};


export default App;
