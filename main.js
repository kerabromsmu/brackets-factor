define(function(require, exports, module) {
	'use strict';
	
	var LanguageManager = brackets.getModule('language/LanguageManager');

	require("factor");

	LanguageManager.defineLanguage('factor', {
	  name: 'Factor',
	  mode: 'factor',
	  fileExtensions: ['factor'],
	  lineComment: ['!', '#!']
	});     
	
	console.log('Factor syntax highlighting loaded.');
});
