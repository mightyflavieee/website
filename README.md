# flaviorizzoglio.dev

This is repository houses my personal portfolio website. Feel free to clone the repository and use the project as a template.

This project utilizes `yarn`. Initially, clone the repository and run

```
yarn install
```

## 🚀 Project Structure

The project follows the standard Astro structure, organized like this:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Inside the `src/pages/` directory, each file is exposed as a route based on its file name.

The `src/components/` directory houses the `.astro` components used to build the different layouts and pages.

Static assets, like images, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `yarn install`          | Installs dependencies                            |
| `yarn run dev`          | Starts local dev server at `localhost:3000`      |
| `yarn run build`        | Build your production site to `./dist/`          |
| `yarn run preview`      | Preview your build locally, before deploying     |
| `yarn run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro --help` | Get help using the Astro CLI                     |
