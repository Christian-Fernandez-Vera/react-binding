import { useState } from 'react';

export default function CheckboxUnlockButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="card p-3 mb-3 border-secondary bg-dark text-light">
      <h5>Conferma per abilitare l'azione</h5>
      <div className="form-check mb-3">
        <input
          id="confirmActionCheck"
          type="checkbox"
          className="form-check-input"
          checked={isConfirmed}
          onChange={(e) => setIsConfirmed(e.target.checked)}
        />
        <label htmlFor="confirmActionCheck" className="form-check-label">
          Accetto le condizioni per procedere
        </label>
      </div>
      <button className="btn btn-primary" disabled={!isConfirmed}>
        Procedere con l'azione
      </button>
    </div>
  );
}