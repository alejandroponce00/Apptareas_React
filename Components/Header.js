import Link from 'next/link';
import styles from '/Header.modules.css';


export default function Header () {
    return (
        <header className={styles.header}>
            <div className='contenedor'>
                <>
                <h1>Gestión de Tareas</h1>
                </>
            </div>
        </header>
    );
}