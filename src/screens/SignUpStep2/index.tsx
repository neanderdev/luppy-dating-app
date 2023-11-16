import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ProgressSteps } from '../../components/ProgressSteps';
import { RadioButton } from '../../components/RadioButton';

import {
    BackButton,
    BackTitle,
    Container,
    Description,
    InfoContainer,
    ScrollView,
    Title
} from './styles';

type Genders = 'Male' | 'Female';
type Sizes = 'S' | 'M' | 'L';

const genders = ['Male', 'Female'] as Genders[];
const sizes = ['S', 'M', 'L'] as Sizes[];

export function SignUpStep2() {
    const [genderSelected, setGenderSelected] = useState<'Male' | 'Female'>('Male');
    const [sizeSelected, setSizeSelected] = useState<'S' | 'M' | 'L'>('S');

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Container>
                        <ProgressSteps
                            numberArray={3}
                            currentIndex={1}
                        />

                        <BackButton onPress={() => navigation.goBack()}>
                            <Feather name="chevron-left" size={24} color="#E2DAEC" />

                            <BackTitle>
                                Back
                            </BackTitle>
                        </BackButton>

                        <InfoContainer>
                            <Title>Tell us about your 🐶’ soulmate</Title>

                            <Description>Help us find the perfect match for your dog by providing some information about them.</Description>
                        </InfoContainer>

                        <Input
                            label="Dog's Name"
                            placeholder="Enter your dog's name"
                            placeholderTextColor='#726c7d'
                        />

                        <Input
                            label="Dog's Age"
                            placeholder="Enter your dog's age"
                            keyboardType='numbers-and-punctuation'
                            placeholderTextColor='#726c7d'
                        />

                        <Input
                            label="Breed"
                            placeholder="Enter your dog's breed"
                            placeholderTextColor='#726c7d'
                        />

                        <RadioButton
                            title='Gender:'
                            options={genders}
                            selected={genderSelected}
                            onChangeSelected={(option) => setGenderSelected(option)}
                        />

                        <RadioButton
                            title='Sizes:'
                            options={sizes}
                            selected={sizeSelected}
                            onChangeSelected={(option) => setSizeSelected(option)}
                        />

                        <Button
                            type='PRIMARY'
                            title='Continue'
                            onPress={() => navigation.navigate('signUpStep3')}
                        />
                    </Container>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
