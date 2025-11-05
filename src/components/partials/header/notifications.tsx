import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@/i18n/routing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { notifications, type Notification } from "./data";
import shortImage from "@/public/images/all-img/short-image-2.png";
import { Icon } from "@/components/ui/icon";

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="focus:ring-none md:bg-secondary text-secondary-foreground relative hidden cursor-pointer flex-col items-center justify-center rounded-full focus:outline-hidden md:flex md:h-8 md:w-8"
        >
          <Icon
            icon="heroicons-outline:bell"
            className="animate-tada h-5 w-5"
          />
          <Badge
            className="absolute bottom-[calc(100%-10px)] left-[calc(100%-12px)] h-4 w-4 items-center justify-center rounded-full p-0 text-[8px] font-semibold"
            color="destructive"
          >
            2
          </Badge>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-999 mx-4 p-0 lg:w-[320px]">
        <DropdownMenuLabel>
          <div className="border-default-100 flex justify-between border-b px-4 py-3">
            <div className="text-default-800 text-sm font-medium">
              Notifications
            </div>
            <div className="text-default-800 text-xs md:text-right">
              <Link href="/notifications" className="underline">
                View all
              </Link>
            </div>
          </div>
        </DropdownMenuLabel>
        <div className="h-[300px] xl:h-[350px]">
          <ScrollArea className="h-full">
            {notifications.map((item: Notification, index: number) => (
              <DropdownMenuItem
                key={`inbox-${index}`}
                className="group flex cursor-pointer gap-9 px-4 py-2"
              >
                <div className="flex flex-1 items-start gap-2">
                  <div className="flex-none">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={item.avatar} />
                      <AvatarFallback> {item.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5">
                    <div className="text-default-600 dark:group-hover:text-default-800 truncate text-sm font-normal">
                      {item.title}
                    </div>
                    <div className="text-default-600 dark:group-hover:text-default-700 line-clamp-1 text-xs font-light">
                      {item.desc}
                    </div>
                    <div className="text-default-400 dark:group-hover:text-default-500 text-xs">
                      {" "}
                      {item.date}
                    </div>
                  </div>
                </div>
                {item.unreadmessage && (
                  <div className="flex-0">
                    <span className="bg-destructive border-destructive-foreground dark:border-default-400 inline-block h-[10px] w-[10px] rounded-full border" />
                  </div>
                )}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
