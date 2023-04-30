# Project Setup

1. Create Tailwind CSS config file: `tailwind.config.js`

```
npx tailwindcss init
```

2. Setup project structure

```
.
├── build
│   ├── img
│   └── index.html
├── favicon.ico
├── src
│   └── input.css
└── tailwind.config.js
```

Import Tailwind in `input.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In ` tailwind.config.js` file, input information in `content`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Create `package.json` config file.

```
npm init -y
```

> Watching for changes
>
> You can use the `--watch` or `-w` flag to start a watch process and automatically rebuild your CSS any time you make any changes:
>
> `npx tailwindcss -o tailwind.css --watch`

In `package.json` file, we can change the script to tell Tailwind where our `input.css` file was and where to output our `style.css` file.

We can also put in a script for prettier to tell prettier to only look for our HTML files and it will only format them.

```json
  "scripts": {
    "tailwind": "npx tailwind -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html"
  },
```

4. Install a development dependency

```
npm i -D prettier-plugin-tailwindcss
```

Now, we have a `node_modules` directory.

Create `.gitignore` to ignore directory or file.

```.gitignore
node_modules
```

5. Run Tailwind script

```
npm run tailwind
```

# Resource

- https://tailwindcss.com/
- https://emojipedia.org/
- https://old.unicode-table.com/en/
- Deploy to https://render.com/
