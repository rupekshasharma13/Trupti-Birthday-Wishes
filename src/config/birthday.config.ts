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
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
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
    letterEnvelopeTitle: "For Your Eyes Only Letter for મારી વ્હાલી ટ્રુપ્તિ 🌸",
    letterSubject: "Letter for My Bangaram 💙✨",
    letterText: `જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ, ટ્રુપ્તિ-જી 🌸💫

13મી ઓગસ્ટનો આ ખાસ દિવસ મારા માટે પણ ખૂબ જ ખાસ છે, કારણ કે આ દિવસે એક એવી સુંદર વ્યક્તિનો જન્મ થયો હતો જે મારા જીવનમાં પ્રેમ, ખુશી અને અનેક યાદો લઈને આવી. ❤️

તમારી સાથે વિતાવેલો દરેક પળ, દરેક સ્મિત અને દરેક નાની-નાની વાત મારા માટે ખૂબ જ કિંમતી છે. તમે કમળના ફૂલ જેવી સુંદર, શુદ્ધ અને મજબૂત છો — તમારો પ્રેમાળ સ્વભાવ અને તમારી સુંદર વિચારધારા મારા જીવનને વધુ ખાસ બનાવે છે. 🌸

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
      id: "1",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      caption: "Golden hour glow & endless smiles with Trupti Ji ✨",
      date: "13th August Celebration",
      tag: "Lotus Bloom 🌸",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      caption: "Spontaneous adventures & unforgettable laughs 💖",
      date: "Precious Moments",
      tag: "Sweet Vibes",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
      caption: "Celebrating small victories with big hearts 🥂",
      date: "Special Times",
      tag: "Joyful Memories",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800",
      caption: "Serene moments & heartwarming smiles ☕",
      date: "Cozy Afternoons",
      tag: "Peace & Love",
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
      caption: "Underneath the city lights with my favorite 🌆",
      date: "Romantic Evening",
      tag: "City Lights",
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
      caption: "Laughter that echoes in my heart forever ✨",
      date: "Unforgettable",
      tag: "Pure Happiness",
    },
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
