const http = require("http");
const fs = require("fs");//文件操作模块
const server = http.createServer( (req,res) =>{
	let urlStr = req.url;
	if( urlStr!="/favicon.ico"){
		if(urlStr == "/"){
			result= fs.readFileSync("html/zhuye.html","utf-8");
			res.end("result");
		}else if(urlStr == "/login"){
			result= fs.readFileSync("html/login.html","utf-8");
			res.write(result);
			res.end("您当前访问的是登录页面");
		}else if(urlStr =="/register"){
			result= fs.readFileSync("html/register.html","utf-8");
			res.write(result);
			res.end("您当前访问的是注册页面");
		}else{
			result= fs.readFileSync("html/404.html","utf-8");
			res.write(result);
			res.end("404");
		}
		
	}
}).listen(9000);

