import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'About Next App',
   description: 'Generated by create next app',
};
const About = () => {
   return (
      <div>
         <h3 className="mt-2">Select SubItem</h3>
      </div>
   );
};

export default About;