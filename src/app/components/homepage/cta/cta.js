'use client'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { motion } from "framer-motion";
import { i18nStrings } from "src/app/i18n/strings";

export default function Cta() {
    return(
        <motion.div
            className='cta-section'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, delay: 1, opacity: { duration: 2 } }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            >
            <Grid container spacing={3}>
                <Grid item sm={12} md={12} lg={12} className='cta-center'>
                    <h2>{i18nStrings["fr"].homepage.cta_title}</h2>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={0} md={2.4} lg={2.4}>
                    </Grid>
                    {i18nStrings["fr"].homepage.cta_blocks.map((item, index) => (
                        <Grid item sm={12} md={2.4} lg={2.4} key={index}>
                            <Stack spacing={0}>
                                <Image
                                    alt={item.image}
                                    width={150}
                                    height={150}
                                    src={item.image} />
                                    <br/>
                                <h3>{item.title}</h3>
                                
                                {item.paragraphs.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                    <Grid item sm={0} md={2.4} lg={2.4}>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={12} lg={12} className='cta-center'> 
                    <button>
                        <p>{i18nStrings["fr"].homepage.cta_button}</p>
                    </button>
                </Grid>
            </Grid>
            </motion.div>
    )
}