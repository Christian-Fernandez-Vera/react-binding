import { useState } from 'react';

export default function LiveHeading() {
  const [title, setTitle] = useState('');

  return (
    <div className="card p-3 mb-3 border-secondary bg-dark text-light">
      <h5>Live Heading</h5>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Scrivi il titolo dinamico..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1 className="display-6 text-primary border-bottom pb-2">
        {title || 'Titolo predefinito'}
      </h1>
    </div>
  );
}