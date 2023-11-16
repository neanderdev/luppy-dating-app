import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Header } from '../../components/Header';

import {
    BadgeContainer,
    Container,
    Info,
    Notification,
    NotificationsContainer,
    Title
} from './styles';

type TypeNotification = 'new-match' | 'like-dog' | 'new-message' | 'invite-event' | 'event-next-in-area' | 'profile-boosted';

interface ButtonTypeNotifications {
    title: string;
    type: "PRIMARY" | "SECONDARY" | "OUTLINE";
}

const buttonTypeNotifications = {
    'new-match': {
        title: "Send A Message",
        type: "OUTLINE",
    } as ButtonTypeNotifications,
    'like-dog': {
        title: "Check Bark's Profile",
        type: "PRIMARY",
    } as ButtonTypeNotifications,
    'new-message': {
        title: "Send A Message",
        type: "OUTLINE",
    } as ButtonTypeNotifications,
    'invite-event': {
        title: "Check The Invitation",
        type: "SECONDARY",
    } as ButtonTypeNotifications,
    'event-next-in-area': {
        title: "Attend",
        type: "PRIMARY",
    } as ButtonTypeNotifications,
    'profile-boosted': {
        title: "Check Details",
        type: "SECONDARY",
    } as ButtonTypeNotifications,
};

export interface INotifications {
    imageUrl: string;
    title: string;
    type: TypeNotification;
    viewed: boolean;
}

const notifications = [
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1677542200557-3c6856cc98b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww',
        title: 'Your dog, Loki, has a new match!',
        type: 'new-match',
        viewed: false,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww',
        title: 'Björn Twain has liked your dog, Loki!',
        type: 'like-dog',
        viewed: false,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww',
        title: 'Sir Barks-a-Lot has sent you a message!',
        type: 'new-message',
        viewed: true,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww',
        title: 'Your dog, Loki, has been invited to a playdate with Canine West!',
        type: 'invite-event',
        viewed: false,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'There is a new dog event in your area called "Paws in the Park"!',
        type: 'event-next-in-area',
        viewed: true,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
        title: "Your dog's profile has been boosted!",
        type: 'profile-boosted',
        viewed: true,
    },
] as INotifications[];

export function Notifications() {
    return (
        <Container>
            <Header
                isNotifications
                title='Back'
            />

            <NotificationsContainer
                data={notifications}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => (
                    <Notification viewed={item.viewed}>
                        <Avatar
                            size='MEDIUM'
                            status='ONLINE'
                            url={item.imageUrl}
                        />

                        <Info>
                            <Title>{item.title}</Title>

                            <BadgeContainer>
                                <Badge
                                    type={buttonTypeNotifications[item.type].type}
                                    title={buttonTypeNotifications[item.type].title}
                                    onPress={() => { }}
                                />
                            </BadgeContainer>
                        </Info>
                    </Notification>
                )}
                contentContainerStyle={{ gap: 10 }}
            />
        </Container>
    );
}
