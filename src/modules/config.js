System.config({
	packages: { 
        'modules': { main: 'main.js' },
        '../libs/rxjs': { defaultExtension: 'js' }
    },
    paths: {
        'rxjs/operator/*': '../libs/rxjs/add/operator/*.js',
        'rxjs/*': '../libs/rxjs/*.js',
        'libs:*': '../libs/*.js',
        'f7:*': '../libs/framework7/dist/js/*.js'
    },
    map: {
    		'framework7': 'f7:framework7'
    }
});
System.import('modules').catch(console.error.bind(console));