
import { useState } from 'react';

// Dizionario immutabile di messaggi al di fuori del componente per evitare la ricreazione della memoria
const TRANSLATIONS = {
  it: 'Benvenuto nella nostra applicazione React!',
  en: 'Welcome to our React application!',
  es: '¡Bienvenido a nuestra aplicación de React!',
  fr: 'Bienvenue sur notre application React!'
};

export default function LanguageSelectorExercise() {
  const [currentLang, setCurrentLang] = useState('it');

  return (
    <section className="p-4 border rounded shadow-sm bg-white mb-4">
      <h3 className="h5 text-secondary">Selettore Linguistico</h3>
      
      <div className="d-flex gap-2 mb-3">
        {Object.keys(TRANSLATIONS).map((langKey) => (
          <button
            key={langKey}
            type="button"
            className={`btn btn-sm ${currentLang === langKey ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setCurrentLang(langKey)}
          >
            {langKey.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="alert alert-info py-2" role="alert">
        {TRANSLATIONS[currentLang]}
      </div>
    </section>
  );
}