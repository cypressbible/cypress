export type DiscipleshipPillar = {
  slug: string;
  title: string;
  icon: string;
  color: string;
  image: string;
  summary: string;
  commitments: string[];
};

export const discipleshipPillarPages: DiscipleshipPillar[] = [
  {
    slug: "worship-in-services",
    title: "Worship In Services",
    icon: "fa-music",
    color: "#ef4444",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    summary:
      "We grow when we sing, listen to God's Word, pray and celebrate the ordinances corporately.",
    commitments: [
      "Gather weekly with expectancy.",
      "Listen to Scripture with humility.",
      "Pray with dependence and thanksgiving.",
      "Celebrate baptism and communion joyfully.",
      "Respond in obedience during the week."
    ]
  },
  {
    slug: "transform-in-community",
    title: "Transform In Community",
    icon: "fa-people-group",
    color: "#3b82f6",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
    summary: "Our two main growth vehicles are life groups (relational) and Equipping Classes (learning).",
    commitments: ["Abide In Christ", "Obey", "Sacrifice", "Love", "Multiply"]
  },
  {
    slug: "serve-on-teams",
    title: "Serve On Teams",
    icon: "fa-handshake-angle",
    color: "#84cc16",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
    summary:
      "The body of Christ can never be healthy until every member is using their gifts. Our structure helps encourage this.",
    commitments: [
      "Discover and develop your gifts.",
      "Show up faithfully for your team.",
      "Serve with humility and joy.",
      "Care for people, not just tasks.",
      "Raise up and release new leaders."
    ]
  },
  {
    slug: "proclaim-to-nations",
    title: "Proclaim To Nations",
    icon: "fa-bullhorn",
    color: "#06b6d4",
    image:
      "https://images.unsplash.com/photo-1469571486292-b53601020ef5?auto=format&fit=crop&w=1400&q=80",
    summary: "The gospel is for the nations! Local and global missions are woven through everything we do.",
    commitments: [
      "Pray for local and global mission work.",
      "Share the gospel with bold compassion.",
      "Give and go with sacrificial generosity.",
      "Welcome the stranger with hospitality.",
      "Partner with missionaries and church planters."
    ]
  }
];
