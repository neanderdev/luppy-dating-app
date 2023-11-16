import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Animated, FlatList, ViewToken } from "react-native";

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { DotsPaginator } from '../../components/DotsPaginator';
import { NextButton } from '../../components/NextButton';
import { OnboardingItem } from '../../components/OnboardingItem';

import { dataSlides } from '../../utils/data-slides-onboarding';

import {
    Container,
    Header,
    ItemList,
    ListContainer,
    SkipButton,
    SkipText
} from "./styles";

interface OnViewableItemsChangedProps {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
}

export function Onboarding() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef<FlatList>(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const viewableItemsChanged = useRef(({ viewableItems }: OnViewableItemsChangedProps) => {
        setCurrentIndex(viewableItems[0].index ?? 0)
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < dataSlides.length - 1) {
            slidesRef?.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('welcome');
        }
    };

    return (
        <Container>
            <Header>
                <SkipButton onPress={() => navigation.navigate('welcome')}>
                    <SkipText>
                        Skip
                    </SkipText>
                </SkipButton>
            </Header>

            <ListContainer>
                <ItemList
                    data={dataSlides}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />

                <DotsPaginator
                    data={dataSlides}
                    scrollX={scrollX}
                />
            </ListContainer>

            <NextButton
                percentage={(currentIndex + 1) * (100 / dataSlides.length)}
                scrollTo={scrollTo}
            />
        </Container>
    )
}
