import { useState } from 'react';

export default function FullNameMerger() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Stato derivato: unifica i due input senza generare stati ridondanti
  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  return (
    <div className="card p-3 mb-3 border-secondary bg-dark text-light">
      <h5>Unione di nome e cognome</h5>
      <div className="row g-2 mb-2">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Cognome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <p className="mb-0">
        Risultato completo: <span className="badge bg-success fs-6">{fullName || 'Senza registrare'}</span>
      </p>
    </div>
  );
}