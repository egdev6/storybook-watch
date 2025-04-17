<div align="center">
  
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

# 🔄 Storybook Watch Script

This repository contains a simple script that automatically restarts the [Storybook](https://storybook.js.org/) server whenever changes are detected in your src/components files.

## 🚀 What It Does

When you're working on UI components, keeping your Storybook instance up to date with every change can be a hassle—especially if Storybook doesn't reflect changes due to caching or stale state.  
This script watches for file changes in your component folders and **automatically relaunches Storybook**, ensuring you always see the latest version of your UI without manual restarts.

## Requirements

You need to have installed storybook in your project: https://storybook.js.org/docs/get-started/install

## 📦 Installation

```
npm i -D storybook-watch
```

## ⚙️ Usage

```
npx storybook-watch
```

This will:

1.	Monitor your component directory (src/components/).
2.	Kill the current Storybook server instance if it’s running.
3.	Relaunch Storybook so changes are reflected instantly.

Make sure the path to your component files and the Storybook start command are correctly configured in the script.

## 🧩 Recommended Addons for Full Autodocumentation

To enhance your Storybook setup and make the auto-restart workflow even more effective, it’s highly recommended to install and configure the following:
	•	@storybook/addon-autodocs: Enables automatic generation of documentation from your component source and props.
	•	react-docgen or react-docgen-typescript: Parses your component props and allows you to write MDX annotations directly in your TypeScript types.

This setup allows you to:
	•	Add MDX-style descriptions and notes directly to your component types.
	•	Automatically generate prop controls and documentation tables.
	•	Keep your Storybook docs always in sync with your codebase.

## 📚 Read more

https://github.com/styleguidist/react-docgen-typescript
https://storybook.js.org/docs/writing-docs/autodocs


## Contact

<div align="center">

[![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/egdev/)
[![image](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/egdev6)
[![image](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:egdev6o@gmail.com)

</div>

[stars-shield]: https://img.shields.io/github/stars/egdev6/storybook-watch.svg?style=for-the-badge
[stars-url]: https://github.com/egdev6/storybook-watch/stargazers
[issues-shield]: https://img.shields.io/github/issues/egdev6/storybook-watch.svg?style=for-the-badge
[issues-url]: https://github.com/egdev6/storybook-watch/issues
[license-shield]: https://img.shields.io/github/license/egdev6/storybook-watch.svg?style=for-the-badge
[license-url]: https://github.com/egdev6/storybook-watch/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/egdev6

