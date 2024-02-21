import Link from 'next/link';

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: '/chat', label: 'chat' },
  { href: '/tours', label: 'tours' },
  { href: '/tours/new-tour', label: 'new tour' },
  { href: '/profile', label: 'profile' },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link, index) => {
        return (
          <li key={index} className="text-xl">
            <Link href={link.href} className="capitalize">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
