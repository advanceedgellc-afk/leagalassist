export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Joseph Oviedo",
    title: "Moore Law Firm McAllen, Texas",
    avatar: "/profile/pf4.webp",
    quote:
      "\"Outstanding work...\" Our law firm has worked with Vinay and QTAT on various projects over the last 7 years and they have always provided us with outstanding work completed in a timely manner. Every time we need their help on a large project, they’re on it almost immediately with little guidance ever needed. Their services, particularly in data entry, are a great asset for any firm needing large amounts of data processed quickly. Our firm highly recommends QTAT and we look forward to continuing partnering with them on future projects.\"",
  },
  {
    name: "Melinda Rodriguez",
    title: "Fortbend Surgery Center Houston, Texas",
    avatar: "/profile/pf3.webp",
    quote:
      "\"Great Customer Service...\" “It has been a great pleasure working with QTAT and your team. Our reports are always received in a timely manner. Your team always goes beyond helping our physicians at all times. Thank you again for the great customer service that you give us daily without any hesitation”",
  },
  {
    name: "Drew Wilson ",
    title: "Uptown Consultants Boca Raton, Florida",
    avatar: "/profile/pf1.webp",
    quote:
      "\"Smart Sourcing...\"“QTAT has been a pleasure to work with over the last 8 years. When my team needs a project done timely and accurately we rely on their support. No hesitation - the best smart sourcing company you can depend on!”",
  },
  {
    name: "Samantha Debardelaben",
    title: "East Side Surgery Center Houston, Texas",
    avatar: "/profile/pf2.png",
    quote:
      "\"100% top notch...\" “QTAT has the best customer service, hands down. The turnaround time is super fast (always the next day) and mistakes are never found. I have never had to wait for a response when I had a question or continuously follow up because someone dropped the ball. I highly recommend QTAT and the services they have to offer. You won’t find a better company to work with, that’s a fact. 100% top notch! ”",
  },
];