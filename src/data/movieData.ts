export interface Movie {
  id: number;
  title: string;
  imageSrc: string;
  description?: string;
  year?: number;
  ageRating?: string;
  duration?: string;
  genre?: string[];
}

export interface Category {
  id: number;
  title: string;
  movies: Movie[];
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Trending Now",
    movies: [
      {
        id: 101,
        title: "Stranger Things",
        imageSrc: "https://picsum.photos/500/750?random=1",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        year: 2016,
        ageRating: "16+",
        duration: "4 Seasons",
        genre: ["Horror", "Thriller", "Drama"]
      },
      {
        id: 102,
        title: "Wednesday",
        imageSrc: "https://picsum.photos/500/750?random=2",
        description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
        year: 2022,
        ageRating: "14+",
        duration: "1 Season",
        genre: ["Comedy", "Fantasy", "Mystery"]
      },
      {
        id: 103,
        title: "The Witcher",
        imageSrc: "https://picsum.photos/500/750?random=3",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        year: 2019,
        ageRating: "18+",
        duration: "3 Seasons",
        genre: ["Fantasy", "Action", "Drama"]
      },
      {
        id: 104,
        title: "Squid Game",
        imageSrc: "https://picsum.photos/500/750?random=4",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        year: 2021,
        ageRating: "18+",
        duration: "1 Season",
        genre: ["Thriller", "Drama", "Action"]
      },
      {
        id: 105,
        title: "Money Heist",
        imageSrc: "https://picsum.photos/500/750?random=5",
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        year: 2017,
        ageRating: "16+",
        duration: "5 Seasons",
        genre: ["Crime", "Thriller", "Drama"]
      },
      {
        id: 106,
        title: "Ozark",
        imageSrc: "https://picsum.photos/500/750?random=6",
        description: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
        year: 2017,
        ageRating: "18+",
        duration: "4 Seasons",
        genre: ["Crime", "Thriller", "Drama"]
      }
    ]
  },
  {
    id: 2,
    title: "Popular on Netflix",
    movies: [
      {
        id: 201,
        title: "The Crown",
        imageSrc: "https://picsum.photos/500/750?random=7",
        description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        year: 2016,
        ageRating: "16+",
        duration: "6 Seasons",
        genre: ["Drama", "Historical", "Political"]
      },
      {
        id: 202,
        title: "Bridgerton",
        imageSrc: "https://picsum.photos/500/750?random=8",
        description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
        year: 2020,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Romance", "Drama", "Period Piece"]
      },
      {
        id: 203,
        title: "Queen Charlotte",
        imageSrc: "https://picsum.photos/500/750?random=9",
        description: "The story of how the young Queen Charlotte's marriage to King George sparked both a great love story and a societal shift.",
        year: 2023,
        ageRating: "16+",
        duration: "1 Season",
        genre: ["Romance", "Drama", "Historical"]
      },
      {
        id: 204,
        title: "You",
        imageSrc: "https://picsum.photos/500/750?random=10",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: 2018,
        ageRating: "18+",
        duration: "4 Seasons",
        genre: ["Crime", "Thriller", "Drama"]
      },
      {
        id: 205,
        title: "Peaky Blinders",
        imageSrc: "https://picsum.photos/500/750?random=11",
        description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        year: 2013,
        ageRating: "18+",
        duration: "6 Seasons",
        genre: ["Crime", "Drama", "Historical"]
      },
      {
        id: 206,
        title: "Dark",
        imageSrc: "https://picsum.photos/500/750?random=12",
        description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        year: 2017,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Science Fiction", "Thriller", "Mystery"]
      }
    ]
  },
  {
    id: 3,
    title: "New Releases",
    movies: [
      {
        id: 301,
        title: "Cobra Kai",
        imageSrc: "https://picsum.photos/500/750?random=13",
        description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.",
        year: 2018,
        ageRating: "14+",
        duration: "5 Seasons",
        genre: ["Action", "Comedy", "Drama"]
      },
      {
        id: 302,
        title: "Emily in Paris",
        imageSrc: "https://picsum.photos/500/750?random=14",
        description: "After landing her dream job in Paris, Chicago marketing exec Emily Cooper embraces her adventurous new life while juggling work, friends and romance.",
        year: 2020,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Comedy", "Romance", "Drama"]
      },
      {
        id: 303,
        title: "Outer Banks",
        imageSrc: "https://picsum.photos/500/750?random=15",
        description: "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.",
        year: 2020,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Drama", "Mystery", "Action"]
      },
      {
        id: 304,
        title: "Elite",
        imageSrc: "https://picsum.photos/500/750?random=16",
        description: "When three working-class teens enroll in an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
        year: 2018,
        ageRating: "18+",
        duration: "7 Seasons",
        genre: ["Crime", "Thriller", "Teen"]
      },
      {
        id: 305,
        title: "The Queen's Gambit",
        imageSrc: "https://picsum.photos/500/750?random=17",
        description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
        year: 2020,
        ageRating: "16+",
        duration: "Limited Series",
        genre: ["Drama", "Historical", "Sport"]
      },
      {
        id: 306,
        title: "Sex Education",
        imageSrc: "https://picsum.photos/500/750?random=18",
        description: "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mother. So rebel Maeve proposes a school sex-therapy clinic.",
        year: 2019,
        ageRating: "18+",
        duration: "4 Seasons",
        genre: ["Comedy", "Drama", "Teen"]
      }
    ]
  },
  {
    id: 4,
    title: "Action & Adventure",
    movies: [
      {
        id: 401,
        title: "Extraction",
        imageSrc: "https://picsum.photos/500/750?random=19",
        description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
        year: 2020,
        ageRating: "18+",
        duration: "1h 56m",
        genre: ["Action", "Thriller", "Adventure"]
      },
      {
        id: 402,
        title: "The Old Guard",
        imageSrc: "https://picsum.photos/500/750?random=20",
        description: "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
        year: 2020,
        ageRating: "16+",
        duration: "2h 5m",
        genre: ["Action", "Fantasy", "Adventure"]
      },
      {
        id: 403,
        title: "6 Underground",
        imageSrc: "https://picsum.photos/500/750?random=21",
        description: "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
        year: 2019,
        ageRating: "18+",
        duration: "2h 8m",
        genre: ["Action", "Thriller", "Adventure"]
      },
      {
        id: 404,
        title: "Red Notice",
        imageSrc: "https://picsum.photos/500/750?random=22",
        description: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: 2021,
        ageRating: "13+",
        duration: "1h 58m",
        genre: ["Action", "Comedy", "Adventure"]
      },
      {
        id: 405,
        title: "Army of the Dead",
        imageSrc: "https://picsum.photos/500/750?random=23",
        description: "After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble by venturing into the quarantine zone for the greatest heist ever.",
        year: 2021,
        ageRating: "18+",
        duration: "2h 28m",
        genre: ["Action", "Horror", "Adventure"]
      },
      {
        id: 406,
        title: "Project Power",
        imageSrc: "https://picsum.photos/500/750?random=24",
        description: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
        year: 2020,
        ageRating: "16+",
        duration: "1h 53m",
        genre: ["Action", "Sci-Fi", "Crime"]
      }
    ]
  }
];
