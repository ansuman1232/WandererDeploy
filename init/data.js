const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "../images/img1.png",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
     category: 'beach'
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "../images/img2.png",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
     category: 'mountain'
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "../images/img3.png",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
       category: 'mountain'
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "../images/img4.png",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
      category: 'pools'
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "../images/img5.png",
    },
    price: 800,
    location: "Portland",
    country: "United States",
      category: 'pools'
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "../images/img6.png",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: 'beach'
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "../images/img7.png",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: 'mountain'
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "../images/img8.png",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
        category: 'beach'
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "../images/img9.png",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
        category: 'beach'
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "../images/img10.png",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
     category: 'mountain'
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "../images/img11.png",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
     category: 'mountain'
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "../images/img12.png",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
        category: 'farm'
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "../images/img13.png",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
     category: 'beach'
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "../images/img14.png",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
     category: 'beach'
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "../images/img15.png",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
     category: 'beach'
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "../images/img16.png",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
        category: 'mountain'
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "../images/img17.png",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
      category: 'rooms'
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "../images/img18.png",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
      category: 'mountain'
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "../images/img19.png",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
        category: 'beach'
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "../images/img20.png",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
     category: 'iconic city'
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "../images/img21.png",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
        category: 'farm'
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "../images/img22.png",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
       category: 'pools'
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "../images/img29.png",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
        category: 'beach'
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "../images/img23.png",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
     category: 'mountain'
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "../images/img24.png",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category:"iconic city"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "../images/img25.png",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
       category: 'rooms'
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "../images/img26.png",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
        category: 'farm'
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "../images/img27.png",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
        category: 'mountain'

  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "../images/img28.png",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
     category: 'beach'
  },
];

module.exports = { data: sampleListings };
