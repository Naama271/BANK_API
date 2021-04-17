const fs = require("fs");

const getMovies = () => {
	const movies = loadMovie();
    // console.log(movies)
	return movies;
};
const getMovie = (id) => {
	const movies = loadMovie();
     console.log(movies);
	const movie = movies.find((el) => el.id === id);
	if (movie) return movie;
	throw new Error("Movie not found");
};

const addMovie = (movie) => {
	const movies = loadMovie();
	movies.push(movie);
	saveMovies(movies);
    console.log(movies)
};

const updateMovie = (id, { title, rating, genre, length }) => {
	const movies = loadMovie();
	let movie = movies.find((el) => el.id === id);
	if (!movie) throw new Error("Movie not found ");
	movie = Object.assign(movie, {
		title: title ? title : movie.title,
		rating: rating ? rating : movie.rating,
		genre: genre ? genre : movie.genre,
		length: length ? length : movie.length,
	});
	saveMovies(movies);
};

function deleteMovie(id) {
	const movies = loadMovie();
	let movieIndex = -1;
	movies.forEach((el, index) => {
		if (el.id === id) movieIndex = index;
	});
	if (movieIndex === -1) throw new Error("Movie not found ");
	movies.splice(movieIndex, 1);
	saveMovies(movies);
}

function saveMovies(movies) {
	const dataJSON = JSON.stringify(movies);
	fs.writeFileSync("movies.json", dataJSON);
}

function loadMovie() {
	try {
		const dataBuffer = fs.readFileSync("movies.json");
		const dataJSON = dataBuffer.toString();
        console.log(JSON.parse(dataJSON))

		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
}


module.exports = { getMovies, addMovie, getMovie, updateMovie, deleteMovie };