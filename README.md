


## Getting started
```bash
git clone https://github.com/tomastrajan/angular-ngrx-material-starter.git new-project
cd new-project
npm install
npm start
```

## Useful Commands
  * `npm start` - starts a dev server and opens browser with running app
  * `npm run test` - runs lint and tests
  * `npm run watch` - runs tests in watch mode
  * `npm run prod` - runs full prod build and serves prod bundle
  * `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`) 
  * `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application) 

![analzye](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/analyze.png)

## Customizations!
When using this starter project to build your own app you might consider some of the following steps:
  
  * use `search and replace` functionality of your favourite IDE to replace `anms` with `<your-app-prefix>`
  * rename project in `package.json` `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
  * rename app in `src/environments/` files (will be shown in browser tab)
  * delete pre-existing `CHANGELOG.md` (you will generate your own with future releases of your features)
  * delete `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `BUILT_WITH.md` files as they are relevant only if project is open sourced on Github
  * remove or adjust links in the [footer](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/src/app/app.component.html#L79)
  * replace logo in `src/assets` folder ( currently 128 x 128 pixel `png` file )
  * adjust colors in `src/themes/default-theme.scss`
  * create a pull request in the [original repository](https://github.com/tomastrajan/angular-ngrx-material-starter/) to update `BUILT_WITH.md` [file](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md) with a link and short description of your project

## Learning Materials

#### Theming 

  * [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)
  * [Presentation (Slides)](http://slides.com/tomastrajan/angular-material-themes-guide#/)
  * [Live coding Video Tutorial](https://www.youtube.com/watch?v=PsgZjFTAleI)
  * [Meetup Presentation & Live coding Video](https://www.youtube.com/watch?v=7auj9RfCNrE)

 
## Features

* custom themes support (3 themes included)
* lazy-loading of feature modules
* lazy reducers
* localStorage ui state persistence
* `@ngrx/effects` for API requests
* fully responsive design
* angular-material and custom components in `SharedModule`
 
## Stack

* Angular
* ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
* Angular Material
* Bootstrap 4 (only reset, utils and grids)

