import Link from 'next/link';
import { Fragment } from 'react';

export const Navigation = () => {
  const navigationLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Buyer Central', href: '/buyer-central' },
    { id: 3, name: 'Help Center', href: '/help' },
    { id: 4, name: 'Become a supplier', href: '/supplier' },
  ];

  return (
    <nav className="hidden lg:flex items-center font-work-sans text-sm font-medium gap-3">
      {navigationLinks.map(({ id, name, href }, index) => (
        <Fragment key={id}>
          <Link href={href} className="hover:opacity-70 transition-opacity duration-200 font-normal font-poppins">
            {name}
          </Link>
          {navigationLinks?.length - 1 !== index && <span className="">|</span>}
        </Fragment>
      ))}
    </nav>
  );
};
