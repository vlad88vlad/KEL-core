const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const cssLoader = require('./webpack/loaders/css');
console.log(cssLoader);
module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "source-map",
    optimization: {
        minimize: false,
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
        static: path.join(__dirname, "dist"),
        port: 3003,
        liveReload: false,
    },
    output: {
        publicPath: "auto",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            cssLoader
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "remote1",
            filename: "remoteEntry.js",
            shared: {
                react: { singleton: true },
                "react-dom": { singleton: true },
                "react-router-dom": { singleton: true }
            },
            exposes: {
                "./Button": "./src/Button",
                "./Table": "./src/Table",
                "./Heading": "./src/Heading",
            },
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            chunks: ["main"],
        }),
    ],
};

