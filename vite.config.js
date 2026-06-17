import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function agentReadyPlugin() {
  const handleMarkdownOrHeaders = (req, res, next) => {
    // Parse URL to ignore query parameters
    const parsedUrl = new URL(req.url, 'http://localhost');
    const pathname = parsedUrl.pathname;

    // Handle Accept: text/markdown for the homepage
    if ((pathname === '/' || pathname === '/index.html') && req.headers.accept && req.headers.accept.includes('text/markdown')) {
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      res.setHeader('x-markdown-tokens', '150');
      const mdPath = path.resolve(__dirname, 'public/homepage.md');
      if (fs.existsSync(mdPath)) {
        res.end(fs.readFileSync(mdPath, 'utf8'));
      } else {
        res.end('# Girija Shankar Ray\nFull-Stack Developer & Creative Technologist.');
      }
      return;
    }

    // Set Link response headers for HTML homepage
    if (pathname === '/' || pathname === '/index.html') {
      res.setHeader('Link', '</.well-known/api-catalog>; rel="api-catalog"');
    }

    // Ensure correct content-type for /.well-known/api-catalog
    if (pathname === '/.well-known/api-catalog') {
      res.setHeader('Content-Type', 'application/linkset+json');
    }

    next();
  };

  return {
    name: 'vite-plugin-agent-ready',
    configureServer(server) {
      server.middlewares.use(handleMarkdownOrHeaders);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleMarkdownOrHeaders);
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), agentReadyPlugin()],
  server: {
    allowedHosts: true, // or "*" to allow all
  },
})

