const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|otf|eot|woff2?|ttf)$/;
const svgToMiniDataURI = require('mini-svg-data-uri');

export default ({
    loader: 'url-loader',
    test: fileRegex,
    options: {
        limit: 8192,
        encoding: false,
        generator: (content) => svgToMiniDataURI(content.toString()),

    },
})
