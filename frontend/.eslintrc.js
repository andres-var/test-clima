module.exports = {
	env : {
		browser : true,
		es2021  : true,
	},
	extends : [
		"plugin:react/recommended",
		// "airbnb",
	],
	parserOptions : {
		ecmaFeatures : {
			jsx : true,
		},
		ecmaVersion : 2020,
		sourceType  : "module",

	},
	plugins : [
		"babel",
		"react",
		"align-import",
		"unused-imports",
	],
	rules : {
		"react/jsx-filename-extension" : [1, { extensions : [".js", ".jsx"] }],
		indent                         : [
			"error",
			"tab",
			{
				SwitchCase   : 1,
				// Delete next line when problem is fixed
				ignoredNodes : ["TemplateLiteral"],
			},
		],
		"no-mixed-spaces-and-tabs" : [
			"error",
			"smart-tabs",
		],
		quotes : [
			"error",
			"double",
		],
		semi : [
			"error",
			"always",
		],
		"no-unused-vars" : [
			"error",
			{
				args : "none",
			},
		],
		"react/display-name" : "off",
		"react/prop-types"   : "off",
		"comma-dangle"       : [
			"error",
			{
				arrays    : "always-multiline",
				objects   : "always-multiline",
				imports   : "always-multiline",
				exports   : "always-multiline",
				functions : "ignore",
			},
		],
		"key-spacing" : [
			"error",
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true,
				},
				multiLine : {
					align       : "colon",
					beforeColon : true,
					afterColon  : true,
				},
			},
		],
		"no-trailing-spaces" : "error",
		"eol-last"           : [
			"error",
			"always",
		],
		"arrow-parens"    : "off",
		"linebreak-style" : [
			"off",
			"windows",
		],
		"no-multi-spaces" : [
			"error",
			{
				exceptions : {
					ImportDeclaration  : true,
					VariableDeclarator : true,
				},
			},
		],
		"comma-spacing" : [
			"error",
			{
				before : false,
				after  : true,
			},
		],
		"no-var"                           : "error",
		"prefer-const"                     : "error",
		"no-const-assign"                  : "error",
		"prefer-template"                  : "error",
		"react/react-in-jsx-scope"         : "off",
		"align-import/align-import"        : "error",
		"align-import/trim-import"         : "error",
		"unused-imports/no-unused-imports" : "error",
		"react/jsx-indent"                 : [
			1,
			"tab",
		],
		"react/jsx-indent-props" : [
			1,
			"tab",
		],
		"react/no-find-dom-node"      : "off",
		"react/no-unescaped-entities" : "off",
	},
};
