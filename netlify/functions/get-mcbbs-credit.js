const https = require('https');
const creditRegex = /<li><em>积分<\/em>(-?[0-9]+)<\/li><li><em>人气<\/em>(-?[0-9]+) 点<\/li>\n<li><em>金粒<\/em>(-?[0-9]+) 粒<\/li>\n<li><em>金锭\[已弃用\]<\/em>(-?[0-9]+) 块<\/li>\n<li><em>宝石<\/em>(-?[0-9]+) 颗<\/li>\n<li><em>下界之星<\/em>(-?[0-9]+) 枚<\/li>\n<li><em>贡献<\/em>(-?[0-9]+) 份<\/li>\n<li><em>爱心<\/em>(-?[0-9]+) 心<\/li>\n<li><em>钻石<\/em>(-?[0-9]+) 颗<\/li>/;
const creditList = ['积分', '人气', '金粒', '金锭', '宝石', '下界之心', '贡献', '爱心', '钻石'];
const usernameRegex = /<h2 class="mt">\n([\s\S]+?)<\/h2>/;
const adminGroupRegex = /<em class="xg1">管理组&nbsp;&nbsp;<\/em><span[\s\S]+?><a href="home\.php\?mod=spacecp&amp;ac=usergroup&amp;gid=([0-9]+)" target="_blank">([\s\S]+?)<\/a>/;
const userGroupRegex = /<em class="xg1">用户组&nbsp;&nbsp;<\/em><span[\s\S]+?><a href="home\.php\?mod=spacecp&amp;ac=usergroup&amp;gid=([0-9]+)" target="_blank">([\s\S]+?)<\/a>/;
const userGroupExRegex = /<li><em class="xg1">扩展用户组&nbsp;&nbsp;<\/em>([\s\S]+?)<\/li>/;
const postsRegex = / target="_blank">回帖数 (-?[0-9]+?)<\/a>/;
const threadsRegex = / target="_blank">主题数 (-?[0-9]+?)<\/a>/;

exports.handler = function (event, context) {
	if (event.httpMethod == 'GET') {
		return new Promise((resolve, reject) => {
			function send(obj) {
				resolve({
					statusCode: 200,
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
						'Access-Control-Allow-Origin': '*'
					},
					body: JSON.stringify(obj)
				});
			}
			if (!/^[0-9]+$/.test(event.queryStringParameters.uid))
				send({ error: 'illegal uid' });
			https.get('https://www.mcbbs.net/?' + event.queryStringParameters.uid, (msg) => {
				let data = '', result = {};
				msg.on('data', input => data += input);
				msg.on('end', () => {
					let usernameParsed = usernameRegex.exec(data);
					if (usernameParsed)
						result.username = usernameParsed[1];
					let creditParsed = creditRegex.exec(data);
					if (creditParsed) {
						let credits = {};
						for (let i = 0; i < creditList.length; i++)
							credits[creditList[i]] = parseInt(creditParsed[i + 1]);
						result.credits = credits;
					}
					let adminGroupParsed = adminGroupRegex.exec(data);
					if (adminGroupParsed) {
						result.adminGroup = adminGroupParsed[2];
						result.adminGroupId = parseInt(adminGroupParsed[1]);
					}
					let userGroupParsed = userGroupRegex.exec(data);
					if (userGroupParsed) {
						result.userGroup = userGroupParsed[2];
						result.userGroupId = parseInt(userGroupParsed[1]);
					}
					let userGroupExParsed = userGroupExRegex.exec(data);
					if (userGroupExParsed) {
						result.userGroupEx = [];
						for (let s of userGroupExParsed[1].split(','))
							result.userGroupEx.push(s);
					}
					let postsParsed = postsRegex.exec(data);
					if (postsParsed)
						result.posts = parseInt(postsParsed[1]);
					let threadsParsed = threadsRegex.exec(data);
					if (threadsParsed)
						result.threads = parseInt(threadsParsed[1]);
					if (usernameParsed && creditParsed)
						send(result); 
					else
						send({ error: 'Credit Not Found' });
				});
				msg.on('error', err => {
					send({ error: err.stack });
				});
			});
		});
	} else {
		return Promise.resolve({
			statusCode: 404,
			headers: {
				'Content-Type': 'text/plain;charset=utf-8'
			},
			body: 'Not Found'
		});
	}
}
