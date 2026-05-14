/** Doctrinal and belief-section content adapted for this site */

export const DOCTRINAL_STATEMENT_PDF =
  "https://cdn.prod.website-files.com/616854f60407775532f2077a/66d8bc2eafd56237f9b4526a_Doctrinal%20Statement%20August%2022%2C%202024%5B16361%5D.pdf";

export const beliefComparisonIntro =
  "Membership at Cypress Bible means embracing our statement of faith—seven core doctrines every member affirms together. Our doctrinal statement then unpacks theology across twelve headings in greater detail as the baseline for preaching and teaching. Both are anchored in Scripture; the statement stays portable for unity, while the doctrinal articulation addresses questions and distinctions as we shepherd the flock.";

export const statementOfFaithIntro =
  "The following CBC doctrines must be fully affirmed by all Cypress Bible Church members.";

/** Optional `videoUrl`: YouTube/watch link shown above each accordion row when set */
export type StatementOfFaithRow = {
  id: string;
  title: string;
  body: string;
  references: string;
  videoUrl?: string;
};

export const statementOfFaithRows: StatementOfFaithRow[] = [
  {
    id: "sof-scriptures",
    title: "The Scriptures",
    body: "We believe the Bible is the inspired, inerrant Word of God, sufficient and authoritative for all matters of faith, life, and godliness.",
    references: "Psalm 19:7–9; 2 Timothy 3:16–17."
  },
  {
    id: "sof-god",
    title: "The Person of God",
    body: "We believe there is one God, eternally existing in three distinct persons—the Father, Son, and Holy Spirit. We believe Jesus Christ is fully man and fully God.",
    references: "John 1:1–18; 2 Corinthians 13:14; Colossians 1:15–23."
  },
  {
    id: "sof-man",
    title: "The Nature of Man",
    body: "We believe all men are sinners, falling short of the glory of God, and are in need of salvation from sin and its consequences.",
    references: "Genesis 1–3; Romans 3:10–12."
  },
  {
    id: "sof-salvation",
    title: "Salvation",
    body: "We believe that salvation is by grace alone, through faith alone, in Jesus Christ alone, apart from works. Christ died in our place and bore our sins in His own body. Jesus physically rose again, demonstrating His victory over sin and death.",
    references: "John 1:12, 14:6; Romans 5:8–9, 14:9; Ephesians 1:7, 2:8–10; 1 Peter 1:18–19."
  },
  {
    id: "sof-sanctification",
    title: "Sanctification",
    body: "We believe every believer is indwelt by the Holy Spirit and is able and expected to walk in the newness of the Spirit by obeying God and growing in Christ-likeness.",
    references: "1 Thessalonians 5:22–23; 1 John 3:1–2."
  },
  {
    id: "sof-church",
    title: "The Church",
    body: "We believe in one universal church made up of many local churches whereby all true believers are united through faith in Christ according to the truth of God's Word.",
    references: "Acts 1:8, 11:19–30; Ephesians 1:22–23."
  },
  {
    id: "sof-future",
    title: "The Future",
    body: "We believe in the future resurrection of those who have died—the saved to eternal life, and the unsaved to eternal punishment. Jesus Christ will come again to the earth personally, visibly, and bodily to consummate the eternal plan of God.",
    references: "Luke 21:25–28; John 5:25–29."
  }
];

export type DoctrineSection = {
  id: string;
  toc: string;
  label: string;
  title: string;
  teaching: string;
  references: string;
  /** Teaching video matched to heading order on legacy What We Believe page */
  videoUrl: string;
};

