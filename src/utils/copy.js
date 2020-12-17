export default function copy(text) {
	const ele = document.createElement('input');
	ele.style.cssText = 'position:absolute;top:0;z-index: -999;';
	ele.value = text;
	document.body.appendChild(ele);

	ele.select();

	// 复制触焦节点的文本
	const isSuccess = document.execCommand('copy');

	ele.remove();
	return isSuccess;
}
