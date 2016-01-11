/***
** sub piece
** name: copyright-piece
** father: main piece
**/
define(['./segs/seg-download'],function(dl){
	extend(Main,Piece);
	function Main(){
		var _this = this;
		var _super = arguments.callee.parent;
		this.init = function(){
			this._DOM = $("div[data-piece='footer']");//这个类 控制的DOM区域
			_super.init.call(_this);
		};
		
		this.update = function(msg){
            if(msg.type=="com_li_click"){
                if(msg.data.index > 0) {
                    this._DOM.addClass("hidden");
                }else{
                    this._DOM.removeClass("hidden");                
                }
            }            
		}
		
	}
	return new Main();
});