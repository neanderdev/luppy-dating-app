import { SwitchProps } from 'react-native';

import {
    Container
} from './styles';

interface Props extends SwitchProps { }

export function Switch({ ...rest }: Props) {
    return (
        <Container
            {...rest}
        />
    );
}
