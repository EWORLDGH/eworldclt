export type NavLink = {
  label: string;
  to?: string;
  href?: string;
};

export type NavGroup = {
  heading?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  to?: string;
  groups?: NavGroup[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Domain",
    groups: [
      {
        links: [
          {
            label: "Search your domain name",
            href: "https://eworld.supersite2.myorderbox.com/domain-registration/index.php",
          },
          {
            label: "Domain Registration",
            href: "https://eworld.supersite2.myorderbox.com/domain-registration/index.php",
          },
          {
            label: "Domain Transfer",
            href: "https://eworld.supersite2.myorderbox.com/domain-registration/transfer/index.php",
          },
          {
            label: "Special offers",
            href: "https://eworld.supersite2.myorderbox.com/domain-registration/promos.php",
          },
          {
            label: "Become a reseller",
            href: "https://eworld.partnersite.myorderbox.com/reseller.php",
          },
        ],
      },
    ],
  },
  {
    label: "Hosting",
    to: "/hosting",
    groups: [
      {
        heading: "Shared hosting",
        links: [
          { label: "Linux hosting", to: "/linux-hosting" },
          { label: "Windows hosting", to: "/windows-hosting" },
          { label: "WordPress hosting", to: "/wordpress-hosting" },
        ],
      },
      {
        heading: "Servers",
        links: [
          { label: "VPS", to: "/vps-hosting" },
          {
            label: "Dedicated Servers",
            to: "/dedicated-servers",
          },
          {
            label: "Managed Servers",
            to: "/managed-servers",
          },
          { label: "Cloud Hosting", to: "/cloud-hosting" },
        ],
      },
      {
        heading: "Reseller hosting",
        links: [
          { label: "Linux Reseller hosting", to: "/linux-reseller-hosting" },
          { label: "Windows Reseller hosting", to: "/windows-reseller-hosting" },
        ],
      },
      {
        heading: "Overview",
        links: [{ label: "All hosting services", to: "/hosting" }],
      },
    ],
  },
  {
    label: "Email",
    groups: [
      {
        links: [
          {
            label: "Business Email",
            href: "https://eworld.supersite2.myorderbox.com/business-email",
          },
          {
            label: "Enterprise Email",
            href: "https://eworld.co.in/high%20capaciy-secured-enterprice-email-hosting.html",
          },
          {
            label: "Google Workspace",
            href: "https://eworld.supersite2.myorderbox.com/google_apps.php",
          },
          { label: "Microsoft Mail", to: "/microsoft-mail" },
          { label: "Zoho Mail", to: "/zoho-mail" },
        ],
      },
    ],
  },
  {
    label: "Security",
    groups: [
      {
        links: [
          { label: "SSL Certificate", to: "/ssl-certificate" },
          { label: "Site Lock", to: "/site-lock" },
          { label: "Website Backup", to: "/website-backup" },
        ],
      },
    ],
  },
  { label: "Web Design", to: "/services" },
  {
    label: "Marketing & AI",
    groups: [
      {
        links: [
          { label: "SEO & Digital Marketing", to: "/digital-marketing" },
          { label: "AI Solutions", to: "/ai-solutions" },
        ],
      },
    ],
  },
  {
    label: "Company",
    groups: [
      {
        links: [
          { label: "About Eworld", to: "/about" },
          { label: "Contact us", to: "/contact" },
        ],
      },
    ],
  },
];

export const accountLinks = [
  { label: "Customer Login", href: "https://eworld.myorderbox.com/customer", icon: "user" },
  { label: "Reseller Login", href: "https://eworld.myorderbox.com/reseller", icon: "users" },
  { label: "SignUp", href: "https://eworld.supersite2.myorderbox.com/login.php", icon: "userplus" },
] as const;
