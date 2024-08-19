import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Finey Otieno Akwoyo",
  initials: "FOA",
  url: "https://finey-otieno.web.app/",
  location: "Nairobi / Mombasa - Kenya",
  locationLink: "https://www.google.com/maps/nairobi",
  description:
    "I am a dedicated and innovative software developer with a robust background in Electrical Engineering and Computer Science.",
  summary:
    "My journey in technology has been fueled by a passion for solving complex problems and delivering tailor-made solutions that drive business growth and efficiency. With hands-on experience in developing customized ERP systems, cross-platform applications, and integrating complex APIs, I bring a unique blend of technical prowess and creative problem-solving to every project I undertake. In the past, [I pursued a double degree in Bsc. Computer Science (University of the People)  and Bsc. Electrical & Electronics Engineering (Technical University of Mombasa)](/#education), My career is marked by a proven ability to lead and execute projects that not only meet but exceed client expectations. In every project, I aim to blend my technical expertise with a user-centered approach, ensuring that the solutions I create are not only powerful but also intuitive and user-friendly. I am always eager to take on new challenges, collaborate with like-minded professionals, and continue to learn and grow in the ever-evolving field of technology.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Payment gateways",
    "API Development",
    "MPESA - Daraja API",
    "Equity Bank API",
    "KCB Bank API",
    "Odoo",
    "Odoo Module Development",
    "Microsoft Dynamics",
    "Hansaworld Standard ERP",
    "Github",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "Data Analysis (Python)",
    "Power BI",
    "Flutter - Multiplatform",
    "Kotlin - Multiplatform",
    "Java",
    "Nest.js",
    "SQL",
    "Internet of Things",
    "AWS Cloud Practioner",
    "Google CLoud Platform",
    "Geolocation API's",
    "Graphic Designer (Logo)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fineyakwoyo@gmail.com",
    tel: "+254705980545",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/finey-dev",
        icon: Icons.github,

        navbar: true,
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

        navbar: true,
      },
      whatsapp: {
        name: "Whatsapp Number",
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

  work: [
    {
      company: "Cleeja Insurance Agency",
      href: "https://cleeja.co.ke",
      badges: [],
      location: "Nairobi - Kenya",
      title: "Freelance IT Consultant",
      logoUrl: "/cleeja.png",
      start: "May 2021",
      end: "April 2023",
      description:
        "Revolutionized Cleeja Insurance Agency's digital presence and internal operations. \nConceptualized, designed, and deployed core website as the primary client interface. \n Identified opportunities for digital transformation and efficiency improvements. \nAutomated processes, optimized workflows, and enhanced productivity. \n Provided training and ongoing support for effective solution utilization. \n Contributed to agency growth and competitiveness in a dynamic insurance market",
    },
    {
      company: "Pentacom Consultancy Limited",
      badges: [],
      href: "https://pentacom.co.ke/",
      location: "Machakos - Kenya",
      title: "Software Engineer",
      logoUrl: "/pentacom.png",
      start: "June 2023",
      end: "January 2024",
      description:
        "Spearheaded the development and implementation of a customized ERP system tailored to company needs during my internship at Pentacom Consultancy Limited. \n Collaborated closely with stakeholders to gather requirements, define project goals, and ensure alignment with organizational objectives \n Successfully delivered the custom ERP system, demonstrating technical proficiency, project management skills, and the ability to drive innovation",
    },
    {
      company: "SoftIQ Technologies",
      href: "https://www.softiqtechnologies.co.ke/",
      badges: [],
      location: "Nairobi Kenya",
      title: "IT Consultant",
      logoUrl: "/softiq.png",
      start: "May 2024",
      end: "Present",
      description:
        "Spearheaded the development and implementation of a WhatsApp marketing program at SoftIQ Technologies, leveraging innovative strategies to send 1500 marketing messages daily. This initiative significantly enhanced efficiency and revolutionized the company's approach to engaging potential leads and clients, establishing a new standard in sales and marketing effectiveness.  \n \nPlayed a pivotal role in the technological advancement of SoftIQ Technologies by single-handedly creating APIs that integrated MPESA and BANK APIs with Odoo. These APIs facilitated seamless financial transactions and data synchronization, optimizing operational workflows and enhancing overall business productivity. \nDesigned and implemented a biometrics attendance API at SoftIQ Technologies, tailored to seamlessly integrate with Odoo. This solution not only streamlined attendance management but also reinforced data accuracy and security, contributing to enhanced operational efficiency and client satisfaction. \n \n Provided comprehensive technical support to SoftIQ Technologies' clients, ensuring prompt resolution of issues and effective utilization of software solutions. This proactive approach not only fostered strong client relationships but also bolstered the company's reputation for delivering exceptional customer service and support. \nTook full responsibility for managing SoftIQ Technologies' servers and networks, ensuring their smooth operation and security. This role involved proactive monitoring, maintenance, and optimization of IT infrastructure, contributing to enhanced reliability, performance, and data integrity across the organization.",
    }
  ],
  education: [
    {
      school: "University of the People",
      href: "https://www.uopeople.edu/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/uop.png",
      start: "September 2021",
      end: "May 2024",
    },
    {
      school: "Technical University of Mombasa",
      href: "https://tum.ac.ke/",
      degree: "Bachelor's Degree of Electrical & Electronics Engineering (Bcs. Electrical & Electronics Enginnering)",
      logoUrl: "/tum.png",
      start: "2021",
      end: "Present",
    }
  ],
  projects: [
    {
      title: "streamease",
      href: "https://stream-ease.web.app/",
      dates: "Jan 2023 - Apr 2023",
      active: true,
      description:
        "A cross-platform music and movie streaming application that has successfully garnered 1298 Monthly Active Users currently. The application provides users with a seamless experience for streaming music and movies across different devices.",
      technologies: [
        "Flutter",
        "Python",
        "C++",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/finey-dev/streamease.git",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/music.png",
      video:
        "",
    },
    {
      title: "Chess",
      href: "https://github.com/finey-dev/Chess.git",
      dates: "June 2024",
      active: true,
      description:
        "An implementation of the classic Chess game, utilizing the MiniMax algorithm and alpha-beta pruning method to create an intelligent opponent that can challenge the user at various levels of difficulty.",
      technologies: [
        "Dart",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/finey-dev/Chess.git",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/finey-dev/Chess.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/icon.png",
      video: "",
    },
    {
      title: "Ai Buddy",
      href: "https://github.com/finey-dev?tab=repositories",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "An Android application that functions as an AI assistant. The app makes API calls to the Gemini Language Model (LLM) to provide users with conversational and assistance capabilities.",
      technologies: [
        "Kotlin",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/finey-dev?tab=repositories",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/finey-dev?tab=repositories",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "MPESA & EQUITY API",
      href: "https://github.com/finey-dev",
      dates: "May 2024",
      active: true,
      description:
        "A modular API designed to integrate MPESA and Equity Bank's services seamlessly with Odoo. This API allows businesses to handle mobile payments and banking transactions directly from their Odoo ERP system.",
      technologies: [
        "Python",
        "XML",
      ],
      links: [
        {
          type: "Website",
          href: "https://mpesa-nextjs-demo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mpesa.png",
      video: "",
    },
    {
      title: "Biometrics API",
      href: "https://github.com/finey-dev",
      dates: "June 2024",
      active: true,
      description:
        "A custom Odoo module created for SportsView Hotel in Kasarani to integrate with F18 biometric devices. This module pulls and sends data between the biometric devices and the Odoo system, enabling accurate and efficient attendance tracking for hotel staff. The API encountered errors when rendering the interface, which were addressed during the development process.",
      technologies: [
        "Python",
        "XML",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/finey-dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/f18.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
