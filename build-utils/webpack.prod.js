/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:26:32
 * @Description [webpack production mode config]
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
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
		minimize: true,
		minimizer: [
			new OptimizeCSSAssetsPlugin()
			// new TerserPlugin()
		],
		splitChunks: {
			cacheGroups: {
				tarojsGroup: {
					test(module) {
						return module.resource && module.resource.includes('@tarojs');
					},
					name: 'vendor-tarojs'
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name]-[hash:20].css',
			chunkFilename: '[name].[hash:20].css',
		})
	],
});
