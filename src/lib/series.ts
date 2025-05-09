export type Series = {
    id: number;
    title: string;
    poster: string;
    genres: string[];
    imdb: number;
    releaseDate: string;
    description: string;
}

export const series: Series[] = [
    {
        id: 1,
        title: "The Last of Us",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        genres: ["Drama", "Action & Adventure"],
        imdb: 8.8,
        releaseDate: "2023-01-15",
        description: "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle 14-year-old Ellie out of a quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey."
    },
    {
        id: 2,
        title: "The Mandalorian",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        genres: ["Sci-Fi & Fantasy", "Action & Adventure"],
        imdb: 8.7,
        releaseDate: "2019-11-12",
        description: "After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic."
    },
    {
        id: 3,
        title: "Stranger Things",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        genres: ["Drama", "Mystery", "Sci-Fi & Fantasy"],
        imdb: 8.7,
        releaseDate: "2016-07-15",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
    },
    {
        id: 4,
        title: "Breaking Bad",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        genres: ["Drama", "Crime"],
        imdb: 9.5,
        releaseDate: "2008-01-20",
        description: "A high school chemistry teacher diagnosed with cancer turns to making meth to secure his family’s future, transforming into a ruthless player in the drug trade."
    },
    {
        id: 5,
        title: "Game of Thrones",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        genres: ["Sci-Fi & Fantasy", "Drama", "Action & Adventure"],
        imdb: 9.3,
        releaseDate: "2011-04-17",
        description: "Nine noble families wage war against each other to gain control over the mythical land of Westeros, while a forgotten race returns after being dormant for thousands of years."
    },
    {
        id: 6,
        title: "The Witcher",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
        genres: ["Sci-Fi & Fantasy", "Drama", "Action & Adventure"],
        imdb: 8.2,
        releaseDate: "2019-12-20",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
    },
    {
        id: 7,
        title: "Peaky Blinders",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
        genres: ["Drama", "Crime"],
        imdb: 8.8,
        releaseDate: "2013-09-12",
        description: "A gangster family epic set in 1900s England, centering on the Peaky Blinders gang and their ambitious boss, Tommy Shelby."
    },
    {
        id: 8,
        title: "Dark",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
        genres: ["Drama", "Mystery", "Sci-Fi & Fantasy"],
        imdb: 8.8,
        releaseDate: "2017-12-01",
        description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families."
    },
    {
        id: 9,
        title: "Chernobyl",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
        genres: ["Drama"],
        imdb: 9.4,
        releaseDate: "2019-05-06",
        description: "A dramatization of the true story of the Chernobyl nuclear disaster, the brave men and women who sacrificed to save Europe, and the lies that nearly led to catastrophe."
    },
    {
        id: 10,
        title: "The Crown",
        poster: "https://image.tmdb.org/t/p/w1280/1M876KPjulVwppEpldhdc8V4o68.jpg",
        genres: ["Drama"],
        imdb: 8.6,
        releaseDate: "2016-11-04",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."
    }
];
