# Component Blocks
An open source component library for `React`, written in `TypeScript` and released under the `MIT licence`.

## Run the application
Once the repository has been cloned and the packages and dependencies have been installed, use the following commands to run the application locally:

```shell
$ cd component-blocks
$ nvm install
$ nvm use
$ npm run dev
```

The application will run here: `http://localhost:5173/`

Run `Storybook`:

```shell
$ cd component-blocks
$ npm run storybook
```

## Development

### Clone the Repository
To clone the `GitHub` repository:

```shell
# Clone the repository using SSH
$ git clone git@github.com:hackdanismo/component-blocks.git
# Clone the repository using HTTPS
$ git clone https://github.com/hackdanismo/component-blocks.git
```

Once cloned, `change directory` into the project folder:

```shell
$ cd component-blocks
```

Run the `nvm` commands to set the `Node` version specified in the `.nvmrc` file:

```shell
# Install the specified Node version
$ nvm install
# Use the specified Node version
$ nvm use
```

`nvm` can be installed using `cURL` or `Wget` and is used to manage `Node` versions:

```shell
# Install nvm using cURL
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
# Install nvm using Wget
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```

[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

Once completed, install the packages and dependencies listed in the `package.json` file. This will generate the `node_modules` folder:

```shell
$ npm install
```

Run run project, then open: `http://localhost:5173/`:

```shell
$ npm run dev
```

### Setup Vite
To setup `Vite` as our build tool alongside `TypeScript`, use:

```shell
$ npm create vite@latest component-blocks -- --template react-ts
```

This will setup: `Vite`, `React` and `TypeScript` out of the box.

### Public
Anything in the `public/` folder will be passed to the `dist/` folder when the `build` command is run:

```shell
$ npm run build
```

### TypeScript declaration files
The `unplugin-dts` package generates `TypeScript` declaration files, the `.d.ts` files, for the component library. Those files describe the public `TypeScript` types of the library without containing the implementation.

```shell
$ npm install -D unplugin-dts
```

That declaration file is what allows someone consuming the library to get:

- `autocomplete`
- `prop type checking`
- `IntelliSense`
- `TypeScript errors when passing invalid props`
- `type information without needing your original .tsx source`

`Vite` itself builds the `JavaScript`, but it does not automatically generate all the declaration files usually wanted for a published `TypeScript` library. `unplugin-dts` handles that part.

### Storybook
To install `Storybook` inside of the component library and allow components to be rendered outside of an application, run the following command:

```shell
$ npm create storybook@latest
```

This will generate the `.storybook/` folder in the root of the project. 

To run `Storybook`:

```shell
$ npm run storybook
```

`Storybook` will be visible here: `http://localhost:6006/`.

To remove the example components that `Storybook` adds following installation, remove the `src/stories` folder from the project.

### Tailwind
To install `Tailwind` inside of a `Vite` project:

```shell
$ npm install -D tailwindcss @tailwindcss/vite
```

Update the `vite.config.ts` file to include `Tailwind CSS`.

Once installed, setup a `src/styles.css` CSS stylesheet. Add the `Tailwind CSS` import:

```css
@import "tailwindcss";
```

Then, import the stylsheet into the `src/index.ts` file:

```typescript
import './styles.css'
```

The components in the library can now use `Tailwind CSS`.

Within the `.storybook/preview.ts` import the stylesheet to allow stories in `Storybook` to render `Tailwind CSS` classes:

```typescript
import '../src/styles.css'
```