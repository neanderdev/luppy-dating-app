import { Animated, useWindowDimensions } from 'react-native';

import { IOnboarding } from '../../utils/data-slides-onboarding';

import {
    Container,
    Dots
} from './styles';

interface Props {
    data: IOnboarding[];
    scrollX: Animated.Value;
}

export function DotsPaginator({ data, scrollX }: Props) {
    const { width } = useWindowDimensions();

    return (
        <Container>
            {data.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp'
                });

                return <Dots
                    key={String(index)}
                    opacity={parseFloat(JSON.stringify(opacity))}
                />
            })}
        </Container>
    );
}