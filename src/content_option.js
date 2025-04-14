const logotext = "Prateek";
import OIPImage from "./assets/images/OIP.jpeg";
const meta = {
    title: "Prateek Singh",
    description: "I’m Prateek Singh, a passionate frontend developer.",
};

const introdata = {
    title: "I’m Prateek Singh",
    animated: {
        first: "I love coding",
        second: "I build cool websites",
    },
    description: "A frontend developer passionate about creating stunning web experiences.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", // You can replace it with your own image URL
};

const dataabout = {
    title: "a bit about myself",
    aboutme: "I’m a frontend developer skilled in creating dynamic and responsive websites. With strong foundations in HTML, CSS, JavaScript, and React, I love bringing ideas to life on the web.",
};

const worktimeline = [
    {
        jobtitle: "Open Source Contributor",
        where: "GitHub",
        date: "2024",
    },
    {
        jobtitle: "Web Developer (Freelance)",
        where: "Remote",
        date: "2024",
    },
];

const skills = [
    {
        name: "HTML",
        value: 100,
    },
    {
        name: "CSS",
        value: 100,
    },
    {
        name: "JavaScript",
        value: 90,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "GSAP",
        value: 95,
    },
    {
        name: "Figma",
        value: 95,
    },
];

const services = [
    {
        title: "Frontend Development",
        description: "Creating responsive, modern, and user-friendly web interfaces using the latest frontend technologies.",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and visually appealing user experiences using design tools and user-centered thinking.",
    },
    {
        title: "Web Animations",
        description: "Enhancing user engagement through creative animations using GSAP, CSS, and JavaScript.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Portfolio Project 1 - Responsive portfolio using React.",
        link: "https://github.com/CYBERGURU9920",
    },
    {
        img: OIPImage,
        description: "Portfolio Project 2 - Interactive landing page with animations.",
        link: "https://boolean-devs-reimagine-round2.vercel.app/",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Portfolio Project 3 - Full-page scroll website with GSAP.",
        link: "https://github.com/CYBERGURU9920",
    },
];
const contactConfig = {
    YOUR_EMAIL: "prateeksingh7652000017@gmail.com",
    YOUR_FONE: "+91-8960443804",
    description: "Let’s work together or just say hi. I’m always open to discussing new projects or opportunities.",
};

const socialprofils = {
    github: "https://github.com/CYBERGURU9920",
    linkedin: "https://www.linkedin.com/in/prateek-singh-p30112003/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
