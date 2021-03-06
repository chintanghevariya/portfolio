// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Chintan",
  middleName: "",
  lastName: "Ghevariya",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/chintanghevariya",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ghevariyachintan",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/chintan.ghevariya/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chintankumar-ghevariya-54a233139/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com//",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/MyProfile.png"),
  imageSize: 375,
  message:
    "My name is Chintan Ghevariya. I’m a graduate of 2022 from George Brown College at Toronto with a degree in Advanced Diploma as a Computer programming and analyst. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1z26e3x11pfg3aJJ_H3GLbDdFwE1WOV3s/view?usp=sharing",
  cover_letter: "https://drive.google.com/file/d/1063bHn_YTATU4hk6P0vl-HDg_RL60vK1/view?usp=sharing" ,
  academic_credentials : "https://drive.google.com/file/d/1EBkGleuCBYelzsw_YfM1qz5gOY4iG2mb/view?usp=sharing",
  capstone_project : "https://drive.google.com/file/d/19SeufpW3sTzI9o7DBMlvjGrsPoQDOTzi/view?usp=sharing"
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "chintanghevariya", 
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/MyProfile.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/MyProfile.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ghevariyachintan123@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Web Developer Intern',
      companylogo: require('../assets/img/logo-blue.png'),
      date: 'May 2017 – Aug 2017',
    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/logo-blue.png'),
      date: 'Sept 2017 – Jan 2019',
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
