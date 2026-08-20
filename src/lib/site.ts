export const site = {
  name: "Eworld Information Systems",
  short: "Eworld",
  since: 2001,
  address: "IInd Floor, Daya Building, Mavoor Road, Calicut, Kerala, India",
  phones: ["+91-495-4602392", "+91-8714817742"],
  mobile: "+91-8714817742",
  emergency: ["+91-9495 49 09 75", "+91-70 121 55 947"],
  whatsapp: "+919495490975",
  skype: "eworldclt",
  emails: ["contact@eworld.co.in", "mailtoeworld@gmail.com"],
  url: "https://eworld.co.in",
} as const;

export const telHref = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;
