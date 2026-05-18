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
      "Worship by uniting all ages around the person of Christ.",
      "Worship by focusing on Christ's atoning work.",
      "Worship by reshaping our desires, priorities, and loves.",
      "Worship by expressing our love and need for God.",
      "Worship by applying the gospel to life."
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
    commitments: [
      "Transform by abiding in Christ.",
      "Transform by obeying God's commands.",
      "Transform by sacrificing for God and others.",
      "Transform by loving others.",
      "Transform by multiplying disciples."
    ]
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
      "Serve by building up the body of Christ.",
      "Serve by using spiritual gifts.",
      "Serve by demonstrating love for others.",
      "Serve by finding joy in Christ.",
      "Serve by reflecting Christ's example."
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
      "Proclaim by strengthening the local church.",
      "Proclaim by supporting homegrown missionaries and indigenous leaders.",
      "Proclaim by establishing kingdom partnerships.",
      "Proclaim by contextualizing the gospel.",
      "Proclaim by multiplying through short-term trips and local outreach.",
      "Proclaim by reaching unreached people groups."
    ]
  }
];
