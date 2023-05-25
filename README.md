# Run Specific Describe / IT In WDIO <a href="https://webdriver.io/"><img src="https://avatars.githubusercontent.com/u/72550141?s=48&v=4" alt="WebdriverIO" height="22" /></a> <a href="https://nodejs.org/en/"><img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-icon-logo.png" alt="nodejs" height="22" /></a> <a href="https://mochajs.org/"><img src="https://brandslogos.com/wp-content/uploads/images/large/mocha-logo.png" alt="mochs" height="22" /></a>

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
  - NodeJS >= 14.16.0 (includes npm 6.14.11)

- Run below command to configure dependencies

    ```sh
    npm install
    ```

## Run the test

There is a single test in this repo. It contains 4 it functions in a single describe.

If you run the below command:

    ```sh
    npm run bstack-single
    ```

you will run your test but only the <b>second</b> "it" function will be run. You can modify the "bstack-single" script tag in the package.json file in order to change what string it is looking for. So on line 7 of the [package.json](https://github.com/garyb-bs/wdio-specific-test-run/blob/main/package.json). Simply change the string at the end to something else that matches another "it" function.

    ```sh
    "bstack-single": "npx wdio resources/conf/wdio-bstack-single.conf.js --mochaOpts.grep \"Second IT\"",
    ```
