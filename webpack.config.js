const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const paths = {
    public: path.resolve(__dirname, 'www'),
    build: path.resolve(__dirname, 'www/build'),
    src: path.resolve(__dirname, 'src'),
};
const styleLoader = {
    loader: isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
};
const cssModuleLoader = {
    loader: 'css-loader', options: { modules: true },
};
const cssLoader = {
    loader: 'css-loader', options: { modules: false },
};
const postCssLoader = {
    loader: 'postcss-loader',
};
const lessLoader = {
    loader: 'less-loader',
};
module.exports = {
    context: paths.src,
    entry: {
        main: './index.jsx',
    },
    output: {
        path: paths.build,
        filename: '[name].min.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                exclude: /\.local\.css/u,
                test: /\.css$/u,
                use: [styleLoader, cssLoader, postCssLoader],
            },
            {
                test: /\.local\.css/u,
                use: [styleLoader, cssModuleLoader, postCssLoader],
            },
            {
                exclude: /\.local\.less$/u,
                test: /\.less$/u,
                use: [styleLoader, cssLoader, postCssLoader, lessLoader],
            },
            {
                test: /\.local\.less/u,
                use: [styleLoader, cssModuleLoader, postCssLoader, lessLoader],
            },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    devtool: 'source-map',
    watch: isDev,
    resolve: {
        extensions: ['.jsx', '.js', '*'],
        modules: [paths.src, 'node_modules'],
    },
    devServer: {
        contentBase: paths.public,
        compress: true,
        historyApiFallback: true,
        port: 5000,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'Webpack App', template: path.join(paths.src, './index.html') }),
        new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    ],
    optimization: {
        minimize: isProd,
        splitChunks: {
            automaticNameDelimiter: '.',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
