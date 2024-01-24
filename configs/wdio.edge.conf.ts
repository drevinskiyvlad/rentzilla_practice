import { config as baseConfig } from '../wdio.conf'

export const config = {
    ...baseConfig,
    specs: [
        '../test/specs/**/*.ts'
    ],
    capabilities: [{
        browserName: 'microsoftedge'
    }]
}