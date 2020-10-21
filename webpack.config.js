/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:27:39
 * @Description [webpack basic config]
 */
const path = require('path');
const argv = require('yargs').argv;
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const resolve = dir => path.resolve(__dirname, dir);

module.exports = ({ mode } = { mode: 'dev', presets: [] }) => {
	return webpackMerge(
		{
			resolve: {
				alias: {
					'@utils': resolve('./src/utils'),
					'@components': resolve('./src/components'),
					'@container': resolve('./src/container')
				},
				modules: [resolve(__dirname, './src'), resolve(__dirname, './demo'), resolve('./node_modules')],
				extensions: ['.js'],
			},
			resolveLoader: {
				moduleExtensions: ['-loader'],
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: [resolve('./node_modules')],
						use: ['babel', 'eslint'],
					},
					{
						test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
						loader: 'url',
						options: {
							limit: 10000,
							name: '[name]-[hash:7].[ext]',
						},
					},
					{
						test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
						loader: 'url',
						options: {
							limit: 10000,
							name: '[name]-[hash:7].[ext]',
						},
					},
				],
			},
			plugins: [
				new HtmlWebpackPlugin({
					filename: 'index.html',
					template: 'demo/index.html',
					minify: false,
				}),
				// 分析打包大小问题
				// new WebpackBundleAnalyzer(),
				new webpack.ProgressPlugin()
			],
		},
		modeConfig(mode),
	);
};
