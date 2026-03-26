export const client = {
  // Business Details
  name: "Poison Ivy Design",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Farnham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07796 998343",
  email: "",
  website: "",

  // Location
  address: "Farnham",
  city: "Farnham",
  county: "",
  postcode: "",
  basedIn: "Farnham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Peter Hornsby", rating: 5, text: "Jane has now completed two projects for me: the first being a hard-landscaped rose circle, and more recently the remodeling of what was a very narrow and mean back patio, but which has now been transformed into a wonderful sunny dining and …  +2 ", date: "6 years ago" },
    { name: "Christine Taraszek", rating: 5, text: "Recently used Jane and her team for a redesign of my patio area. Very professional work ethic, always keeping me informed at every stage.  Hard working and trustworthy. Workforce very polite and respectful. The work was carried out on time …  ", date: "7 years ago" },
    { name: "Allan Cheeseman", rating: 5, text: "After being in our garden (a lot) during the first lock-down, we decided it needed a “re imagining” but we were not sure where to start - we engaged Jane from Poison Ivy Design to come up with some ideas -  Jane took the time to understand …  ", date: "5 years ago" },
    { name: "Debbie Burgess", rating: 5, text: "I found Poison Ivy via a Google search and Jane was quick to respond to my initial email. I had never 'designed' a garden from scratch and didn't really know what I wanted, more what I didn't want. She asked pertinent questions about what I …  ", date: "3 years ago" },
    { name: "Julia McCullagh", rating: 5, text: "Poison Ivy Design did a fantastic job designing and planting my cottage garden. Jane took time to understand they type of garden I wanted, combined hers and my ideas to create a beautiful planting plan. She was open and honest with what she …  ", date: "5 years ago" },
    { name: "Joanne Lewis", rating: 5, text: "I moved into a new build property with the typical uninspiring square turfed back garden with a patio which was too small to be useful. I added a shed and then had absolutely no idea what to do next! I found Jane by Google search and she’s …  ", date: "2 years ago" },
    { name: "Jennifer Hudson", rating: 5, text: "We purchased our house in early 2016, and inherited a garden which was beautiful, but had been a bit neglected when the sellers knew they were moving.  Living in the house, we found that despite a bit of maintenance neglect, the garden …  ", date: "8 years ago" },
    { name: "Ali Dolphin", rating: 5, text: "Didn’t deal with Jane on any specific project but found her email communication far less than professional when discussing our plans for our garden. We were really looking forward to discussing our plans for the garden with her. ", date: "7 years ago" },
    { name: "Ali Jamil", rating: 5, text: "The design was done with great care to meet our requirements with recommendations with  multiple revisions done promptly and accuratly. The work was completed as scheduled and underbudget(savings that we were not aware of but passed on). Highly recom", date: "6 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Poison Ivy Design | Landscaper in Farnham",
    description: "Professional landscaper in Farnham. 5.0-star rated on Google. Call for a free quote.",
  },
};
