module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'localhost:3000',
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
