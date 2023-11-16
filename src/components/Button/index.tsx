import { ButtonProps } from 'react-native';

import {
    Container,
    Title
} from './styles';

interface Props extends ButtonProps {
    type: 'PRIMARY' | 'OUTLINE';
    title: string;
}

export function Button({ type, title, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Title type={type}>
                {title}
            </Title>
        </Container>
    );
}
