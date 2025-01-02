import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 50,
    height: 50,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 50,
    height: 50,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 50,
    height: 50,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 50,
    height: 50,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 50,
    height: 50,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 50,
    height: 50,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 50,
    height: 50,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 50,
    height: 50,
  },
  {
    name: "MySql",
    Image: "/mysql.png",
    width: 50,
    height: 50,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 50,
    height: 50,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Texts = [
  { text: 'Thank you for exploring my site!' },
  { text: 'Your visit means a lot to me. Thank you!' },
  { text: 'I appreciate you taking the time to check out my website.' },
  { text: 'Thank you for dropping by and browsing around!' },
  { text: 'Your visit is greatly appreciated. Thank you!' },
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];
export const Projects = [

  {
    title: "School app,  NEXT JS full-stack app  with MONGODB and Prisma Integration,TypeScript, Pusher",
    text: `I've built a full-stack web page , real time chat, real time grades .\n
    <br/>
    <br/> 
    The app includes:\n
    <br/>

    \n- AUTHENTICATION: Admin can register new teachers and students, create classes and with drag - drop functionality add students to classes, teachers and students can update their profiles.
    \n- USER INTERCATION: Teacher can have more classes, teacher with students can have real time chat and real time evaluation .(using library Pusher)`,
    src: "/schoolapp.png",
    url:"https://school-app-opal.vercel.app/",
    github:"https://github.com/aleskruba/next-register-login.git"
  },
  {
    title: "Spanish teacher  & touristic guide - NEXT JS full-stack app  with MONGODB and Prisma Integration,TypeScript",
    text: `I've built a full-stack webpage for my Colombian friend.\n
    <br/>
  
    The app includes:\n
    <br/>

    \n- AUTHENTICATION: Users can log in using Google or register via a form. Forgotten password function using tokens with expiration dates.
    \n- USER INTERCATION: Once logged in, users have the capability to send messages directly to the admin for inquiries or other communication needs.
    \n- ADMIN CONTROL: Admins possess the ability to view, delete, and update user messages and comments. Furthermore, admins can designate users as 'active,' granting them permission to write reviews.`,
      src: "/juan.png",
    url:"https://juan-pablo.vercel.app/",
    github:"https://github.com/aleskruba/juan-pablo.git"
  },
  {
    title: "Spanish teacher  & Raact JS",
    text: `I've built a static webpage  for my Colombian friend
    <br/>
  
    The app includes:
    <br/>
    <br/>
    It is a simple responsive static webpage using context for changing themes and some animation effect using library framer-motion 
  

    `,
      src: "/dani.png",
    url:"https://daniela-4a16.onrender.com/",
    github:"https://github.com/aleskruba/daniela.git"
  },
  {
    title: "Newspaper articles - NEXT JS,TypeScript",
    text: ` In Next JS I created a webpage that displays articles from different newspapers. 
    <br/>
    <br/> 
    On the server side, I fetched data from multiple newspaper pages using a library 'Cheerio' to collect these articles. Then, on the client side, I retrieved this data from the server and organized it visually. I utilized a library 'Headless UI' to create a user-friendly dropdown menu. There is responsive web design using 'Tailwind's for the webpage`,
    src: "/articles.png",
    url:"https://newspapers-next.vercel.app/",
    github:"https://github.com/aleskruba/newspapers-next.git"
  },
  {
    title: "useReducer & useContext & Typescript - NEXT JS",
    text: `In Next JS I created a frontend app using useReducer and useContext hook, allowing for Create, Read, Update, and Delete (CRUD) functionalities. 
    <br/>
   <br/> 
   Additionally, I implemented an E-shop interface where users can perform actions like adding or removing products from their basket. When an order is submitted, it's added to an array, which is then displayed on the page through mapping. Simultaneously,  number of items updated on the stock are displayed on the page. There is responsive web design using 'Tailwind's for the webpage  `,
    src: "/usereducer.png",
    url:"https://usereducer-typescript-simulator.vercel.app/",
    github:"https://github.com/aleskruba/usereducer-typescript-simulator.git"
  },
   {
    title: "E-SHOP - PHP ,MY-SQL, javascript   ",
    text: `I develepoed a simple eshop app,This project was one of my first full-stack projects in PHP, using MY-SQL database and javascript  
   <br/>
   <br/>
    It includes the following features:
    <br/>
    <br/>
    Full authentication function including uploaded photo using cloudinary storage .
    <br/> Logged in users can buy products and write revies .
    <br/>Ability for users to see List of orders.
    <br/>Admin page , Admin can add and mage products .
  `,
    src: "/dokram.png",
    url:"https://comments.dokram.cz",
    github:"https://github.com/aleskruba/php-eshop.git"
  }, 
  
  {
    title: "LENGUA APP  - REACT JS ,EXPRESS, MONGO DB, WEB SOCKET",
    text: `This project was one of my first full-stack projects in React JS, utilizing an Express server, MongoDB, and partly a WebSocket server. \n
    I tried to develop a language learning platform app similar to the webpage Italki.com.
    \n
    <br/>
    <br/>
    \nIt includes the following features:

    \n-Full authentication functionality.
    \n- Capability for teachers to manage their teaching time slots.
    \n- Ability for students to book available lessons.
    \n- Option for students to purchase credits using Stripe.
    \n- And more.
    <b style="color: red;"> MY APP ON RENDER.COM'S FREE TIER SLEEPS WHEN INACTIVE. I MUST REDEPLOY TO WAKE IT.</b>
    `,
    
    src: "/lenguaNew.png",
    url:"https://lenguaapp2client.onrender.com/",
    github:"https://github.com/aleskruba/LenguaApp2Client"
  },
  {
    title: "LENGUA APP  - NODE JS ,EXPRESS, MONGO DB, WEB SOCKET",
    text: `This project was one of my first full-stack projects in NODE JS, utilizing an Express server, MongoDB \n
    I tried to develop a language learning platform app similar to the webpage Italki.com.
    \n<br>
    <br>
      \nIt includes the following features:
      <br>
    
    \n-Full authentication functionality.
    \n- Capability for teachers to manage their teaching time slots.
    \n- Ability for students to book available lessons.
    \n- Option for students to purchase credits 
    \n- And more.
 
    <b style="color: red;"> MY APP ON RENDER.COM'S FREE TIER SLEEPS WHEN INACTIVE. I MUST REDEPLOY TO WAKE IT.</b>
    `,
    src: "/lengua1.png",
    url:"https://lengua-app.onrender.com",
    github:"https://github.com/aleskruba/LENGUA-APP.git"
  },
  {
    title: "German test in Rest JS",
    text: ` <br><br> Eesy german test - my beginnings with React JS

    `,
    src: "/german.png",
    url:"https://peaceful-bublanina-16dac5.netlify.app",
    github:"https://github.com/aleskruba/react_deploy_netlify.git"
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
    alt:"home page"
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
    alt:"my skills"
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
    alt:"my projects"
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
    alt: "contact me"
  },
];