/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development practices
    reactStrictMode: true,
    // Ensure we're exporting a static website for easier hosting
    output: 'export',
    // We don't need server-side features for our puzzle
    images: {
      unoptimized: true
    }
  }
  
  module.exports = nextConfig