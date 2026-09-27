import type { Plan } from "@/components/site/Plans";

export const linuxResellerPlans: Plan[] = [
  {
    name: "Basic",
    price: "₹499/mo",
    note: "Ideal for your first few clients",
    features: ["50 GB NVMe storage", "500 GB bandwidth", "25 cPanel accounts", "Free SSL for all sites", "WHM control panel"],
  },
  {
    name: "Advanced",
    price: "₹999/mo",
    note: "Most popular with web studios",
    highlight: true,
    features: [
      "150 GB NVMe storage",
      "1.5 TB bandwidth",
      "100 cPanel accounts",
      "White-label nameservers",
      "Free SSL + daily backups",
      "WHMCS-ready billing hooks",
    ],
  },
  {
    name: "Premium",
    price: "₹1,999/mo",
    note: "For established resellers",
    features: [
      "400 GB NVMe storage",
      "Unmetered bandwidth",
      "Unlimited cPanel accounts",
      "Private DNS & branding",
      "Priority migration support",
      "Malware scanning & firewall",
    ],
  },
];


export const windowsResellerPlans: Plan[] = [
  {
    name: "Basic",
    price: "₹649/mo",
    note: "Great for ASP.NET starters",
    features: ["50 GB SSD storage", "500 GB bandwidth", "25 Plesk accounts", "1 MSSQL database per site", "Free SSL"],
  },
  {
    name: "Advanced",
    price: "₹1,249/mo",
    note: "Best value for agencies",
    highlight: true,
    features: [
      "150 GB SSD storage",
      "1.5 TB bandwidth",
      "100 Plesk accounts",
      "ASP.NET Core & Classic ASP",
      "White-label nameservers",
      "Daily backups",
    ],
  },
  {
    name: "Premium",
    price: "₹2,399/mo",
    note: "High-volume reselling",
    features: [
      "400 GB SSD storage",
      "Unmetered bandwidth",
      "Unlimited Plesk accounts",
      "Unlimited MSSQL databases",
      "Private DNS & branding",
      "Priority support & migration",
    ],
  },
];


export const microsoftMailPlans: Plan[] = [
  {
    name: "Business Basic",
    price: "₹145 /user/mo",
    note: "Web & mobile apps",
    features: ["50 GB mailbox", "Custom domain email", "Teams, OneDrive 1 TB", "Web versions of Office"],
  },
  {
    name: "Business Standard",
    price: "₹770 /user/mo",
    note: "Most popular",
    highlight: true,
    features: [
      "50 GB mailbox",
      "Desktop Office apps",
      "Teams webinars",
      "OneDrive 1 TB",
      "SharePoint & Bookings",
    ],
  },
  {
    name: "Business Premium",
    price: "₹1,499 /user/mo",
    note: "Advanced security",
    features: [
      "100 GB mailbox",
      "Defender for Office 365",
      "Intune device management",
      "Conditional access & MFA policies",
      "Archiving & eDiscovery",
    ],
  },
];


export const zohoMailPlans: Plan[] = [
  {
    name: "Mail Lite",
    price: "₹63 /user/mo",
    note: "5 GB or 10 GB per user",
    features: ["Ad-free webmail", "IMAP/POP & ActiveSync", "Calendar, Contacts, Tasks", "Mobile apps"],
  },
  {
    name: "Mail Premium",
    price: "₹210 /user/mo",
    note: "Best for growing teams",
    highlight: true,
    features: [
      "50 GB mailbox per user",
      "250 MB attachments",
      "Email retention & eDiscovery",
      "White-label & multiple domains",
      "Cliq, WorkDrive add-ons",
    ],
  },
  {
    name: "Workplace",
    price: "₹252 /user/mo",
    note: "Mail + full office suite",
    features: [
      "30 GB mail + 10 GB WorkDrive",
      "Writer, Sheet, Show",
      "Cliq chat & Meeting",
      "Connect intranet",
      "Admin & security console",
    ],
  },
];

