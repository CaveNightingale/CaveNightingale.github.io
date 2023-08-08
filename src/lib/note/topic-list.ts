interface Note {
	title: string;
	url: string;
	sub?: Note[];
};

const topics: Note[] = [
	{
		title: "Topic List",
		url: "/note"
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