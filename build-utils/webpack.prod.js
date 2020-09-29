/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:26:32
 * @Description [webpack production mode config]
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildOutputDir = path.join(__dirname, '../dist');

module.exports = () => ({
	mode: 'production',
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [MiniCssExtractPlugin.loader, 'css', 'less'],
			},
		],
	},
	output: {
		filename: '[name]-[hash:20].js',
		publicPath: '/dist/',
		path: buildOutputDir,
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new UglifyJsPlugin({
				uglifyOptions: {
					cache: true,
					parallel: true,
					sourceMap: true,
					warnings: false,
					output: {
						comments: false,
					},
				},
			}),
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name]-[hash:20].css',
			chunkFilename: '[name].[hash:20].css',
		}),
	],
});
