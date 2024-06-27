
import React from 'react';
import styles from "./style";
import { Billing, Billing1, Billing2, Business, Business1, Business2, CardDeal, CardDeal1, CardDeal2, Clients, CTA, Footer, Navbar, Stats, Stats1, Stats2, Testimonials, Testimonials1, Testimonials2, Hero0, Hero1, Hero2, Pricing, Pricing1, Pricing2 } from "./components";

const Service = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero0 />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Pricing />
        
        <Hero1 />
        <Stats1 />
        <Business1 />
        <Pricing1 />
        
        <Hero2 />
        <Stats2 />
        <Business2 />
        <Pricing2 />
      
        <Testimonials2 />
        <Clients />
        <CTA />
      </div>
    </div>
  </div>
);

export default Service;
6