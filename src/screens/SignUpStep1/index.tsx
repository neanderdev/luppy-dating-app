import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as z from 'zod';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/ControlledInput';
import { ProgressSteps } from '../../components/ProgressSteps';

import {
    BackButton,
    BackTitle,
    Container,
    CtaContainer,
    CtaDescription,
    CtaDescriptionMarked,
    Description,
    InfoContainer,
    ScrollView,
    Title
} from './styles';

interface createUserFormData {
    email: string;
    password: string;
    confirm_password: string;
};

const createUserFormSchema = z.object({
    email: z.string({
        required_error: "E-mail é obrigatório."
    }).email({ message: "E-mail inválido." }),
    password: z.string({
        required_error: "Senha é obrigatório.",
    }).min(8, { message: 'No mínimo 8 caracteres.' }),
    confirm_password: z.string({
        required_error: "Confirmar senha é obrigatório.",
    }).min(8, { message: 'No mínimo 8 caracteres.' }),
})
    .refine(({ password, confirm_password }) => password === confirm_password, {
        message: "As senhas não são iguais.",
        path: ["confirm_password"]
    });

export function SignUpStep1() {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const {
        control,
        handleSubmit,
        formState
    } = useForm<createUserFormData>({
        mode: 'onChange',
        resolver: zodResolver(createUserFormSchema)
    });
    const { errors } = formState;

    function handleCreateUser(data: createUserFormData) {
        console.log(data);
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Container>
                        <ProgressSteps
                            numberArray={3}
                            currentIndex={0}
                        />

                        <BackButton onPress={() => navigation.goBack()}>
                            <Feather name="chevron-left" size={24} color="#E2DAEC" />

                            <BackTitle>
                                Back
                            </BackTitle>
                        </BackButton>

                        <InfoContainer>
                            <Title>Find your pawfect match</Title>

                            <Description>Join Luppy, the dog dating app that helps you find love for both you and your furry friend.</Description>
                        </InfoContainer>

                        <ControlledInput
                            control={control}
                            name='email'
                            label='Email'
                            placeholder='Enter your email address'
                            keyboardType='email-address'
                            placeholderTextColor='#726c7d'
                            error={errors?.email?.message}
                        />

                        <ControlledInput
                            control={control}
                            name='password'
                            label='Password'
                            placeholder='Enter your password'
                            placeholderTextColor='#726c7d'
                            secureTextEntry={!visiblePassword}
                            error={errors?.password?.message}
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

                        <ControlledInput
                            control={control}
                            name='confirm_password'
                            label='Confirm Password'
                            placeholder='Enter your confirm password'
                            placeholderTextColor='#726c7d'
                            secureTextEntry={!visibleConfirmPassword}
                            error={errors?.confirm_password?.message}
                            icon={<Feather
                                name={visibleConfirmPassword ? "eye-off" : "eye"}
                                size={24}
                                color="#726C7D"
                                style={{
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                }}
                                onPress={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
                            />}
                        />

                        <CtaContainer>
                            <Button
                                type='PRIMARY'
                                title='Continue'
                                onPress={handleSubmit(handleCreateUser)}
                            />

                            <CtaDescription>
                                Already have an account? <CtaDescriptionMarked onPress={() => navigation.navigate('signIn')}>Log in</CtaDescriptionMarked>
                            </CtaDescription>
                        </CtaContainer>
                    </Container>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

