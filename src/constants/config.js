require('dotenv').config()

const config = {
    gaTrackingId: process.env.REACT_APP_GA_TRACKING_ID,
    isProduction: hostname.includes('ethereumprague')
}

export default config