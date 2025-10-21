'use client';

import { useAside } from '@/components/aside';
import { Menu } from 'lucide-react';

const HamburgerBtnMenu = () => {
  const { open: openAside } = useAside();

  return (
    <button
      type="button"
      onClick={() => openAside('sidebar-navigation')}
      className="-m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-0 dark:hover:bg-neutral-700"
    >
      <span className="sr-only">Open main menu</span>
      <Menu size={24} color="currentColor" strokeWidth={1.5} />
    </button>
  );
};

export default HamburgerBtnMenu;
