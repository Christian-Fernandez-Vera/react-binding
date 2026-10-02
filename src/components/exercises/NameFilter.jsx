import { useState } from 'react';

const INITIAL_NAMES = ['Paolo', 'Christian', 'Marco', 'Stefano', 'Antonio', 'Giovanni', 'Marta', 'Simone'];

export default function NameFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  // Stato derivato: filtra l'elenco applicando la normalizzazione alle minuscole
  const filteredNames = INITIAL_NAMES.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="card p-3 mb-3 border-secondary bg-dark text-light">
      <h5>Filtro de Nombres</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-group">
        {filteredNames.length > 0 ? (
          filteredNames.map((name) => (
            <li key={name} className="list-group-item bg-secondary text-white">
              {name}
            </li>
          ))
        ) : (
          <li className="list-group-item bg-secondary text-warning">Non ci sono coincidenze</li>
        )}
      </ul>
    </div>
  );
}