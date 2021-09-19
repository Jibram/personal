import mePicture from "../images/me.jpg";
import gmailLogo from "../images/gmail.png";
import linkedinLogo from "../images/linkedIn.png";
import githubLogo from "../images/github.png";
import ancestryLogo from "../images/ancestry.png";
import googleLogo from "../images/google.png";
import ucmcvlLogo from "../images/ucmcvl.png";
import palsLogo from "../images/pals.png";
import ucmLogo from "../images/ucmerced.png";
import yonseiLogo from "../images/yonsei.png";

var content = {
  ME: {
    PHOTO: mePicture,
    FIRSTNAME: "Jibram ",
    LASTNAME: "Jimenez-Loza",
  },
  ABOUT:
    "I'm a software engineer located in San Francisco, CA that has worked in a variety of different concentrations within software engineering, notably professional front end web development.",
  CONTACT: [
    {
      SRC: gmailLogo,
      ALT: "cajibram@gmail.com",
      HREF: "mailto:cajibram@gmail.com",
    },
    {
      SRC: linkedinLogo,
      ALT: "LinkedIn",
      HREF: "https://www.linkedin.com/in/Jibram",
    },
    {
      SRC: githubLogo,
      ALT: "GitHub",
      HREF: "https://www.github.com/Jibram",
    },
  ],
  EXPERIENCES: [
    {
      LOGO: googleLogo,
      COMPANY: "Google",
      LINK: "https://www.google.com/",
      ROLE: "Software Engineer",
      LOCATION: "Mountain View, CA",
      START: "10/2021",
      END: "Present",
      INFO: [],
    },
    {
      LOGO: ancestryLogo,
      COMPANY: "Ancestry",
      LINK: "http://ancestry.com/",
      ROLE: "Associate Software Engineer",
      LOCATION: "San Francisco, CA",
      START: "01/2020",
      END: "10/2021",
      INFO: [
        "Engineered modern single page e-commerce applications with Javascript, React, and NodeJS.",
        "Produced upticks in conversion rate with user-enabling features right from the checkout flow.",
        "Established a new stack for an internal tool, lowering 3rd-party expenditures by the company.",
        "Continuously improved and deployed safer and more efficient code for the Commerce Front-End team",
        "Promoted to Software Engineer in October 2021",
      ],
    },
    {
      LOGO: ancestryLogo,
      COMPANY: "Ancestry",
      LINK: "http://ancestry.com/",
      ROLE: "Software Developer Intern",
      LOCATION: "San Francisco, CA",
      START: "05/2019",
      END: "08/2019",
      INFO: [
        "Developed on the Commerce Front-End team using Javascript, React, Redux, and Flow.",
        "Assisted Commerce team in developing, testing, and debugging checkout platform for Ancestry products.",
        "Communicated effectively with product managers through Agile for iterative and incremental development.",
        "Reduced size and page load time by over 30% by replacing dependencies with lightweight components.",
      ],
    },
    {
      LOGO: ucmcvlLogo,
      COMPANY: "Computer Vision Lab at UCMerced",
      LINK: "http://vision.ucmerced.edu/",
      ROLE: "Undergraduate Researcher",
      LOCATION: "Merced, CA",
      START: "02/2019",
      END: "05/2019",
      INFO: [
        "Conducted research for tracking bird species by mapping audio files into spectrogram images using Python.",
        "Investigated differences between feature extraction techniques to CNN pre-classification feature vectors.",
      ],
    },
    {
      LOGO: palsLogo,
      COMPANY: "Bright Success Center at UCMerced",
      LINK: "https://learning.ucmerced.edu/programs/tutoring",
      ROLE: "Peer Assistant for Math and Computer Science",
      LOCATION: "Merced, CA",
      START: "02/2017",
      END: "05/2019",
      INFO: [
        "Tutored university level students math, object-oriented programming, data structures, and algorithms.",
        "Helped over 50 students every semester with noticeable increase in grades after attending my sessions.",
      ],
    },
  ],
  SCHOOLS: [
    {
      LOGO: ucmLogo,
      NAME: "University of California, Merced",
      DEGREE: "Bachelor of Science, Computer Science and Engineering",
      EXTRA: "Graduated with honors (3.6 GPA)",
      START: "08/2016",
      END: "12/2019",
      CLASSES: [
        "Algorithm Analysis",
        "Computer Networks",
        "Object-Oriented Programming",
        "Topics in Computer Networks and Distributed Systems",
      ],
    },
    {
      LOGO: yonseiLogo,
      NAME: "Yonsei University, Seoul",
      DEGREE: "Study Abroad - 1 Year",
      START: "08/2017",
      END: "06/2018",
      CLASSES: [
        "Artificial Intelligence",
        "Computer Vision",
        "Data Structures",
        "Theory of Computation",
      ],
    },
  ],
  SKILLS: {
    LANGUAGES: ["Javascript", "Python", "C++", "Java", "Matlab"],
    TECHNOLOGIES: ["React.js", "Redux.js", "Flow.js", "Node.js", "OpenCV"],
    MISC: ["English", "Spanish", "Korean"],
  },
  AWARDS: [],
};

export default content;
