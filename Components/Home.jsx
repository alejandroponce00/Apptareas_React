'use client'
import './Home.css';

export function Home({user , setUser}){
const handleLogout =()=>{
    setUser([])
}

    return (
    <div>
        <h1 id='bienvenido'>Bienvenido</h1>
        <h2 id='usuario'>{user}</h2>
        <button onClick={handleLogout}> Cerrar Sesion</button>
    </div>
    )
}