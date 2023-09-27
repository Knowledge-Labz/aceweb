'use client'
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { i18nStrings } from "src/app/i18n/strings";

export default function Hero() {
    return(
            <motion.div
            className='hero-text'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 90, delay: 1.5, opacity: { duration: 2 } }}
            //style={{ textAlign: "center" }}
            >
            <Grid container spacing={3}>
                <Grid item md={12} lg={12}>
                <h1>{i18nStrings["fr"].homepage.title}</h1>  
                </Grid>
                <Grid item md={12} lg={12}>
                    <h2>{i18nStrings["fr"].homepage.subtitle}</h2>    
                </Grid>
                <Grid item md={12} lg={12}>
                    <button>
                        {i18nStrings["fr"].homepage.button}
                    </button>
                </Grid>
            </Grid>
            </motion.div>
    )
}