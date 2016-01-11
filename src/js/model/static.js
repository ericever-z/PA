define(function(){
	function Static(){};
		/**菜单列表**/
	Static.MENU_LIST = [{name:"首页"},
						{name:"CSS"},
						{name:"组件"},
						{name:"js插件"}];

	Static.TABS = [
					[
						{name:"简介",part:"ack"},
						{name:"下载",part:"dl"},
						{name:"基本模板",part:"temp"},
						{name:"案例",part:"demo"},
						{name:"浏览器支持",part:"browser"},
						{name:"定制你的组件",part:"custom"}
					],
					[
						{name:"概览",part:"overview"},
						{name:"栅格系统",part:"grid"},
						{name:"按钮",part:"button"},
						{name:"表格",part:"table"},
						{name:"表单",part:"form"},
						{name:"图片",part:"pic"}
					],
					[
						{name:"Glyphicons图标",part:"icons"},
						{name:"下拉菜单",part:"drop"},
						{name:"时间选择器",part:"date"},
						{name:"输入框",part:"input"},
						{name:"输入组",part:""},
						{name:"搜索",part:""},
						{name:"按钮下拉菜单",part:""},
						{name:"按钮组",part:"buttons"}
					],
					[
						{name:"列表",part:"js-table"},
						{name:"下拉菜单",part:"js-drop"},
						{name:"分页",part:"js-page"},
						{name:"面包屑",part:"js-bread"},
						{name:"Tabs",part:"js-tabs"},
						{name:"Tip",part:"js-tip"},
						{name:"文本输入框",part:"js-sinput"},
						{name:"对话框Alert",part:"js-alert"},
						{name:"对话框confirm",part:"js-confirm"},
						{name:"对话框prompt",part:"js-prompt"},
						{name:"树状菜单",part:"js-tree"},
						{name:"垂直树状菜单",part:"js-vList"},
						{name:"搜素输入框",part:"js-search"},
						{name:"进度条",part:"js-progressbar"},
						{name:"图片查看器",part:"js-gallery"},
					]
		
	];
	return Static;
});