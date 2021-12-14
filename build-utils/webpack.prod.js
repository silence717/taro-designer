/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:26:32
 * @Description [webpack production mode config]
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildOutputDir = path.join(__dirname, '../docs');

module.exports = () => ({
	mode: 'production',
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [MiniCssExtractPlugin.loader, 'css', 'less']
			}
		]
	},
	output: {
		filename: '[name]-[hash:20].js',
		publicPath: '/',
		path: buildOutputDir
	},
	optimization: {
		minimize: true,
		minimizer: [new OptimizeCSSAssetsPlugin()],
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					test(module) {
						return module.resource && module.resource.includes('@tarojs');
					},
					name: 'vendors'
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name]-[hash:20].css',
			chunkFilename: '[name].[hash:20].css'
		})
	]
});
