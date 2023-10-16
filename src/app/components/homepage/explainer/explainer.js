'use client'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";
import { i18nStrings } from "src/app/i18n/strings";
import Image from 'next/image'

export default function Explainer() {
    return(
        <motion.div
            className='explainer-section'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, delay: 1, opacity: { duration: 2 } }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
            }}
            >
            <Grid container spacing={3}>
                <Grid item sm={12} md={6} lg={6}>
                    <Image
                        alt="stylish circle"
                        width={650}
                        height={650}
                        src="/cercle.png" />
                </Grid>
                <Grid item sm={12} md={4} lg={4}> 
                <Stack spacing={2}>
                    <h2>{i18nStrings["fr"].homepage.explainer_title}</h2>
                    
                    <p>{i18nStrings["fr"].homepage.explainer_paragraph}</p>
                    <br/>
                    <br/>
                    <p className="bold">{i18nStrings["fr"].homepage.explainer_disclaimer}</p>
                </Stack>
                </Grid>
                <Grid item sm={0} md={2} lg={2}>
                </Grid>
            </Grid>
            </motion.div>
    )
}