import { useState } from 'react';

export default function CharCounter() {
  const [text, setText] = useState('');

  // Stato derivato: viene calcolato in ogni render senza bisogno di un useState extra
  const charCount = text.length;

  return (
    <div className="card p-3 mb-3 border-secondary bg-dark text-light">
      <h5>Contador de Caracteres</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Escribe algo aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mb-0 text-info">Caracteres introducidos: <strong>{charCount}</strong></p>
    </div>
  );
}