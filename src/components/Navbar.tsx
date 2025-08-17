import React from 'react'
import CardNav from './Reactbit/CardNav/CardNav';

const Navbar = () => {
    const items = [
        {
            label: "About",
            bgColor: "#262626",
            textColor: "#fff",
            links: [
                { label: "Company", ariaLabel: "About Company", href: "/about/company" },
                { label: "Careers", ariaLabel: "About Careers", href: "/about/careers" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#262626",
            textColor: "#fff",
            links: [
                { label: "Featured", ariaLabel: "Featured Projects", href: "/projects/featured" },
                { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/projects/case-studies" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#262626",
            textColor: "#fff",
            links: [
                { label: "Email", ariaLabel: "Email us", href: "mailto:hello@company.com" },
                { label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com/company" },
                { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com/company/company" }
            ]
        }
    ];

    return (
        <div>
            <CardNav
                logo={"/quzex.png"}
                logoAlt="quzex"
                items={items}
                baseColor="#fff"
                className=''
                menuColor="#fff"
                ease="power3.out"
            />
        </div>
    )
}

export default Navbar