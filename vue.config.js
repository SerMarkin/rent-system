module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'localhost:3000',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
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
