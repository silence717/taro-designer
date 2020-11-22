/* eslint-disable */
import React, { Component } from 'react';
import { View, Button, Icon, ScrollView, Swiper, SwiperItem } from '@tarojs/components';

import './index.less';

class TemplateComponent extends Component {
	render() {
		return (
			<View className="container1">
				<Button type="primary">按钮一枚123</Button>
				<Button size="mini">嵌套的按钮</Button>
				<View hoverClass="none1">
					<Button size="mini" type="warn">
						okcbs123
					</Button>
					<Button size="mini">ok</Button>
					<View hoverClass="none1">
						<Button size="mini">嵌套的按钮</Button>
						<Button plain={true}>ok</Button>
						<Icon></Icon>
						<Icon type="success_no_circle"></Icon>
						<Icon type="info"></Icon>
						<Icon type="warn"></Icon>
						<Icon type="waiting" size={40}></Icon>
						<Icon type="cancel"></Icon>
						<Icon type="download"></Icon>
						<Icon type="search"></Icon>
						<Icon type="clear"></Icon>
					</View>
					<Button>ok</Button>
					<ScrollView>
						<Button type="primary">ok</Button>
						<Swiper indicatorDots={true} autoplay={true}>
							<SwiperItem className="item-1"></SwiperItem>
							<SwiperItem className="item-2"></SwiperItem>
							<SwiperItem className="item-3"></SwiperItem>
						</Swiper>
					</ScrollView>
				</View>
				<Button type="primary">这个是最后一个</Button>
				<Button size="mini">cancel</Button>
				<View hoverClass="none1">
					<Button>多层嵌套1</Button>
					<Button>ok</Button>
				</View>
				<View hoverClass="none1">
					<Button>ok</Button>
					<View>
						<Button type="warn">last</Button>
						<View hoverClass="none1">
							<Button>ok</Button>
						</View>
					</View>
				</View>
				<View hoverClass="none1">
					<Button>这个是最后一个按钮1213</Button>
					<Button disabled={true}>ok</Button>
				</View>
				<Button></Button>
			</View>
		);
	}
}

export default TemplateComponent;
