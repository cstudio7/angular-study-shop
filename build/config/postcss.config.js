module.exports = ({ env, options }) => {
    env = env || {}
    options = options || {}
    options.autoprefixer = options.autoprefixer || null

    return {
        plugins: {
            'postcss-import': {
                path: "src/assets/sass/config"
            },
            'autoprefixer': env === 'production' ? options.autoprefixer : false
        }
    }
}