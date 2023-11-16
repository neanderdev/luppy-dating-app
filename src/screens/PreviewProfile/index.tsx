import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Animated, useWindowDimensions } from 'react-native';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { Header } from '../../components/Header';
import { ProgressSteps } from '../../components/ProgressSteps';
import { Tabs } from '../../components/Tabs';
import { VerifiedUser } from '../../components/VerifiedUser';

import {
    Container,
    ContainerClickedNextAndPreviousImage,
    ContainerClickedNextAndPreviousImageButton,
    PreviewClick,
    PreviewContainer,
    PreviewHeader,
    PreviewHeaderDescription,
    PreviewHeaderTitle,
    PreviewImage,
    PreviewInfoProfile,
    PreviewInfoProfileDescription,
    PreviewInfoProfileDownloadButton,
    PreviewInfoProfileFooter,
    PreviewInfoProfileLocation,
    PreviewInfoProfileLocationContainer,
    PreviewInfoProfileName,
    PreviewInfoProfileNameContainer,
    ProfilePreview,
    ScrollView
} from './styles';

export function PreviewProfile() {
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

                <Tabs
                    tabs={[
                        {
                            title: 'Edit',
                            onPress: () => navigation.navigate('editProfile'),
                        },
                        {
                            title: 'Preview',
                            onPress: () => navigation.navigate('previewProfile')
                        }
                    ]}
                    tabSelected='Preview'
                />

                <PreviewClick onPress={() => navigation.navigate('previewProfileClicked')}>
                    <PreviewContainer>
                        <PreviewHeader>
                            <PreviewHeaderTitle>Profile preview:</PreviewHeaderTitle>

                            <PreviewHeaderDescription>Click on the card and check your dog's info.</PreviewHeaderDescription>
                        </PreviewHeader>

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

                            <PreviewInfoProfile>
                                <PreviewInfoProfileNameContainer>
                                    <PreviewInfoProfileName>Loki</PreviewInfoProfileName>

                                    <VerifiedUser
                                        verified
                                    />
                                </PreviewInfoProfileNameContainer>

                                <PreviewInfoProfileDescription>2 Yo, Bulldog</PreviewInfoProfileDescription>

                                <PreviewInfoProfileFooter>
                                    <PreviewInfoProfileLocationContainer>
                                        <Feather name="map-pin" size={16} color="#E2DAEC" />

                                        <PreviewInfoProfileLocation>Less than 1km</PreviewInfoProfileLocation>
                                    </PreviewInfoProfileLocationContainer>

                                    <PreviewInfoProfileDownloadButton>
                                        <Feather name="download" size={20} color="white" />
                                    </PreviewInfoProfileDownloadButton>
                                </PreviewInfoProfileFooter>

                                <ProgressSteps
                                    numberArray={images.length}
                                    currentIndex={current}
                                    style={{
                                        marginVertical: 10,
                                    }}
                                />
                            </PreviewInfoProfile>
                        </ProfilePreview>
                    </PreviewContainer>
                </PreviewClick>
            </Container>
        </ScrollView>
    );
}
