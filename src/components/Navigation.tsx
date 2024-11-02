import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <ul className="nav-list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
