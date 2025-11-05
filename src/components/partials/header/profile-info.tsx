import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icon";
import { signOut, auth } from "@/lib/auth";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const ProfileInfo = async () => {
  const session = await auth();
  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="text-default-800 flex items-center gap-3">
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name?.charAt(0) as string}
              width={36}
              height={36}
              className="rounded-full"
            />

            <div className="hidden text-sm font-medium capitalize lg:block">
              {session?.user?.name}
            </div>
            <span className="me-2.5 hidden text-base lg:inline-block">
              <Icon icon="heroicons-outline:chevron-down"></Icon>
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-0" align="end">
          <DropdownMenuLabel className="mb-1 flex items-center gap-2 p-3">
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name?.charAt(0) as string}
              width={36}
              height={36}
              className="rounded-full"
            />

            <div>
              <div className="text-default-800 text-sm font-medium capitalize">
                {session?.user?.name}
              </div>
              <Link
                href="/dashboard"
                className="text-default-600 hover:text-primary text-xs"
              >
                {session?.user?.email}
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {[
              {
                name: "profile",
                icon: "heroicons:user",
                href: "/user-profile",
              },
              {
                name: "Billing",
                icon: "heroicons:megaphone",
                href: "/dashboard",
              },
              {
                name: "Settings",
                icon: "heroicons:paper-airplane",
                href: "/dashboard",
              },
              {
                name: "Keyboard shortcuts",
                icon: "heroicons:language",
                href: "/dashboard",
              },
            ].map((item, index) => (
              <Link
                href={item.href}
                key={`info-menu-${index}`}
                className="cursor-pointer"
              >
                <DropdownMenuItem className="text-default-600 flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize">
                  <Icon icon={item.icon} className="h-4 w-4" />
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard" className="cursor-pointer">
              <DropdownMenuItem className="text-default-600 flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize">
                <Icon icon="heroicons:user-group" className="h-4 w-4" />
                team
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="text-default-600 flex items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize">
                <Icon icon="heroicons:user-plus" className="h-4 w-4" />
                Invite user
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {[
                    {
                      name: "email",
                    },
                    {
                      name: "message",
                    },
                    {
                      name: "facebook",
                    },
                  ].map((item, index) => (
                    <Link
                      href="/dashboard"
                      key={`message-sub-${index}`}
                      className="cursor-pointer"
                    >
                      <DropdownMenuItem className="text-default-600 cursor-pointer px-3 py-1.5 text-sm font-medium capitalize">
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <Link href="/dashboard">
              <DropdownMenuItem className="text-default-600 flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize">
                <Icon icon="heroicons:variable" className="h-4 w-4" />
                Github
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="text-default-600 flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize">
                <Icon icon="heroicons:phone" className="h-4 w-4" />
                Support
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {[
                    {
                      name: "portal",
                    },
                    {
                      name: "slack",
                    },
                    {
                      name: "whatsapp",
                    },
                  ].map((item, index) => (
                    <Link href="/dashboard" key={`message-sub-${index}`}>
                      <DropdownMenuItem className="text-default-600 cursor-pointer px-3 py-1.5 text-sm font-medium capitalize">
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="dark:bg-background mb-0" />
          <DropdownMenuItem className="text-default-600 my-1 flex cursor-pointer items-center gap-2 px-3 text-sm font-medium capitalize">
            <div>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="flex w-full items-center gap-2"
                >
                  <Icon icon="heroicons:power" className="h-4 w-4" />
                  Log out
                </button>
              </form>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ProfileInfo;
