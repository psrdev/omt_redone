export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  link?: string;
}

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Business To Consumer",
    email: "sales@outmazedtravel.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/b2c.jpg",
    link: "/contact/b2c",
  },
  {
    id: "2",
    name: "Business To Business",
    email: "info@wholesaletourism.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/b2b.jpg",
    link: "/contact/b2b",
  },
  {
    id: "3",
    name: "Corporate",
    email: "corporate@outmazedtourism.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/corporate.jpg",
    link: "/contact/corporate",
  },
  {
    id: "4",
    name: "Marketing, Media & Legal",
    email: "marketing@outmazedtourism.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/marketing.jpg",
    link: "/contact/marketing-media-legal",
  },
  {
    id: "5",
    name: "Careers",
    email: "humanresources@outmazed.com",
    phone: "",
    image: "/images/contact/careers.jpg",
    link: "/contact/careers",
  },
  {
    id: "6",
    name: "Technology",
    email: "tech@outmazedtourism.com",
    phone: "",
    image: "/images/contact/technology.jpg",
    link: "/contact/technology",
  },
];
