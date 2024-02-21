import { currentUser, UserButton } from '@clerk/nextjs';
import { User } from '@clerk/backend';

const MemberProfile = async () => {
  const user: User | null = await currentUser();

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl={'/'} />
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
