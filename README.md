# E-commerce product page

![Overview of the e-commerce product page project](./design/desktop-preview.jpg)

## Welcome! 👋

This repository contains the code related to the e-commerce product page project. It's built with React and Tailwind. At the moment, the project doesn't rely on any external APIs. At some point, I'll maybe add one but not just yet. I'm also going to add the deployment logic and some tests.


## Prerequisites

- Node (>= 18.14)


## Technologies

- [React](https://react.dev/) with [Vite](https://vitejs.dev/).
- [Tailwind](https://tailwindcss.com/).
- [Storybook](https://storybook.js.org/).


## How to make the project runs on your computer

### Cloning the repository

I use command line below but feel free to use GitHub Desktop or Git Kraken if you want.

```bash
# with SSH (recommended)


# with HTTPS

```


### Installing the dependencies

I decided to use npm instead of yarn or pnpm.

```bash
# Install the dependencies
npm i
```


### Running the project

```bash
# Run the project itself
npm run dev

# Run the storybook
npm run storybook
```

### Building the project

```bash
# Build the project itself
npm run build

# Build the storybook
npm run build-storybook
```

### Formating and litting

Please note that the project used `eslint` and `prettier` for linting and formatting purposes.

```bash
# Running the formatter (Prettier)
npm run format

# Running the linter (EsLint)
npm run lint
```

## Architecture

All the code belong in the `src` folder.

From there, here are the rules I tend to follow:

- Each component lives inside its own folder. For example, the `Button` component is located inside `src/components/Button`.
- Each component file is named `index.jsx`. The same goes for the container, icons, and screens. For example, the `Product` screen is located inside `src/screens/Product`.
- Most of the component contain stories with Storybook. It means that for some of them you'll find `index.stories.js`. I tend to follow a component-driven-development approach.
- Each component, container, icons, and screens is exported as `default`.
- As you may have understand, there are a few kind of components:
    - `icons`: svg icons
    - `screens`: web pages
    - `containers`: smart components, which means they hold some state logic.
    - `components`: everything else. From `Button` to `Navigation` components. Most of them are only here to render stuff.
