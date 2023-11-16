import { useWindowDimensions } from 'react-native';

import { IOnboarding } from '../../utils/data-slides-onboarding';

import {
    Container,
    Description,
    Image,
    ItemContainer,
    Title,
} from './styles';

interface Props {
    item: IOnboarding;
}

export function OnboardingItem({ item }: Props) {
    const { width } = useWindowDimensions();

    return (
        <Container width={width}>
            <Image
                source={item.image}
            />

            <ItemContainer>
                <Title>{item.title}</Title>

                <Description>{item.description}</Description>
            </ItemContainer>
        </Container>
    )
}
