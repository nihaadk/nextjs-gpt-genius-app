import { SiGenius } from 'react-icons/si';
import ThemeToggle from '@/app/components/ThemeToggle';

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiGenius size={60} className="text-primary" />
      <h2 className="text-2xl font-extrabold text-primary mr-auto">GPTGenius</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
