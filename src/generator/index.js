const pageData = [
	{
		id: '1',
		type: 'View',
		props: {
			hoverClass: 'none',
			hoverStartTime: 50,
			hoverStayTime: 400,
			styles: {
				margin: '0px 10px 10px 10px'
			},
			otherStyle: 'background: #ffd;'
		},
		childrens: [
			{
				id: '1-1',
				type: 'Button',
				props: {
					text: '按钮一枚123',
					size: 'default',
					type: 'primary',
					plain: false,
					disabled: false,
					loading: false,
					hoverClass: 'none',
					hoverStartTime: 20,
					hoverStayTime: 70,
					styles: {
						width: '160px',
						margin: '20px'
					}
				}
			},
			{
				id: '1-2',
				type: 'Button',
				props: {
					text: '嵌套的按钮',
					size: 'mini',
					type: 'default',
					plain: false,
					styles: {
						width: '',
						margin: '20px 20px 20px 20px'
					}
				}
			},
			{
				id: '1-3',
				type: 'View',
				props: {
					styles: {
						margin: '10px 0px 0px 0px'
					},
					otherStyle: 'padding: 10px;'
				},
				childrens: [
					{
						id: '1-3-1',
						type: 'Button',
						props: {
							text: 'okcbs123',
							size: 'mini',
							type: 'warn',
							styles: {
								width: '',
								margin: ''
							}
						}
					},
					{
						type: 'Button',
						props: {
							text: 'ok',
							type: 'default',
							size: 'mini',
							styles: {
								width: '',
								margin: '10px 0px 0px 10px'
							}
						},
						id: '1-3-2'
					},
					{
						type: 'View',
						props: {
							styles: {
								margin: '20px'
							}
						},
						id: '1-3-3',
						childrens: [
							{
								type: 'Button',
								props: {
									text: '嵌套的按钮',
									size: 'mini',
									type: 'default',
									styles: {
										width: '',
										margin: '20px 20px 20px 20px'
									}
								},
								id: '1-3-3-1'
							},
							{
								type: 'Button',
								props: {
									text: 'ok',
									size: 'default',
									type: 'default',
									plain: false,
									disabled: false,
									loading: false,
									hoverClass: 'none',
									hoverStartTime: 20,
									hoverStayTime: 70
								},
								id: '1-3-3-2'
							}
						]
					},
					{
						type: 'Button',
						props: {
							text: 'ok',
							type: 'default',
							size: 'default',
							styles: {
								width: '',
								margin: '0px 0px 10px 20px'
							}
						},
						id: '1-3-4'
					}
				]
			},
			{
				type: 'Button',
				props: {
					styles: {
						margin: '0px 10px 10px 10px',
						width: '200px'
					},
					text: '这个是最后一个',
					size: 'default',
					type: 'primary',
					plain: false
				},
				id: '1-4'
			},
			{
				type: 'Button',
				props: {
					text: 'cancel',
					size: 'mini',
					type: 'default',
					styles: {
						width: '',
						margin: '0px 0px 0px 10px'
					}
				},
				id: '1-5'
			},
			{
				type: 'View',
				props: {
					styles: {
						margin: '5px'
					}
				},
				id: '1-6',
				childrens: [
					{
						type: 'Button',
						props: {
							text: '多层嵌套1',
							size: 'default',
							type: 'default',
							styles: {
								width: '',
								margin: '0px 0px 0px 10px'
							}
						},
						id: '1-6-1'
					},
					{
						type: 'Button',
						props: {
							text: 'ok',
							type: 'default',
							size: 'default',
							styles: {
								width: '',
								margin: '10px 10px 10px 10px'
							}
						},
						id: '1-6-2'
					}
				]
			},
			{
				type: 'View',
				props: {
					styles: {
						margin: '5px'
					}
				},
				id: '1-7',
				childrens: [
					{
						type: 'Button',
						props: {
							text: 'ok',
							type: 'default',
							size: 'default',
							styles: {
								width: '',
								margin: '10px 10px 10px 10px'
							}
						},
						id: '1-7-1'
					},
					{
						type: 'View',
						props: {
							styles: {
								margin: '10px'
							}
						},
						id: '1-7-2',
						childrens: [
							{
								type: 'Button',
								props: {
									text: 'last',
									size: 'default',
									type: 'warn',
									plain: false,
									disabled: false,
									loading: false,
									hoverClass: 'none',
									hoverStartTime: 20,
									hoverStayTime: 70,
									styles: {
										margin: '5px 5px 5px 5px'
									}
								},
								id: '1-7-2-1'
							},
							{
								type: 'View',
								props: {
									styles: {
										margin: '5px'
									}
								},
								id: '1-7-2-2',
								childrens: [
									{
										type: 'Button',
										props: {
											text: 'ok',
											type: 'default',
											size: 'default',
											styles: {
												width: '',
												margin: '5px 5px 5px 5px'
											}
										},
										id: '1-7-2-2-1'
									}
								]
							}
						]
					}
				]
			},
			{
				type: 'View',
				props: {
					styles: {
						minHeight: '100px'
					}
				},
				id: '1-8',
				childrens: [
					{
						type: 'Button',
						props: {
							styles: {
								margin: '',
								width: ''
							},
							text: '这个是最后一个了',
							size: 'default',
							type: 'default'
						},
						id: '1-8-1'
					},
					{
						type: 'Button',
						props: {
							text: 'ok',
							size: 'default',
							type: 'default',
							plain: false,
							disabled: true,
							loading: false,
							hoverClass: 'none',
							hoverStartTime: 20,
							hoverStayTime: 70,
							styles: {}
						},
						id: '1-8-2'
					}
				]
			}
		]
	}
];

function getAllTypes() {
	const arr = [];

	function loop(data) {
		data.map(item => {
			if (arr.indexOf(item.type) === -1) {
				arr.push(item.type);
			}
			if (item.childrens && item.childrens.length) {
				loop(item.childrens);
			}
			return null;
		});
	}
	loop(pageData);

	return arr;
}
const head = "import React, { Component } from 'react';\n";

function getComponentsImports() {
	const types = getAllTypes().join(', ');
	return `import { ${types} } from '@tarojs/components';`;
}

function generateCode() {
	const comImports = getComponentsImports();
	console.log(head, comImports);
}

generateCode();
