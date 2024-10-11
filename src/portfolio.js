/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shehzad",
  title: "Hi all, I'm Shehzad",
  subTitle: emoji(
    "A passionate Full Stack  Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AGuLG7dbUgLdOoUrARSyKtHESWDIL35b/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mshehzad123/",
  linkedin: "https://www.linkedin.com/feed/",
  gmail: "shehzadali.6714349@gmail.com ",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "OCI FULL STACK DEVELOPER TEAM WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "🥳 Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("💫 Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Massachusetts Institute of Technology",
      logo: require("./assets/images/mas.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Focused on developing innovative web and Android applications, utilizing cutting-edge technologies to solve real-world challenges. Conducted research in user experience design and mobile app development, contributing to a project that enhanced the functionality of mobile platforms.",
      descBullets: [
        "Designed and implemented responsive web applications using HTML, CSS, and JavaScript frameworks such as React and Angular.",
        "Developed and deployed Android applications, integrating RESTful APIs to enhance app functionality.",
        "Participated in user experience workshops to refine design skills and ensure applications met user needs effectively.",
        "Collaborated with peers on a team project to create a full-stack application, gaining hands-on experience in both front-end and back-end development."
      ]
    }
,    
{
  schoolName: "California Institute of Technology ",
  logo: require("./assets/images/cali.jpg"),
  subHeader: "Bachelor of Science in Computer Science",
  duration: "September 2013 - April 2017",
  desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  descBullets: [
  "Gained hands-on experience in developing secure web applications through project-based coursework.",
  "Collaborated with peers to implement agile methodologies in software development, enhancing project management skills.",
  "Conducted in-depth analyses of web security vulnerabilities, contributing to improved application security practices.",
  "Participated in coding competitions, honing problem-solving skills and fostering a competitive spirit among peers.",
  "Engaged with industry professionals through networking events and guest lectures, gaining insights into emerging technologies."
]

}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "NestAway",
      companylogo: require("./assets/images/nest.png"),
      date: "June 2018 – Present",
      desc: "Developing and maintaining scalable web applications to enhance the user experience for renters and property owners. Collaborating with cross-functional teams to deliver high-quality features and improvements while ensuring optimal performance and security.",
      descBullets: [
        "Implemented responsive design techniques to optimize web applications for various devices, resulting in a 30% increase in user engagement.",
        "Led a team to integrate new payment processing solutions, enhancing transaction security and reducing processing times by 20%.",
        "Conducted code reviews and mentored junior developers, fostering a culture of continuous improvement and knowledge sharing."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Contributed to the design and development of user-friendly web interfaces, focusing on improving user engagement and accessibility. Collaborated with UX/UI designers to implement interactive features and optimize performance across various browsers.",
      descBullets: [
        "Developed dynamic web pages using React and JavaScript, improving page load speed by 25%.",
        "Worked closely with the design team to implement A/B testing strategies, leading to a 15% increase in user retention.",
        "Participated in daily stand-ups and sprint planning sessions, enhancing team communication and project delivery timelines."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Assisted in the development of scalable applications, focusing on backend services and API integrations. Gained practical experience in software development methodologies and contributed to enhancing user functionalities.",
      descBullets: [
        "Collaborated with the engineering team to improve existing APIs, resulting in a 15% increase in response time and overall user satisfaction.",
        "Conducted unit testing and debugging to ensure software reliability, contributing to a smoother deployment process.",
        "Participated in team meetings and provided insights on feature development, gaining exposure to agile project management practices."
      ]
    }
  ]
  
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/iac.png"),
      projectName: "IAC University",
      projectDesc: "The Institute for Art and Culture (IAC) is a university in Pakistan focused on promoting creativity in art, design, and culture, providing students with diverse academic programs to nurture talent and innovation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nomirajpoot1.github.io/IAC-Website/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/stan.png"),
      projectName: "Stanford University",
      projectDesc: "Stanford University is a top-tier research institution in the U.S., known for innovation and academic excellence, particularly in technology and business, with strong ties to Silicon Valley.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nomirajpoot1.github.io/Standford-website/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
       
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1ChLT6oHK1NVP4Ty46WIAEsHM0AUVevGD/view?usp=sharing"
        },
      
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://docs.google.com/presentation/d/1vPeXzZUKFNqbrcIYZdzZx79_ryIFYoPDaec8B5mazOg/edit?usp=sharing",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3426714349",
  email_address: "shehzadali.6714349@gmail.com "
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
