// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
	"parser": "babel-eslint",
	"ecmaVersion": 6,
	"sourceType": "module",
	"ecmaFeatures": {
	    "globalReturn": true,
	    "impliedStrict": true,
	    "experimentalObjectRestSpread": true
	}
	},
	env: {
	"browser": true,
	"node": true,
	"worker": true,
	"mocha": true,
	"es6": true
	},
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: ["plugin:vue/essential"],
	// required to lint *.vue files
	plugins: [
		"vue"
	],
	// add your custom rules here
	rules: {
	// allow debugger during development
	"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	"constructor-super": 2,
	"indent": ["error", "tab"],
	"no-case-declarations": 2,
	"no-class-assign": 2,
	"no-compare-neg-zero": 2,
	"no-cond-assign": 2,
	//"no-console": ["error", { allow: ["warn", "error"] }],
	"no-const-assign": 2,
	"no-constant-condition": 2,
	"no-control-regex": 2,
	"no-delete-var": 2,
	"no-dupe-args": 2,
	"no-dupe-class-members": 2,
	"no-dupe-keys": 2,
	"no-duplicate-case": 2,
	"no-empty-character-class": 2,
	"no-empty-pattern": 2,
	"no-empty": 2,
	"no-ex-assign": 2,
	"no-extra-boolean-cast": 2,
	"no-extra-semi": 2,
	"no-fallthrough": 2,
	"no-func-assign": 2,
	"no-global-assign": 2,
	"no-inner-declarations": 2,
	"no-invalid-regexp": 2,
	"no-irregular-whitespace": 2,
	"no-mixed-spaces-and-tabs": 2,
	"no-new-symbol": 2,
	"no-obj-calls": 2,
	"no-octal": 2,
	"no-redeclare": 2,
	"no-regex-spaces": 2,
	"no-self-assign": 2,
	"no-sparse-arrays": 2,
	"no-this-before-super": 2,
	"no-undef": 2,
	"no-unexpected-multiline": 2,
	"no-unreachable": 2,
	"no-unsafe-finally": 2,
	"no-unsafe-negation": 2,
	"no-unused-labels": 2,
	"no-unused-vars": 2,
	//"no-useless-escape": 2,
	"require-yield": 2,
	"use-isnan": 2,
	"valid-typeof": 2,
	"space-before-function-paren": 0,
	"space-before-blocks": 2,
	"space-in-parens": 2,
	"space-infix-ops": 2,
	"space-unary-ops": 2,
	"spaced-comment": 2,
	"semi": ["error", "always", { "omitLastInOneLineBlock": true}],
	"semi-style": 2,
	"semi-spacing": 1,
	"quotes": ["error", "double", { "allowTemplateLiterals": true }],
	"quote-props": ["error", "consistent-as-needed"]
	}
}
