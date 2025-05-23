export type TrendingList = {
    id: number;
    title: string;
    poster: string;
    age: number;
    imdb: number;
    releaseDate: string;
    description: string;
    type: string;
    rating: number;
    tags: string[];
}

export const trendingList: TrendingList[] = [
    {
        "id": 1,
        "title": "Oppenheimer",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        "age": 18,
        "imdb": 7.2,
        "releaseDate": "21.07.2023",
        "description": "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a significant role in developing the atomic bombs that ended World War II.",
        "type": "movies",
        "rating": 6.2,
        "tags": ["Historical", "Biographical", "War"]
    },
    {
        "id": 2,
        "title": "Breaking Bad",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        "age": 16,
        "imdb": 9.5,
        "releaseDate": "20.01.2008",
        "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
        "type": "series",
        "rating": 9.5,
        "tags": ["Crime", "Drama", "Addiction"]
    },
    {
        "id": 3,
        "title": "Inception",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        "age": 13,
        "imdb": 8.8,
        "releaseDate": "16.07.2010",
        "description": "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        "type": "movies",
        "rating": 8.8,
        "tags": ["Mind-bending", "Thriller", "Action"]
    },
    {
        "id": 4,
        "title": "Stranger Things",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        "age": 16,
        "imdb": 8.7,
        "releaseDate": "15.07.2016",
        "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        "type": "series",
        "rating": 8.7,
        "tags": ["Supernatural", "Sci-fi", "Mystery"]
    },
    {
        "id": 5,
        "title": "The Godfather",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "age": 18,
        "imdb": 9.2,
        "releaseDate": "24.03.1972",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "type": "movies",
        "rating": 9.2,
        "tags": ["Classic", "Mafia", "Crime"]
    },
    {
        "id": 6,
        "title": "Dark",
        "poster": "https://image.tmdb.org/t/p/w1280/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
        "age": 16,
        "imdb": 8.8,
        "releaseDate": "01.12.2017",
        "description": "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        "type": "series",
        "rating": 8.8,
        "tags": ["Time travel", "Thriller", "Mystery"]
    },
    {
        "id": 7,
        "title": "The Shawshank Redemption",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "age": 18,
        "imdb": 9.3,
        "releaseDate": "14.10.1994",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "type": "movies",
        "rating": 9.3,
        "tags": ["Drama", "Friendship", "Hope"]
    },
    {
        "id": 8,
        "title": "Game of Thrones",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        "age": 18,
        "imdb": 9.2,
        "releaseDate": "17.04.2011",
        "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        "type": "series",
        "rating": 9.2,
        "tags": ["Fantasy", "War", "Adventure"]
    },
    {
        "id": 9,
        "title": "Interstellar",
        "poster": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        "age": 13,
        "imdb": 8.6,
        "releaseDate": "07.11.2014",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "type": "movies",
        "rating": 8.6,
        "tags": ["Space", "Adventure", "Survival"]
    },
    {
        "id": 10,
        "title": "The Crown",
        "poster": "https://image.tmdb.org/t/p/w1280/1M876KPjulVwppEpldhdc8V4o68.jpg",
        "age": 16,
        "imdb": 8.6,
        "releaseDate": "04.11.2016",
        "description": "Follows the political rivalries and romances of Queen Elizabeth II's reign and the events that shaped Britain for the second half of the 20th century.",
        "type": "series",
        "rating": 8.6,
        "tags": ["Historical", "Royalty", "Drama"]
    }
]