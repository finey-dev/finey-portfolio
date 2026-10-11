import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Finey Otieno Akwoyo",
  initials: "FOA",
  url: "https://fineyakwoyo.online/",
  avatarUrl: "/logo.png",
  description:
    "I build apps, websites, business systems and payment tools. Real products, real users. 5,000+ people use software I built every month.",

  hero: {
    headline: "I build software that helps businesses run better.",
    sub: "Websites, mobile apps, payment systems and business tools. Used by thousands of people every month.",
    proof: "Trusted by co-operatives, farms, NGOs and growing businesses worldwide.",
  },

  stats: [
    {
      value: 5000,
      suffix: "+",
      label: "People using the co-operative app I built every month",
    },
    {
      value: 1000,
      suffix: "+",
      label: "People watching on TopWaatch every month",
    },
    {
      value: 3,
      suffix: "+",
      label: "Years building real software for real businesses",
    },
  ],

  about: [
    "I am a software developer. I build the tools that businesses use every day: apps for members of a co-operative, systems that handle payments, and platforms that run websites and emails.",
    "I think in systems, but I build for people. I see how a broken process is hurting someone at the end of it, and I fix the process. Most software fails because someone built the right thing the wrong way. I focus on both: getting the logic right, and making sure it actually fits the humans using it.",
    "I started building because I saw businesses doing important work by hand: writing in books, counting on paper, chasing payments. I thought, *this can be easier.* So I make it easier.",
  ],

  services: [
    {
      title: "Business Systems (ERP)",
      description:
        "Still running on paper or many Excel files? I build one system that handles your sales, stock, staff, money and reports, all in one place. I work with Odoo and also build custom systems.",
    },
    {
      title: "Mobile Apps",
      description:
        "Apps for Android that your customers or members can use on their phones. I have published apps on the Google Play Store.",
    },
    {
      title: "Websites and Web Apps",
      description:
        "Websites that look good, load fast and bring you customers. Also web apps where your team or customers can log in and do things.",
    },
    {
      title: "Payments and Money Tools",
      description:
        "I connect your system to M-Pesa, PayPal and bank accounts, so money is recorded by itself. No more checking payments by hand at the end of the month.",
    },
    {
      title: "Tax Invoicing (KRA eTIMS)",
      description:
        "Kenya now requires businesses to send electronic tax invoices. I connect your billing system to KRA eTIMS so you follow the rules without the headache.",
    },
    {
      title: "Hosting, Email and Servers",
      description:
        "I set up and look after your website hosting, business emails, security certificates and servers, so your online business stays safe and up.",
    },
    {
      title: "Social Media Management",
      description:
        "I manage your social media presence: content creation, scheduling, engagement and growth. I help co-operatives, farms and businesses show up online consistently and professionally.",
    },
  ],

  projects: [
    {
      title: "Solidarity Online Boda Co-op",
      tagline: "A full system and phone app for a boda boda co-operative.",
      problem:
        "The co-operative did everything by hand: member records, loans, accounts and reports. The leaders could not see how the business was doing. Members could not check their own accounts without going to the office.",
      built: [
        "A web system for the leaders: members, loans, accounting, reports and live dashboards.",
        "An Android app for members, now on the Google Play Store.",
        "Social media management to keep members and the public engaged online.",
      ],
      results: [
        "Up to 5,000 people use it every month.",
        "Up to 1,000 people open it on a single day.",
      ],
      technologies: ["Flutter", "Python", "Odoo", "PostgreSQL", "Android"],
      links: [] as { type: string; href: string }[],
    },
    {
      title: "TopWaatch",
      tagline: "A streaming platform that competes with the big names.",
      problem:
        "Streaming is a crowded space dominated by big companies. A new platform must play videos smoothly and make it easy to find something to watch.",
      built: [
        "Everything from the ground up: video streaming, content management, search and discovery, and playback that works on phones, tablets and computers.",
      ],
      results: ["More than 1,000 people watch every month."],
      technologies: ["Next.js", "Node.js", "Python", "Flutter"],
      links: [{ type: "Website", href: "https://topwaatch.vercel.app" }],
    },
    {
      title: "nPanel by Nisc Cloud",
      tagline:
        "One dashboard where businesses manage their emails, websites and hosting.",
      problem:
        "Managing company email, WordPress sites and hosting usually needs a technical person. Small businesses get stuck.",
      built: [
        "A self-service platform where customers sign up, pay, and manage their emails, websites and hosting on their own. Handles security certificates and domain settings automatically, and sends KRA eTIMS invoices.",
      ],
      results: ["More than 1,000 people use it every month."],
      technologies: ["Node.js", "React", "Plesk API", "KRA eTIMS", "M-Pesa"],
      links: [{ type: "Website", href: "https://nisccloud.com" }],
    },
    {
      title: "PIRKenya",
      tagline: "A donor and project system for a humanitarian organisation.",
      problem:
        "The organisation helps young people across East Africa. Its founders are based overseas. Tracking donors, campaigns and projects by hand was slowing them down.",
      built: [
        "A custom system that tracks donors, donations, fundraising campaigns, grants and projects, with dashboards that show the impact of their work.",
      ],
      results: [
        "They now run their work from one place and report to supporters using live dashboards.",
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      links: [{ type: "Website", href: "https://pirkenya.org" }],
    },
    {
      title: "Candellie Limited",
      tagline: "Full digital setup for a growing agricultural business.",
      problem:
        "Candellie was a new agricultural business. It had big plans but no brand, no website, no system to run operations, and no social media presence.",
      built: [
        "A custom farm management system that tracks crops, stock, workers and finances.",
        "Their website and full brand identity.",
        "Social media management to build their audience and attract clients.",
      ],
      results: [
        "The business runs its daily operations on the system.",
        "A professional online presence that matches the ambition of the business.",
      ],
      technologies: ["Python", "Odoo", "Next.js"],
      links: [{ type: "Website", href: "https://candellie.co.ke" }],
    },
  ],

  howIWork: [
    {
      step: 1,
      title: "We talk.",
      description:
        "You tell me what is hard in your business. I ask questions and listen. No pitch. No jargon.",
    },
    {
      step: 2,
      title: "I plan.",
      description:
        "I tell you what I will build, how long it will take and what it will cost. Everything in writing. No surprises.",
    },
    {
      step: 3,
      title: "I build and show you.",
      description:
        "You see progress often, not only at the end. You can change things early, before they become expensive.",
    },
    {
      step: 4,
      title: "I launch and stay.",
      description:
        "I train your team on the system. After launch I am still here for fixes, improvements and anything that comes up.",
    },
  ],

  whyWorkWithMe: [
    {
      title: "I focus on your problem, not on fancy tech.",
      description: "I choose what works for you, not what is trendy.",
    },
    {
      title: "I have done this before.",
      description:
        "My work is live. Real users. Real businesses. Real results you can check.",
    },
    {
      title: "I've built across industries.",
      description:
        "Co-operatives, NGOs, streaming platforms, farms, real estate. Different sectors, same commitment to understanding your world before writing a line of code.",
    },
    {
      title: "I handle the whole job.",
      description:
        "Design, building, launch, training and support. You deal with one person, start to finish.",
    },
  ],

  faq: [
    {
      q: "How much does a project cost?",
      a: "It depends on the size. Tell me what you need and I will give you a clear price before we start.",
    },
    {
      q: "How long does it take?",
      a: "A simple website can take a few weeks. A full business system takes a few months. I give you a clear timeline in the plan.",
    },
    {
      q: "Do you work with small businesses?",
      a: "Yes. Many of my clients started small.",
    },
    {
      q: "Will I own what you build?",
      a: "Yes. After payment you own your system.",
    },
    {
      q: "Will you help after launch?",
      a: "Yes. I train your team and I am available if something goes wrong.",
    },
    {
      q: "Can you fix a system I already have?",
      a: "Often, yes. Send me the details and I will tell you honestly if it is worth fixing or better to rebuild.",
    },
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "fineyakwoyo@gmail.com",
    tel: "+254 705 980 545",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/finey-dev",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/finey-otieno/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/finey_otieno",
        icon: Icons.x,
        navbar: false,
      },
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/254705980545",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fineyakwoyo@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
};
