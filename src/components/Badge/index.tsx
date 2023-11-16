import {
    Container,
    Title
} from './styles';

interface Props {
    type: 'PRIMARY' | 'SECONDARY' | 'OUTLINE';
    title: string;
    onPress: () => void;
}

export function Badge({ type, title, onPress }: Props) {
    return (
        <Container
            type={type}
            onPress={() => onPress()}
        >
            <Title>{title}</Title>
        </Container>
    );
}
