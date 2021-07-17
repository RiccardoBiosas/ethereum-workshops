require('dotenv').config()

export const environments = {
    PRODUCTION: 'PRODUCTION',
    DEVELOPMENT: 'DEVELOPMENT'
}

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID
if(!gaTrackingId) {
    throw new Error(`missing REACT_APP_GA_TRACKING_ID in .env`)
}
const environment = process.env.REACT_APP_ENVIRONMENT
if(!environment) {
    throw new Error(`missing REACT_APP_ENVIRONMENT in .env`)
}

const config = {
    gaTrackingId,
    isProduction: environment === environments.PRODUCTION
}

export default config