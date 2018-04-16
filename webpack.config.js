const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    entry: {
        app: path.join(__dirname, "./src/app")
    },
    output: {
        path: path.join(__dirname, "./dist")
    },

    module: {
        rules: [
            {
                test: /\.ts|x$/,
                use: "ts-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        })
    ]
};