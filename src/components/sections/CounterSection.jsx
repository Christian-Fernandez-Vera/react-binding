import { useState } from 'react'

export default function CounterSection() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleReset() {
        setCount(0);
    }



  return (
        <section className='text-center'>

            <p>{count}</p>

            <button onClick={handleIncrement} className='btn btn-primary'>Incrementa</button>
            <button onClick={handleReset} className='btn btn-danger'>Azzera</button>



        </section>





        )

    }
    