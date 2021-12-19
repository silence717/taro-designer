import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, ScrollView, Text } from '@tarojs/components';

import styles from './index.less';
class TemplateComponent extends Component {
    render() {
        return (
            <View style={{ minHeight: `${Taro.pxTransform(200, 750)}` }}>
                <ScrollView style={{ width: 'auto', minHeight: `${Taro.pxTransform(200, 750)}` }}>
                    <View style={{ minHeight: `${Taro.pxTransform(100, 750)}` }}>
                        <Text>text</Text>
                    </View>
                </ScrollView>
                <ScrollView style={{ width: 'auto', minHeight: `${Taro.pxTransform(200, 750)}` }} />
            </View>
        );
    }
}

export default TemplateComponent;
