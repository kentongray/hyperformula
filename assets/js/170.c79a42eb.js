(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{631:function(t,e,a){"use strict";a.r(e);var n=a(33),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"order-of-precedence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-of-precedence"}},[t._v("#")]),t._v(" Order of precedence")]),t._v(" "),a("p",[t._v("HyperFormula supports multiple "),a("RouterLink",{attrs:{to:"/guide/types-of-operators.html"}},[t._v("operators")]),t._v(" that\ncan be used to perform mathematical operations in a formula. These\noperators are calculated in a specific order. If the formula contains\nthe operators of equal precedence, like addition and subtraction, then\nthey are evaluated from left to right.")],1),t._v(" "),a("h2",{attrs:{id:"table-of-precedence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-precedence"}},[t._v("#")]),t._v(" Table of precedence")]),t._v(" "),a("p",[t._v("In the table below you can find the order in which HyperFormula\nperforms operations (from highest to lowest priority).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Precedence")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Operator")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v(": (colon)")]),t._v(" "),a("p",[t._v(", (comma)")]),t._v(" "),a("p",[t._v("(space)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("Reference operators: range (colon), union (comma), intersection (space).")]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("Currently supported by HyperFormula only at the grammar level of a function.")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Negation")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Percent")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("^")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Exponentiation")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("* and /")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Multiplication and division")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("+ and –")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Addition and subtraction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("& (ampersand)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Concatenation of two or more text strings")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("< (less than)")]),t._v(" "),a("p",[t._v("= (equal to) > (greater than)")]),t._v(" "),a("p",[t._v("<= (less than or equal to)")]),t._v(" "),a("p",[t._v(">= (greater than or equal to)")]),t._v(" "),a("p",[t._v("<> (not equal to)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Comparison")])])])]),t._v(" "),a("h2",{attrs:{id:"using-parentheses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-parentheses"}},[t._v("#")]),t._v(" Using parentheses")]),t._v(" "),a("p",[t._v("HyperFormula calculates the formulas in parentheses first so by using\nthem you can override the default order of evaluation. For instance,\nconsider this formula: =7"),a("em",[t._v("8+2. After the equal sign, there are\noperands (7, 8, 2) that are separated by operators (")]),t._v(" and +).\nFollowing the order of calculations, HyperFormula computes 7*8 first\nand then adds 2. The correct answer to this equation is 58.")]),t._v(" "),a("p",[t._v("By placing (8+2) in parenthesis will change the result as\nHyperFormula will first calculate 8 + 2 = 10, and only then multiply\nit by 7. Now the result is 70, not 58 as in the first example.")])])}),[],!1,null,null,null);e.default=r.exports}}]);