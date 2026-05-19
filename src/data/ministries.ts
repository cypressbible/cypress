/** Ministry pages + Join a Group landing — content and assets from cypressbible.org */

const CDN = "https://cypressbible.org/wp-content/uploads";

export type MinistrySlide = {
  image: string;
  alt: string;
};

export type MinistrySection = {
  heading: string;
  body: string;
  /** Optional sub-blocks (e.g. class times) */
  items?: { title: string; body: string }[];
};

export type MinistryContact = {
  name: string;
  title: string;
  email?: string;
};

export type Ministry = {
  id: string;
  slug: string;
  menuLabel: string;
  pageTitle: string;
  metaDescription: string;
  /** Short label for landing nav */
  navLabel: string;
  logoSrc?: string;
  logoAlt?: string;
  heroEyebrow?: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroSlides: MinistrySlide[];
  intro: string;
  sections: MinistrySection[];
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  contact?: MinistryContact;
  /** Landing-page preview (2–3 sentences) */
  landingHeadline: string;
  landingBody: string;
  /** Optional featured image beside copy on landing band */
  landingMedia?: { src: string; alt: string };
  order: number;
};

export const joinGroupIntro = {
  tagline: "Take your next step into community",
  scripture:
    "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.",
  scriptureRef: "Hebrews 10:24–25 (ESV)",
  body: `Following Jesus was never meant to be a solo endeavor. At Cypress Bible Church, groups and ministries help you grow in Scripture, build authentic relationships, and serve alongside others. Whether you are exploring faith, new to the area, or ready to go deeper, there is a place for you to belong.`
};

