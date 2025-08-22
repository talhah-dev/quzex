import React from 'react'
import LogoLoop from './Reactbit/LogoLoop/LogoLoop';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPython,
  SiZod,
  SiSass,
  SiPhp,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithub,
  SiClerk,
  SiCloudinary,
  SiGraphql,
  SiPrisma,
  SiJquery,
  SiVuedotjs,
  SiAngular,
  SiLaravel,
  SiSpring,
  SiKubernetes,
  SiJest,
  SiMocha,
  SiWebpack,
  SiBabel,
  SiFigma,
  SiSlack,
  SiTrello,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiThreedotjs
} from "react-icons/si";
import { BsAmazon } from 'react-icons/bs';

const InfiniteLogo = () => {
    const techLogos = [
        { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
        { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
        { node: <BsAmazon />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
        { node: <SiPython />, title: "Python", href: "https://www.python.org" },
        { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
        { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
        { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
        { node: <SiZod />, title: "Zod", href: "https://zod.dev" },
        { node: <SiSass />, title: "Sass", href: "https://sass-lang.com" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
        { node: <SiClerk />, title: "Clerk", href: "https://clerk.dev" },
        { node: <SiCloudinary />, title: "Cloudinary", href: "https://cloudinary.com" },
        { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
        { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
        { node: <SiJquery />, title: "jQuery", href: "https://jquery.com" },
        { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
        { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
        { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
        { node: <SiSpring />, title: "Spring Boot", href: "https://spring.io" },
        { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
        { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
        { node: <SiMocha />, title: "Mocha", href: "https://mochajs.org" },
        { node: <SiWebpack />, title: "Webpack", href: "https://webpack.js.org" },
        { node: <SiBabel />, title: "Babel", href: "https://babeljs.io" },
        { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
        { node: <SiSlack />, title: "Slack", href: "https://slack.com" },
        { node: <SiTrello />, title: "Trello", href: "https://trello.com" },
        { node: <SiPostman />, title: "Postman", href: "https://postman.com" },
        { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com" },
        { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    ];

return (
    <div className="">
        {/* First row */}
        <div style={{ height: '110px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
                logos={techLogos}
                className=''
                speed={80}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#fff"
                ariaLabel="Technology stack"
            />
        </div>

        {/* Second row */}
        <div style={{ height: '110px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
                logos={techLogos}
                className=''
                speed={80}
                direction="right"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#fff"
                ariaLabel="Technology stack"
            />
        </div>
    </div>
)
}

export default InfiniteLogo;