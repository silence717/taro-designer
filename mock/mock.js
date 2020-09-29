module.exports = router => {

	console.log(router);

	router.get('/user/:id', (req, res) => {
		res.status(200).json({
			id: 1,
			name: 'Silence',
			avatar: 'https://tva2.sinaimg.cn/crop.0.15.750.750.180/7519e0e4jw8fd1xvl53brj20ku0lp3za.jpg?KID=imgbed,tva&Expires=1572523216&ssig=rl4XjRNXRY',
			age: 18
		})
	});
}
