import { Feather } from '@expo/vector-icons';

import {
    Container
} from './styles';

interface Props {
    verified?: boolean;
}

export function VerifiedUser({ verified = false }: Props) {
    return (
        <Container verified={verified}>
            <Feather name="check" size={16} color="white" />
        </Container>
    );
}
