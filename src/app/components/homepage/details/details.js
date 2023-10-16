'use client'
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { i18nStrings } from "src/app/i18n/strings";
import DetailsCarousel from './carousel'

export default function Details() {
    return(
        <motion.div
            className='details-section'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, delay: 1, opacity: { duration: 2 } }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 }
            }}
            >
            <Grid container spacing={3}>
                <Grid item sm={12} md={5} lg={5}>
                    <h2>{i18nStrings["fr"].homepage.details1_title}</h2>
                    <br/>
                    <br/>
                    <p>{i18nStrings["fr"].homepage.details1_paragraph}</p>
                    <br/>
                    <br/>
                    <ul>
                        {i18nStrings["fr"].homepage.details1_list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <br/>
                    <br/>
                    <button><p>{i18nStrings["fr"].homepage.details_button}</p></button>
                </Grid>
                <Grid item sm={0} md={1} lg={1}> 
                </Grid>
                <Grid item sm={12} md={6} lg={6}> 
                    <DetailsCarousel/>
                </Grid>
            </Grid>
            <div className='triangle'></div>
            </motion.div>
    )
}