// @ts-check
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

const nextConfig = (phase, {defaultConfig}) => {
  /** @type {import('next').NextConfig} */
  const config = {...defaultConfig, reactStrictMode: true}

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    config.env.useScreenSize = 'true'
  }

  return config
}

module.exports = nextConfig
