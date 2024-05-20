import React, { useEffect, useState } from 'react'
import { alltechnologies } from '../constants';
import { BallCanvas } from '.';
import { styles } from '../styles';

export function Tech() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleMediaQueryChange = (event: any) => {
          setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
      }, []);
      
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h2 className={styles.sectionHeadText}>Tech stack</h2>
                {/* <p className={styles.sectionSubText}>Introduction</p> */}
            </div>
            <div className='mt-16 flex flex-wrap gap-10'>
                <div className='flex flex-col flex-wrap justify-center items-end gap-10'>
                    <div className='flex flex-row flex-wrap justify-center gap-10'>
                        {alltechnologies.map((technology) => (
                            !isMobile ?
                            <div className='w-24 h-24' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                            </div>
                            :
                            <div className='w-28 h-28 flex flex-row justify-center items-center' key={technology.name}>
                                <img src={technology.icon} alt="logo" className="w-9 h-9 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech;