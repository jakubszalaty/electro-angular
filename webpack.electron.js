const webpack = require('webpack')

module.exports = {
    target: 'electron-renderer',
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('4711'),
        }),
    ],
}
