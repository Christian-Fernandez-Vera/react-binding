import { useState } from "react"


export default function TextAlignExercise() {

    const [align, setAlign] = useState("text-start");


  return (

    <section className="p-4 border rounded shadow-sm bg-white mb-4">
        <h3 className="h5 text-secondary">Allineamento Paragrafo</h3>

        {/* Pulsanti dichiarativi che iniettano il valore direttamente al setter*/}
        <div className="btn-group mb-3" role="group">
        <button 
        type="button"
        className={`btn btn-outline-secondary ${align === 'text-start' ? 'active' : ''}`}
        onClick={() => setAlign('text-start')}
        >
        Sinistra
        </button>

        <button
        type="button"
        className={`btn btn-outline-secondary ${align === 'text-center' ? 'active' : ""} `}
        onClick={() => setAlign('text-center')}
        >
        Centro
        </button>

      <button
      type="button"
      className={`btn btn-outline-secondary ${align === 'text-end' ? 'active' : ""}`}
      onClick={() => setAlign('text-end')}
      >
      Destra
      </button>
        </div>

      <p className={`p-3 bg-light rounded border ${align}`}>
        Questo testo dinamico risponde in tempo reale alla variabile di stato dell'allineamento.
      </p>
    </section>

  );
}
