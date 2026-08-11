export interface MemoryItem {
  id: string;
  url: string;
  caption: string;
  date?: string;
  location?: string;
  tag?: string;
}

export interface BirthdayConfig {
  celebrant: {
    name: string;
    nickname: string;
    birthDate: string;
    title: string;
    heroSubtitle: string;
    avatarUrl: string;
  };
  theme: {
    primaryGlow: string;
    secondaryGlow: string;
    accentGold: string;
    roseGold: string;
    darkBackground: string;
  };
  messages: {
    heroTyping: string[];
    birthdayCardTitle: string;
    birthdayCardText: string[];
    letterEnvelopeTitle: string;
    letterSubject: string;
    letterText: string;
    giftSurpriseTitle: string;
    giftSurpriseSubtitle: string;
    giftSurpriseContent: string;
    cakeWishTitle: string;
    cakeWishSubtitle: string;
    cakeBlownMessage: string;
    finaleTitle: string;
    finaleSubtitle: string;
  };
  memories: MemoryItem[];
  audio: {
    title: string;
    src: string;
    defaultVolume: number;
  };
  socialLinks?: {
    instagram?: string;
    spotifyPlaylist?: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  celebrant: {
    name: "Trupti Ji",
    nickname: "My Dearest Trupti 🌸",
    birthDate: "13th August",
    title: "Happy Birthday, Trupti Ji! 🌸",
    heroSubtitle: "Welcome to a cinematic lotus-themed story created with all my love to celebrate your special day.",
    avatarUrl: "/images/avatar.png",
  },
  theme: {
    primaryGlow: "#EC4899", // Vivid Lotus Pink
    secondaryGlow: "#8B5CF6", // Purple Glow
    accentGold: "#F5D061", // Gold
    roseGold: "#E8B4B8", // Rose Gold
    darkBackground: "#0B0714", // Obsidian Night
  },
  messages: {
    heroTyping: [
      "Like a blooming Lotus 🌸, you bring grace & joy into my world...",
    ],
    birthdayCardTitle: "A Heartfelt Birthday Wish For Trupti Ji",
    birthdayCardText: [
      "On this magical 13th of August, I want to remind you of how deeply special you are to me.",
      "Your smile brightens my entire life. Like a pure Lotus blooming in full glory, you bring elegance, warmth, and endless happiness wherever you go.",
      "May this new chapter bring you breathtaking adventures, boundless joy, and all the dreams your heart holds dear."
    ],
    letterEnvelopeTitle: "For Your Eyes Only Letter for મારી વ્હાલી તૃપ્તિ 🌸",
    letterSubject: "Letter for My Bangaram 💙✨",
    letterText: `જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ, તૃપ્તિ-જી 🌸💫

13મી ઓગસ્ટનો આ ખાસ દિવસ મારા માટે પણ ખૂબ જ ખાસ છે, કારણ કે આ દિવસે એક એવી સુંદર વ્યક્તિનો જન્મ થયો હતો જે મારા જીવનમાં પ્રેમ, ખુશી અને અનેક યાદો લઈને આવી. ❤️

તમારી સાથે વિતાવેલી દરેક પળ, દરેક સ્મિત અને દરેક નાની-નાની વાત મારા માટે ખૂબ જ કિંમતી છે. તમે કમળના ફૂલ જેવી સુંદર, શુદ્ધ અને મજબૂત છો — તમારો પ્રેમાળ સ્વભાવ અને તમારી સુંદર વિચારધારા મારા જીવનને વધુ ખાસ બનાવે છે. 🌸

મારી દિલથી ઈચ્છા છે કે તમારું જીવન હંમેશા ખુશીઓ, સારા સ્વાસ્થ્ય, સફળતા અને અનંત પ્રેમથી ભરેલું રહે. ✨

અને હા… મારી કોઈ વાતથી ક્યારેય તમને દુઃખ પહોંચ્યું હોય, મારી કોઈ ભૂલ થઈ હોય કે અજાણતાં કંઈ ખોટું થયું હોય તો મને દિલથી માફ કરી દેજો. ❤️
મારી હંમેશા એ જ ઈચ્છા રહેશે કે આપણો સંબંધ વિશ્વાસ, સમજણ અને પ્રેમ સાથે દિવસ પ્રતિદિન વધુ મજબૂત બનતો જાય. 🤞✨

આપણી આ સુંદર સફર મારા માટે ખૂબ જ ખાસ છે અને હું દરેક ક્ષણને દિલથી સાચવીશ. 💕

હંમેશા તમારી સાથે,
હંમેશા અને હંમેશા માટે… ❤️✨

Forever Yours 🌸`,
    giftSurpriseTitle: "Your Special Birthday Surprise 🎁",
    giftSurpriseSubtitle: "A Romantic Experience Unlocked",
    giftSurpriseContent: "You've unlocked a romantic candle-light dinner date & a luxury weekend getaway! Get ready for an unforgettable time together! 💖🌸",
    cakeWishTitle: "Make A Wish, Trupti Ji 🎂",
    cakeWishSubtitle: "Tap the glowing candle flames to extinguish them & send your wish to the universe! ✨",
    cakeBlownMessage: "Your wish has been sent to the stars! May all your heart's deepest desires come true this year, my love! 🌟🎂🌸",
    finaleTitle: "HAPPY BIRTHDAY TRUPTI JI! 🌸🎉",
    finaleSubtitle: "May your life always bloom like a lotus in full glory.",
  },
  memories: [
    {
        "id": "62",
        "url": "/images/photo62.png",
        "caption": "Precious Memory #62 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "11",
        "url": "/images/photo11.png",
        "caption": "Precious Memory #11 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "39",
        "url": "/images/photo39.png",
        "caption": "Precious Memory #39 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "57",
        "url": "/images/photo57.png",
        "caption": "Precious Memory #57 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "48",
        "url": "/images/photo48.png",
        "caption": "Precious Memory #48 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "22",
        "url": "/images/photo22.png",
        "caption": "Precious Memory #22 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "49",
        "url": "/images/photo49.png",
        "caption": "Precious Memory #49 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "60",
        "url": "/images/photo60.png",
        "caption": "Precious Memory #60 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "30",
        "url": "/images/photo30.png",
        "caption": "Precious Memory #30 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "67",
        "url": "/images/photo67.png",
        "caption": "Precious Memory #67 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "61",
        "url": "/images/photo61.png",
        "caption": "Precious Memory #61 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "51",
        "url": "/images/photo51.png",
        "caption": "Precious Memory #51 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "58",
        "url": "/images/photo58.png",
        "caption": "Precious Memory #58 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "55",
        "url": "/images/photo55.png",
        "caption": "Precious Memory #55 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "12",
        "url": "/images/photo12.png",
        "caption": "Precious Memory #12 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "10",
        "url": "/images/photo10.png",
        "caption": "Precious Memory #10 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "18",
        "url": "/images/photo18.png",
        "caption": "Precious Memory #18 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "9",
        "url": "/images/photo9.png",
        "caption": "Precious Memory #9 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "avatar",
        "url": "/images/avatar.png",
        "caption": "My Dearest Trupti-Ji 🌸",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "38",
        "url": "/images/photo38.png",
        "caption": "Precious Memory #38 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "34",
        "url": "/images/photo34.png",
        "caption": "Precious Memory #34 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "56",
        "url": "/images/photo56.png",
        "caption": "Precious Memory #56 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "31",
        "url": "/images/photo31.png",
        "caption": "Precious Memory #31 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "47",
        "url": "/images/photo47.png",
        "caption": "Precious Memory #47 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "5",
        "url": "/images/photo5.png",
        "caption": "Precious Memory #5 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "7",
        "url": "/images/photo7.png",
        "caption": "Precious Memory #7 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "52",
        "url": "/images/photo52.png",
        "caption": "Precious Memory #52 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "37",
        "url": "/images/photo37.png",
        "caption": "Precious Memory #37 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "21",
        "url": "/images/photo21.png",
        "caption": "Precious Memory #21 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "4",
        "url": "/images/photo4.png",
        "caption": "Precious Memory #4 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "54",
        "url": "/images/photo54.png",
        "caption": "Precious Memory #54 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "44",
        "url": "/images/photo44.png",
        "caption": "Precious Memory #44 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "29",
        "url": "/images/photo29.png",
        "caption": "Precious Memory #29 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "26",
        "url": "/images/photo26.png",
        "caption": "Precious Memory #26 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "65",
        "url": "/images/photo65.png",
        "caption": "Precious Memory #65 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "45",
        "url": "/images/photo45.png",
        "caption": "Precious Memory #45 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "64",
        "url": "/images/photo64.png",
        "caption": "Precious Memory #64 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "16",
        "url": "/images/photo16.png",
        "caption": "Precious Memory #16 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "15",
        "url": "/images/photo15.png",
        "caption": "Precious Memory #15 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "71",
        "url": "/images/photo71.png",
        "caption": "Precious Memory #71 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "19",
        "url": "/images/photo19.png",
        "caption": "Precious Memory #19 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "70",
        "url": "/images/photo70.png",
        "caption": "Precious Memory #70 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "27",
        "url": "/images/photo27.png",
        "caption": "Precious Memory #27 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "32",
        "url": "/images/photo32.png",
        "caption": "Precious Memory #32 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "23",
        "url": "/images/photo23.png",
        "caption": "Precious Memory #23 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "53",
        "url": "/images/photo53.png",
        "caption": "Precious Memory #53 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "28",
        "url": "/images/photo28.png",
        "caption": "Precious Memory #28 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "66",
        "url": "/images/photo66.png",
        "caption": "Precious Memory #66 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "1",
        "url": "/images/photo1.png",
        "caption": "Precious Memory #1 with Trupti-Ji ✨",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "24",
        "url": "/images/photo24.png",
        "caption": "Precious Memory #24 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "35",
        "url": "/images/photo35.png",
        "caption": "Precious Memory #35 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "25",
        "url": "/images/photo25.png",
        "caption": "Precious Memory #25 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "13",
        "url": "/images/photo13.png",
        "caption": "Precious Memory #13 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "33",
        "url": "/images/photo33.png",
        "caption": "Precious Memory #33 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "8",
        "url": "/images/photo8.png",
        "caption": "Precious Memory #8 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "43",
        "url": "/images/photo43.png",
        "caption": "Precious Memory #43 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    },
    {
        "id": "69",
        "url": "/images/photo69.png",
        "caption": "Precious Memory #69 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "14",
        "url": "/images/photo14.png",
        "caption": "Precious Memory #14 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "17",
        "url": "/images/photo17.png",
        "caption": "Precious Memory #17 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "3",
        "url": "/images/photo3.png",
        "caption": "Precious Memory #3 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "6",
        "url": "/images/photo6.png",
        "caption": "Precious Memory #6 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "2",
        "url": "/images/photo2.png",
        "caption": "Precious Memory #2 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "46",
        "url": "/images/photo46.png",
        "caption": "Precious Memory #46 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "72",
        "url": "/images/photo72.png",
        "caption": "Precious Memory #72 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "59",
        "url": "/images/photo59.png",
        "caption": "Precious Memory #59 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "40",
        "url": "/images/photo40.png",
        "caption": "Precious Memory #40 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Pure Happiness 💕"
    },
    {
        "id": "68",
        "url": "/images/photo68.png",
        "caption": "Precious Memory #68 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "63",
        "url": "/images/photo63.png",
        "caption": "Precious Memory #63 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Joyful Moments ✨"
    },
    {
        "id": "50",
        "url": "/images/photo50.png",
        "caption": "Precious Memory #50 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Sweet Vibes 💖"
    },
    {
        "id": "36",
        "url": "/images/photo36.png",
        "caption": "Precious Memory #36 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Romantic Sparkle ✨"
    },
    {
        "id": "41",
        "url": "/images/photo41.png",
        "caption": "Precious Memory #41 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Precious Memory 🌸"
    },
    {
        "id": "73",
        "url": "/images/photo73.png",
        "caption": "Precious Memory #73 with Trupti-Ji ✨",
        "date": "13th August Celebration",
        "tag": "Lotus Bloom 🌸"
    }
],
  audio: {
    title: "A Song For U 🎵",
    // User's uploaded MP3 track
    src: "/audio/Merged.mp3",
    defaultVolume: 0.6,
  },
  socialLinks: {
    instagram: "https://instagram.com",
    spotifyPlaylist: "https://spotify.com",
  },
};
