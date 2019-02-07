# TestSsr3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## SSR Rendering
Run `npm run build:ssr` to build browser and server browser.

You can then run `npm run serve:ssr` to run the ssr build locally

In order to run in a pm2 instance:
Install pm2 from npm: `npm install pm2@latest -g`
Then start the server with `pm2 start dist/server.js --name :name` (name of the server)

For more advanced handling see: http://pm2.keymetrics.io/docs/usage/quick-start/

To stop the server use: 
`pm2 stop :name or :id`

The command `pm2 monit` allows us to monitor the current running instances


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
