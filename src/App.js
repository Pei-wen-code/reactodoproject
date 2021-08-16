import React from 'react';
import TodoItem from './TodoItem';
import useTodos from './useTodos';


function App() {
  const {
      todos,
      handleButtonClick,
      handleToggleIsDone,
      handleDeleteTodo,
      value,
      handleChange
  } = useTodos();

  return (
    <div className="container" style={{width: '100%', minHeight: '100vh', background: '#4C4C6D'}}>
      <div className="App" style={{ 
        width: '700px',
        margin: '0 auto',
        paddingTop: '10%',
        paddingBottom: '10%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'}}
      >
        <div style={{ padding: '20px', fontSize: '32px',fontWeight: 'bold', color: '#FFE194'}}>MY TO-DO LIST</div>
        <input type="text" placeholder="What do you want to do?" value={value} onChange={handleChange} style={{ marginBottom: '10px' , width: '50%', height: '30px'}}/>
        <button onClick={handleButtonClick} style={{ width: '51%', height: '50px', marginBottom: '10px', background: '#FFE194', border: 'none', borderRadius: '2px', cursor: 'pointer'}}>Add todo</button>
        {
          todos.map(todo => (<TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone}/>))
        }
      </div>
    </div>
  );
}

export default App;
