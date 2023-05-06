import { NextPageWithLayout } from '@/types/pageLayout';
import type { ReactElement } from 'react';
 
const About: NextPageWithLayout = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-5 my-10'>
      <h1>About page</h1>
    </div>
  )
};

About.getLayout = function getLayout(page: ReactElement) {
  return page;
};
 
export default About;