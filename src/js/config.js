require.config({
    urlArgs:"rnd="+(new Date()).getTime(),
    paths:{
		//第三方支持库 alias
        'jquery':'../../lib/jquery1.9/jquery.min',
        'bootstrap':'../../lib/bootstrap/dist/js/bootstrap.min',
		'pretty':'../../lib/code-prettify/loader/prettify',
	
		//本地全局使用的模块，alias
		'note':'./model/Note',//全局使用
		'http':'./utils/http',//全局使用
		'parser':'./model/parser',
		'static':'./model/static',
		
		//插件
		'table':'../../lib/NXDC/src/js/components/table',
		'drop':'../../lib/NXDC/src/js/components/drop',
		'page':'../../lib/NXDC/src/js/components/page',
		'bread':'../../lib/NXDC/src/js/components/bread',
		'tabs':'../../lib/NXDC/src/js/components/tabs',
		'sinput':'../../lib/NXDC/src/js/components/sinput',
		'tip':'../../lib/NXDC/src/js/components/tip',
		'alert':'../../lib/NXDC/src/js/components/alert',
		'confirm':'../../lib/NXDC/src/js/components/confirm',
		'prompt':'../../lib/NXDC/src/js/components/prompt',
		'tree':'../../lib/NXDC/src/js/components/tree',
		'vList':'../../lib/NXDC/src/js/components/vList',
		'search':'../../lib/NXDC/src/js/components/search',
		'gallery':'../../lib/NXDC/src/js/components/gallery',
		'progressbar':'../../lib/NXDC/src/js/components/progressbar',
		'vList2':'../../lib/NXDC/src/js/components/vList2',
		'drop2':'../../lib/NXDC/src/js/components/drop2',
		'daterangepicker':'../../lib/daterangepicker/daterangepicker',
		'moment':'../../lib/moment/moment.min',
		'treable':'../../lib/NXDC/src/js/components/treable'
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
		}
    }
});
