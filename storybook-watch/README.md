# Storybook Watch Library

## Overview

The Storybook Watch Library provides a simple way to automatically restart your Storybook server whenever changes are detected in your component files. This library allows developers to streamline their workflow by ensuring that the latest version of their UI components is always visible without manual restarts.

## Installation

To install the Storybook Watch Library, you can use npm or yarn:

```bash
npm install storybook-watch
```

or

```bash
yarn add storybook-watch
```

## Usage

After installing the library, you can import the functions and constants into your project as follows:

```javascript
import { startWatching, stopWatching } from 'storybook-watch';
```

### Starting the Watcher

To start watching your component directory, use the `startWatching` function:

```javascript
startWatching('path/to/your/components');
```

This function will monitor the specified directory for changes and automatically restart the Storybook server when changes are detected.

### Stopping the Watcher

If you need to stop the watcher, you can call the `stopWatching` function:

```javascript
stopWatching();
```

## Functions

### `startWatching(watchPath: string)`

- **Description**: Starts watching the specified directory for changes.
- **Parameters**:
  - `watchPath`: The path to the directory containing your components.

### `stopWatching()`

- **Description**: Stops the watcher and kills the Storybook server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## Contact

For any inquiries, please reach out to the maintainer at [your-email@example.com].