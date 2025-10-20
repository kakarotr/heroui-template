import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import App from './App.tsx'
import { HeroUIProvider } from '@heroui/system'
import { ToastProvider } from '@heroui/toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider className='h-full' disableRipple>
      <ToastProvider placement='top-center' />
      <App />
    </HeroUIProvider>
  </StrictMode>,
)
