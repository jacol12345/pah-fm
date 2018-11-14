/* eslint-disable */
// to use debug option run `DEBUG=true followed by your .conf.js`
// const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {
  specs: [
    './test/specs/*.spec.js',
  ],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      maxInstances: '1',
    },
    // TODO: Configure headless Chrome
    // {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //       // run in headless mode
    //       args: ['--headless'],
    //       //binary:   '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
    //       binary:   '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'  //for OS X
    //       //binary:   '/Program Files (x86)/Google/Chrome/Application/chrome.exe'     //for windows7
    //     },
    //     platform: '',
    //     version: '',
    //     maxInstances: '5',
    //     // specs: [
    //     //     './test/specs/*.js'
    //     // ],
    // }
  ],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './test/reports/errorShots/', // Saves a screenshot to a given path if a command fails.
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 90000, // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000, // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3, // Default request retries count

  services: ['selenium-standalone'],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000,
    // compilers: ['js:babel-register'],
  },

  // TODO: Consider using Allure for reporting
  reporters: [
    'spec',
    // 'junit',
    // 'allure',
    // 'json',
    // 'mochawesome',
  ],
  reporterOptions: {
    // junit:  {outputDir:   './test/reports/junit-results/'},
    // json:   {outputDir:   './test/reports/json-results/'},
    // allure: {
    //   outputDir:   './test/reports/allure-results/',
    //   disableWebdriverStepsReporting: false,
    //   //useCucumberStepReporter: false,
    // },
    // mochawesome:  {outputDir:   './test/reports/mocha-results/'},
    // mochawesomeOpts: {
    //   includeScreenshots: true,
    //   screenshotUseRelativePath:true
    // },
  },
  onPrepare(config, capabilities) {
    console.log('**** e2e tests starting ****');
  },
  /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
  beforeSession(config, capabilities, specs) {
    // require('babel-register')
  },
  /**
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    * @param {Array.<Object>} capabilities list of capabilities details
    * @param {Array.<String>} specs List of spec file paths that are to be run
    */
  before(capabilities, specs) {
    /**
       * Setup the Chai assertion framework
       */
    const chai = require('chai');
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
  /**
     * Gets executed after all workers got shut down and the process is about to exit. It is not
     * possible to defer the end of the process using a promise.
     * @param {Object} exitCode 0 - success, 1 - fail
     */
  onComplete(exitCode) {
    console.log('**** e2e tests finished ****');
  },
};
