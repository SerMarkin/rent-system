module.exports = {
    devServer: {
        proxy:  {
            '/api/*': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
                "secure": false
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
