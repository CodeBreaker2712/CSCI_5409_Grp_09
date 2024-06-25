import Link from 'next/link';
import './globals.css';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gyms">Gyms</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
