import { useAppContext } from '../../context';
import { Chat } from '@/graphql/chat/schema';
import { List, ListItem, ListItemButton } from '@mui/joy';
import Router from 'next/router';

interface Props {
  chats: Chat[];
  selectedChat: undefined | Chat;
}

export default function ChatList({ chats, selectedChat }: Props) {
  const { signedInUser } = useAppContext();

  function renderChatName(chat: Chat) {
    if (chat.name) return chat.name; // chat already has a name

    // get array of other members (remove the signed-in user from chat members array)
    const otherMembers = chat.members.filter(member => member.username !== signedInUser?.username);

    // if there is only one other chat member, render their full name
    if (otherMembers.length === 1) return otherMembers[0].name;

    // else, render comma-seperated list of first names
    return otherMembers.map(member => member.name.split(' ')[0]).join(', ');
  }

  return (
    <List sx={{ p: 0, width: 240 }}>
      {chats.map(chat => (
        <ListItem key={chat.id}>
          <ListItemButton
            selected={chat.id === selectedChat?.id}
            variant={chat.id === selectedChat?.id ? 'soft' : 'plain'}
            onClick={() => Router.push(`/messages/${chat.id}`, undefined, { shallow: true })}
          >
            {renderChatName(chat)}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
