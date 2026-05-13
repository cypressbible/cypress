/** Roster synced with https://cypressbible.org/leadership/ — emails from that page markup where verified. */

export const churchContact = {
  addressLine: "11711 Cypress North Houston Rd, Cypress, TX 77429",
  mapHref:
    "https://www.google.com/maps/place/11711+Cypress+North+Houston+Rd,+Cypress,+TX+77429",
  phoneDisplay: "(832) 684-1827",
  phoneTel: "+18326841827",
  email: "info@cypressbible.org"
};

export type StaffPerson = {
  name: string;
  title: string;
  /** Present on live CBC leadership page HTML */
  email?: string;
};

export const elders: StaffPerson[] = [
  { name: "Jose Nevarez", title: "Elder Chair" },
  { name: "Jim Archer", title: "Lay Elder" },
  { name: "Jim Arnold", title: "Lay Elder" },
  { name: "Brian Carroll", title: "Ministry Elder", email: "brian.carroll@cypressbible.org" },
  { name: "Jonathan Chang", title: "Ministry Elder" },
  { name: "Chris Chapel", title: "Ministry Elder", email: "chris.chapel@cypressbible.org" },
  { name: "Mark Cory", title: "Lay Elder" },
  { name: "Richard Delaune", title: "Lay Elder" },
  { name: "Dave Edwards", title: "Lay Elder" },
  { name: "Mike McGinty", title: "Lay Elder" },
  { name: "Russ Moncrief", title: "Lay Elder" },
  { name: "John Perez", title: "Ministry Elder", email: "john.perez@cypressbible.org" },
  { name: "Jim Perry", title: "Lay Elder" },
  { name: "Pat Stone", title: "Lay Elder" },
  { name: "Tim Weaver", title: "Ministry Elder", email: "tim.weaver@cypressbible.org" },
  { name: "Jason Wolin", title: "Ministry Elder", email: "jason.wolin@cypressbible.org" }
];

export const ministryLeads: StaffPerson[] = [
  {
    name: "Aaron Austin",
    title: "Student Ministry Director",
    email: "aaron.austin@cypressbible.org"
  },
  {
    name: "Nathan Anderson",
    title: "Care Director",
    email: "nathan.anderson@cypressbible.org"
  },
  { name: "Brian Carroll", title: "Executive Pastor", email: "brian.carroll@cypressbible.org" },
  { name: "Jonathan Chang", title: "Family Discipleship Pastor" },
  { name: "Chris Chapel", title: "Worship Pastor", email: "chris.chapel@cypressbible.org" },
  {
    name: "Marc Coates",
    title: "Local Outreach Coordinator",
    email: "marc.coates@cypressbible.org"
  },
  {
    name: "Brenda Croucher",
    title: "Women's Ministry Director",
    email: "brenda.croucher@cypressbible.org"
  },
  { name: "Wes Hill", title: "Men's Ministry Director", email: "wes.hill@cypressbible.org" },
  { name: "Joelle Hermond", title: "Childcare Coordinator" },
  {
    name: "John Perez",
    title: "Adult Discipleship Pastor",
    email: "john.perez@cypressbible.org"
  },
  { name: "Tim Weaver", title: "Missions Pastor", email: "tim.weaver@cypressbible.org" },
  { name: "Jason Wolin", title: "Lead Pastor", email: "jason.wolin@cypressbible.org" },
  {
    name: "Margaret Welch",
    title: "Early Childhood Coordinator",
    email: "margaret.welch@cypressbible.org"
  }
];

export const adminStaff: StaffPerson[] = [
  { name: "Ron Galle", title: "Maintenance" },
  {
    name: "Jenni Escobar",
    title: "Financial Admin",
    email: "jenni.escobar@cypressbible.org"
  },
  {
    name: "Regina Lopez",
    title: "Kids Ministry Admin",
    email: "regina.lopez@cypressbible.org"
  },
  {
    name: "William Michael",
    title: "Church Administrative Director",
    email: "william.michael@cypressbible.org"
  },
  {
    name: "Desi Pocklington",
    title: "Executive Administrative Assistant",
    email: "desi.pocklington@cypressbible.org"
  },
  {
    name: "Whitney Tuthill",
    title: "Receptionist",
    email: "receptionist@cypressbible.org"
  },
  { name: "Christine Redinger", title: "Care & Counseling Admin" },
  {
    name: "Elbert Robles",
    title: "Facilities Manager",
    email: "elbert.robles@cypressbible.org"
  },
  {
    name: "Sonya Stone",
    title: "Student Ministry Admin",
    email: "sonya.stone@cypressbible.org"
  }
];
