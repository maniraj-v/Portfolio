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
        Built a common Single Page Application template with Azure MSAL
        authentication which can be used for Frontend React projects in IHS.
      </>,
      <>
        Developed web portal to configure and monitor integrations (data
        transmission) between source and destination systems using React and Ant
        Design.
      </>,
      <>
        Built mobile responsive Idea portal through which Ideas can be
        submitted, tracked & approved systematically using React, NextJS &
        TailwindCSS.
      </>,
      <>
        Developed Asset Tracking Real Time Dashboard to monitor the locations of
        Tower sites & batteries and highlight sites that have critical alarms
        and events using React, SignalR & Redux Toolkit.
      </>,
      <>
        Developed BOQ app consisting of 5 different financial modules which
        automated Supplier Billing in bilingual (English & Portuguese) using
        React, TypeScript, React Hook Form and Ant Design.
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
        Led transition of Individual Renewals project from Deloitte to Legato
        which reduces billing by 66.67% for the parent company Anthem.
      </>,
      <>
        Played a crucial role in developing UI using React for renewals for
        shortterm plans (Cost Effective plans offered by Anthem in US during
        COVID)
      </>,
      <>
        Developed UI for Member Migration for manually enrolling the members in
        ISG system using React, TypeScript & MaterialUI.
      </>,
      <>
        Generated various renewal reports like Missing Renewals, Overage
        Dependents, Medicare Cancellation.
      </>,
    ],
  },
  Inautix: {
    name: "Bank Of NewYork Mellon",
    longName: "Bank Of NewYork Mellon Technologies",
    subDetail: "American Banking/Financial Services",
    url: "https://www.bnymellon.com/in/en.html",
    position: "Application Developer",
    duration: "Aug 2017 - Nov 2019",
    logo: {
      dark: "/public/worked_at_logos/BNYMellon_Logo.svg",
    },
    roles: [
      <>
        Worked on Greenfield Migration (Windows server to GF server) to support
        two datacenters TPC & CNJ to meet disaster recovery and run applications
        faster in secure environment.
      </>,
      <>
        Led Journal Machine Project – Transfer of funds from Funding Account to
        Trading Account by tracking down journal trade activities and customer
        balance file.
      </>,
      <>
        Created alert mail for long running jobs in spool (&gt; 30 minutes
        ofaverage elapsed time).
      </>,
      <>
        Hired at 2017 through campus placement, Undergone Internship for two
        months. Shortly after, worked in Production Support team as trainee.
      </>,
    ],
  },
};

export const ExperiencesList = [
  Experiences.Nagarro,
  Experiences.Carelon,
  Experiences.Inautix,
];
