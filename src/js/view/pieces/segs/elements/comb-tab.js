/**
**@ Combination  tab 组件
**@ constructor {Class} ComTab
**@ super class Combine
**/
define(['static','http','note',
		'./demo-table','./demo-drop',
		'./demo-page','./demo-bread',
		'./demo-tabs','./demo-sinput',
		'./demo-tip','./demo-alert',
		'./demo-confirm','./demo-prompt',
	    './demo-tree','./demo-vList',
		'./demo-search','./demo-gallery',
		'./demo-progressbar','./demo-vList2',
	    './demo-drop2', './demo-daterangepicker',
		'./demo-treable','./demo-bubble',
		'./demo-upload','./demo-sutable',
		'./demo-timerange','./demo-blend'],function(Static,http,note,dTable,
								dDrop,dPage,dBread,dTabs,
								dSinput,dTip,dAlert,dConfirm,
								dPrompt,dTree,dVL,dSearch,
								dGallery,dProgressbar,dvList2,dDrop2, 
								daterangepicker,treable,dbubble,
							    upload,sutable,timerange,blend){
	var dom ={
		concrate:function(hwdL,hwdC,arr){
			var lis = '';
			var ctns = '';
			arr.forEach(function(da,index){
				lis += '<li role="presentation" '+(index==0?"class=active":"")+'>\
				<a href="#menu'+index+'" aria-controls="menu'+index+'" role="tab" data-toggle="tab">'+da.name+'</a></li>'; 
				ctns +='<div role="tabpanel" class="tab-pane '+(index==0?"active":"")+'" id="menu'+index+'">'+index+'</div>';
			});
			hwdL.html(lis);// 配置部分的tab列表
			hwdC.html(ctns); //配置部分的内容  右侧
		},
		/**
		**@param {String} url 
		**@param {int} tabIndex 选中的第几个tab
		**@param {jQuery} parentDOM 
		**/
		live:function(name,tabIndex){
			var RE = new RegExp("js-.+","i");
			if(RE.test(name)){
				var plugin = name.match(/js-(.+)/i)[1];
				if(plugin=="start") plugin = "table";
				require([plugin],function(){
					switch(plugin){
						case "table":
						case "start":
							dTable();//演示用的 table 实例化
							break;
						case "drop":
							dDrop();//演示用的 drop 实例化
							break;
						case "page":
							dPage();
							break;
						case "bread":
							dBread();
							break;
						case "tabs":
							dTabs();
							break;
						case "sinput":
							dSinput();
							break;
						case "tip":
							dTip();
							break;
						case "alert":
							dAlert();
							break;
						case "confirm":
							dConfirm();
							break;
						case "prompt":
							dPrompt();
							break;
						case "tree":
							dTree();
							break;
						case "vList":
							dVL();
							break;
						case "search":
							dSearch();
							break;
						case "gallery":
							dGallery();
							break;
						case "progressbar":
							dProgressbar();
							break;
						case "vList2":
							dvList2();
							break;
						case "drop2":
							dDrop2();
							break;
						case "daterangepicker":
							daterangepicker();
							break;
						case "treable":
							treable();
							break;
						case "bubble":
							dbubble();
							break;
						case "upload":
							upload();
							break;
						case "sutable":
							sutable();	
							break;
						case "timerange":
							timerange();
							break;
						case "blend":
							  blend();	
							break;
					}
					prettyPrint();//渲染 代码 
				});
			};		
		}
	};
	
	extend(ComTab,Combine);// 继承
	function ComTab(){
		var _this = this;
		var _super = arguments.callee.parent;//父类
		this.itemIndex = 0;//最上面导航栏菜单第几个
		this.tabIndex  = 0;//点击 左侧tab 第几个
		this.init = function(){
			_super.init.call(this);
			_this._DOM = $("div[data-combine='tab']");
			_this._SUB_DOM1 = _this._DOM.find("#tabList");
			_this._SUB_DOM2 = _this._DOM.find("#tabContents");
			_this._DOM.on("show.bs.tab",function(e){
				_this.tabIndex = $(e.target).parent().index()||0;//tabList  点击的是第几个
				if($(_this._SUB_DOM1[_this.tabIndex]).children().length<=0 && _this.tabIndex>0){//如果内容为空
					var url   = "./partials/" + Static.TABS[_this.itemIndex][_this.tabIndex].part+".html";
					http.exec(url);//请求 dom 模板
				}
			});
		}
		
		this.update = function(msg){
			_this.itemIndex = msg.data.index-1;//第几个菜单
			_this.tabIndex = 0;
			_this._DOM.attr("value",msg.data.index);
			dom.concrate(_this._SUB_DOM1,_this._SUB_DOM2,Static.TABS[msg.data.index-1]);
			var url   = "./partials/" + Static.TABS[_this.itemIndex][0].part+".html";
			http.exec(url);//加载模板
		}
		
		/***	
		**网络层返回消息处理
		**/
		this._react = function(msg){
			var Note = note.constructor;
			var noti = note.notification;
			switch(msg.name||noti.name){
				case Note.STATIC_HTML:
					var na = Static.TABS[_this.itemIndex][_this.tabIndex].part;//模板的名字
					$(_this._SUB_DOM2.children()[_this.tabIndex]).html(msg.data||noti.data);//填充 返回的dom 模板
					dom.live(na,_this._tabIndex);
					break;
				case Note.PLAIN_JSON:
					break;
				case Note.PLAIN_XML:
					break;
				case Note.PLAIN_STRING:
					break;
			}
		}
		
	};
	return new ComTab;
});