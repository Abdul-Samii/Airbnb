/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com']
  },
  env:{
    mapbox_key:'pk.eyJ1IjoicGFwYXJlYWN0IiwiYSI6ImNsMTV3cDhzbDBhY28zanMxaWk1eHlrczIifQ.36GFMGOmtXs4wtX6jJeKoA'
  }
}

module.exports = nextConfig
