# Electron TypeScript App

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.ts` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start).

## To Use

```bash
# clone
git clone https://github.com/jpark6/electron-app.git
# move directory
cd electron-app
# init
# Install dependencies
npm install
# Run the app
npm start
# deploy OSX / Win32 / Win64
npm run deploy:xos
npm run deploy:win32
npm run deploy:win64
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