/** Teaching videos (legacy https://www.cypressbible.org/whatwebelieve/ order, first appearance). */
export const doctrineSections: DoctrineSection[] = [
  {
    id: "bibliology",
    toc: "Scriptures",
    label: "Bibliology",
    title: "Doctrine of the Scriptures",
    teaching:
      "The Bible, which consists of the 66 books of the Old and New Testaments, represents the complete, verbal, inspired Word of God, without error in the original writings, and represents the supreme and final authority in doctrine, faith, and practice. The Scriptures are God's self-attesting, self-disclosure to mankind. Every doctrinal formulation, whether of creed, confession, or theology, must be put to the test of the full counsel of God in Scripture. The truth of Scripture stands in judgment over men; men never stand in judgment over the Scripture. The meaning of the Bible can be objectively discovered as one applies the literal, grammatical, and historical methods of interpretation under the enlightenment of the Holy Spirit. Therefore, believers are to study the Scriptures in humility, asking the Holy Spirit to remove spiritual blindness so that they can understand and diligently apply God's truth to their lives.",
    references:
      "2 Tim 3:16-17; 2 Pet 1:19-21; Ps 19:7-9; Heb 4:12; Neh 9:6; 2 Cor 13:14; Eph 1:3-14; Isa 6:1-3; Phil 2:1-11; Acts 5:3-4.",
    videoUrl: "https://www.youtube.com/watch?v=VCfp6Z9Gjk8"
  },
  {
    id: "trinity",
    toc: "Trinity",
    label: "Trinity",
    title: "Doctrine of the Godhead",
    teaching:
      "There is one living God, the creator of all things, eternally existing in three equal persons—Father, Son, and Holy Spirit—who have the exact same nature and attributes but are distinct in office and activity. The distinctions within the Godhead are not distinctions of His essence, nor are they additions to His essence, but they are the unfolding of God's one, undivided being into three real Persons. In the unity of the Godhead, each person is coequal, consubstantial, coexistent, coeternal, and completely worthy of obedience and worship.",
    references:
      "Neh 9:6; 2 Cor 13:14; Eph 1:3-14; Isa 6:1-3; Phil 2:1-11; Acts 5:3-4.",
    videoUrl: "https://www.youtube.com/watch?v=t1_Ms8xQEow&t=109s"
  },
  {
    id: "patrology",
    toc: "The Father",
    label: "Patrology",
    title: "Doctrine of the Person of the Father",
    teaching:
      "God the Father is sovereign in all past, present, and future activity. He has freely decreed all things for His glory; His plans and purposes cannot be thwarted. As the only absolute and omnipotent ruler in the universe, He is sovereign in creation, providence, and redemption, working all things together for His glory and the believer's good. The Father's sovereignty does not remove the moral accountability placed on mankind or make Him the author of sin. Rather, He elects, saves, and adopts all who place their faith in Him.",
    references:
      "Ps 93:1-2; Eph 1:3-6; Gen 1:1-31; 1 Chr 29:11-12; Dan 4:34-35; Jer 32:17; Neh 9:6; 2 Cor 13:14; Eph 1:3-14; Isa 6:1-3; Phil 2:1-11; Acts 5:3-4.",
    videoUrl: "https://www.youtube.com/watch?v=Yk6tgPB0Q2U&t=1038s"
  },
  {
    id: "christology",
    toc: "The Son",
    label: "Christology",
    title: "Doctrine of the Person of the Son",
    teaching:
      "Jesus Christ was always with God, is God, and existed before all things. All things came into being through Him and are held together by the word of His power. He is the image of the invisible God, the firstborn over all creation, and in Him dwells the fullness of the Godhead bodily. The Holy Spirit conceived Jesus Christ in the womb of the virgin Mary, and He became a sinless man without ceasing to be God. These two whole, perfect, and distinct natures – the divine and the human – were joined together in one person without confusion, change, division, or separation. Therefore, he is fully God and man, yet one Christ. He accomplished our redemption through a perfect life and a substitutionary death. Christ's literal, physical resurrection from the dead guarantees the believer's future. The Lord Jesus Christ is now in heaven, exalted at the Father's right hand, where, as High Priest, He fulfills the ministry of intercession and advocacy for His people. As the mediator between God and man, the head of the church, and the coming King, He is the final Judge.",
    references:
      "Matt 25:31-46; Acts 17:30-31; John 1:1-18; Luke 1:26-38; Col 1:15-23; Rom 6:1-14; Heb 7:11-28; Phil 2:5-11.",
    videoUrl: "https://www.youtube.com/watch?v=i9K86gAEUrQ"
  },
  {
    id: "pneumatology",
    toc: "The Spirit",
    label: "Pneumatology",
    title: "Doctrine of the Person of the Spirit",
    teaching:
      "God, the Holy Spirit, was always with God, is God, and existed before all things. He was sovereignly active in creation, the incarnation, the written revelation, and is active in illumination, the work of salvation, the process of sanctification, and the gifting of believers. Bringing about the new birth of sinners in faith, He forms, unites, and completes the body of Christ by awakening, transforming, empowering, restraining, and convicting of sin. The Spirit gifted believers in the first century for the building up of the body of Christ, and he continues to bestow these gifts upon believers today. The church is to foster an environment where individuals can explore, develop, and utilize their spiritual gifts for the greater good of the body of Christ. While being open to the operation of spiritual gifts, the believer must also exercise caution and discernment, as the potential for misuse of spiritual gifts will always exist. The believer is to pursue the full manifestation of the Spirit while testing and discerning the spirits to ensure that any expression aligns with God's character and the Scripture's teachings.",
    references:
      "1 John 4:1; John 16:5-16; 1 Cor 12:1-14; Gen 1:2; John 3:5-8; Rom 8:9-11; 1 Cor 2:10-16; 2 Pet 1:19-21.",
    videoUrl: "https://www.youtube.com/watch?v=yTtUxkQfmok"
  },
  {
    id: "anthropology",
    toc: "Human nature",
    label: "Anthropology",
    title: "The Nature and Fall of Man",
    teaching:
      "All things in heaven and on earth were created by God in six literal days and exist by His power and for His glory. Mankind was created free of sin with a rational nature, intelligence, volition, self-determination, and moral responsibility to God. God created men and women with unique genders and different roles as an expression of His own image and likeness. Tragically, man sinned, falling under divine wrath, bringing both physical and spiritual death to himself and to his posterity. Because all men were in Adam, a nature corrupted by Adam's sin has been transmitted to all mankind. All men are thus sinners by nature and by choice. This sinful depravity is radical and pervasive, extending to the mind, will, and affections. With no recuperative powers to enable him to recover himself, man is hopelessly lost and alienated from God. Man's salvation is thereby wholly of God's grace through the redemptive work of our Lord Jesus Christ. All people, whatever their character or attainments, are lost and without hope apart from salvation in Christ.",
    references:
      "Jer 17:9; John 6:44; Rom 1:18-32; 3:9-20; Eph 2:1-3; Gen 1-3; Ps 58:3; Ps 51:5.",
    videoUrl: "https://www.youtube.com/watch?v=K8Nl3quSJkQ"
  },
  {
    id: "angelology",
    toc: "Angels",
    label: "Angelology",
    title: "Doctrine of Angels and Demons",
    teaching:
      "Angels are spiritual beings occupying different orders and ranks who are created to serve and worship God. They presently exist in both fallen and unfallen states. The former includes Satan and his demons; the latter includes the heavenly angels. Satan, by his own choice, is the enemy of God. He led our first parents into sin and now rules as the god of this world. Satan was judged at the cross and awaits his final judgment in the lake of fire for eternity.",
    references:
      "Ps 148:1-6; Luke 2:9-14; Heb 1:6-7; Heb 1:14; Heb 2:6-7; Rev 5:11-14; 19:10; 20:10; 22:9; Isa 14:12-17; Ezek 28:12-19.",
    videoUrl: "https://www.youtube.com/watch?v=1Dr3Jm28WTQ"
  },
  {
    id: "soteriology",
    toc: "Salvation",
    label: "Soteriology",
    title: "Doctrine of Salvation",
    teaching:
      "The gospel is the good news that Jesus Christ died a substitutionary and propitiatory death as the once-for-all sacrifice to God for our sins. Every person is lost in sin apart from Christ and in need of a Savior. To receive the gift of salvation, the Holy Spirit must first regenerate the mind and heart of the unbeliever. This regeneration is instantaneous and is accomplished solely by the power of the Holy Spirit through the Word of God when the repentant sinner responds in faith to the divine provision of salvation. Therefore, every person is justified by grace through faith alone, apart from works. Through the imputed work of Christ, a repentant sinner is justified, declared righteous, fully accepted by God, reconciled to God, adopted as His child, forgiven the debt of his sin, and liberated from the law of sin and death. Believers, once saved, are kept secure in Christ forever.",
    references:
      "Eph 2:1-10; Rom 8:28-39; Rom 1:16; 3:21-26; 1 Cor 15:1-4; Heb 10:1-18; 1 Pet 1:3-5; Titus 3:5-7.",
    videoUrl: "https://www.youtube.com/watch?v=5_YimZw4Zfg&t=755s"
  },
  {
    id: "sanctification",
    toc: "Sanctification",
    label: "Sanctification",
    title: "Doctrine of Becoming Like Christ",
    teaching:
      "The Holy Spirit is active in our sanctification, conforming believers into the will and image of Christ as they progress in the faith. The Holy Spirit gives believers the desire and ability to live a life of increasing holiness by forsaking the world, identifying the lies of the evil one, dying to self, and treasuring Christ. The spiritual disciplines, especially Bible study, prayer, worship, and confession, are a vital means of grace in this regard. Since indwelling sin is an earthly reality, believers will always experience temptation as the flesh battles against the Spirit. However, those in Christ Jesus are to live by faith, knowing that God will never allow us to be tempted beyond our ability; adequate provision is always made for victory in Christ. We experience the peace of Christ as we grow in the likeness of Christ.",
    references:
      "Col 3:1-15; 1 Thess 5:22-23; 1 John 3:1-2; Rom 8:12-14, 29; 2 Thess 2:13; Phil 2:12-13; 1 Cor 10:13; 2 Cor 3:18.",
    videoUrl: "https://www.youtube.com/watch?v=Wv_oWnUXQhU"
  },
  {
    id: "ecclesiology",
    toc: "The Church",
    label: "Ecclesiology",
    title: "Doctrine of the Church",
    teaching:
      "The universal church (the body and bride of Christ) is a spiritual organism comprised of all born-again persons. The church began at Pentecost; believers are placed into the church by the baptizing work of the Holy Spirit. A local church is a union of believing and water-baptized Christians in community together, who have covenanted to strive to keep all that Christ has commanded, to sustain public worship under the guidance of the Holy Spirit, to choose elders/pastors and deacons, to administer baptism and the Lord's Supper, to practice Christian church discipline, to promote godliness and brotherly love, and to contribute to the general spread of the gospel. Every local church is independent and free in its relation to other Christian churches, and it acknowledges Christ only as its head.",
    references:
      "Eph 1:22-23; Acts 11:19-30; Acts 1:8; Acts 2:42; 1 Cor 12:4-11; Eph 2:19-22; Col 1:18; Col 3:16-17; Heb 10:23-25.",
    videoUrl: "https://www.youtube.com/watch?v=gaJyT9bkE38"
  },
  {
    id: "ordinances",
    toc: "Baptism & Supper",
    label: "Ordinances",
    title: "Doctrine of Baptism and Communion",
    teaching:
      "The two church practices instituted by Jesus include water baptism by immersion and the Lord's Supper, neither of which impart merit or saving grace. Water baptism, intended for believers whom the work of Christ has saved, is an act of obedience and a visual demonstration of a person's union with Christ in the likeness of His death and resurrection. It signifies that the power of sin is broken, vividly depicting a believer's newness of life. The Lord's Supper is a regular reminder of Jesus' sacrifice. It is intended for those who have become followers of Christ and symbolizes Christ's sacrifice in the giving of His body and the shedding of His blood on our behalf. As believers partake of the Lord's Supper, with an attitude of faith and self-examination, they remember and proclaim the New Covenant life they have received through the death of Christ. Communion serves as a gift to the church as it helps us anticipate the consummation of the Lord's Supper around the marriage supper of the lamb.",
    references:
      "Matt 28:19-20; Acts 2:41; Acts 8:34-39; Rom 6:3-11; Matt 26:26-29; 1 Cor 11:23-34; Isa 25:6-8; Rev 19:6-9.",
    videoUrl:
      "https://www.youtube.com/watch?v=jqPJzt9AUNk&list=PLBJcZvVn1pVU3uJAeCdh_gW3oWT_LJNsr&index=11"
  },
  {
    id: "eschatology",
    toc: "Last things",
    label: "Eschatology",
    title: "Doctrine of Last Things",
    teaching:
      "The church awaits the personal, bodily return of our Lord Jesus Christ. When He returns, the dead in Christ shall be raised in glorified bodies, and the living in Christ shall be given glorified bodies without tasting death. All believers shall be caught up to meet the Lord in the air before the tribulation. Following the removal of the church from the earth, the righteous judgments of God will be poured out upon an unbelieving world during the seven-year tribulation. Christ will then return physically to earth to inaugurate the one-thousand-year millennial kingdom. Christ will establish Himself as King, sitting on the throne of David, as the nation of Israel is saved and restored to their land. The millennium will be a time of peace, joy, righteousness, obedience, holiness, truth, and fullness of the Holy Spirit. Satan will be bound during this time but released at the end when he leads a rebellion against Christ, only to be defeated and judged. As the millennium concludes, the dead of all ages are resurrected and judged on the great white throne. Believers are resurrected to eternal life with new bodies; unbelievers are punished with everlasting separation from the presence of the Lord. Following this, God will create a new heavens and a new earth and usher in the eternal state.",
    references:
      "Luke 21:25-28; Luke 13:28; John 5:25-29; Titus 2:13; 1 Thess 4:13-18; Ps 8:4-8; Matt 6:10; Matt 8:12; Matt 22:13; Matt 25:30; Heb 2:6-9; Isa 2:1-4; Isa 11:1-12; Jer 23:5-6; Ezek 37; Amos 9:9-15; Zech 14; Matt 19:28; Acts 1:6; Acts 3:19-21; Rev 20:4-6; 1 Cor 15:22-28; 2 Thess 2:3-12; Rev 20:7-15.",
    videoUrl:
      "https://www.youtube.com/watch?v=ALUcSW-gd3U&list=PLBJcZvVn1pVU3uJAeCdh_gW3oWT_LJNsr&index=12"
  }
];
