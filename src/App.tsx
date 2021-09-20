import React, { FormEvent, useState } from 'react';
import Header from './components/Header';
import TextField from './components/TextField/';


function App() {

   interface Task{
    nome: string;
    descricao: string;
  }

  const [nome, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function submit(event: FormEvent){ 
    event.preventDefault();
    setTasks([...tasks, {nome, descricao}]);

  }
  return (
    <div>
      <Header/>
         <form>
      <TextField 
        id="nome" 
        label="Nome:"
        onChange={(value)=> setName(value)}
      />
       
      <TextField 
        id="descricao"
        label="Descricao:"
        onChange={(value) => setDescricao(value)} 
      />

        <button type="submit" onClick={submit}>Add</button>
      </form>
<ul>
  {tasks?.map((task, index)=> (
  <li key={index}> 
    {task.nome} - {task.descricao}
  </li>
  ))}
</ul>

    </div>
  );
}

export default App;
