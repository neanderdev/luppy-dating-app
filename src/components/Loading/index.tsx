import LottieView from 'lottie-react-native';

import loadingPet from '../../assets/loading-pet.json';

import {
    Container
} from './styles';

export function Loading() {
    return (
        <Container
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <LottieView
                source={loadingPet}
                style={{
                    height: 200,
                }}
                resizeMode="contain"
                autoPlay
                loop
            />
        </Container>
    );
}