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
        imageSrc: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRXYqnZP2JJJ-WYukL_YeSJ9OKqRJI5xOKDXJBGa5O8BKiYOe0CpQNKPVvKrGTX-uQmQMkTp1dDJfEQQ_DGrpVKJmGpbSLLWOYAF.jpg?r=2e3",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        year: 2016,
        ageRating: "16+",
        duration: "4 Seasons",
        genre: ["Horror", "Thriller", "Drama"]
      },
      {
        id: 102,
        title: "Wednesday",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaU95Qx4UZh3FkQeUwgvbFzHfHb7p0G3y4DGH-nzmL_aXfGalXknRffw9_ixnQv5uR-wOGmUFMZ1fHpYxRkOiN3I9XjWcKNOXqk.jpg?r=08e",
        description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
        year: 2022,
        ageRating: "14+",
        duration: "1 Season",
        genre: ["Comedy", "Fantasy", "Mystery"]
      },
      {
        id: 103,
        title: "The Witcher",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUzjIOHe7WnMUaP6m1nyYUMRTZnGOl5XQETJnq0cYGmUj0wuQwm_nN4_lOigOYvR5NiJnSBQ2b-NLGrNBDyOKXecIdN6fA-MwBQ.jpg?r=233",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        year: 2019,
        ageRating: "18+",
        duration: "3 Seasons",
        genre: ["Fantasy", "Action", "Drama"]
      },
      {
        id: 104,
        title: "Squid Game",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSNQdhKMQrm1yxfQvGw61vH28j90BxWB_LkWVZ8j0Vv3q5zGG0c0iwGY5UZpCVWrn4hp_wv4OhOHKzw_erKFGcJnTi0NpARGdno.jpg?r=fd1",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        year: 2021,
        ageRating: "18+",
        duration: "1 Season",
        genre: ["Thriller", "Drama", "Action"]
      },
      {
        id: 105,
        title: "Money Heist",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcdF4zzuWibLfaOlbfQwTcBTCsUQO-OGm5jcQwOCwgxUw9FnG9df1sCwlDPMYHQHqK0MxJKIwssu8MJLxHtxCKhmfnGS9XMSsqo.jpg?r=274",
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        year: 2017,
        ageRating: "16+",
        duration: "5 Seasons",
        genre: ["Crime", "Thriller", "Drama"]
      },
      {
        id: 106,
        title: "Ozark",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTVzpQwzrDh_MlF3BOBsNO3b-r_sO2FFo_6HrFxR1c3-7mf7m3q4YsVgQi4aLZEGXxvCmikwqmID-W2vd1Fwp3Q-b_eWwiXNW-A.jpg?r=dc3",
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
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdwnfNHnP-XtU6F-eZFyPWPnV6feKZ-OtvZDkwZaZwjK0oVvf41_5PTuoRh2qzHHS_jNNuu0E3athXNNXoEdsA36jdKO-_JKnEw.jpg?r=48c",
        description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        year: 2016,
        ageRating: "16+",
        duration: "6 Seasons",
        genre: ["Drama", "Historical", "Political"]
      },
      {
        id: 202,
        title: "Bridgerton",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaMalFJjHF-HnkdQEmepSFG_m2Y3k5WEaZjVCp1GDLz1SoLBGcWGZ2jCk-L8d5HsYnGknF2jS2mmcHG3zBqN4XD6rgHVhYP64pY.jpg?r=50d",
        description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
        year: 2020,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Romance", "Drama", "Period Piece"]
      },
      {
        id: 203,
        title: "Queen Charlotte",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUwcJjT1zlGLIpZIbW1AolnH8eZpSZIu5KZ-yP8N9Xnq-qxkQ0mkIzla9lOo0vKNEZEqEUJG_XB8Y9FGTIgO2bIJwCG0rT07HKg.jpg?r=e02",
        description: "The story of how the young Queen Charlotte's marriage to King George sparked both a great love story and a societal shift.",
        year: 2023,
        ageRating: "16+",
        duration: "1 Season",
        genre: ["Romance", "Drama", "Historical"]
      },
      {
        id: 204,
        title: "You",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABReDKHnJjbP_7WqfgDNrVrBH3YqREuKzVV4V_FvHI5wCExnZKgEy-0QmC0t-s3JVir4Szv5Jj_ntthLbONrqkLyp8IgWX-CQC_M.jpg?r=c68",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: 2018,
        ageRating: "18+",
        duration: "4 Seasons",
        genre: ["Crime", "Thriller", "Drama"]
      },
      {
        id: 205,
        title: "Peaky Blinders",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQB5mvPBQ9Q-XdGoGk-Vt9Z0_YD0-NSEP9ScvtKcSvjcZl2b2lIQXTzTTiQITxuvefbEEW2jA3RY5S_I7IJBdmVtKm4LGWcOvx-i1SNb-CIv9YJyhHVzLTR0JaE5-xjm9GRy.jpg?r=3d8",
        description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        year: 2013,
        ageRating: "18+",
        duration: "6 Seasons",
        genre: ["Crime", "Drama", "Historical"]
      },
      {
        id: 206,
        title: "Dark",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaSMT-K5sBPBZbxDK_eGZoobFQZPTJgEIgu5mI6BXpQTYDz65iM-LuJmTjxzF_ZCKgweKcyfzewu81oEFDEwjNQQqp7-PFMVOGQ.jpg?r=21d",
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
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQfFt7S3GInABwf9LeCGwhhB-Nf3p-OdBJ9QpmRm99FX8Jc7c7a1WwHhUGXjUgM5GNoWM6xpwANDNGJgOO4dEDnU9Ie7fCgwwS0.jpg?r=7c3",
        description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.",
        year: 2018,
        ageRating: "14+",
        duration: "5 Seasons",
        genre: ["Action", "Comedy", "Drama"]
      },
      {
        id: 302,
        title: "Emily in Paris",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaZ8QdQGMV6QgMLmFupRHLG5F5WZCz0ov3LzK_EbSvgJrVmkj-KKDkJKujGRCdXyBzcDpkA4NqWnJ-aSb1CbDxHDrbrRcgPbJlM.jpg?r=f39",
        description: "After landing her dream job in Paris, Chicago marketing exec Emily Cooper embraces her adventurous new life while juggling work, friends and romance.",
        year: 2020,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Comedy", "Romance", "Drama"]
      },
      {
        id: 303,
        title: "Outer Banks",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS27UTCsuD-4IGOZkvvKTY_QAGglsXw59rNvNFxSt5x-wvK5aECbNDjl2vnQ5vj--W9Kw0B9IjfVYznpfGF13lf6ZHlqzRJmN_4.jpg?r=e08",
        description: "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.",
        year: 2020,
        ageRating: "16+",
        duration: "3 Seasons",
        genre: ["Drama", "Mystery", "Action"]
      },
      {
        id: 304,
        title: "Elite",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZfJ55jQMZsmOdIjUu_W3CVLLgL2U8OI-J2IRtJdkK0CjgsUNH9T1XUWd7pKeAkRkYpmXYrJgGstI10Ru9Z6ejdmBWJZqvpHt6s.jpg?r=b17",
        description: "When three working-class teens enroll in an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
        year: 2018,
        ageRating: "18+",
        duration: "7 Seasons",
        genre: ["Crime", "Thriller", "Teen"]
      },
      {
        id: 305,
        title: "The Queen's Gambit",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVmrfT-kZ9KKQrFZaT5db588n0E-uQYuDvhzCn6TrjeSraY-xn-xh9HN6Mw3qUWGjgGiwg8GZIvrVxL_IYE-Kz0waRXy4fYCnEc.jpg?r=a89",
        description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
        year: 2020,
        ageRating: "16+",
        duration: "Limited Series",
        genre: ["Drama", "Historical", "Sport"]
      },
      {
        id: 306,
        title: "Sex Education",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdo-7eL_qMMbR-tZjq6mE20B0vhP_b5yOiFHFZ2beK6D_U4G_6k51wyJvFV-Sx7XYqDYKX7stRLWNQSK8ZUbDIVC5m4oq7f4a5o.jpg?r=767",
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
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTlJvk6AmmPxnvkl5ELDR_-2v-t5ngMOY5H7ojlO0zRDJaO_2iu81nfP6Qx78mB84A74bUX00sEHq2FHN5Z2VEG18_E3DhK3fFo.jpg?r=581",
        description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
        year: 2020,
        ageRating: "18+",
        duration: "1h 56m",
        genre: ["Action", "Thriller", "Adventure"]
      },
      {
        id: 402,
        title: "The Old Guard",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcD9MlGGXQQmP6K0J-76_dwNL8ANRsY2HpKQzCz1P7sMbIbKdlCVrJgy-P5UliQbRfD1CFHPCD7StJY0MfuHMtI1MfSCLSfi5Ec.jpg?r=9ab",
        description: "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
        year: 2020,
        ageRating: "16+",
        duration: "2h 5m",
        genre: ["Action", "Fantasy", "Adventure"]
      },
      {
        id: 403,
        title: "6 Underground",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXDGo-cHXCqxhdZNgx9Ip0M7XbHmLKnFj1K1KcYcn-QiV2zpIwqpLw5UY0K_7i3xtXOlEdA5rQlQdHBM5DuzpJeX3MjIdbRgVs.jpg?r=75d",
        description: "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
        year: 2019,
        ageRating: "18+",
        duration: "2h 8m",
        genre: ["Action", "Thriller", "Adventure"]
      },
      {
        id: 404,
        title: "Red Notice",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX-fM87vQETqRTKBQC9aIlz9zuFDJK-UdLlgFRFqoNEv_qwfnUEBpGoaAsARDkUbAYKFUO_VpXFx-q0hODZ5MMJVdHFHt2_Hl2o.jpg?r=dc2",
        description: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: 2021,
        ageRating: "13+",
        duration: "1h 58m",
        genre: ["Action", "Comedy", "Adventure"]
      },
      {
        id: 405,
        title: "Army of the Dead",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZkppYyDe4j3Y5wGo2AwV0oFGUZF1_Y2XKlFBS6CLn_73yNbHEjE7wwi86gB5OaJIQzNmNkQXX0Hs7iMQpTLqxZ-oOTyLCjDWds.jpg?r=55b",
        description: "After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble by venturing into the quarantine zone for the greatest heist ever.",
        year: 2021,
        ageRating: "18+",
        duration: "2h 28m",
        genre: ["Action", "Horror", "Adventure"]
      },
      {
        id: 406,
        title: "Project Power",
        imageSrc: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT6kHRxaBspHT0AMhzxT1-4uRaZLufS24yN2hXQQMsVvEuLcKh5RZvmvJQCqZ9nJFmgBQbkQj4q8mOQlCc4BxpHdN0eAWn87HQs.jpg?r=86e",
        description: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
        year: 2020,
        ageRating: "16+",
        duration: "1h 53m",
        genre: ["Action", "Sci-Fi", "Crime"]
      }
    ]
  }
];
