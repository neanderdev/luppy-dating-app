import { Feather } from '@expo/vector-icons';

import { Avatar } from '../Avatar';

import {
    Container,
    More
} from './styles';

interface Props {
    avatars: string[];
}

export function GroupsAvatar({ avatars }: Props) {
    return (
        <Container>
            {avatars.map((avatar, index) => (
                <Avatar
                    key={String(index)}
                    size='SMALL'
                    url={avatar}
                    isGroup
                />
            ))}

            <More>
                <Feather name="more-horizontal" size={24} color="#14151A" />
            </More>
        </Container>
    );
}
