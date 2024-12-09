import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
    return (

        <section id='about' className=''>
            <BentoGrid  className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto">
                {
                    gridItems.map((item) => (
                        <BentoGridItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                        />
                    ))}
            </BentoGrid>
        </section>

    )
}

export default Grid