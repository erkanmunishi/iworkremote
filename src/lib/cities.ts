export type Place = { name: string; url?: string; image?: string };
export type City = {
  slug: string;
  cityName: string;       // "Tampa, FL"
  hero: { image: string; headline: string; subhead?: string };
  lead?: string;          // "Erkan"
  joinLink?: string;      // Lu.ma or membership link
  status: "live" | "soon";
  summary?: string;
  events?: Place[];       // small thumbnails or links
  coworking?: Place[];
  cafes?: Place[];
};

export const cities: Record<string, City> = {
  tampa: {
    slug: "tampa",
    cityName: "Tampa, FL",
    hero: {
      image: "/cities/tampa/hero.jpg",
      headline: "Welcome to iWorkRemote Tampa Bay",
      subhead:
        "Connect with local remote workers, freelancers, and digital nomads.",
    },
    lead: "Erkan",
    joinLink: "https://lu.ma/iworkremote",
    status: "live",
    summary:
      //"Our Tampa Bay chapter runs curated meetups and coworking sessions for real connections, not just Slack. Join brunch meetups, skill shares, and member-only events.",
         "At iWorkRemote Tampa Bay, our events are curated exclusively for remote workers. Membership is by invitation only —ensuring a close-knit community of seasoned remote workers. However, if you’re an aspiring remote worker or hybrid professional, our open brunch meetups are the perfect introduction. Experience our vibrant community firsthand at brunch, and you might soon be invited to join our exclusive dinners, outdoor activities, and coworking sessions for deeper networking and special perks.",
    events: [
      { name: "Brunch Meetup", image: "/cities/tampa/Brunch.jpg" },
      { name: "Dinner", image: "/cities/tampa/Dinner.jpg" },
      { name: "Outdoor Activities", image: "/cities/tampa/Outdoor.jpg" },
      { name: "Coworking Session", image: "/cities/tampa/CoworkingSession.jpg" },
    ],
    coworking: [
      { name: "Industrious Tampa", image: "/cities/tampa/IndustriousTampa.jpg" },
      { name: "WeWork Tampa", image: "/cities/tampa/WeworkTampa.jpg" },
      { name: "CoWork Tampa", image: "/cities/tampa/CoworkTampa.jpg" },
      { name: "Quest Workspaces", image: "/cities/tampa/QuestTampa.jpg" },
    ],
    cafes: [
      { name: "Buddy Brew Coffee", image: "/cities/tampa/BuddyBrewCafe.jpg" },
      { name: "Patrona Coastal Cafe", image: "/cities/tampa/PatronaCoastalCafe.jpg" },
      { name: "Bad Mother", image: "/cities/tampa/BadMotherCafe.jpg" },
      { name: "Jet City Espresso", image: "/cities/tampa/JetCityEspresso.jpg" },
    ],
  },

  orlando: {
    slug: "orlando",
    cityName: "Orlando, FL",
    hero: {
      image: "/cities/orlando/hero.jpg",
      headline: "Orlando Chapter (Coming Soon)",
      subhead: "Want to help launch the chapter? Become a lead.",
    },
    status: "soon",
    joinLink: "/membership", // or waitlist form anchor
  },

  miami: {
    slug: "miami",
    cityName: "Miami, FL",
    hero: {
      image: "/cities/miami/hero.jpg",
      headline: "Miami Chapter (Coming Soon)",
    },
    status: "soon",
    joinLink: "/membership",
  },
};

export const cityList = Object.values(cities);
export const getCity = (slug: string) => cities[slug];
