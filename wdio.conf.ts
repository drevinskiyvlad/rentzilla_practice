import type { Options } from '@wdio/types';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: Options.Testrunner = {
    runner: 'local',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
    ],

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'warn',

    bail: 0,

    baseUrl: process.env.ENV,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function() {
        await browser.setWindowSize(1920, 1080);
    },
}
