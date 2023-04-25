
// Mock database for the Magazine website

const path = "../../public/frost";

const hero = {
  head: "Magazine24",
  body: "Covering the latest in fashion, beauty, and lifestyle.",
}

const about = {
  id: 5,
  head: "Who we are",
  body: "Magazine24 makes cover stories and articles on the latest in fashion, beauty, and lifestyle.",
  src: [
    `https://images.unsplash.com/photo-1553484771-0a615f264d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
  ],
}

const mission = {
  id: 6,
  head: "Our mission",
  body: "We are committed to providing the best content for our readers. Time is precious, and we want to make sure you spend it on the things that matter most to you.",
  src: [
    `https://images.unsplash.com/photo-1553484771-8bbd4e16c60b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80`,
  ],
}

const toolbar = {
  logo: "M-24",
  navLinks: ["home", "about", "mission", "projects"],
  navButton: "Try now",
  navButtonLink: "about",
}

const page1 = {
  id: 1,
  head: "Woman's minimalism",
  subhead: "Graphic and minimalistic style.",
  body: "Minimalism involves curating a wardrobe consisting of timeless pieces that can be styled in a variety of ways, creating a versatile collection that is both effortless to maintain and effortless to wear.",
  cover: `https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80`,
  src: [
    `https://images.unsplash.com/photo-1602353195884-44ea7e76e196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`,
    `https://images.unsplash.com/photo-1608312149553-d31a9cbc5224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`,
    `https://images.unsplash.com/photo-1609505849504-405b3d1f4678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80`,
    `https://images.unsplash.com/photo-1601574465779-76d6dbb88557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
  ],
  path: "/frost/residential" 
};

const page2 = {
  id: 2,
  head: "Beige and blue.",
  subhead: "Classic combo, with a touch of the past.",
  body: "The timeless pairing of beige and blue originates from classic and influential suits. This classic color combination will never go out of style. The versatility of beige and blue makes it effortless to wear and pair with other colors.",
  cover: `https://images.unsplash.com/photo-1483118714900-540cf339fd46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80`,
  src: [
    `https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
    `https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
    `https://images.unsplash.com/photo-1541346160430-93fcee38d521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80`,
    `https://images.unsplash.com/photo-1606485165292-3112b81c49e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
  ],
  path: "/frost/business" 
};

const page3 = {
  id: 3,
  head: "Round glasses",
  subhead: "The shape comes with a mood.",
  body: "Round glasses evoke a nostalgic mood with their timeless shape that flirts with the past. The use of plastic and pastel colors in this style is reminiscent of the iconic 80s era, adding a retro vibe to any look. This classic eyewear shape is an enduring style that will never go out of fashion.",
  cover: `https://images.unsplash.com/photo-1480881222301-b5db5622744b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80`,
  src: [
    `https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80`,
    `https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80`,
    `https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
    `https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
  ],
  path: "/frost/public" 
};

const page4 = {
  id: 4,
  head: "Men's hats",
  subhead: "All occations, all sizes.",
  body: "For centuries, hats have been a staple accessory worn by people to adorn their heads. A hat not only serves as a functional accessory to protect you from the sun or cold, but it's also a great way to add a personal touch to your outfit. Whether it's a classic fedora or a trendy beanie, hats come in a wide range of styles and materials, allowing you to express your unique sense of fashion.",
  cover: `https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2260&q=80`,
  src: [
    `https://images.unsplash.com/photo-1580880783109-6746c2199006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
    `https://images.unsplash.com/photo-1556247428-f2262e19d6be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
    `https://images.unsplash.com/photo-1587651696669-86b588f28cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&q=80`,
    `https://images.unsplash.com/photo-1595625516953-c31cd1fc260b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
  ],
  path: "/frost/public" 
};

const footer = {
  adress: "London, UK",
  phone: "+44 20 123 456",
  email: "demo@mag24.se",
  social: [
    {
      name: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
    {
      name: "twitter",
      link: "https://twitter.com/",
    },
  ],
}

const magazine = {
  toolbar,
  hero,
  about,
  mission,
  page: [page1, page2, page3, page4],
  footer,
}

export default magazine;