const ministriesList: Ministry[] = [
  {
    id: "life-groups",
    slug: "life-groups",
    menuLabel: "Life Groups",
    navLabel: "Life Groups",
    pageTitle: "Life Groups",
    metaDescription:
      "Life Groups at Cypress Bible Church — small-group community where believers live out the one anothers of Scripture together.",
    logoSrc: `${CDN}/2024/09/LIFE-Groups-Booklet.png`,
    logoAlt: "Life Groups",
    heroEyebrow: "Adult discipleship",
    heroTitle: "Life Groups",
    heroSubtitle: "Love one another in meaningful community",
    heroSlides: [
      {
        image: `${CDN}/2024/09/Equip-Life-Groups-Guys-01-scaled.webp`,
        alt: "Men in a Life Group discussion"
      },
      {
        image: `${CDN}/2024/09/Equip-Life-Groups-Gals-01-scaled.webp`,
        alt: "Women in a Life Group gathering"
      },
      {
        image: `${CDN}/2025/05/WLC-map-1080-x-1350-px-3.jpg`,
        alt: "Life Groups meeting across the Cypress area"
      }
    ],
    intro:
      "Life Groups are designed to help believers deepen their love for Jesus by cultivating a vibrant, small-group environment where the “one anothers” of Scripture are actively lived out. A thriving group is marked by genuine community, spiritual transformation, intentional impact, devoted prayer, and a commitment to multiplication.",
    sections: [
      {
        heading: "What we value",
        body: "",
        items: [
          {
            title: "Community",
            body: "Meaningful relationships—welcoming, encouraging, authentic, and honest as we pursue Christ together."
          },
          {
            title: "Transformation",
            body: "Growing through the study and application of God’s Word in everyday life."
          },
          {
            title: "Impact",
            body: "Discipleship, service, and partnership in the local and global mission of the church."
          },
          {
            title: "Prayer",
            body: "Earnest prayer for one another, our church family, and those who need the gospel."
          },
          {
            title: "Multiplication",
            body: "Groups that look forward and outward so everyone in the church family can find a place to connect."
          }
        ]
      }
    ],
    primaryCta: {
      label: "Join a Group",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    secondaryCta: { label: "Group studies", href: "/resources" },
    contact: {
      name: "John Perez",
      title: "Adult Discipleship Pastor",
      email: "john.perez@cypressbible.org"
    },
    landingHeadline: "Finding lasting community at Cypress Bible Church happens in Life Groups.",
    landingBody:
      "Our small groups meet in homes and on campus throughout the week. Connect with others who will encourage you, pray with you, and apply God’s Word together.",
    landingMedia: {
      src: `${CDN}/2024/09/Equip-Life-Groups-Guys-01-scaled.webp`,
      alt: "Life Group fellowship"
    },
    order: 1
  },
  {
    id: "ec",
    slug: "ec",
    menuLabel: "Equipping Classes",
    navLabel: "Equipping Classes",
    pageTitle: "Equipping Classes",
    metaDescription:
      "Six-week Equipping Classes at Cypress Bible Church — rich content, genuine connection, and preparation for commission. Sundays at 9:30 and 11:00 am.",
    logoSrc: `${CDN}/2025/10/Equipping-Classes-Logo-1024x450.png`,
    logoAlt: "Equipping Classes",
    heroEyebrow: "Sunday mornings",
    heroTitle: "Equipping Classes",
    heroSubtitle: "Content · Connection · Commission",
    heroSlides: [
      { image: `${CDN}/2026/03/EC-Leaders-photos.jpg`, alt: "Equipping Classes leaders" },
      { image: `${CDN}/2026/01/1.jpg`, alt: "Equipping Classes at Cypress Bible Church" },
      { image: `${CDN}/2026/03/EC-Leaders-photos-1.jpg`, alt: "Discussion in Equipping Class" }
    ],
    intro:
      "Equipping Classes are 6-week active participation classes built on providing rich Content, fostering genuine Connection, and preparing believers for their Commission. They meet at CBC on Sunday during the 9:30 am and 11:00 am services. Classes are taught for one hour for six weeks, then repeated in the other hour the following six weeks.",
    sections: [
      {
        heading: "Next session",
        body: "The next session of classes starts April 19, 2026.",
        items: [
          {
            title: "9:30 am — Fundamentals of the Faith",
            body: "Ground your life in the timeless truth of God’s Word—the Triune God, our need for grace, and Christ who settled an infinite debt. (English)"
          },
          {
            title: "9:30 am — Fundamentos de la Fe",
            body: "The same foundations course offered in Spanish for our bilingual community."
          },
          {
            title: "11:00 am — Gospel Conversations",
            body: "A 12-week class to help you introduce people to Jesus—six weeks of learning, six weeks of practice with those in your life who do not yet know Him."
          }
        ]
      }
    ],
    primaryCta: {
      label: "Sign up",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    landingHeadline: "Grow in truth and community through Equipping Classes.",
    landingBody:
      "These Sunday-morning classes pair solid teaching with discussion—ideal for new believers and seasoned saints alike.",
    landingMedia: {
      src: `${CDN}/2026/03/EC-Leaders-photos.jpg`,
      alt: "Equipping Classes"
    },
    order: 2
  },
  {
    id: "childrens",
    slug: "childrens",
    menuLabel: "Kids",
    navLabel: "Kids",
    pageTitle: "Kids Ministry",
    metaDescription:
      "Cypress Bible Church Kids — birth through 5th grade. Safe, fun, gospel-centered ministry on Sundays and mid-week for families.",
    heroEyebrow: "Birth – 5th grade",
    heroTitle: "Kids",
    heroSubtitle: "Pointing children and parents to Jesus Christ",
    heroSlides: [
      { image: `${CDN}/2024/08/6N3A8718-scaled.webp`, alt: "Kids ministry at CBC" },
      { image: `${CDN}/2024/08/6N3A9430-scaled.webp`, alt: "Children learning in church" },
      { image: `${CDN}/2024/11/6N3A1873-scaled.webp`, alt: "Kids worship and teaching" }
    ],
    intro:
      "Kids Ministry exists to point the affections of children and parents to Jesus Christ by creating a safe, fun, and engaging environment where they are introduced to Jesus, the Bible, faith, and leadership.",
    sections: [
      {
        heading: "Nursery & Preschool (Birth – Kindergarten)",
        body: "9:30 and 11:00 am Sunday classes in the Nursery. Nursing Mother’s Room in the Nursery; Cry Room attached to the sanctuary near the Nursery entrance."
      },
      {
        heading: "Elementary Kids",
        body: "Elementary meets in the SLC at 9:30 and 11:00 am."
      },
      {
        heading: "5th Grade Mid-week — Xtreme Team",
        body: "Wednesdays 6:30–8:30 pm in the SLC (September–May). Discipleship and service for 5th graders."
      },
      {
        heading: "Noah’s Ark Preschool",
        body: "Monday–Thursday program since 1984—a Christian environment for toddlers and preschoolers as a ministry of Cypress Bible Church."
      }
    ],
    primaryCta: { label: "Xtreme Team sign up", href: "/contact" },
    contact: {
      name: "Jonathan Chang",
      title: "Family Discipleship Pastor"
    },
    landingHeadline: "A safe, engaging ministry for your children.",
    landingBody:
      "From nursery through 5th grade, we partner with parents to introduce kids to Jesus and the Bible on Sunday mornings and through mid-week programs.",
    landingMedia: {
      src: `${CDN}/2024/08/6N3A8718-scaled.webp`,
      alt: "Cypress Bible Church Kids"
    },
    order: 3
  },
  {
    id: "students",
    slug: "students",
    menuLabel: "Students",
    navLabel: "Students",
    pageTitle: "Student Ministry",
    metaDescription:
      "Equip student ministry at Cypress Bible Church — 6th–12th grade worship, Life Groups, events, and summer missions.",
    heroEyebrow: "6th – 12th grade",
    heroTitle: "Students",
    heroSubtitle: "Equip — glorifying God among students and families",
    heroSlides: [
      { image: `${CDN}/2024/09/6N3A1531-scaled.webp`, alt: "Student worship gathering" },
      { image: `${CDN}/2024/09/Equip-Life-Groups-Guys-01-scaled.webp`, alt: "Students in Life Group" },
      { image: `${CDN}/2024/09/Equip-Life-Groups-Gals-01-scaled.webp`, alt: "Student community" }
    ],
    intro:
      "We exist to glorify God by pointing the affections of 6th–12th grade students and their families to the all-satisfying person of Jesus Christ. Students grow through weekly large group, grade-and-gender Life Groups, fellowship events, City Lights service weekend, and summer mission trips.",
    sections: [
      {
        heading: "Sunday mornings — 9:30 am in the Gym",
        body: "Weekly student worship with student-led worship and sermon-style teaching. At 11:00 am, students attend the main service or serve in Kids, tech, or Imago Dei (special needs)."
      },
      {
        heading: "Wednesday Life Groups — 6:30–8:30 pm",
        body: "Groups by grade and gender, led by adult volunteers who disciple students in God’s Word and biblical community. Starting in the Gym."
      },
      {
        heading: "Summer missions",
        body: "",
        items: [
          {
            title: "New York Reach — June 3–9, 2026",
            body: "High school evangelism training and outreach in NYC (completed 9th grade)."
          },
          {
            title: "Camp Beloved & Beyond — June 29–July 4, 2026",
            body: "Serving campers with special needs and their families in Rosebud, TX."
          }
        ]
      }
    ],
    primaryCta: {
      label: "Sign up for Life Groups",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    contact: {
      name: "Aaron Austin",
      title: "Student Ministry Director",
      email: "aaron.austin@cypressbible.org"
    },
    landingHeadline: "Students worship, grow, and go on mission together.",
    landingBody:
      "Equip gathers 6th–12th graders for Christ-centered teaching, community, and opportunities to serve and share the gospel.",
    landingMedia: {
      src: `${CDN}/2024/09/6N3A1531-scaled.webp`,
      alt: "Student ministry worship"
    },
    order: 4
  },
  {
    id: "mens",
    slug: "mens",
    menuLabel: "Men",
    navLabel: "Men",
    pageTitle: "Men's Ministry",
    metaDescription:
      "Men's Ministry at Cypress Bible Church — biblical manhood, Bible study, prayer breakfast, and Chainbreakers discipleship.",
    heroEyebrow: "Men's ministry",
    heroTitle: "Men",
    heroSubtitle: "Biblical manhood, integrity, and impact",
    heroSlides: [
      { image: `${CDN}/2024/08/6N3A8459-scaled.webp`, alt: "Men's ministry gathering" },
      { image: `${CDN}/2024/09/6N3A1311-scaled.webp`, alt: "Men studying Scripture together" },
      { image: `${CDN}/2024/08/jack-sharp-ShCVvQbQBDk-unsplash.webp`, alt: "Men in fellowship" }
    ],
    intro:
      "Men's Ministry exists to point the affections of men to Jesus Christ by equipping them to embrace biblical manhood, lead with integrity, and impact their families, church, and community. Through Bible study, mentorship, fellowship, and service, we cultivate spiritual growth, accountability, and godly leadership.",
    sections: [
      {
        heading: "Weekly Bible study (Chapel)",
        body: "Starting January 7 — Wednesday evenings 6:30–8:30 pm (childcare available) and Thursday mornings 6:00–7:30 am. Large-group teaching then small groups for study, prayer, and accountability."
      },
      {
        heading: "Prayer breakfast",
        body: "3rd Friday of each month, 6:00–7:30 am in the Chapel — fellowship, God’s Word, and prayer together."
      },
      {
        heading: "Chainbreakers",
        body: "Confidential, shame-free discipleship for men battling habitual sin—equipped with tools, resources, and loving accountability. Contact Pastor Tim Weaver or Keven Coates to begin."
      }
    ],
    primaryCta: {
      label: "Sign up for Bible study",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    contact: {
      name: "Wes Hill",
      title: "Men's Ministry Director"
    },
    landingHeadline: "Men growing in Scripture, prayer, and accountability.",
    landingBody:
      "Join weekly Bible study, monthly prayer breakfast, or confidential Chainbreakers discipleship as you pursue Christ-like leadership at home and in the church.",
    landingMedia: {
      src: `${CDN}/2024/08/6N3A8459-scaled.webp`,
      alt: "Men's ministry"
    },
    order: 5
  },
  {
    id: "womens",
    slug: "womens",
    menuLabel: "Women",
    navLabel: "Women",
    pageTitle: "Women's Ministry",
    metaDescription:
      "Women's Ministry at Cypress Bible Church — Bible study, MOMCo, and community for biblical womanhood.",
    heroEyebrow: "Women's ministry",
    heroTitle: "Women",
    heroSubtitle: "Biblical womanhood, grace, and community",
    heroSlides: [
      { image: `${CDN}/2024/10/6N3A2374-scaled.webp`, alt: "Women's ministry gathering" },
      { image: `${CDN}/2024/11/6N3A1925-scaled.webp`, alt: "Women studying the Bible together" },
      { image: `${CDN}/2024/11/6N3A1925-scaled.webp`, alt: "Women's community at CBC" }
    ],
    intro:
      "The Women's Ministry exists to point the affections of women to Jesus Christ by equipping them to grow in biblical womanhood, lead with grace, and impact their families, church, and community through Bible study, mentorship, fellowship, and service.",
    sections: [
      {
        heading: "Weekly Bible study",
        body: "Tuesday mornings 9:30–11:30 am and Tuesday evenings 7:00–8:45 pm (childcare available mornings). Next study begins March 31 — Heaven by Jennifer Rothchild."
      },
      {
        heading: "MOMCo",
        body: "Friday mornings 9:15–11:30 am with childcare for little ones 5 months through 5 years. Mentor moms, trained workers, and a saved seat for every mom who needs community."
      }
    ],
    primaryCta: {
      label: "Sign up",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    contact: {
      name: "Brenda Croucher",
      title: "Women's Ministry Director"
    },
    landingHeadline: "Women growing together in God’s Word and everyday life.",
    landingBody:
      "From weekly Bible study to MOMCo, find encouragement, teaching, and friendships that point you to Christ.",
    landingMedia: {
      src: `${CDN}/2024/11/6N3A1925-scaled.webp`,
      alt: "Women's Bible study"
    },
    order: 6
  },
  {
    id: "specialneeds",
    slug: "specialneeds",
    menuLabel: "Special Needs",
    navLabel: "Special Needs",
    pageTitle: "Imago Dei — Special Needs",
    metaDescription:
      "Imago Dei special needs ministry at Cypress Bible Church — gospel-rich, accessible care for image bearers and their families.",
    heroEyebrow: "Special needs ministry",
    heroTitle: "Imago Dei",
    heroSubtitle: "Made in the image of God",
    heroSlides: [
      {
        image: `${CDN}/2024/09/Imago-Dei-Adults-01-DeNoiseAI-low-light-scaled.webp`,
        alt: "Imago Dei ministry worship"
      },
      {
        image: `${CDN}/2024/09/Imago-Dei-Adults-01-DeNoiseAI-low-light-scaled.webp`,
        alt: "Participants in Imago Dei"
      }
    ],
    intro:
      "Imago Dei exists to support individuals with special needs and their families by pointing their affections to the all-satisfying person of Jesus Christ. We believe every person displays God’s glory and is cherished by Him. We partner with each image bearer where they are so they can be discipled, with peer Buddies to assist everyone who attends.",
    sections: [
      {
        heading: "Sunday at 11:00 am — KLC",
        body: "Please let us know about your family member in advance so we can assign a Buddy and answer your questions."
      },
      {
        heading: "Our values",
        body: "",
        items: [
          { title: "Gospel rich", body: "Curriculum saturated with the good news of Jesus—for everyone." },
          { title: "Accessible", body: "Everyone is seen, welcomed, and loved." },
          { title: "Honor", body: "Every image bearer has value, purpose, dignity, and honor." },
          { title: "Communication", body: "We learn each person’s communication style with care." },
          {
            title: "Support",
            body: "Families can worship on Sunday and receive soul care through Life Groups, support groups, and resources."
          }
        ]
      }
    ],
    primaryCta: {
      label: "Get started",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    secondaryCta: {
      label: "Volunteer with Imago Dei",
      href: "https://cypressbiblechurch.ccbchurch.com/goto/forms/8/responses/new",
      external: true
    },
    landingHeadline: "Every image bearer belongs in the body of Christ.",
    landingBody:
      "Imago Dei provides gospel-centered teaching, worship, and Buddy support so individuals with special needs and their families can thrive at CBC.",
    landingMedia: {
      src: `${CDN}/2024/09/Imago-Dei-Adults-01-DeNoiseAI-low-light-scaled.webp`,
      alt: "Imago Dei ministry"
    },
    order: 7
  }
];

export const ministries = [...ministriesList].sort((a, b) => a.order - b.order);

export const ministriesBySlug = Object.fromEntries(
  ministries.map((m) => [m.slug, m])
) as Record<string, Ministry>;

export function getMinistry(slug: string): Ministry | undefined {
  return ministriesBySlug[slug];
}
