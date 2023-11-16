import {
    Container,
    Image,
    Status
} from './styles';

interface Props {
    size: 'SMALL' | 'MEDIUM' | 'LARGE';
    status?: 'ONLINE' | 'OFFLINE' | 'ABSENT';
    url: string;
    isGroup?: boolean;
}

export function Avatar({ size, status, url, isGroup = false }: Props) {
    return (
        <Container isGroup={isGroup}>
            <Image
                source={{ uri: url }}
                size={size}
            />

            {status && <Status
                size={size}
                status={status}
            />}
        </Container>
    );
}
