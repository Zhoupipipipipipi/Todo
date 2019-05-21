// webpack是用来打包前端资源
const path =  require('path') // path是nodejs里面的基本包 是用来处理路径
const HTMLPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isDev = process.env.NODE_ENV === 'development'
const webpack = require('webpack')

function resolve (dir) {
    return path.join(__dirname, './', dir)
}

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'), // 入口 __dirname代表根目录
    output: { // 出口
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                include: [resolve("src/icons")],
                options: {
                    symbolId: "icon-[name]"
                }
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/, // 转为base64
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]' // 输出名字
                        }
                    }
                ],
                exclude: [resolve('src/icons')]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process_env': { // 变量
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(), // 解决vue-loader引入失败
        new HTMLPlugin() // 生成创建html入口文件，引入外部资源
    ]
}

if(isDev) {
    config.devtool = '#cheap-module-eval-source-map' // 调试还是自己的代码
    config.devServer = {
        port: 8000,
        host: 'localhost', // 可以用ip和localhost访问
        overlay: {
            errors: true // 报错显示
        },
        hot: true // 热更新
        // historyFallback: { // 单页应用
        // }
        // open: true // 默认打开浏览器
    },
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config
