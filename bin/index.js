#!/usr/bin/env node
import { spawn } from "node:child_process";
import net from "node:net";
import chokidar from "chokidar";
import kill from "kill-port";
import open from "open";

export async function isPortInUse(port) {
	return new Promise((resolve) => {
		const server = net
			.createServer()
			.once("error", (err) => {
				if (err.code === "EADDRINUSE") {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.once("listening", () => {
				server.close(() => resolve(false));
			})
			.listen(port);
	});
}

export function getStoryIdFromPath(path) {
	const parts = path.split("/");
	const componentName = parts.at(-2);
	const category = parts.at(-3);
	console.log(`[📂] Componente: ${componentName}, Categoría: ${category}`);
	return `${category}-${componentName.toLowerCase().replace("-", "")}--default`;
}

export async function restartStorybook(path) {
	const storyId = getStoryIdFromPath(path);
	const storyUrl = `http://localhost:6006/?path=/story/${storyId}`;

	await kill(6006);
	console.log("[🛑] Storybook detenido en el puerto 6006");

	console.log("[🚀] Reiniciando Storybook...");
	spawn("npm", ["run", "storybook"], {
		stdio: "inherit",
		shell: true,
	});

	setTimeout(() => {
		open(storyUrl); // Abre solo una vez
	}, 4000);
}

export function watchComponents(watchPath) {
	const watcher = chokidar.watch(watchPath);
	watcher.on("change", (path) => {
		console.log(`[📝] Cambio detectado en: ${path}`);
		restartStorybook(path);
	});
}
