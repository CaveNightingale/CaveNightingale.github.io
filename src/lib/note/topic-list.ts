/**
 * A Note stands for a page in the note system.
 */
interface Note {
	title: string;
	url: string;
	sub?: Note[];
};

/**
 * The main topic list of the note system.
 */
const topics: Note[] = [
	{
		title: "Topic List",
		url: "/note"
	},
	{
		title: "Logic and Set Theory",
		url: "/note/logic-and-set-theory",
	},
	{
		title: "Calculus",
		url: "/note/calculus",
	},
	{
		title: "Number Theory",
		url: "/note/number-theory",
		sub: [
			{
				title: "Chinese Remainder Theorem",
				url: "/note/number-theory/chinese-remainder-theorem"
			},
			{
				title: "Euler's Totient Function",
				url: "/note/number-theory/eulers-totient-function"
			},
			{
				title: "Dirichlet Convolution",
				url: "/note/number-theory/dirichlet-convolution"
			},
			{
				title: "Mobius Function",
				url: "/note/number-theory/mobius-function"
			}
		]
	},
	{
		title: "Graph Theory",
		url: "/note/graph-theory",
	},
	{
		title: "Group Theory",
		url: "/note/group-theory",
	},
	{
		title: "String and Automata",
		url: "/note/string-and-automata",
	},
	{
		title: "Combinatorics",
		url: "/note/combinatorics",
	},
	{
		title: "Probability",
		url: "/note/probability",
	},
	{
		title: "Linear Algebra",
		url: "/note/linear-algebra",
	},
	{
		title: "Geometry",
		url: "/note/geometry",
	},
	{
		title: "Game Theory",
		url: "/note/game-theory",
	},
	{
		title: "Polynomial",
		url: "/note/polynomial",
	},
	{
		title: "Data Structure",
		url: "/note/data-structure",
	},
	{
		title: "Algorithm",
		url: "/note/algorithm",
	},
	{
		title: "Numerical Method",
		url: "/note/numerical-analysis",
		sub: [
			{
				title: "Chebyshev Polynomial",
				url: "/note/numerical-analysis/chebyshev-polynomial"
			},
			{
				title: "Numerical Differentiation",
				url: "/note/numerical-analysis/numerical-differentiation"
			}
		]
	},
	{
		title: "Data Science",
		url: "/note/data-science",
	},
	{
		title: "Utilities and Libraries",
		url: "/note/utilities-and-libraries",
	},
	{
		title: "Miscellaneous",
		url: "/note/miscellaneous",
		sub: [
			{
				title: "本站点测试",
				url: "/note/miscellaneous/site-test"
			}
		]
	},
	{
		title: "首页",
		url: "/",
		sub: [
			{
				title: "免费禁言代码",
				url: "/freemutecode"
			},
			{
				title: "MCBBS积分分析",
				url: "/creditchart"
			},
			{
				title: "ChatGPT测试记录",
				url: "/chatgpt"
			},
			{
				title: "关于CaveNightingale",
				url: "javascript:void(0)",
				sub: [
					{
						title: "这个人的GH主页",
						url: "https://github.com/CaveNightingale"
					},
					{
						title: "这个人的CF主页",
						url: "https://codeforces.com/profile/CaveNightingale"
					}
				]
			}
		]
	}
];

export {
	type Note,
	topics
};