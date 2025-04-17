# 🔄 Storybook Watch Script

This repository contains a simple script that automatically restarts the [Storybook](https://storybook.js.org/) server whenever changes are detected in your src/components files.

## 🚀 What It Does

When you're working on UI components, keeping your Storybook instance up to date with every change can be a hassle—especially if Storybook doesn't reflect changes due to caching or stale state.  
This script watches for file changes in your component folders and **automatically relaunches Storybook**, ensuring you always see the latest version of your UI without manual restarts.

## Requirements

You need to have installed storybook in your project: https://storybook.js.org/docs/get-started/install

## 📦 Installation

Clone this repository or copy the script into your project.
Install the required dependencies or add to your package.json.

## ⚙️ Usage

Run the script:
```
node run-watch.js
```
This will:
	1.	Monitor your component directory (src/components/).
	2.	Kill the current Storybook server instance if it’s running.
	3.	Relaunch Storybook so changes are reflected instantly.

Make sure the path to your component files and the Storybook start command are correctly configured in the script.

## 🔧 Customizing the Watch Path

If your components are located in a different directory, you can easily change the folder being watched by editing the following line in run-watch.js:
```
const watchPath = `${process.cwd()}/src/components/`;
```
Replace it with the path to your component folder as needed.

## 🧩 Recommended Addons for Full Autodocumentation

To enhance your Storybook setup and make the auto-restart workflow even more effective, it’s highly recommended to install and configure the following:
	•	@storybook/addon-autodocs: Enables automatic generation of documentation from your component source and props.
	•	react-docgen or react-docgen-typescript: Parses your component props and allows you to write MDX annotations directly in your TypeScript types.

This setup allows you to:
	•	Add MDX-style descriptions and notes directly to your component types.
	•	Automatically generate prop controls and documentation tables.
	•	Keep your Storybook docs always in sync with your codebase.

## 📚 Read more:
	•	[Autodocs in Storybook](https://storybook.js.org/docs/writing-docs/autodocs)
	•	[react-docgen-typescript GitHub](https://github.com/styleguidist/react-docgen-typescript)
