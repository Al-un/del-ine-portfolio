[![Build Status](https://travis-ci.com/Al-un/del-ine-portfolio.svg?branch=master)](https://travis-ci.com/Al-un/del-ine-portfolio)

# Portfolio

## Getting started

```sh
# Fetch repository
git clone https://github.com/Al-un/del-ine-portfolio.git
cd del-ine-portfolio
# Install dependencies
yarn install
# Start locally and check localhost:3000
yarn start
```

## Creation steps

```sh
# create project
create-react-app del-ine-portfolio
cd del-ine-portfolio
# add dependencies
yarn add --dev node-sass
yarn add react-router-dom
```

## Folder structure

- `build/`: output folder of `yarn build`
- `node_modules/`: dependencies folder
- `public/`: raw HTML and images
- `src/`: code source
  - `components/`: React [_dumb_ components](https://jaketrent.com/post/smart-dumb-components-react/). Should not handle data
  - `containers/`: usually React [_smart_ components](https://jaketrent.com/post/smart-dumb-components-react/)
  - `pages/`: the actual pages
  - `routes/`: router definition
  - `styles/`: SCSS files. All imported in `index.scss`
- `.gitignore`: ignored files/folders in git
- `.travis.yml`: automatic deployment
- `package.json`: [better give some link](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)
- `yarn.lock`: dependencies management by yarn
