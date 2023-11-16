import { ViewProps } from 'react-native';

import {
    Container,
    Step
} from './styles';

function generateArrayRange(numberArray: number) {
    return Array.from(
        { length: numberArray },
        (_, i) => i + 1
    );
}

interface Props extends ViewProps {
    numberArray: number;
    currentIndex: number;
}

export function ProgressSteps({ numberArray, currentIndex, ...rest }: Props) {
    return (
        <Container {...rest}>
            {generateArrayRange(numberArray).map((_, index) => (
                <Step
                    key={String(index)}
                    viewable={currentIndex >= index}
                />
            ))}
        </Container>
    );
}
