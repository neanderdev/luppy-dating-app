import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Animated, useWindowDimensions } from 'react-native';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { Header } from '../../components/Header';
import { ProgressSteps } from '../../components/ProgressSteps';
import { VerifiedUser } from '../../components/VerifiedUser';

import {
    BodyContainer,
    Container,
    ContainerClickedNextAndPreviousImage,
    ContainerClickedNextAndPreviousImageButton,
    Match,
    MatchButton,
    MatchButtons,
    MatchContainer,
    MatchDownloadButton,
    MatchFooterInfo,
    MatchImage,
    MatchInfo,
    MatchLocale,
    MatchLocaleContainer,
    MatchName,
    MatchNameContainer,
    MatchesList
} from './styles';

export function Matches() {
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState([
        'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]);

    const navigation = useNavigation<AppNavigatorStackRoutesProps>();

    const { width, height } = useWindowDimensions();

    const progressRef = useRef(new Animated.Value(0)).current;

    function start() {
        Animated.timing(progressRef, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                next();
            }
        });
    }

    function next() {
        if (current !== (images.length - 1)) {
            progressRef.setValue(0);

            setCurrent(current + 1);
        } else {
            close();
        }
    }

    function previous() {
        if ((current - 1) >= 0) {
            progressRef.setValue(0);

            setCurrent(current - 1);
        } else {
            close();
        }
    }

    function close() {
        progressRef.setValue(0);
    }

    return (
        <Container>
            <Header
                title='Matches'
            />

            <BodyContainer>
                <MatchesList
                    data={[1, 2, 3]}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <Match>
                            <MatchImage
                                source={{ uri: images[current] }}
                                width={width - 50}
                                onLoadEnd={() => {
                                    progressRef.setValue(0);

                                    start();
                                }}
                            />

                            <ContainerClickedNextAndPreviousImage
                                style={{
                                    width: width,
                                    height: height,
                                }}
                            >
                                <ContainerClickedNextAndPreviousImageButton
                                    onPress={() => {
                                        previous();
                                    }}
                                />

                                <ContainerClickedNextAndPreviousImageButton
                                    onPress={() => {
                                        next();
                                    }}
                                />
                            </ContainerClickedNextAndPreviousImage>

                            <MatchContainer>
                                <MatchNameContainer>
                                    <MatchName>Luna</MatchName>

                                    <VerifiedUser
                                        verified
                                    />
                                </MatchNameContainer>

                                <MatchInfo>6 Months, Spitz</MatchInfo>

                                <MatchFooterInfo>
                                    <MatchLocaleContainer>
                                        <Feather name="map-pin" size={16} color="#E2DAEC" />

                                        <MatchLocale>Less than 1km</MatchLocale>
                                    </MatchLocaleContainer>

                                    <MatchDownloadButton>
                                        <Feather name="download" size={20} color="white" />
                                    </MatchDownloadButton>
                                </MatchFooterInfo>

                                <ProgressSteps
                                    numberArray={images.length}
                                    currentIndex={current}
                                    style={{
                                        marginVertical: 10,
                                    }}
                                />
                            </MatchContainer>
                        </Match>
                    )}
                    contentContainerStyle={{ gap: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <MatchButtons>
                    <MatchButton type='MESSAGE'>
                        <Feather name="message-square" size={24} color="#14151A" />
                    </MatchButton>

                    <MatchButton type='PASS'>
                        <Feather name="x-square" size={24} color="#FECC66" />
                    </MatchButton>

                    <MatchButton type='MATCH'>
                        <Feather name="heart" size={24} color="#14151A" />
                    </MatchButton>
                </MatchButtons>
            </BodyContainer>
        </Container>
    );
}
