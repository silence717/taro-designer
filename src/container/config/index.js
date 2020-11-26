import React, { Component } from 'react';
import { observer } from 'mobx-react';
import JSZip from 'jszip';
import { Button, Tips } from 'cloud-react';

import { http } from '@utils';
import { CONFIGS } from '@components';

import renderJSONtoJSX from '../../generator';
import store from '../store';

import ConfigForm from './form';

import './style.less';

@observer
class Config extends Component {
	handleGenerate = async () => {
		const { types, jsx, css } = renderJSONtoJSX(store.pageData);
		await http.post('/generate', {
			types,
			contents: jsx,
			css
		});
	};

	handleDownload = async () => {
		const { data } = await http('/download');
		const zip = new JSZip();
		await zip.loadAsync(data, { base64: true });
		const blob = await zip.generateAsync({ type: 'blob' });
		const url = window.URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.setAttribute('href', url);
		link.setAttribute('download', 'code.zip');
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	render() {
		return (
			<section className="config">
				<header>
					属性配置区
					{store.currentId ? `（${CONFIGS[store.currentType].name}）` : ''}
				</header>
				<div>
					{store.currentId ? (
						<>
							<Button size="small">删除此元素</Button>
							{CONFIGS[store.currentType].tips && <Tips msg={CONFIGS[store.currentType].tips} type="major" />}
							<ConfigForm />
						</>
					) : (
						<Tips msg="请选择要编辑的元素" type="major" />
					)}
				</div>
				<Button type="primary" onClick={this.handleGenerate} style={{ marginRight: '20px' }}>
					生成代码
				</Button>
				<Button type="primary" onClick={this.handleDownload}>
					下载源代码
				</Button>
			</section>
		);
	}
}

export default Config;
