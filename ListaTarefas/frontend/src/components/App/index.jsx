import { useState } from 'react';
import "./styles.css";
import Title from '../Title';
import Button from '../Button';

function App() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas
  const [taskInput, setTaskInput] = useState(""); // Estado para o input da tarefa

  const handleInputChange = (event) => {
    setTaskInput(event.target.value); // Atualiza o estado do input
  };

  const handleAddTask = () => {
    if (taskInput.trim()) { // Verifica se o input não está vazio
      setTasks([...tasks, { text: taskInput, completed: false }]); // Adiciona a nova tarefa à lista
      setTaskInput(""); // Limpa o input após adicionar a tarefa
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove a tarefa com o índice fornecido
    setTasks(updatedTasks);
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ); // Alterna o estado de conclusão da tarefa
    setTasks(updatedTasks);
  };

  return (
    <>
      <Title name="Lista de Tarefas" />
      <input 
        value={taskInput} 
        onChange={handleInputChange} 
        type="text" 
        placeholder="Digite sua tarefa" 
      />
      <Button onClick={handleAddTask} />

      <div className="card">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <span onClick={() => handleToggleCompletion(index)}>{task.text}</span>
              <button onClick={() => handleRemoveTask(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
