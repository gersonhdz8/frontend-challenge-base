import { Genre, Movie, ApiResponse } from "./definitions";

const api_key = process.env.NEXT_PUBLIC_API_KEY;
const api_token = process.env.NEXT_PUBLIC_API_TOKEN;
export async function fecthGenres(): Promise<Genre[]> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en?api_key=${api_key}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data.genres;
  } catch (error) {
    throw error;
  }
}

export async function getMoviesTrending(
  page: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=${api_key}&page=${page}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data.results);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMoviesUpcoming(
  page: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${api_key}&page=${page}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data.results);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMoviesNowPlaying(
  page: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${api_key}&page=${page}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data.results);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMoviesTopRated(
  page: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${api_key}&page=${page}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data.results);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMoviesPopular(
  page: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${api_key}&page=${page}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data.results);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMoviesSearch(
  page: string,
  query: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${api_key}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data.results);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMoviesByGenre(
  page: string,
  genreId: string,
): Promise<{ fullResponse: ApiResponse; results: Movie[] }> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${api_key}`,
      options,
    );

    // Verifica si el estado de la respuesta es 200
    if (!response) {
      throw new Error("Error en la respuesta fecth getGenres");
    }
    const data: ApiResponse = await response.json();
    //console.log(data);
    return {
      fullResponse: data,
      results: data.results,
    };
  } catch (error) {
    throw error;
  }
}
//https://image.tmdb.org/t/p/original//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg
/* {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 718821,
      "original_language": "en",
      "original_title": "Twisters",
      "overview": "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
      "popularity": 695.093,
      "poster_path": "/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
      "release_date": "2024-07-10",
      "title": "Twisters",
      "video": false,
      "vote_average": 6.987,
      "vote_count": 1399
    },
    {
      "adult": false,
      "backdrop_path": "/6eIXpbZc8WlLeT3bTUVpjRRqgin.jpg",
      "genre_ids": [
        28,
        878,
        10770
      ],
      "id": 34559,
      "original_language": "en",
      "original_title": "Ice Twisters",
      "overview": "Charlie Price, a former scientist turned science fiction author, starts living one of his novels when the Federal Science Foundation's weather experiments escape control and turn disastrous.",
      "popularity": 11.551,
      "poster_path": "/yaKcjBXIOnzOki4438QIsjxt3oD.jpg",
      "release_date": "2009-11-14",
      "title": "Ice Twisters",
      "video": false,
      "vote_average": 6,
      "vote_count": 79
    },
    {
      "adult": false,
      "backdrop_path": "/aNqkhakQaoqExxXDIXjTIkRSK1e.jpg",
      "genre_ids": [
        28,
        18,
        10770
      ],
      "id": 34138,
      "original_language": "en",
      "original_title": "Night of the Twisters",
      "overview": "A coming-of-age story, adapted from Irv Ruckman's 1984 novel, about a teenager who bonds with his stepfather while the Blainsworth, Nebraska farm family battles a series of killer twisters.",
      "popularity": 6.032,
      "poster_path": "/ht5Xjl6tz0ocJW9RRPN8JljN4cp.jpg",
      "release_date": "1996-02-18",
      "title": "Night of the Twisters",
      "video": false,
      "vote_average": 6.096,
      "vote_count": 57
    },
    {
      "adult": false,
      "backdrop_path": "/sGPdVoUfo3hIFyI5nOXlLOlQIq4.jpg",
      "genre_ids": [
        99
      ],
      "id": 1303175,
      "original_language": "en",
      "original_title": "Twisters: The Real Story",
      "overview": "In 1996, Universal Pictures released 'Twister', a film about tornado researchers. This documentary revisits the topic, exploring the motivations of those risking their lives to study dangerous weather. With never-before-seen footage and interviews, it delves into the lives of Storm Chasers.",
      "popularity": 6.434,
      "poster_path": "/nEMmCL2BBDK6RX4NER1FKIzOYoV.jpg",
      "release_date": "2024-07-01",
      "title": "Twisters: The Real Story",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/cfdvxoQVP0XBdk0pJ0leADsst1T.jpg",
      "genre_ids": [
        28,
        12,
        18
      ],
      "id": 1311844,
      "original_language": "en",
      "original_title": "The Twisters",
      "overview": "A deadly patchwork of destructive cyclones is on an apocalyptic path of convergence at a populated Midwest city center. There, the twisters will merge into one mega tornado that threatens to obliterate the cities for hundreds of miles around.",
      "popularity": 8.471,
      "poster_path": "/8OP3h80BzIDgmMNANVaYlQ6H4Oc.jpg",
      "release_date": "2024-06-28",
      "title": "The Twisters",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        28,
        12,
        35
      ],
      "id": 1282146,
      "original_language": "zh",
      "original_title": "大風波",
      "overview": "Chao discovers that he is suffering from cancer and has only a few months to live. Wanting to alleviate his girlfriend Su-An's financial burdens, Chao starts working as a muscleman for a mob boss and successfully expels the competing gang from the area. With nothing left to lose, he becomes unstoppable.",
      "popularity": 2.333,
      "poster_path": "/9fWsxLAK1rrz0e5Umdbxi8Hjo9e.jpg",
      "release_date": "1974-01-01",
      "title": "Twister Kicker",
      "video": false,
      "vote_average": 3,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        10402
      ],
      "id": 47774,
      "original_language": "en",
      "original_title": "DJ Q.bert's Wave Twisters",
      "overview": "A crew of heroes is determined to save the lost arts of Hip Hop. Break Dancing, Graffiti, MCing, and DJing from total extinction. The lost arts are being oppressed throughout inner-space by lord Ook and his evil minions the Chinheads. The dental commander Dr. Julio Azul DDS, assumed to be secretary Honey Drips, Dental Hygienist/Robot Rubbish, and Grandpa have a series of adventures, synch'd to the music. Armed with the ancient relic known as the Wave Twister (a small turntable/wristwatch, the only weapon powerful enough to defeat the enemies), they travel to the far ends of inner-space for a final confrontation with the sinister army of oppressors.",
      "popularity": 4.248,
      "poster_path": "/9iLjS8o9O0stRIHwfYlqONVwMnv.jpg",
      "release_date": "2001-01-23",
      "title": "DJ Q.bert's Wave Twisters",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        16,
        10751,
        35
      ],
      "id": 270162,
      "original_language": "fr",
      "original_title": "Garfield et cie le futur peut attendre",
      "overview": "It's early evening, and Jon is in the mood for a little trip out. In the car with Odie and Garfield, he admires the starry sky above and starts day-dreaming about distant lands. He stops for an errand, leaving Garfield alone in his car.",
      "popularity": 1.163,
      "poster_path": "/3DAvdjkjjtTFsg62kSWhIgURJJh.jpg",
      "release_date": "2013-03-12",
      "title": "Garfield Show Time Twister",
      "video": true,
      "vote_average": 9.4,
      "vote_count": 5
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        27,
        53,
        878
      ],
      "id": 81425,
      "original_language": "en",
      "original_title": "Brain Twisters",
      "overview": "Employees of a software company discover a conspiracy to use the games made by the company to control the thoughts of its customers.",
      "popularity": 5.375,
      "poster_path": "/2BUucYCfyZWDnTxNt4vHHz78Fiw.jpg",
      "release_date": "1991-02-01",
      "title": "Brain Twisters",
      "video": false,
      "vote_average": 4.4,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/aRBEH01fqECKponhWBFn0xlHLOY.jpg",
      "genre_ids": [
        28,
        35,
        878
      ],
      "id": 128343,
      "original_language": "en",
      "original_title": "Twister's Revenge!",
      "overview": "Three bumbling criminals have been trying to get their hands on the computerized control system of Mr. Twister, a talking monster truck with a mind of its own.",
      "popularity": 4.994,
      "poster_path": "/5EVkrZPnIg44tSDCGLjS7e1IzR9.jpg",
      "release_date": "1988-09-28",
      "title": "Twister's Revenge!",
      "video": false,
      "vote_average": 3.3,
      "vote_count": 10
    },
    {
      "adult": false,
      "backdrop_path": "/rSnyhKgmJN8ZUCVLQIGSwWQezJS.jpg",
      "genre_ids": [
        35,
        10751
      ],
      "id": 301238,
      "original_language": "nl",
      "original_title": "Mees Kees op de planken",
      "overview": "The big end-of-term play is approaching. Tobias is somewhat anxious, but with Mees Kees at the helm, everything should be just fine. The class looks forward to rehearsing in the afternoons and to making beautiful scenery - until they find out that Principal Dreus has chosen a terribly boring medieval play. Moreover, it is to be staged in a dusty room within a nearby retirement home. But Mees Kees wouldn't be Mees Kees if he didn't put his own twist on things...",
      "popularity": 1.939,
      "poster_path": "/oLwsCudpKpEVRJhqyupBy92Xvcl.jpg",
      "release_date": "2014-12-03",
      "title": "Mister Twister on Stage",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 19
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        16
      ],
      "id": 1097750,
      "original_language": "en",
      "original_title": "Crazed Gender Twisters From Planet X",
      "overview": "Bitch & Slut are the evilest, bloodthirsty, merciless – and sexually deviant – women in the universe! But they have some serious sibling rivalry issues.",
      "popularity": 1.711,
      "poster_path": "/2A8JT1ZQsAR8OJbHHGem4fX3JL5.jpg",
      "release_date": "2022-01-01",
      "title": "Crazed Gender Twisters From Planet X",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/oJAlqeV3s8AkOpwAbtfgh5m4NDS.jpg",
      "genre_ids": [
        35,
        10751
      ],
      "id": 230214,
      "original_language": "nl",
      "original_title": "Mees Kees op kamp",
      "overview": "Class 6b is going camping, led by Mees Kees and Principal Dreus. But after Dreus strains her back all responsibility suddenly rests on the shoulders of Kees. When things go wrong, he begins to doubt himself. But he soon learns that it is not about making mistakes, but about how to solve them.",
      "popularity": 2.006,
      "poster_path": "/qU23im2hnCfJzyH9fJ8im8McxzN.jpg",
      "release_date": "2013-12-11",
      "title": "Mister Twister Goes Camping",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 26
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 362006,
      "original_language": "en",
      "original_title": "Twisters! Nature's Fury",
      "overview": "Join storm chasers, scientists and video camera amateurs as they film the fury of tornadoes. In the first part of the video, it features scientists using \"Project Vortex\" as they place instruments around the twisters to record data and following storm chasers with their best video sequences on the dangerous cyclones. In part two, watch as amateurs capture video sequences and witness the damage after the storm is over. It also features a countdown of the top ten most destructive video sequences.",
      "popularity": 0.512,
      "poster_path": "/8WnkkMKo72P9YeEnFpApZLnQiEA.jpg",
      "release_date": "1996-09-29",
      "title": "Twisters! Nature's Fury",
      "video": false,
      "vote_average": 6,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 639234,
      "original_language": "en",
      "original_title": "Flip & Two Twisters",
      "overview": "Documentary about the Kiwi artist Len Lye and his legacy.",
      "popularity": 1.051,
      "poster_path": "/stSeQeEzjkRwz1WL60F9PzQm1Qv.jpg",
      "release_date": "1995-06-01",
      "title": "Flip & Two Twisters",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35,
        16
      ],
      "id": 91387,
      "original_language": "ru",
      "original_title": "Мистер твистер",
      "overview": "Adaptation of the satirical poem by Samuil Marshak, ridiculed racism. Mister Twister with his family went to the USSR on the boat, previously agreed with the Cook Travel Company to any boat or in the hotel was not \"blacks, Malays and other riff-raff.\" Arriving in Leningrad, Twister and his family stayed at the hotel \"Engleterre\", and everything went smoothly until they saw on one of the floors the guest from Africa.",
      "popularity": 1.88,
      "poster_path": null,
      "release_date": "1963-01-01",
      "title": "Mister Twister",
      "video": false,
      "vote_average": 4.9,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/tMUV69kVIvOEkdom7hkTsfQIYs1.jpg",
      "genre_ids": [
        35,
        10751
      ],
      "id": 140228,
      "original_language": "nl",
      "original_title": "Mees Kees",
      "overview": "Casey is a student teacher who gets his very first placement in class 5b. He is not sure how to teach yet, but thankfully the children are more than willing to help him.",
      "popularity": 4.499,
      "poster_path": "/fg3FuZULpMfzKLz5zWmxzSIfj1M.jpg",
      "release_date": "2012-10-03",
      "title": "Mister Twister: Class of Fun",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 37
    },
    {
      "adult": false,
      "backdrop_path": "/uJVAm5WyLNJ2anPqKcX13MRrOua.jpg",
      "genre_ids": [
        35,
        10751
      ],
      "id": 425183,
      "original_language": "nl",
      "original_title": "Mees Kees langs de lijn",
      "overview": "The fourth movie about the popular teacher Mees Kees.",
      "popularity": 0.486,
      "poster_path": "/4zYncfr98RA0v9yvz4AFjMEqu0l.jpg",
      "release_date": "2016-12-07",
      "title": "Mister Twister at the Pitch",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 5
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        28,
        53,
        12
      ],
      "id": 368319,
      "original_language": "en",
      "original_title": "Killer Twisters",
      "overview": "",
      "popularity": 0.001,
      "poster_path": null,
      "release_date": "",
      "title": "Killer Twisters",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 975481,
      "original_language": "en",
      "original_title": "Tongue Twisters",
      "overview": "« How much wood would a woodchuck chuck if a woodchuck could chuck wood ? » A tongue twister is a sentence with much alliterations and is complicated to pronounce. A tongue twister must be spoken quickly and repeated a few times. Langage breaks down between and meaning. This film is a linguistic game between sound and meaning and a portrait of the linguistic reality of Berkeley. Many American people recite tongue twisters in diffrent languages and/or in English as second language : German, Englsih, Arabic, Armenian, Assyrian, Mandarin, Korean, Croatian, Spanish, French, Hebrew, Japonese, Farsi, Portuguese, Tagalog, Vietnamese.",
      "popularity": 1.732,
      "poster_path": "/kcyqwjmiiFrvRbjN1Og9F55Bcr3.jpg",
      "release_date": "2011-01-01",
      "title": "Tongue Twisters",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    }
  ],
  "total_pages": 2,
  "total_results": 25
} */
