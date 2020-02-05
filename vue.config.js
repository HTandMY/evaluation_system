module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/evaluation_system/'
      : '/',
    pwa: {
        iconPaths: {
        favicon32: 'favicon.png',
        favicon16: 'favicon.png',
        appleTouchIcon: 'favicon.png',
        maskIcon: 'favicon.png',
        msTileImage: 'favicon.png'
        }
    }
}