module.exports = {
    devServer: {
        proxy:  'localhost:3000'

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
