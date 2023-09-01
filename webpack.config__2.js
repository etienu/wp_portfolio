const webpack = require('webpack');
const globule = require('globule');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
/*const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');*/
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * 出力元と出力先のディレクトリを定義
 */
const dir = {
    src: path.join(__dirname, 'src'),
    public: path.join(__dirname, 'public'),
};

/**
 * sassとjsの設定を定義
 */
const scssAndJsConfig = {
    entry: {
        application: path.resolve(dir.src, 'js/_index.js'),
        'style.css': path.resolve(dir.src, 'sass/style.scss'),
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(dir.public, 'assets'),
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]',
        }),
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.css'],
    },
    //source-map タイプのソースマップを出力
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            //new OptimizeCSSAssetsPlugin(),
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    compress: {
                        drop_console: true, // build時にconsole.logを出力しない
                    },
                    output: {
                        comments: false,
                        beautify: false,
                    },
                },
            }),
        ],
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ],
                    },
                }, ],
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                require('autoprefixer')({
                                    grid: true,
                                }),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
};

/**
 * 実行
 */
module.exports = [
    scssAndJsConfig,
];