"use client";

import { useConversation } from "@/app/hooks/conversation/use-conversation";
import TabsMenu from "../tabs";
import { TABS_MENU } from "@/app/constants/menu";
import { TabsContent } from "@/components/ui/tabs";
import ConversationSearch from "./search";
import { Separator } from "@/components/ui/separator";
import { Loader } from "../loader";
import { CardDescription } from "@/components/ui/card";
import ChatCard from "./chat-card";

type Props = {
  domains?:
    | {
        name: string;
        id: string;
        icon: string;
      }[]
    | undefined;
};

const ConversationMenu = ({ domains }: Props) => {
  const { register, loading, chatRooms, onGetActiveChatMessages } =
    useConversation();
  return (
    <div className="py-3 px-0">
      <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="unread">
          <ConversationSearch domains={domains} register={register} />
          <div className="flex flex-col">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.map((room) => (
                  <ChatCard
                    seen={room.chatRoom[0].message[0]?.seen}
                    id={room.chatRoom[0].id}
                    onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                    key={room.chatRoom[0].id}
                    title={room.email!}
                    description={room.chatRoom[0].message[0]?.message}
                  />
                ))
              ) : (
                <CardDescription>No chats for you domain</CardDescription>
              )}
            </Loader>
          </div>
        </TabsContent>
        <TabsContent value="all">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          all
        </TabsContent>
        <TabsContent value="expired">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          expired
        </TabsContent>
        <TabsContent value="starred">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          starred
        </TabsContent>
      </TabsMenu>
    </div>
  );
};

export default ConversationMenu;
