# Instructions

UI for BKBDS related projects.

## Features and major tools

- Typescript
- SPA approach with React
- Client state management with Redux Toolkit & server state with React-Query
- Graphql preferred
- 🔐 JWT authentication, CASL
- Storybook documentation of components
- Component testing with Jest, E2E with cypress
- Eslint and Prettier for code style guidelines
- Mui as a component library, Formik & Yup for forms and validations

## Overview

- [Instructions](#instructions)
  - [Features and major tools](#features-and-major-tools)
  - [Overview](#overview)
  - [Project Setup and Execution](#project-setup-and-execution)
    - [1. Install Dependencies](#1-install-dependencies)
    - [2. Environment Variables](#2-environment-variables)
    - [3. Start and Build UI server](#3-start-and-build-ui-server)
    - [4. Tests](#4-tests)
    - [5. Linting](#5-linting)
  - [GraphQL Playground](#graphql-playground)
  - [Style and Structure Guidelines](#style-and-structure-guidelines)

## Project Setup and Execution

### 1. Install Dependencies

Install latest stable nodejs & npm release and add to path.

Install the dependencies for the UI application:

```bash
npm install
```

### 2. Environment Variables

Setup the environment variables properly in your project root directory.

### 3. Start and Build UI server

Run UI server in development mode (runs in localhost:3000 by default)

```bash
npm run start:dev
```

Build UI

```bash
npm run build
```

Run Storybook server in development mode (runs in localhost:6006 by default)

```bash
npm run storybook
```

Build Storybook

```bash
npm run build-storybook
```

### 4. Tests

Run all tests

```
npm run test
```

> **Note**: Cypress testing to be added soon

### 5. Linting

Fix all auto-fixable eslint problems

```
npm run lint:fix
```

## GraphQL Playground

Open up the [example GraphQL queries](graphql/auth.graphql) and copy them to the GraphQL Playground. Some queries and mutations are secured by an auth guard. You have to acquire a JWT token from `signup` or `login`. Add the `accessToken`as followed to **HTTP HEADERS** in the playground and replace `YOURTOKEN` here:

```json
{
  "Authorization": "Bearer YOURTOKEN"
}
```

## Style and Structure Guidelines

- Typescript guideline https://google.github.io/styleguide/tsguide.html
- Folder and files naming should be small unless they are a react component or an interface file.
