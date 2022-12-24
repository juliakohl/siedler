const app = require("express")();
const PORT = process.env.PORT || 3000;
server = express.createServer();

server.use('/assets', express.static(__dirname + '/assets') );
server.get("/", (req,res) => {
	res.sendfile('index.html');
});

app.listen(PORT, () => {
	console.log(`App up at port ${PORT}`);
});