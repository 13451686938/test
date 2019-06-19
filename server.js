//引入核心模块 创建一个服务器 
const http = require("http");
const server = http.createServer((req,res)=>{
	res.writeHead(200,{"content-Type":"text/html;charset=UTF8"});
	res.write("hello node");
	res.write("吴宣仪小姐姐");
	res.end("一起逛街吧<br>明天也OK");
}).listen(8000);

