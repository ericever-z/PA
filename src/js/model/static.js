define(function(){
	function Static(){};
		/**菜单列表**/
	Static.MENU_LIST = [{name:"首页"},
						{name:"简介"},
						{name:"控件"},
						{name:"CSS"},
						{name:"Demo"}];

	Static.TABS = [
					[
						{name:"简介",part:"ack"},
						{name:"项目结构",part:"dl"},
						{name:"基本模板",part:"temp"},
						{name:"浏览器支持",part:"browser"}
					],
					[
						{name:"如何使用",part:"js-start"},
						{name:"列表",part:"js-table"},
						{name:"下拉菜单",part:"js-drop"},
						{name:"文字下拉选项",part:"js-drop2"},
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
						{name:"侧边栏菜单",part:"js-vList2"},
						{name:"搜素输入框",part:"js-search"},
						{name:"进度条",part:"js-progressbar"},
						{name:"图片查看器",part:"js-gallery"},
						{name:"日期范围选择器",part:"js-daterangepicker"},
						{name:"树状二维表",part:"js-treable"},
						{name:"树状二维表2",part:"js-sutable"},
						{name:"时间范围选择器",part:"js-timerange"},
						{name:"气泡",part:"js-bubble"},
						{name:"文件上传",part:"js-upload"}
					],		
					[
						{name:"概览",part:"overview"},
						{name:"栅格系统",part:"grid"},
						{name:"按钮",part:"button"},
						{name:"表格",part:"table"},
						{name:"tabs",part:"tabs"},
						{name:"分页",part:"page"},
						{name:"单选/多选",part:"check-radio"},
						{name:"静态表单",part:"form"}
					],
					[
						{name:"示例网站1",part:"site1"},
						{name:"示例网站2",part:"site2"}
					]
		
	];
	return Static;
});