'use client'
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import Image from 'next/image'
export default function Navbar() {

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
        <nav className="navbar-large glass">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, opacity: { duration: 1 } }}
        >
            <Grid container spacing={3}>
                <Grid item md={2} lg={2}>
                    <span/>
                </Grid>
                <Grid item md={1} lg={1}>
                    <Image 
                        alt="ACE Logo"
                        width={92}
                        height={52}
                        priority
                        style={{transform: "translateY(-8px)"}}
                        src="/logo.svg" />
                </Grid>
                <Grid item md={3} lg={3}>
                    <Image 
                        alt="QC Logo"
                        width={48}
                        height={32}
                        priority
                        style={{transform: "translateY(-13px)"}}
                        src="/logo_qc.svg" />
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