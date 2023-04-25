
// Mock database for the Frost website

const hero = {
  head: "our mission",
  body: "Creating spaces that are comfortable, memorable and inspiring.",
}

const about = {
  id: 5,
  head: "Who we are",
  body: "Frost is a design studio based in Stockholm. We are a team of architects, designers and engineers who are passionate about creating beautiful and functional spaces.",
  src: [
    new URL("../../public/frost/a2.webp", import.meta.url),
  ],
}

const offer = {
  id: 6,
  head: "Our offer",
  body: "Frost offers a variety of architectural services, including residential design for single-family homes to multi-unit developments, commercial design for offices, retail spaces, restaurants, and hotels, and public design for parks, community centers, and schools. We aim to create functional and attractive spaces that meet clients' needs. Contact us for a consultation.",
  src: [
    new URL("../../public/frost/a1.webp", import.meta.url),
  ],
}

const toolbar = {
  logo: "Frost",
  navLinks: ["home", "about", "offer", "projects"],
  navButton: "Try now",
  navButtonLink: "about",
}

const footer = {
  adress: "Stockholm, Sweden",
  phone: "+46 123 456 789",
  email: "demo@frost.se",
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

const page1 = {
  id: 1,
  head: "Residential design",
  subhead: "Living spaces and new homes.",
  body: "Residential design at Frost creates living spaces, new homes or renovations, reflecting clients' style and meeting their needs. Experienced in designing single-family homes to multi-unit developments. Aims to bring clients' vision to life with functional and attractive spaces.",
  cover: new URL("../../public/frost/r_front.webp", import.meta.url),
  src: [
    new URL("../../public/frost/r1.webp", import.meta.url),
    new URL("../../public/frost/r2.webp", import.meta.url),
    new URL("../../public/frost/r3.webp", import.meta.url),
    new URL("../../public/frost/r4.webp", import.meta.url)
  ],
  path: "/frost/residential" 
};

const page2 = {
  id: 2,
  head: "Corporate design",
  subhead: "Functional work environments.",
  body: "Corporate design at Frost creates functional and attractive work environments for businesses, including offices, retail spaces, restaurants, and hotels. Meets clients' needs to enhance the business and create a professional and welcoming environment.",
  cover: new URL("../../public/frost/c_front.webp", import.meta.url),
  src: [
    new URL("../../public/frost/c1.webp", import.meta.url),
    new URL("../../public/frost/c2.webp", import.meta.url),
    new URL("../../public/frost/c3.webp", import.meta.url),
    new URL("../../public/frost/c4.webp", import.meta.url)
  ],
  path: "/frost/business" 
};

const page3 = {
  id: 3,
  head: "Public design",
  subhead: "Bringing people together.",
  body: "Public design at Frost creates functional and inviting spaces, such as parks, community centers, and schools, to enhance the community and bring people together. Aims to meet clients' needs and goals.",
  cover: new URL("../../public/frost/p_front.webp", import.meta.url),
  src: [
    new URL("../../public/frost/p1.webp", import.meta.url),
    new URL("../../public/frost/p2.webp", import.meta.url),
    new URL("../../public/frost/p3.webp", import.meta.url),
    new URL("../../public/frost/p4.webp", import.meta.url)
  ],
  path: "/frost/public" 
};

const page4 = {
  id: 4,
  head: "Interior design",
  subhead: "Attract with interiors.",
  body: "Interior design creates functional, attractive interior spaces (homes, offices, retail spaces, hotels) using elements such as furniture, color, lighting, and materials. Aims to create a space that is aesthetically pleasing, functional, and reflective of the client's style and needs. Works with clients to meet their needs and enhance their space.",
  cover: new URL("../../public/frost/i_front.webp", import.meta.url),
  src: [
    new URL("../../public/frost/p1.webp", import.meta.url),
    new URL("../../public/frost/c1.webp", import.meta.url),
    new URL("../../public/frost/i1.webp", import.meta.url),
    new URL("../../public/frost/i2.webp", import.meta.url)
  ],
  path: "/frost/public" 
};

const frost = {
  toolbar,
  hero, 
  about,
  offer,
  page: [page1, page2, page3, page4],
  footer,
}

export default frost;

