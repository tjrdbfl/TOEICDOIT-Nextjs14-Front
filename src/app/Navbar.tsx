'use client';

import { motion } from 'framer-motion';
import { styles } from '@/constants/styles/dashboard';
import { navVariants } from '@/utils/motion';

import React from 'react';
import NavSidebar from '@/components/common/NavSidebar';

const Navbar = () => (
  <>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`relative`}
    >
      <div className='py-[3%]'>

        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto bg-white p-5 rounded-b-3xl md:absolute md:shadow-lg`}
        >
          <NavSidebar />
        </div>
      </div>
    </motion.nav>
  </>
);

export default Navbar;
