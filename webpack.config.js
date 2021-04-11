const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const webpackDevClientEntry = require.resolve(
    'react-dev-utils/webpackHotDevClient'
);
const reactRefreshOverlayEntry = require.resolve(
    'react-dev-utils/refreshOverlayInterop'
);

// const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
// const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    // devtool: 'source-map',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true,
        //overlay: false,
        // transportMode: { server: 'ws', client: 'ws' },
        // injectClient: false,

        // before(app, server) {
        //     // Keep `evalSourceMapMiddleware` and `errorOverlayMiddleware`
        //     // middlewares before `redirectServedPath` otherwise will not have any effect
        //     // This lets us fetch source contents from webpack for the error overlay
        //     app.use(evalSourceMapMiddleware(server));
        //     // This lets us open files from the runtime error overlay.
        //     app.use(errorOverlayMiddleware());
        // },
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            '~': path.join(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')],
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(ttf)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'icon',
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App'
        }),
        new ReactRefreshWebpackPlugin({
            overlay: {
                entry: webpackDevClientEntry,
                module: reactRefreshOverlayEntry,
                sockIntegration: false,
            },
        }),

    ],
}
