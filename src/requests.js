const apiKey = "786a78e66dcaccdb80970bbd43084004";

const requests = {
    fetchAnimantion: `/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchhorrorMovies :  `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomance : `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchAdventure : `/discover/movie?api_key=${apiKey}&with_genres=12`,
    fetchCrime : `/discover/movie?api_key=${apiKey}&with_genres=80`,
    fetchDrama : `/discover/movie?api_key=${apiKey}&with_genres=18`,
    fetchFamily : `/discover/movie?api_key=${apiKey}&with_genres=10751`,
    fetchFantasy : `/discover/movie?api_key=${apiKey}&with_genres=14`,
    fetchWar : `/discover/movie?api_key=${apiKey}&with_genres=10752`,
    fetchThriller : `/discover/movie?api_key=${apiKey}&with_genres=53`,
    fetchWestern : `/discover/movie?api_key=${apiKey}&with_genres=37`,
    fetchDocumentries : `/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default requests;



// /search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false

// 
// {
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 16,
//         "name": "Animation"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 80,
//         "name": "Crime"
//       },
//       {
//         "id": 99,
//         "name": "Documentary"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 10751,
//         "name": "Family"
//       },
//       {
//         "id": 14,
//         "name": "Fantasy"
//       },
//       {
//         "id": 36,
//         "name": "History"
//       },
//       {
//         "id": 27,
//         "name": "Horror"
//       },
//       {
//         "id": 10402,
//         "name": "Music"
//       },
//       {
//         "id": 9648,
//         "name": "Mystery"
//       },
//       {
//         "id": 10749,
//         "name": "Romance"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       },
//       {
//         "id": 10770,
//         "name": "TV Movie"
//       },
//       {
//         "id": 53,
//         "name": "Thriller"
//       },
//       {
//         "id": 10752,
//         "name": "War"
//       },
//       {
//         "id": 37,
//         "name": "Western"
//       }
//     ]
//   }