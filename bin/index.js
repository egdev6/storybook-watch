#!/usr/bin/env node
import { spawn } from 'child_process';
import open from 'open';
import kill from 'kill-port';
import chokidar from 'chokidar';
import net from 'net';

let storybookProcess;
let lastStoryUrl = '';

function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once('error', err => {
        if (err.code === 'EADDRINUSE') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .once('listening', () => {
        server.close(() => resolve(false));
      })
      .listen(port);
  });
}

function getStoryIdFromPath(path) {
  const parts = path.split('/');
  const componentName = parts.at(-2);
  const category = parts.at(-3);
  console.log(`[📂] Componente: ${componentName}, Categoría: ${category}`);
  return `${category}-${componentName.toLowerCase().replace('-', '')}--default`;
}

function restartStorybook(path) {
  const storyId = getStoryIdFromPath(path);
  const storyUrl = `http://localhost:6006/?path=/story/${storyId}`;
  lastStoryUrl = storyUrl;

  kill(6006)
    .then(() => {
      console.log('[🛑] Storybook detenido en el puerto 6006');

      // Reiniciar Storybook
      console.log('[🚀] Reiniciando Storybook...');
      storybookProcess = spawn('npm', ['run', 'storybook-cli'], {
        stdio: 'inherit',
        shell: true,
      });

      setTimeout(() => {
        open(storyUrl); // Abre solo una vez
      }, 4000);
    })
    .catch((err) => {
      console.error('[❌] Error al liberar el puerto:', err);
    });
}

const inUse = await isPortInUse(6006);
const watchPath = `${process.cwd()}/src/components/`;

if (inUse) {
  console.log('⚠️ El puerto 6006 ya está en uso. Cerrando Storybook...');
  await kill(6006);
}

console.log('[🚀] Iniciando Storybook...');
storybookProcess = spawn('npm', ['run', 'storybook'], {
  stdio: 'inherit',
  shell: true,
});

setTimeout(() => {
  console.log(`[👀] Observando cambios en: ${watchPath}`);
  const watcher = chokidar.watch(watchPath);
  watcher
    .on('change', (path) => {
      console.log(`[📝] Cambio detectado en: ${path}`);
      restartStorybook(path);
    });
}, 7000);