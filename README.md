# Getting Started

This project is about my page with about my RPG battle maps (it's only a business card).\
It's available here: [https://ndvmaps.narin.dev/](https://ndvmaps.narin.dev).

# Local development
## Requirements
1. Node.js >= v 18.0.0
2. Yarn or Nom installed

## How to
1. Clone this repository.
2. Run `yarn install` inside the main directory.
3. Wait... Wait...
4. Run `yarn start` to start the project
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser (the page will reload if you make edits)
6. Happy coding!

# App structure
- `public` - public, static elements (logo etc.)
- `src/assets` - assets in the app
- `src/data` - data (language, theme etc.)
- `src/types` - types used in the app (more than only locally)
- `src/elements` - single page elements/views
- `src/elements/common` - common page elements, used more than once

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
