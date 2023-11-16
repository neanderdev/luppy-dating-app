import { useNavigation } from '@react-navigation/native';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { Button } from '../../components/Button';

import DogWelcome from '../../assets/dog-welcome.png';

import {
    ButtonWrapper,
    Container,
    Description,
    Image,
    InfoContainer,
    Title
} from './styles';

export function Welcome() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    return (
        <Container>
            <Image
                source={DogWelcome}
            />

            <InfoContainer>
                <Title>Welcome to Luppy!</Title>

                <Description>Luppy is the dog dating app that makes finding furry friends fun and easy.</Description>
            </InfoContainer>

            <ButtonWrapper>
                <Button
                    type='PRIMARY'
                    title='Log In'
                    onPress={() => navigation.navigate('signIn')}
                />

                <Button
                    type='OUTLINE'
                    title='Sign Up'
                    onPress={() => navigation.navigate('signUpStep1')}
                />
            </ButtonWrapper>
        </Container>
    );
}