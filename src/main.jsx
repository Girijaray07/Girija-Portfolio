import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Register WebMCP tools on page load
if (typeof navigator !== 'undefined' && navigator.modelContext) {
  const tools = [
    {
      name: 'getContactInfo',
      description: 'Get contact info of Girija Shankar Ray',
      inputSchema: {
        type: 'object',
        properties: {}
      },
      execute: async () => {
        return {
          email: 'girijaray64@gmail.com',
          github: 'https://github.com/Girijaray07',
          linkedin: 'https://www.linkedin.com/in/girija-shankar-ray/'
        };
      }
    }
  ];

  if (typeof navigator.modelContext.provideContext === 'function') {
    navigator.modelContext.provideContext({ tools });
  }

  if (typeof navigator.modelContext.registerTool === 'function') {
    tools.forEach(tool => {
      try {
        navigator.modelContext.registerTool(tool);
      } catch (e) {
        console.error('Failed to register WebMCP tool:', e);
      }
    });
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

