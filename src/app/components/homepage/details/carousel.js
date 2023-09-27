'use client'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image';
export default function DetailsCarousel() {
    return(
        <Carousel
            className="details-carousel"
            autoPlay
            infiniteLoop
            renderThumbs={() => {false}}
            interval={5000}
        >
            <div>
                <Image src="logo.svg" alt="nice"
                    width={500}
                    height={500}
                />
                <p
                className="legend">Image</p>
            </div>
            <div>
                <Image src="logo.svg" alt="nice"
                    width={500}
                    height={500}
                />
                <p className="legend">Nouvelle image</p>
            </div>
            <div>
                <Image src="logo.svg" alt="nice"
                    width={500}
                    height={500}
                />
                <p className="legend">Autre image</p>
            </div>
        </Carousel>
    )
}