import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Message, Tabs, Tips } from 'cloud-react';
import JSZip from 'jszip';

import { copy, http, renderJSONtoJSX } from '@utils';

import './style.less';

@observer
class Code extends Component {
	@observable
	loading = false;

	@observable
	genLoading = false;

	@observable
	jsxString = '';

	@observable
	cssString = '';

	handlePreview = async () => {
		if (this.genLoading) return;
		this.genLoading = true;

		const cacheData = JSON.parse(localStorage.getItem('cacheData'));
		const { jsx, css } = renderJSONtoJSX(cacheData);

		try {
			const { data } = await http.post('format', {
				jsx,
				css
			});

			this.jsxString = data.jsxRes;
			this.cssString = data.cssRes;

			this.genLoading = false;
		} catch (error) {
			this.genLoading = false;
			Message.error('抱歉出错了，请稍后重试～');
		}
	};

	handleDownload = async () => {
		if (this.loading) return;

		this.loading = true;

		const cacheData = JSON.parse(localStorage.getItem('cacheData'));
		const { jsx, css } = renderJSONtoJSX(cacheData);

		try {
			const { data } = await http.post('/download', {
				contents: jsx,
				css
			});

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

			this.loading = false;
		} catch (error) {
			this.loading = false;
			Message.error('抱歉出错了，请稍后重试～');
		}
	};

	handleCopyJsx = () => {
		const res = copy(this.jsxString);
		if (res) {
			Message.success('jsx复制成功');
		}
	};

	handleCopyCss = () => {
		const res = copy(this.cssString);
		if (res) {
			Message.success('css复制成功');
		}
	};

	render() {
		return (
			<section className="code">
				<header>代码预览区</header>
				<section>
					<Button type="link" loading={this.genLoading} onClick={this.handlePreview}>
						生成代码
					</Button>
					<Button type="link" loading={this.loading} onClick={this.handleDownload}>
						下载
					</Button>
				</section>
				<section>
					<Tabs>
						<Tabs.Panel tab="jsx" key="1">
							{this.jsxString ? (
								<>
									<Button type="link" onClick={this.handleCopyJsx}>
										复制jsx
									</Button>
									<pre className="code-block">{this.jsxString}</pre>
								</>
							) : (
								<Tips msg="请点击上方生成代码按钮" type="major" />
							)}
						</Tabs.Panel>
						<Tabs.Panel tab="css" key="2">
							{this.cssString ? (
								<>
									<Button type="link" onClick={this.handleCopyCss}>
										复制css
									</Button>
									<pre className="code-block">{this.cssString}</pre>
								</>
							) : (
								<Tips msg="css为空，或点击上方生成代码按钮重新生成" type="major" />
							)}
						</Tabs.Panel>
					</Tabs>
				</section>
			</section>
		);
	}
}

export default Code;
