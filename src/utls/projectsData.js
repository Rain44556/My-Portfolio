const projectsData = [
    {
  "id": 1,
  "name": "Weather App",
  "image": "../assets/images/weather-app.png",
  "techStack": [
    "React",
    "Redux Toolkit",
    "Tailwind CSS",
    "Axios",
    "Firebase",
    "OpenWeatherMap API",
    "Dark Mode",
    "Responsive Design",
  ],
  "description": "Based on city input, this weather app displays current weather conditions. It shows the current temperature, weather condition, wind speed, humidity, and other relevant data. The app supports dark mode and is fully responsive, offering a smooth user experience across all device sizes. It also handles loading and error states while storing search data in the app state.",
  "liveLink": "https://weather-app-d38c1.web.app/",
  "github": "https://github.com/Rain44556/Weather-App",
  "challenges": [
    "Handling dynamic API responses and ensuring graceful error states for invalid city names",
    "Implementing dark mode toggle that persists across sessions",
    "Making the app fully responsive while maintaining design consistency"
  ],
  "improvements": [
    "Add unit switching (Celsius ↔ Fahrenheit)",
    "Implement geolocation-based weather display",
    "Optimize performance for slower network conditions"
  ],
  "plans": [
    "Display a 5-day weather forecast with graphical representation",
    "Include weather alerts or advisories if available via the API",
    "Enable local storage to cache recent searches"
  ]
  },
  {
    id: 2,
    name: "Popcorn Picks",
    image: "../assets/images/movie.png",
    techStack: [
      "React Router Dom",
      "React Icons",
      "react-select",
      "Swiper",
      "React-Simple-Star-Rating",
      "Sort-by",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    description:
      "Popcorn Picks is a movie portal that features a Top 6 Highest-Rated Movies Section, displaying movies based on user ratings. Each movie card is designed with hover effects and animations, allowing users to view essential details such as title, rating, and release date at a glance. Users can search movies by title and explore the Trending Movies Section, which showcases popular or trending movies with dynamically updated data. Clicking on a movie card navigates users to a detailed page with a synopsis, ratings, and trailers. Additionally, users have the option to add their favorite movies to a personalized list.",
    liveLink: "https://popcorn-picks-movies-portal.web.app/",
    github: "https://github.com/Rain44556/Popcorn-Picks",
    challenges: [
      "User Ratings and Feedback Handling",
      "Managing multiple API requests for trending movies, top-rated movies, and search results without overwhelming the application",
      "Ensuring that movie cards, grids, and sliders remain visually appealing and functional across all screen sizes",
    ],
    improvements: [
      "Advanced Movie Recommendation System",
      "Add a theme toggle for users to switch between dark and light mode",
      "Unnecessary re-renders and API calls while users are typing in the search box",
    ],
    plans: [
      "Add filters like IMDb rating, release year range, and more detailed genre selections",
      "Fetch real-time, up-to-date movie data directly from APIs",
      "Upload the images folder to the public or assets directory for faster image loading at render time",
    ],
  },
  {
    id: 3,
    name: "Caffeine Craft",
    image: "../assets/images/coffee.png",
    techStack: ["React.js", "React Reveal", "Vanila CSS", "Netlify"],
    description:
      "Caffiene Craft is a coffee website built using React. The Header component features a navigation bar with a sticky design and scroll effect. It includes three main navigation links: Home, Items, and Place. The Star Section component is simple and elegant, designed to highlight a hero section with a call to action that encourages users to scroll and place an order. There's a unique coffee category section showcasing different types of coffee. For animations, I’ve implemented React Reveal, creating beautiful effects throughout the site. The Items component is well-structured and displays a variety of drinks, meals, and desserts. It features category-based filtering, animations using React Reveal, and utilizes JSON data for dynamic rendering. My Place component is also well-organized, allowing users to switch between location images dynamically. Lastly, I added a beautiful and simple footer to complete the website.",
    liveLink: "https://caffeine-craft.netlify.app/",
    github: "https://github.com/Rain44556/CaffeineCraft",
    challenges: [
      "Dynamic Location Switching in the Place Component",
      "Category-Based Filtering in Items Component",
      "Responsive Design for All Components",
    ],
    improvements: [
      "Implement State Management using Context API",
      "Add Backend Integration for real-time order processing.",
    ],
    plans: [
      "Dark Mode Toggle",
      "User Authentication & Profiles",
      "Cart & Checkout System",
      "API Integration for Live Menu Updates",
    ],
  },
  {
    id: 4,
    name: "Pet Squad",
    image: "../assets/images/pet.png",
    techStack: [
      "React Router Dom",
      "ShadecnUI",
      "Tanstack query",
      "Stripe API",
      "Formik",
      "React-hook-form",
      "motion",
      "React-helmet",
      "Axios",
      "JWT",
      "MongoDB",
      "Firebase",
      "Express.js",
      "Node.js",
    ],
    description:
      "Pet Squad is a website that helps pet owners find new homes for their animals by connecting them with animal shelters. On the site, visitors can easily apply for adoptions, search for pets, and filter their results by categories. Users can create accounts using Firebase Authentication, which keeps their information safe. The site also uses JWT (JSON Web Token) for secure connections. To manage pet data, Pet Squad uses TanStack Query with MongoDB, making it easy to fetch, cache, and update information. A highlight of Pet Squad is its donation campaign feature. This allows users to donate money to help provide food, medical care, and shelter for rescued animals. Donations are made through secure payment options to ensure a safe and transparent process",
    liveLink: "https://pet-squad-3ea76.web.app/",
    github: "https://github.com/Rain44556/pet-squad",
    challenges: [
      "Managing user authentication using Firebase and JWT was challenging",
      "Since pet data updates often, it was needed to use TanStack Query to make API calls that work in real time. This helped us avoid re-fetching data too many times",
      "Setting up payment processing while complying with financial regulations",
    ],
    improvements: [
      "Better State Management Using Redux",
      "Instead of filtering client-side, shifting to server-side filtering for better performance.",
      "Adding server-side rendering (SSR) for better SEO",
    ],
    plans: [
      "Adoption Tracking Feature",
      " Mobile App Development",
      "AI-Powered Pet Matching System",
      "Real-Time Chat System",
    ],
  },
  {
    id: 5,
    name: "Task Buddy",
    image: "../assets/images/task-buddy.png",
    techStack: [
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Swiper.js",
      "SweetAlert2",
      "React Toastify",
      "Axios",
      "Firebase",
      "JWT",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    description:
      "Task Buddy is a service-sharing platform where users can Find services easily, add, update, and delete their services, and Book services with ease. Firebase Authentication ensures secure login/signup with Google and Email/Password. User and service details are securely stored in a MongoDB database.  Users receive instant updates for bookings, service modifications, and cancellations.",
    liveLink: "https://task-buddy-web-application.web.app/",
    github:
      "https://github.com/Rain44556/Service-Sharing-Web-Application-Task-Buddy-Client",
    challenges: [
      "Secure authentication token handling",
      "Ensuring fast API responses and avoiding redundant API calls",
      "Managing user authentication securely and ensuring protected routes.",
    ],
    improvements: [
      "Advanced category-based searching",
      "Allow users to add images to their listings.",
    ],
    plans: [
      "Review & Rating System",
      "Admin Panel",
      "Personalized user dashboards",
    ],
  },
      {
  "id": 6,
  "name": "Parallax Scrolling Effect",
  "image": "../assets/images/parallax.png",
  "techStack": [
    "HTML",
    "CSS",
    "VanilLa JS"
  ],
  "description": "A simple parallax scrolling website created using HTML, CSS, and vanilla JavaScript. This project shows how different layers, such as background images, content, and text-scroll at varying speeds to create a visually immersive effect. It's lightweight, responsive, and offers a clean structure for storytelling or landing pages.",
  "liveLink": "https://simple-parallax-scrolling-effect.netlify.app/",
  "github": "https://github.com/Rain44556/Parallax-Scrolling-Effect",
  "challenges": [
   "Achieving smooth scroll-based animations using pure JavaScript",
    "Maintaining performance and responsiveness across all device sizes",
    "Managing layer depths and z-index effectively for visual consistency"
  ],
  "improvements": [
    "Add more parallax layers",
    "Implement intersection observers for animation triggers",
    "Add support for scroll snapping between sections"
  ],
  "plans": [
    "Use a CSS framework for faster styling",
    "Rewrite the project using React for better scalability"
  ]
  },
];

export default projectsData;
