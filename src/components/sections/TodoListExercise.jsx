
import { useState } from 'react';

// Struttura dei compiti iniziali con identificatore immutabile e bandiera booleana
const INITIAL_TASKS = [
  { id: 't1', title: 'Completare la configurazione di Antigravity IDE', completed: false },
  { id: 't2', title: 'Comprendere il destructuring dell array in useState', completed: false },
  { id: 't3', title: 'Installare e testare React Developer Tools', completed: false },
  { id: 't4', title: 'Effettuare il commit del repository react-binding', completed: false }
];

export default function TodoListExercise() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // Mappatura immutabile per alternare lo stato 'completed' del compito selezionato
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="p-4 border rounded shadow-sm bg-white mb-4">
      <h3 className="h5 text-secondary">Lista Attività Interattiva</h3>
      <p className="small text-muted">Fai click su un elemento per contrassegnarlo come completato:</p>
      
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            role="button"
            onClick={() => toggleTaskCompletion(task.id)}
            className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between ${
              task.completed ? 'list-group-item-light' : ''
            }`}
            style={{ cursor: 'pointer' }}
          >
            <span
              className={task.completed ? 'text-decoration-line-through text-muted' : 'fw-medium'}
            >
              {task.title}
            </span>
            <span className={`badge ${task.completed ? 'bg-success' : 'bg-secondary'}`}>
              {task.completed ? 'Fatto' : 'In corso'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}