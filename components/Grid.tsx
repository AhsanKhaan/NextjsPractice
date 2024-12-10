import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
    return (

        <section id='about' className=''>
            <BentoGrid  className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto">
                {
                    gridItems.map(({id,title,description,className,imgClassName,titleClassName,img,spareImg}) => (
                        <BentoGridItem
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            className={className}
                            imgClassName={imgClassName}
                            titleClassName={titleClassName}
                            img={img}
                            spareImg={spareImg} 
                        />
                    ))}
            </BentoGrid>
        </section>

    )
}

export default Grid