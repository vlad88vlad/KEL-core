export default ({
    test: /\.svg$/i,
    include: /.*_sprite\.svg/,
    use: [
        {
            loader: require.resolve('svg-sprite-loader'),
            options: {
                publicPath: '',
            }
        },
    ],

})
