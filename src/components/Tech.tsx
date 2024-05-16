import React from 'react'
import { backtechnologies, dbtechnologies, fronttechnologies } from '../constants';
import { BallCanvas } from '.';
import { styles } from '../styles';

export function Tech() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h2 className={styles.sectionHeadText}>Overview.</h2>
                <p className={styles.sectionSubText}>Introduction</p>
            </div>
            <div className='mt-20 flex flex-wrap gap-10'>
                <div className='flex flex-col flex-wrap justify-center items-end gap-10'>
                    <div className='flex flex-row flex-wrap justify-center gap-10'>
                        {backtechnologies.map((technology) => (
                            <div className='w-24 h-24' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row flex-wrap justify-center gap-10'>
                        {dbtechnologies.map((technology) => (
                            <div className='w-24 h-24' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row flex-wrap justify-center gap-10'>
                        {fronttechnologies.map((technology) => (
                            <div className='w-24 h-24' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech;