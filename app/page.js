import styles from './page.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { Login } from '@/Components/Login';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Head></Head>
        <Login />

        <div id='crear_usuario_link'>
          <p>Si no está registrado, puede hacerlo aquí: </p>
          <Link id='crear_usuario_btn' href="/Registro">Crear nuevo usuario</Link>
        </div>
      <Link href="/Tareas">Tareas</Link>
      </div>
    </main>
  )
}
