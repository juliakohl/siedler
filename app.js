const app = require("express");
const PORT = process.env.PORT || 3000;
server = express.createServer();

server.use('/assets', express.static(__dirname + '/assets') );
server.get("/", (req,res) => {
	res.sendfile('index.html');
});

server.listen(PORT, () => {
	console.log(`App up at port ${PORT}`);
});