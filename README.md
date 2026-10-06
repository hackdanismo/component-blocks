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