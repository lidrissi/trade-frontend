import Link from "next/link";
import { Fragment } from "react";

export const Navigation = () => {
  const navigationLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Buyer Central", href: "/buyer-central" },
    { id: 3, name: "Help Center", href: "/help" },
    { id: 4, name: "Become a supplier", href: "/supplier" },
  ];

  return (
    <nav className="font-work-sans hidden items-center gap-3 text-sm font-medium lg:flex">
      {navigationLinks.map(({ id, name, href }, index) => (
        <Fragment key={id}>
          <Link
            href={href}
            className="font-poppins font-normal transition-opacity duration-200 hover:opacity-70"
          >
            {name}
          </Link>
          {navigationLinks?.length - 1 !== index && <span className="">|</span>}
        </Fragment>
      ))}
    </nav>
  );
};
