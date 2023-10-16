'use client'
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { useState, useEffect } from 'react';
export default function Navbar() {
    const [barVisible, setBarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(1);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setBarVisible(false); 
          } else { // if scroll up show the navbar
            setBarVisible(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      };
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);
    const pages = [
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "Produits",
            link: "/produits"
        },
        {
            name: "Documentation",
            link: "/documentation"
        },
        {
            name: "Tutoriels vidéo",
            link: "/tutoriels"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    return(
        <nav className='navbar-large'>
        <motion.div
            className='glass'
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                transition: { duration: 1 }
            }}
            initial="visible"
            animate={ barVisible ? "visible" : "hidden" }
            
        >
            <Grid container spacing={3}>
                <Grid item md={2} lg={2}>
                    <span/>
                </Grid>
                <Grid item md={1} lg={1}>
                    <Image 
                        alt="ACE Logo"
                        width={150}
                        height={150}
                        priority
                        style={{transform: "translateY(-8px)"}}
                        src="/logo.svg" />
                </Grid>
                <Grid item md={3} lg={3}>
                    <span />
                </Grid>
                <Grid item
                    md={5}
                    lg={5}>
                    {pages.map((page, index) => (
                        
                            <a className='nav-link bold' 
                                key={index}
                                href={page.link}
                                onClick={console.log("click")}>{page.name.toLocaleUpperCase()}</a>
                        
                    ))}
                </Grid>
                <Grid item md={1}>
                    <span/>
                </Grid>
            </Grid>
        </motion.div>
        </nav>
    )
}