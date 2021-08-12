/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Recorded Cyber | Safe Me",
  description: "EveryOne Has the Right to Free of CyberSecurity Fear.",
  og: {
    title: "Recorded Cyber | Safe Me ",
    type: "website",
    url: "https://github.com/Rajkumar-kumawat",
  },
};

//Home Page
const greeting = {
  title: "Recorded Cyber",
  logo_name: "RecordedCyber",
  nickname: "",
  subTitle: "EveryOne Has the Right to  Free of CyberSecurity Fear.",
  resumeLink:
    "https://docs.google.com/forms/d/e/1FAIpQLSc9fZaOanqTB4hq0ewbK7WD8mhGT4xCpdMr_JkWfygEjVskjQ/viewform",
  portfolio_repository: "https://github.com/Rajkumar-kumawat",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Rajkumar-kumawat",
  // linkedin: "https://www.linkedin.com/in/rajkumar-kumawat-66072b199/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Rajkumar-kumawat",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajkumar-kumawat-66072b199/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.linkedin.com/in/rajkumar-kumawat-66072b199/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:Rajkumarkumawat.workup@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Rjkumar_kumawat",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.linkedin.com/in/rajkumar-kumawat-66072b199/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rjkumar0205/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "VAPT Services",
      fileName: "VaptImg",
      skills: [
        "⚡ Identify, Quantify and Prioritizing Security Vulnerabilities in Your Environment.Unauthorized access to company resources using existing vulnerabilities is a serious security concern ",
        "⚡ Vulnerability Assessment and Penetration Testing (VAPT) describes a broad range of security assessment services designed to identify and help address cyber security exposures across an organisation’s IT estate.",
        "⚡ To ensure that you choose the right type of assessment for your company’s needs, it’s important to understand the various types of VAPT services and the differences between them. The diverse nature of VAPT assessments means that they can vary significantly in depth, breadth, scope.",
      ],
      softwareSkills: [
        {
          skillName: "codechef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hackerrank",
          fontAwesomeClassname: "simple-icons:hackerrank",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "codeforcesh",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "HackerEarth",
          fontAwesomeClassname: "simple-icons:hackerearth",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Network Testing ",
      fileName: "NetworkImg",
      skills: [
        "⚡ Penetration testing, or pen testing for short, is a multi-layered security assessment that uses a combination of machine and human-led techniques to identify and exploit vulnerabilities in infrastructure, systems and applications.",
        "⚡ Types of penetration testing",

        "👉 Internal/external infrastructure testing",
        "👉 Web application testing",
        "👉 Wireless network testing",
        "👉 Mobile application testing",
        "👉 Build and configuration review testing",
        "👉 Social engineering testing",
      ],
      softwareSkills: [
        {
          skillName: "codechef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hackerrank",
          fontAwesomeClassname: "simple-icons:hackerrank",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "codeforcesh",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "HackerEarth",
          fontAwesomeClassname: "simple-icons:hackerearth",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Web app Pentesting",
      fileName: "WebImg",
      skills: [
        "⚡ Web Application Penetration Testing is done by simulating unauthorized attacks internally or externally to gain access to sensitive data.",
        "⚡ Web penetration helps end-users find out the possibility for a hacker to access data from the internet, find out the security of their email servers and also get to know how secure the web hosting site and server are. ",
        "⚡Some of the Security Testing Methodologies and standards are –",

        "👉 OWASP (Open Web Application Security Project)",
        "👉 OSSTMM (Open Source Security Testing Methodology Manual)",
        "👉 PTF (Penetration Testing Framework)",
        "👉 ISSAF (Information Systems Security Assessment Framework)",
        "👉 PCI DSS (Payment Card Industry Data Security Standard)",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "codechef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hackerrank",
          fontAwesomeClassname: "simple-icons:hackerrank",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "codeforcesh",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "HackerEarth",
          fontAwesomeClassname: "simple-icons:hackerearth",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cyber Crime Investigation",
      fileName: "CyberImg",
      skills: [
        "⚡ Overview of cybercrime investigation ",
        "⚡ Detection methods for cyber crime cases",
        "⚡ Cyber crime case investigation procedures ",
        "⚡ Collection and extraction of electronic evidence",
        "⚡ Construction of cybercrime investigation and evidence collection model",
        "🤝Acknowledgments",
      ],

      softwareSkills: [
        {
          skillName: "codechef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hackerrank",
          fontAwesomeClassname: "simple-icons:hackerrank",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "codeforcesh",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "HackerEarth",
          fontAwesomeClassname: "simple-icons:hackerearth",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Website Development",
      fileName: "WebsiteImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Custom tool Development",
      fileName: "Custom",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Webinar/ Seminar",
      fileName: "Webinar",
      skills: [
        "⚡ Cyberattack and defense (essentially how to think like a hacker/counter attacks, but with more emphasis on capture the flag (CTF) scenarios)",
        "⚡ Strategies and technologies to bolster active directory security",
        "⚡ How to secure privileged credentials",
        "⚡ How to effectively perform IT administration in a least privilege model",
        "⚡ How to secure vendor and remote worker access",
      ],
      softwareSkills: [
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:meeting",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "#",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rajkumar Kumawat ",
      subtitle: "Network  Engineering",
      logo_path: "rajkumar.png",
      alt_name: "IIITDM Kurnool",
      duration: "CEO ",
      descriptions: [
        "⚡CYBER SECURITY ANALYSIS || PENETRATION TESTER || WORK ON $$HACKERONE$$ || 🚨 @Cyber4All Community Member.🛅 ",
        "⚡ Computer Networking Skills || Computer Skills || Linux Skills || Programming Skills || Reverse Engineering || Cryptography Skills || Database Skills|| Problem-solving Skills. ",
      ],
      website_link:
        "https://drive.google.com/file/d/1yDLoDmhIqbr1-t5GYlKfI8xzXs6y1wUg/view?usp=sharing",
    },
    {
      title: "Rajkumar Kumawat ",
      subtitle: "Network  Engineering",
      logo_path: "rajkumar.png",
      alt_name: "IIITDM Kurnool",
      duration: "CEO ",
      descriptions: [
        "⚡CYBER SECURITY ANALYSIS || PENETRATION TESTER || WORK ON $$HACKERONE$$ || 🚨 @Cyber4All Community Member.🛅 ",
        "⚡ Computer Networking Skills || Computer Skills || Linux Skills || Programming Skills || Reverse Engineering || Cryptography Skills || Database Skills|| Problem-solving Skills. ",
      ],
      website_link:
        "https://drive.google.com/file/d/1yDLoDmhIqbr1-t5GYlKfI8xzXs6y1wUg/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Offensive Security Certified Professional",
      subtitle: "Cyber Security",
      logo_path: "oscp.png",
      certificate_link: "#",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Global Information Assurance Certification",
      subtitle: "Information Security ",
      logo_path: "giac.jpg",
      certificate_link: "#",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Information Systems Auditor ",
      subtitle: "Systems Audit ",
      logo_path: "cisa.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Information Security Manager",
      subtitle: "Information security",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Comptia Security+",
      subtitle: "Cyber",
      logo_path: "comptia.png",
      certificate_link: "#",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Penetration Testing Engineer",
      subtitle: "Cyber",
      logo_path: "cpte.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Professional Technical Communicator",
      subtitle: "Communicator",
      logo_path: "cptc.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Ethical Hacker",
      subtitle: "Hacker",
      logo_path: "ceh.png",
      certificate_link: "#",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link: "#",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Certified Information Systems Security Professional ",
      subtitle: "Information Systems",
      logo_path: "cyber.png",
      certificate_link: "#",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, and Volunteership",
  description:
    "  We are a team of certified and reputed professionals who implement the best strategies of cyber security for your business model and budget. Our services are provided on an ad hoc or permanent basis.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: " Website Securing ",
          company: "St Stephen's College, New Delhi",
          company_url: "https://legatohealthtech.com/",
          logo_path: "st.jpg",
          duration: "",
          location: "",
          description:
            "A website vulnerability scanner is an automated software designed to search for security vulnerabilities in a website. It scans for web vulnerabilities within web services, web servers, proxy servers, or web application servers.",
          color: "#0879bf",
        },
        {
          title: "Website Securing",
          company: "Jain University - [JU] , Bangalore",
          company_url: "https://www.jainuniversity.ac.in/",
          logo_path: "jain.png",
          duration: "",
          location: "",
          description:
            "A website vulnerability scanner is an automated software designed to search for security vulnerabilities in a website. It scans for web vulnerabilities within web services, web servers, proxy servers, or web application servers..",
          color: "#9b1578",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "our  projects makes use of vast variety of latest technology tools. Our  best experience is to create Securing World  projects and deploy world-wide.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact US",
    profile_image_path: "logo.png",
    description:
      "Our Team  Recorded Cyber®️( Leading IT Security Services & Training Providing Organization ) is offering a wide range of Information Security Services & Training  in  Free for Secure the world.. please encourages us.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, we  like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://cyberkillerhere.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: " Dist.-jaipur, Rajsthan , INDIA - 303338",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9785238446",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
