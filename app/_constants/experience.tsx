export type Company = "Nagarro" | "Carelon" | "Inautix";

export type CompanyDetail = {
  name: string;
  longName: string;
  subDetail?: string;
  url: string;
  position: string;
  duration: string;
  logo: {
    dark: string;
  };
  roles?: JSX.Element[];
};

export const Experiences: {
  [key in Company]: CompanyDetail;
} = {
  Nagarro: {
    name: "Nagarro",
    longName: "Nagarro Enterprise Services Private Limited",
    subDetail: "Digital Consulting Solutions",
    url: "https://www.nagarro.com/en",
    position: "Associate Staff Engineer",
    duration: "Sep 2022 - Present",
    logo: {
      dark: "/public/worked_at_logos/Nagarro_Logo.svg",
    },
    roles: [
      <>
        Engineered a drag-and-drop API/FTP/Schema configuration interface that
        reduced integration setup time by 70% and eliminated the need for
        separate microservices, saving $150K annually in development costs.
      </>,
      <>
        Built a mobile-responsive Idea Portal that streamlined idea submission
        and approval processes, while featuring a ’Best Idea of the Quarter’
        program to reward and incentivize innovators.
      </>,
      <>
        Developed a real-time Asset Tracking Dashboard monitoring 50,000+ site
        assets using React, SignalR & Redux Toolkit, cutting theft incidents by
        35% and saving ~$200K in replacement costs through automated alerts.
      </>,
      <>
        Implemented an automated supplier billing system with five financial
        modules in bilingual (English & Portuguese), reducing processing time by
        80% and errors by 95%, improving vendor relationships and compliance
        with payment terms.
      </>,
    ],
  },
  Carelon: {
    name: "Carelon",
    longName: "Carelon Global Solutions India",
    subDetail: "American HealthCare Services",
    url: "https://www.carelon.com/",
    position: "Senior Software Developer",
    duration: "Dec 2019 - Sep 2022",
    logo: {
      dark: "/public/worked_at_logos/Carelon_Logo.svg",
    },
    roles: [
      <>
        Led the transition of Individual Renewals project from Deloitte to
        in-house development, reducing operational costs by 66.67% for Anthem
        while maintaining high system uptime.
      </>,
      <>
        Developed a COVID-response insurance portal using React that processed
        over 15,000 short-term plan renewals.
      </>,
      <>
        Built a member migration UI supporting both manual and bulk enrollment
        from legacy systems, ensuring high data integrity, significantly
        reducing migration time.
      </>,
      <>
        Generated critical renewal reports such as Missing Renewals, Overage
        Dependents, and Medicare Cancellation to support business
        decision-making and compliance tracking.
      </>,
    ],
  },
  Inautix: {
    name: "Bank Of NewYork Mellon",
    longName: "Bank OfNewYork Mellon Technologies",
    subDetail: "American Banking/Financial Services",
    url: "https://www.bnymellon.com/in/en.html",
    position: "Application Developer",
    duration: "Aug 2017 - Nov 2019",
    logo: {
      dark: "/public/worked_at_logos/BNYMellon_Logo.svg",
    },
    roles: [
      <>
        Automated multi-tabbed Excel report generation using XML and COBOL,
        reducing manual processing time and streamlining report delivery through
        scheduled jobs.
      </>,
      <>
        Developed an alert system for long-running jobs, improving system
        stability and mean time to resolution by enabling proactive monitoring
        and issue escalation.
      </>,
      <>
        Contributed to Greenfield Migration (Windows to GF server) for improved
        performance and disaster recovery across datacenters TPC & CNJ.
      </>,
    ],
  },
};

export const ExperiencesList = [
  Experiences.Nagarro,
  Experiences.Carelon,
  Experiences.Inautix,
];
