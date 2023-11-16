import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Animated, useWindowDimensions } from 'react-native';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { Badge } from '../../components/Badge';
import { Header } from '../../components/Header';
import { ProgressBar } from '../../components/ProgressBar';
import { ProgressSteps } from '../../components/ProgressSteps';
import { VerifiedUser } from '../../components/VerifiedUser';

import {
    AboutMe,
    Badges,
    Container,
    ContainerClickedNextAndPreviousImage,
    ContainerClickedNextAndPreviousImageButton,
    Description,
    InfoContainer,
    InfoLocationContainer,
    Location,
    LocationContainer,
    Name,
    NameContainer,
    PreviewImage,
    ProfilePreview,
    ScrollView,
    Title,
    UpCircleButton
} from './styles';

export function PreviewProfileClicked() {
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
        <ScrollView>
            <Container>
                <Header
                    title='Preview Profile'
                />

                <ProfilePreview>
                    <PreviewImage
                        source={{ uri: images[current] }}
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

                    <ProgressSteps
                        numberArray={images.length}
                        currentIndex={current}
                        style={{
                            width: '90%',

                            marginVertical: 10,

                            position: 'absolute',
                            bottom: 4,
                            left: 12,
                        }}
                    />
                </ProfilePreview>

                <InfoContainer>
                    <NameContainer>
                        <Name>Loki</Name>

                        <VerifiedUser
                            verified
                        />
                    </NameContainer>

                    <Description>2 Yo, Male, Small, Bulldog.</Description>

                    <InfoLocationContainer>
                        <LocationContainer>
                            <Feather name="map-pin" size={20} color="#E2DAEC" />

                            <Location>Less than 1km</Location>
                        </LocationContainer>

                        <UpCircleButton>
                            <Feather name="arrow-up-circle" size={24} color="#E9525F" />
                        </UpCircleButton>
                    </InfoLocationContainer>
                </InfoContainer>

                <InfoContainer>
                    <Title>About me</Title>

                    <AboutMe>Bulldog by breed, but a lover at heart.</AboutMe>
                </InfoContainer>

                <InfoContainer>
                    <Title>Temperament:</Title>

                    <Badges>
                        <Badge
                            type='SECONDARY'
                            title='Friendly'
                            onPress={() => { }}
                        />

                        <Badge
                            type='SECONDARY'
                            title='Adaptable'
                            onPress={() => { }}
                        />

                        <Badge
                            type='SECONDARY'
                            title='Calm'
                            onPress={() => { }}
                        />
                    </Badges>
                </InfoContainer>

                <InfoContainer>
                    <Title>Interests:</Title>

                    <Badges>
                        <Badge
                            type='SECONDARY'
                            title='Going for walks'
                            onPress={() => { }}
                        />

                        <Badge
                            type='SECONDARY'
                            title='Rolling over'
                            onPress={() => { }}
                        />

                        <Badge
                            type='SECONDARY'
                            title='Flyball'
                            onPress={() => { }}
                        />
                    </Badges>
                </InfoContainer>

                <InfoContainer>
                    <Title>Energy Level:</Title>

                    <ProgressBar
                        percentage={50}
                    />
                </InfoContainer>

                <InfoContainer>
                    <Title>Training:</Title>

                    <Badges>
                        <Badge
                            type='SECONDARY'
                            title='Yes'
                            onPress={() => { }}
                        />
                    </Badges>
                </InfoContainer>

                <InfoContainer>
                    <Title>Social Media</Title>

                    <Badges>
                        <Badge
                            type='OUTLINE'
                            title='Instagram: @LokiThePup'
                            onPress={() => { }}
                        />
                    </Badges>
                </InfoContainer>
            </Container>
        </ScrollView>
    );
}
