//task1
const movies = [
    {title : "sector36" , genre : "thriller" , rating : 8.0 , releasse : 2024 },
    {title : "rado" , genre : "action" , rating : 7.5 , releasse : 2021 },
    {title : "munjiya" , genre : "horror" , rating : 9.0 , releasse : 2023 },
]

//task2
const addmovie = (movielist,movie)=>
{
    movielist.push(movie);
};

addmovie(movies,{title : "drashyam" , genre : "thriller" , rating : 9.7 , releasse : 2022});
console.log(movies);

//task3
const find_according_userwant = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

console.log(find_according_userwant(movies, "thriller"));

//task4
const highest_rated_movie = movielist => {
    return movielist.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

console.log(highest_rated_movie(movies));


//task5
const getmovietitles = movielist =>
{
   return  movielist.map(movie=>movie.title);
};

console.log(getmovietitles(movies));

//task6
const find_according_year = (movielist, year) => {
    return movielist.filter(movie => movie.releasse > year);
};

console.log(find_according_year(movies, 2022));

//task7

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releasse}) is a ${movie.genre} movie with a rating of ${movie.rating}`);
});
