require.config({
	shim: {
		jquery: { exports: "jQuery" }
	},
    paths : {
		jquery:  'bower_components/jquery/dist/jquery'
    },
    baseUrl: '/base',
    deps: ["spec"],
    callback: window.__karma__.start
});