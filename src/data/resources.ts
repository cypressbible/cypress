/**
 * Study resources previously listed at https://cypressbible.org/resources/
 * Destinations validated against current WordPress / subdomain links.
 */

export type ChurchResource = {
  title: string;
  description: string;
  href: string;
  action: string;
};

export const resourceDisclaimer =
  "These materials were created by Cypress Bible Church for the broader church—free for personal study and discipleship. They may not be distributed for profit without written permission from Cypress Bible Church.";

export const churchResources: ChurchResource[] = [
  {
    title: "Jesus in his own words",
    description:
      "Jesus’ seven “I am” statements in John show who he is and how he meets our deepest needs—one concise study.",
    href: "https://cypressbible.org/wp-content/uploads/2025/08/Jesus-in-His-Own-Words-I-Am-Statements.pdf",
    action: "Open PDF"
  },
  {
    title: "Attributes of a disciple",
    description:
      "How we abide in Christ, obey Scripture, sacrifice for others, love well, and make disciples—with room to reflect and apply.",
    href: "https://cypressbible.org/attributes-of-a-disciple/",
    action: "Open study guide"
  },
  {
    title: "Harmony of the Gospels",
    description:
      "See how Matthew, Mark, Luke, and John fit together—the same harmony tool our church publishes for Scripture reading.",
    href: "https://gospels.cypressbible.org",
    action: "Open harmony"
  },
  {
    title: "The Lord's Prayer",
    description:
      "What prayer is and how Jesus’ model prayer still shapes ours today—a practical printable guide.",
    href: "https://cypressbible.org/wp-content/uploads/2024/12/The-Lords-Prayer-1.pdf",
    action: "Open PDF"
  },
  {
    title: "Bible study methods",
    description:
      "Straightforward ways to approach the Bible when it feels intimidating—before small groups or personal study.",
    href: "https://cypressbible.org/wp-content/uploads/2025/03/Bible-Study-Methods.pdf",
    action: "Open PDF"
  },
  {
    title: "Divorce and remarriage",
    description:
      "A careful outline of biblical teaching when marriage vows are broken—from our elders’ pastoral paper.",
    href: "https://cypressbible.org/wp-content/uploads/2025/03/Position-Paper-on-Divorce-and-ReMarriage-JA-Draft-111924-.docx.pdf",
    action: "Open PDF"
  },
  {
    title: "Every Gift One Body",
    description:
      "Men and women—equal in dignity, distinct by design—serving shoulder to shoulder for the church’s good and God’s glory.",
    href: "https://cypressbible.org/wp-content/uploads/2025/08/Every_Gift__One_Body.pdf",
    action: "Open PDF"
  }
];
