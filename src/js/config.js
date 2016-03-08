require.config({
    urlArgs:"rnd="+(new Date()).getTime(),
    paths:{
		//第三方支持库 alias
        'jquery':'../../lib/jquery1.9/jquery.min',
        'bootstrap':'../../lib/bootstrap/dist/js/bootstrap.min',
		'pretty':'../../lib/code-prettify/loader/prettify',
		'moment':'../../lib/moment/moment.min',
	
		//本地全局使用的模块，alias
		'note':'./model/Note',//全局使用
		'http':'./utils/http',//全局使用
		'parser':'./model/parser',
		'static':'./model/static',
		
		//插件
		'table':'../../lib/NDPUI/dist/com/splitjs/table',
		'drop':'../../lib/NDPUI/dist/com/splitjs/drop',
		'page':'../../lib/NDPUI/dist/com/splitjs/page',
		'bread':'../../lib/NDPUI/dist/com/splitjs/bread',
		'tabs':'../../lib/NDPUI/dist/com/splitjs/tabs',
		'sinput':'../../lib/NDPUI/dist/com/splitjs/sinput',
		'tip':'../../lib/NDPUI/dist/com/splitjs/tip',
		'alert':'../../lib/NDPUI/dist/com/splitjs/alert',
		'confirm':'../../lib/NDPUI/dist/com/splitjs/confirm',
		'prompt':'../../lib/NDPUI/dist/com/splitjs/prompt',
		'tree':'../../lib/NDPUI/dist/com/splitjs/tree',
		'vList':'../../lib/NDPUI/dist/com/splitjs/vList',
		'search':'../../lib/NDPUI/dist/com/splitjs/search',
		'gallery':'../../lib/NDPUI/dist/com/splitjs/gallery',
		'progressbar':'../../lib/NDPUI/dist/com/splitjs/progressbar',
		'vList2':'../../lib/NDPUI/dist/com/splitjs/vList2',
		'drop2':'../../lib/NDPUI/dist/com/splitjs/drop2',
		'daterangepicker':'../../lib/daterangepicker/daterangepicker',
		
		'treable':'../../lib/NDPUI/dist/com/splitjs/treable',
		'sutable':'../../lib/NDPUI/dist/com/splitjs/sutable',
		'bubble':'../../lib/NDPUI/dist/com/splitjs/bubble',
		'upload':'../../lib/NDPUI/dist/com/splitjs/upload'
    },
    shim:{
        'bootstrap':{
            deps:['jquery']
        },
		'alert':{
			deps:['bootstrap']
		},
		'drop2':{
			deps:['bootstrap']
		},		
		'confirm':{
			deps:['bootstrap']
		},
		'gallery':{
			deps:['bootstrap']
		},		
		'prompt':{
			deps:['bootstrap','drop']
		},		
		'daterangepicker':{
			deps:['bootstrap', 'moment']
		},
		treable:{
			deps:['bootstrap', 'tabs']
		},
		bubble:{
			deps:['bootstrap']
		}		
    }
});
