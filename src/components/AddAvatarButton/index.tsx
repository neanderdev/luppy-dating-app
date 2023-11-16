import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import {
    Container
} from './styles';

interface Props extends TouchableOpacityProps { }

export function AddAvatarButton({ ...rest }: Props) {
    return (
        <Container {...rest}>
            <Feather name="camera" size={24} color="#726C7D" />
        </Container>
    );
}
