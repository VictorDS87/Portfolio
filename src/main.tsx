import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { initialize } from 'react-ga';

initialize('G-Y9YVYRJ9JG');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
