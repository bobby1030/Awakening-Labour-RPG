const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

var config = {
	entry: [
		path.join(__dirname, 'src', 'main')
	],
	output: {
		path: path.join(__dirname, 'static/dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, 'static'),
	}
}

module.exports = config;