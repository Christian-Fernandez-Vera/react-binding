// src/components/exercises/StyleToggleExercise.jsx
//esercizio 1

import { useState } from 'react';

export default function StyleToggleExercise() {
  const [isSuccess, setIsSuccess] = useState(false);

  // Cambia lo stato booleano negando il valore precedente
  const handleToggle = () => {
    setIsSuccess((prev) => !prev);
  };

  return (
    <section className="p-4 border rounded shadow-sm bg-white mb-4">
      <h3 className="h5 text-secondary">2. Alternanza Stile Bottone</h3>
      <p className="small text-muted">Stato attuale: {isSuccess ? 'Success' : 'Primary'}</p>
      <button
        type="button"
        className={`btn ${isSuccess ? 'btn-success' : 'btn-primary'} transition-all`}
        onClick={handleToggle}
      >
        {isSuccess ? 'Stato: Operazione Completata' : 'Stato: In Attesa'}
      </button>
    </section>
  );
}