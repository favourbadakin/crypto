import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { BsPersonFill } from 'react-icons/bs';
import { BsBarChart } from 'react-icons/bs';

export default function Numbers(){
    return(
        <section>
            <div>
            <IconContext.Provider
        value={{ className:'react-icons' }}
      >
                <div className='numbers-flex'>
                    <div className='item-flex'>
                        <div className=''>
                            <BsBarChart />
                        </div>
                        <div>
                            <p className="big-p">$30B</p>
                            <p className="small-p">Digital Currency Exchanged</p>
                        </div>
                    </div>

                    <div className='item-flex'>
                        <div className=''>
                            <BsPersonFill />
                        </div>
                        <div>
                            <p className="big-p">10M+</p>
                            <p className="small-p">Trusted Wallets Investor</p>
                        </div>
                    </div>

                    <div className='item-flex'>
                        <div className=''>
                            <FaGlobeAmericas />
                        </div>
                        <div>
                            <p className="big-p">195</p>
                            <p className="small-p">Countries Supported</p>
                        </div>
                    </div>
                </div>
                </IconContext.Provider>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <h2>Why you should choose CRAPPO</h2>
                    <p className='small-p'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                    <a href='/#' className='btn'>Learn More</a>
                </div>
            </div>
        </section>

    )
}