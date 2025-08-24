const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = () => {
  const plugins = [withContentlayer]
    return plugins.reduce((acc, next) => next(acc), {
      reactStrictMode: true,
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
      eslint: {
        dirs: ['app', 'components', 'layouts', 'scripts'],
      },
    })
}

module.exports = nextConfig
