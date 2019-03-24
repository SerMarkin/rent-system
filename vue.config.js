module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://inno-rent.herokuapp.com',
                pathRewrite: { '^/api': '' },
            },
        }
    }
    /*devServer: {
        proxy: {
            '/': {
                target: "'https://tranquil-mountain-16560.herokuapp.com'",
                changeOrigin: true,
            }
        }
    }*/
}
