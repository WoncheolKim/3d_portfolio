import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    python,
    sailor,
    officeworker,
    engineer,
    nwitter,
    portfolio,
    threejs,
    streamier,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Chemical Engineer",
      icon: mobile,
    },
    {
      title: "Navigator",
      icon: backend,
    },
    {
      title: "Science teacher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Production Engineer",
      company_name: "Wacker Chemical Corporation",
      icon: engineer,
      iconBg: "#E6DEDD",
      date: "Nov 2011 - Dec 2012",
      points: [
        "Managed production schedules, check raw material inventory status and take charge of ordering.",
        "Participated in the plant double expansion project, checked the progress of the project according to the schedule and prepared safety management documents.",
        "Optimized the schedule of the facility expansion project resulting in a reduction of construction time by five days.",
      ],
    },
    {
      title: "Production Engineer",
      company_name: "LOTTE chemical",
      icon: engineer,
      iconBg: "#E6DEDD",
      date: "Apr 2015 - Sep 2015",
      points: [
        "Managed raw material scheduling during acquisition and storage facilities of raw materials.",
        "Operated a forklift to move material through the facility.",
        "Managed product production schedule.",
      ],
    },
    {
      title: "Navigator 3rd officer",
      company_name: "Chokwang Shipping Co., Ltd.",
      icon: sailor,
      iconBg: "#E6DEDD",
      date: "Oct 2016 - Jan 2018",
      points: [
        "Operated ship navigation system and maintained shipboard equipment during sailing.",
        "Oversaw the vessel's fire and safety plans and safety equipment, including safety drills.",
        "Monitored condition of sailing equipment and chemical cargo.",
      ],
    },
    {
      title: "Science Teacher",
      company_name: "Ulsan Joongang Middle School",
      icon: officeworker,
      iconBg: "#E6DEDD",
      date: "Oct 2017 - Feb 2019",
      points: [
        "Established and communicated clear objectives for all educational activities.",
        "Instructed, tutored, and mentored individual students.",
        "Encouraged learning through diverse strategies",
      ],
    },
    {
      title: "Government Employee",
      company_name: "Ulsan Nam-gu Office",
      icon: officeworker,
      iconBg: "#E6DEDD",
      date: "May 2020 - Dec 2020",
      points: [
        "Assisted district city officials with day to day tasks of the community office, COVID-19 related work.",
        "Participated in wellness checks and cleanup for residents affected by natural disaster.",
        "Researched COVID-19 relief fund eligibility for district residents",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D portfolio",
      description:
        "Developed a 3D web portfolio using React.js and Three.js to showcase both my experience and personal projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/WoncheolKim/3d_portfolio",
    },
    {
      name: "Nwitter",
      description:
        "Key features include real-time tweets, photo uploads, profile updates and authentication using Google/Github credentials, as well as the use of NoSQL.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "google firebase",
          color: "pink-text-gradient",
        },
      ],
      image: nwitter,
      source_code_link: "https://woncheolkim.github.io/nwitter/",
    },
    {
      name: "Streamiere",
      description:
        "An app that functions as an IMDB clone that takes in the TMDB API and renders information of the latest movies with descriptions, images and trailers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Authentication",
          color: "pink-text-gradient",
        },
      ],
      image: streamier,
      source_code_link: "https://github.com/WoncheolKim/Streamiere",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  