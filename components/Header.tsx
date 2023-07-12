import Link from 'next/link';

const Header = () => {
   return (
      <header className=" bg-black py-4 px-2 text-white flex  justify-center items-center gap-3">
         <Link href={'/'}>Home</Link>
         <Link href={'/blog'}>Blog</Link>
         <Link href={'/about'}>About</Link>
      </header>
   );
};

export default Header;
