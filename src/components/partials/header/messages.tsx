import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@/i18n/routing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { messages, type Message } from "./data";
import { Icon } from "@/components/ui/icon";

const Messages = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="focus:ring-none md:bg-secondary text-secondary-foreground relative hidden cursor-pointer flex-col items-center justify-center rounded-full focus:outline-hidden md:flex md:h-8 md:w-8"
        >
          <Icon icon="heroicons-outline:mail" className="h-5 w-5" />
          <Badge
            className="absolute bottom-[calc(100%-10px)] left-[calc(100%-12px)] h-4 w-4 items-center justify-center rounded-full p-0 text-[8px] font-semibold"
            color="destructive"
          >
            10
          </Badge>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-999 mx-4 p-0 lg:w-[320px]">
        <DropdownMenuLabel>
          <div className="border-default-100 flex justify-between border-b px-4 py-3">
            <div className="text-default-800 text-sm font-medium">Messages</div>
            <div className="text-default-800 text-xs md:text-right">
              <Link href="/chats" className="underline">
                View all
              </Link>
            </div>
          </div>
        </DropdownMenuLabel>
        <div className="h-[300px] xl:h-[350px]">
          <ScrollArea className="h-full">
            {messages?.map((item: Message, index: number) => (
              <DropdownMenuItem
                key={`inbox-${index}`}
                className="group flex cursor-pointer items-start gap-3 px-4 py-2"
              >
                <div className="flex-none">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={item?.image} />
                    <AvatarFallback> {item.title.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-1 flex-col gap-0.5">
                  <div className="text-default-800 text-sm font-medium">
                    {item.title}
                  </div>
                  <div className="text-default-600 dark:group-hover:text-default-700 text-xs">
                    {item.desc}
                  </div>
                  <div className="text-default-400 dark:text-default-500 dark:group-hover:text-default-600 text-xs">
                    3 min ago
                  </div>
                </div>
                {item.hasnotifaction && (
                  <div className="flex-none">
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

export default Messages;
