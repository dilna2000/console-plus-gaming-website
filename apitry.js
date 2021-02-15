const http = require("https");

const options = {
	"method": "POST",
	"hostname": "rapidapi.p.rapidapi.com",
	"port": null,
	"path": "/getCharacters",
	"headers": {
		"x-rapidapi-key": "f3db8dff09msha5bbe894279d80cp17a919jsn5bf76e113062",
		"x-rapidapi-host": "GameDatabasestefan-skliarovV1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();