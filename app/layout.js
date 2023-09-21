import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gestor de Tareas',
  description: 'Te ayudamos a administrar tus tareas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className='header'>
          <h1>Gestor de Tareas</h1>
        </header>
        
        {children}
      </body>

    </html>
  )
}
