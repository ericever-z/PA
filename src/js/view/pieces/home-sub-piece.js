/***
** sub piece
** name: home-piece
** father: main piece
**/
define(['./segs/seg-download'],function(dl){
	extend(Home,Piece);
	function Home(){
		var _this = this;
		var _super = arguments.callee.parent;
		this.init = function(){
			this._DOM = $("div[data-piece='home-piece']");//这个类 控制的DOM区域
			this.children = [dl];//初始化seg  实例
			_super.init.call(_this);
		};
		
		this.update = function(msg){
            if(msg.type=="com_li_click" || msg.type == "btn_dl_click"){
                if(msg.data.index > 0) {
                    this._DOM.css("height",0);
                }else{
                    this._DOM.removeAttr("style");
                }
            }
			_this.children.forEach(function(child){
				child.update(msg);
			});
		}
		
	}
	return new Home;
});