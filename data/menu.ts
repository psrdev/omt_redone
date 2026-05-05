export const menuData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Who are we",
    mega: true,
    type: "tabs",
    tabs: [
      {
        label: "Company",
        links: [
          { label: "Know about us", href: "#" },
          { label: "Vision & Mission", href: "#" },
          { label: "Leadership", href: "#" },
          { label: "Our Story", href: "#" },
        ],
      },
      {
        label: "Group Profile",
        links: [
          { label: "Brand Overview", href: "#" },
          { label: "How We Operate", href: "#" },
          { label: "Global Presence", href: "#" },
          { label: "Why Outmazed Tourism", href: "#" },
        ],
      },
      {
        label: "Trust",
        links: [
          { label: "Compliance", href: "#" },
          { label: "Partnerships", href: "#" },
          { label: "Certifications", href: "#" },
          { label: "Contact Overview", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Our Brands",
    mega: true,
    type: "hover-image", // new type
    img: "/images/brands/OMT.svg", // <-- default image
    sections: [
      {
        title: "Brands",
        items: [
          {
            label: "Outmazed Travel",
            href: "https://outmazed.com",
            img: "/images/brands/OT.svg",
          },
          {
            label: "Global Visa Shop",
            href: "https://globalvisashop.com",
            img: "/images/brands/GVS.svg",
          },
          {
            label: "Wholesale Tourism",
            href: "https://wholesaletourism.com",
            img: "https://picsum.photos/400/500?random=3",
          },
          {
            label: "The Global Corporates",
            href: "https://globalcorporates.com",
            img: "https://picsum.photos/400/500?random=4",
          },
          {
            label: "Tech & Stack",
            href: "https://techstack.com",
            img: "https://picsum.photos/400/500?random=5",
          },
        ],
      },
    ],
  },

  {
    label: "Solutions",
    mega: true,
    type: "simple",
    img: "https://picsum.photos/400/500",
    sections: [
      {
        title: "Solutions",
        links: [
          { label: "For Travellers", href: "#" },
          { label: "For Businesses", href: "#" },
          { label: "For Enterprises", href: "#" },
          { label: "For Partners", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Technology",
    href: "#",
  },
  {
    label: "Insights",
    href: "#",
  },
  {
    label: "Contact",
    mega: true,
    type: "simple",
    img: "https://picsum.photos/400/500",
    sections: [
      {
        title: "Contact Us",
        links: [
          { label: "B2C", href: "/contact/b2c" },
          { label: "B2B", href: "/contact/b2b" },
          { label: "CORPORATE", href: "/contact/corporate" },
          {
            label: "MARKETING, MEDIA & LEGAL",
            href: "/contact/marketing-media-legal",
          },
          { label: "CAREERS", href: "/contact/careers" },
          { label: "TECHNOLOGY", href: "/contact/technology" },
        ],
      },
    ],
  },
];
