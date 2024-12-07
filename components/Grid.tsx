import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'


const Grid = () => {
    return (

        <section id='about'>
            <BentoGrid>
                {
                    [
                        { id: 1, title: "The Dawn of Innovation", description: "Explore the birth of groundbreaking ideas and inventions." },
                        { id: 2, title: "The Digital Revolution", description: "Dive into the transformative power of technology." },
                        { id: 3, title: "The Future of Innovation", description: "Discover the future of innovation and innovation." },
                        { id: 4, title: "The Dawn of Innovation", description: "Explore the birth of groundbreaking ideas and inventions." },
                        { id: 5, title: "The Digital Revolution", description: "Dive into the transformative power of technology." },
                        { id: 6, title: "The Future of Innovation", description: "Discover the future of innovation and innovation." }
                    ].map((item) => (
                        <BentoGridItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
            </BentoGrid>
        </section>

    )
}

export default Grid