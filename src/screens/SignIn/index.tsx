import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
    Container,
    Description,
    ForgotPassword,
    FormContainer,
    InfoContainer,
    Or,
    SignUpDescription,
    SignUpTitle,
    SocialMediaButton,
    SocialMediaContainer,
    Title
} from './styles';

export function SignIn() {
    const [visiblePassword, setVisiblePassword] = useState(false);

    const { signIn } = useAuth();

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    async function handleSignIn() {
        await signIn('mcspipoca47@gmail.com', '123456789');
    }

    return (
        <Container>
            <InfoContainer>
                <Title>Back to pawsome matches</Title>

                <Description>Missed us? Log in to resume your furry love quest.</Description>
            </InfoContainer>

            <FormContainer>
                <Input
                    label='Email'
                    placeholder='Enter your email address'
                    placeholderTextColor='#726c7d'
                    keyboardType='email-address'
                />

                <Input
                    label='Password'
                    placeholder='Enter your password'
                    placeholderTextColor='#726c7d'
                    secureTextEntry={!visiblePassword}
                    icon={<Feather
                        name={visiblePassword ? "eye-off" : "eye"}
                        size={24}
                        color="#726C7D"
                        style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                        }}
                        onPress={() => setVisiblePassword(!visiblePassword)}
                    />}
                />

                <ForgotPassword>Forgot your password?</ForgotPassword>
            </FormContainer>

            <Button
                type='PRIMARY'
                title='Log In'
                onPress={handleSignIn}
            />

            <Or>OR</Or>

            <SocialMediaContainer>
                <SocialMediaButton>
                    <AntDesign
                        name="facebook-square"
                        size={24}
                        color="#FFFFFF"
                    />
                </SocialMediaButton>

                <SocialMediaButton>
                    <AntDesign
                        name="apple-o"
                        size={24}
                        color="#FFFFFF"
                    />
                </SocialMediaButton>

                <SocialMediaButton>
                    <AntDesign
                        name="google"
                        size={24}
                        color="#FFFFFF"
                    />
                </SocialMediaButton>
            </SocialMediaContainer>

            <SignUpDescription>
                New to Luppy? <SignUpTitle onPress={() => navigation.navigate('signUpStep1')}>Sign Up</SignUpTitle>
            </SignUpDescription>
        </Container>
    );
}
