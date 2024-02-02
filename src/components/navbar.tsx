import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
	  <Link href="/">Home</Link>
	  <Link href="/dashboard">Dashboard</Link>
	</nav>
  );
}
