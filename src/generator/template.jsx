/* eslint-disable */
import Taro from '@tarojs/taro';
import { observer } from '@tarojs/mobx';
import { generateComponents } from '@tarojs/components';

@observer
class TemplateComponent extends Taro.Component {
	render() {
		return JSONtoJsx;
	}
}

export default TemplateComponent;
