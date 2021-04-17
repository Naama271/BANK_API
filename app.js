const {
	getMovies,
	addMovie,
	getMovie,
	updateMovie,
	deleteMovie,
} = require("./utils");

const express = require("express");
const app = express();

// const { findUsers, findUser, create } = require("./utils");

app.use(express.json());

app.get("/api/movies", (req, res) => {
	try {
		res.status(200).json(getMovies());
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.post("/api/movies", (req, res) => {
	try {
		addMovie(req.body);
		res.status(201).send("success");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.get("/api/movies/:id/", (req, res) => {
console.log(req.params)
	// try {
	// 	const movie = getMovie(req.params.id);
    //     console.log("hello")
	// 	res.status(201).send(movie);
	// } catch (e) {
	// 	res.status(400).send({ error: e.message });
	// }
});

app.put("/api/movies/:id", (req, res) => {
	try {
		updateMovie(req.params.id, req.body);
		res.status(201).send("success");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.delete("/api/movies/:id", (req, res) => {
	try {
		deleteMovie(req.params.id);
		res.status(201).send("movie deleted");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});


const PORT = 3000;
app.listen(PORT, () => {
	console.log("listening on port 3000");
});