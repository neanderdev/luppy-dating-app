import { SliderProps } from '@react-native-community/slider';

import {
    Container
} from './styles';

interface Props extends SliderProps { }

export function SliderRange({ ...rest }: Props) {
    return (
        <Container
            {...rest}
        />
    );
}
