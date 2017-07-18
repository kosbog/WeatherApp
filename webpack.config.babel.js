import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractSass = new ExtractTextPlugin({
    filename: "index.css"
});

const Config = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, ''),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'env', 'stage-2']
                }
            },
            {
                test: /\.scss?$/,
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'app/assets/images/[name].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogv|ogg)$/,
                loader: 'file-loader',
                options: {
                    name: 'app/assets/videos/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=app/assets/fonts/[name].[ext]'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Example',
            template: './app/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        extractSass
    ]
}

if (process.env.NODE_ENV === 'prod') {
    Config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

export default Config;