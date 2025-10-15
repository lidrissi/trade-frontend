import { MenuIcon } from 'lucide-react';

const HamburgerBtnMenu = () => {
  // const { open: openAside } = useAside()

  return (
    <button
      type="button"
      className="-m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-0 dark:hover:bg-neutral-700"
    >
      <span className="sr-only">Open main menu</span>
      <MenuIcon />
    </button>
  );
};

export default HamburgerBtnMenu;
