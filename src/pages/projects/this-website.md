---
layout: ../../layouts/ProjectLayout.astro
title: This Website!
author: Flavio Rizzoglio
description: A brief explaination on how I buildt this website!
---

# flaviorizzoglio.dev

This is repository houses my personal portfolio website. Feel free to clone the repository and use the project as a template.

This website is built using the [Astro](https://astro.build/) framework and components are styled with the use of [TailwindCSS](https://tailwindcss.com/).

## 🚀 Startup

This project utilizes **yarn**. Initially, clone the repository and run

```
yarn install
```

## 🧱 Project Structure

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

Inside the _**src/pages/**_ directory, each file is exposed as a route based on its file name.

The _**src/components/**_ directory houses the _**.astro**_ components used to build the different layouts and pages.

Static assets, like images, are placed in the _**public/**_ directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                                   |
| :-------------------- | :------------------------------------------------------- |
| yarn install          | Installs dependencies                                    |
| yarn run dev          | Starts local dev server at _**localhost:3000**_          |
| yarn run build        | Build your production site to _**./dist/**_              |
| yarn run preview      | Preview your build locally, before deploying             |
| yarn run astro ...    | Run CLI commands like _**astro add**_, _**astro check**_ |
| yarn run astro --help | Get help using the Astro CLI                             |

## Future Additions

- Addition of **Hobbies** section with photoes.
- Connetion with [Storyblok](https://www.storyblok.com/) space for data fetching of projects, skills and photoes.
