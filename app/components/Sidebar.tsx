import SidebarHeader from '@/app/components/SidebarHeader';
import NavLinks from '@/app/components/NavLinks';
import MemberProfile from '@/app/components/MemberProfile';

const Sidebar = () => {
  return (
    <div className="px-4 w-auto min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
};

export default Sidebar;
