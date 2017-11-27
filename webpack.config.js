var DashBoardPlugin = require('webpack-dashboard/plugin');

var config = {
	entry: './js/index.js',
	output: {
		filename: './js/bundle.js',
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new DashBoardPlugin(),
	]
}
module.exports = config;
