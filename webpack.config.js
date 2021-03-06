var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + "/public" ,
        filename: "/dist/bundle.js"
    },
    module: {
        loaders: [
          { test: /\.js$/,   loader: "babel-loader", exclude: /node_modules/ },
          { test: /\.sass$/, loader: ExtractTextPlugin.extract("style", ["css?modules&importLoaders=2", "sass", "bulma?theme=node_modules/bulma/bulma.sass"])},
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff&name=./fonts/[hash].[ext]" },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=./fonts/[hash].[ext]" }
        ]
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".sass"]
    },
    devtool: "source-map",
    plugins: [
      new ExtractTextPlugin('./dist/bundle.css')
    ]
}
