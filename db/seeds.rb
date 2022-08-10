puts "seeding has started"

Post.create(
    title: "One Piece",
    image: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",\
    genre: "Anime",
    review: "Best Anime I have ever seen 😅.
    character development of every character was awesome.
    Every Arc is connected with eachother somehow almost like MCU movies....
    Action was really good ...
    After first 50 or 70 episodes it peak up the speed and story....after getting every arcs it becomes more powerful story....at first I thought one piece is just a overrated Anime....but after watching it I came to know that we can't judge a book by it's cover and 1st page.... it's really worth my time....now I am eagerly waiting for next episode of the Anime .... luckily it's just 938th episode...more has to come",
    user_id: 1
)

Post.create(
    title: "Spirited Away",
    image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: "Movie",
    review: "Thrilling, dazzling, enchanting, beautiful, and unforgettable.",
    user_id: 2
)
Post.create(
    title: "Batman: The Killing Joke",
    image: "https://images-na.ssl-images-amazon.com/images/I/819UIpGdsqL.jpg",
    genre: "Comic",
    review: "To be honest my expectations of this comic were honestly really low, because I knew they wouldn't be able to top or even match Jared Letos bizarre but weirdly wonderful portrayal of Joker and as I read it I grew more and more disgusted. Number 1, Joker did NOT have tattoos. Number 3 Joker had HAIR (???) in this comic. Number 4... WHERE was his six pack??? Number 6 batman, wasn't voice acted by Ben Afleck in this piece of filth. number 9, this commmic had no reference to the long awaterd b abxolutely flabberghastiungly extraordiarally epi sydre ctui which honnestly made me puke ontu my eremias 5 out of fie",
    user_id: 1
)

Post.create(
    title: "Berserk",
    image: "https://images-na.ssl-images-amazon.com/images/I/71jnEkjX8RL.jpg",
    genre: "Manga",
    review: "Berserk is truly the single most violent and gory manga I have ever come across, but the story is intriguing enough to keep me engaged. The story itself follows a man named Guts. Yes, Guts, like intestines. It's actually quite fitting considering how many times he slices someone in half.",
    user_id: 2
)
Post.create(
    title: "Coraline",
    image: "https://resizing.flixster.com/bslRsU023noH8_Bm_2nC1ZCiBhg=/206x305/v2/https://flxt.tmsimg.com/assets/p177367_p_v8_ag.jpg",
    genre: "Movie",
    review: "Superb movie, well written, beautiful, great cast. Scary for young children but my 5 year loves it (we watch together, I explain any concerns). Any uptight insights written by other critics are written by adults that think 2 retired eccentric actresses reading tea leaves amounts to condoning witchcraft. This is an example of a movie that entertains adults and kids alike on 2 levels. Children pick up on what is good and bad while adults pick up on more menace. Coraline is selfish and she realizes not only are the people around her great, but she defeats scary challenges to save them.  For someone who enjoys beautifully written and animated (sorry if animated is not the correct word for this technique) artistic movies, I wouldn’t dare miss Coraline. Among hastily-written animated PG filler, Coraline is a treasure I watch at least once a week with my daughter.",
    user_id: 1
)
Post.create(
    title: "Justice League Dark: Apokolips War",
    image: "https://m.media-amazon.com/images/M/MV5BYzdmM2I0OGItNWVjMS00MGE0LTllNWEtOTU3MDFiNWU1YTE5XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_.jpg",
    genre: "Movie",
    review: "An encapsulating movie for sure, as I enjoyed this conclusion to the continuity that has spun 16 animated films. The story is a pleasant watch, especially when familiar with the previous films, and as it doesn't hold any punches when given the opportunity it creates a good drive for the movie. I'd say that the most conceivable gripe would be that it was only around an hour and thirty minutes long, I wish it would have exceeded that to encapsulate and flesh out more visual tragedy. I also appreciate the use of Constantine as well as the other previously established character dynamics to make such a good original comic book based movie. A great ending with the lingering sense of not only satisfaction, but anticipation for the next possible stories, perhaps in another time.",
    user_id: 1
)

Post.create(
    title: "The Rising Of The Shield Hero",
    image: "https://cdn.myanimelist.net/images/anime/1490/101365.jpg",
    genre: "Anime",
    review: "It's like the creator was inspired by other MMORPG's and Fantasy Anime and decided to finally do away with the BS Filler episodes, & nonsense discussions that have nothing to do with the full plot. They make great use of unexpected twists right from the first episode and further develop the main characters over short periods of time (but not too short). This series is right their with there with SOA, Claymore, etc. The fights are wonderful and spirited without all the extra discussions known for some anime's. If you want to see a GREAT anime that builds quick, and never has a dull moment, this is the one!",
    user_id: 2
)

Comment.create(
    comment: "great anime",
    user_id: "3",
    post_id: "1"
)

Comment.create(
    comment: "great manga",
    user_id: "3",
    post_id: "4"
)
Comment.create(
    comment: "great movie",
    user_id: "4",
    post_id: "2"
)
Comment.create(
    comment: "great comic",
    user_id: "4",
    post_id: "3"
)
Comment.create(
    comment: "great anime",
    user_id: "3",
    post_id: "7"
)
Comment.create(
    comment: "great movie",
    user_id: "4",
    post_id: "6"
)

puts "seeding has ended"