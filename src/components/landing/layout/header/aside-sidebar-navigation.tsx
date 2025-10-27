import { getNavigation } from '@/data/navigation';
import SidebarNavigation from './SidebarNavigation';
import { Aside } from '@/components/aside/aside';

interface Props {
  className?: string;
}

const AsideSidebarNavigation = async ({ className }: Props) => {
  const navigationMenu = await getNavigation();

  return (
    <Aside logoOnHeading openFrom="left" type="sidebar-navigation" contentMaxWidthClassName="max-w-md">
      <div className="flex h-full flex-col">
        <div className="hidden-scrollbar flex-1 overflow-x-hidden overflow-y-auto py-6">
          <SidebarNavigation data={navigationMenu} />
        </div>
      </div>
    </Aside>
  );
};

export default AsideSidebarNavigation;
