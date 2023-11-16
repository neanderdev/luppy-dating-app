import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { BadgeSelected } from '../../components/BadgeSelected';
import { Button } from '../../components/Button';
import { ProgressSteps } from '../../components/ProgressSteps';

import {
    BackButton,
    BackTitle,
    Container,
    Description,
    InfoContainer,
    ScrollView,
    Title
} from './styles';

type Temperaments = 'Playful' | 'Friendly' | 'Energetic' | 'Adaptable' | 'Calm' | 'Intelligent' | 'Protective' | 'Sensitive' | 'Loyal' | 'Spirited' | 'Trainable' | 'Watchful';
type Interests = 'Playing fetch' | 'Going for walks' | 'Swimming' | 'Digging' | 'Fetching balls' | 'Going to the park' | 'Giving paw' | 'Rolling over' | 'Going for hikes' | 'Playing dead' | 'Begging for treats' | 'Flyball';

const temperaments = ['Playful', 'Friendly', 'Energetic', 'Adaptable', 'Calm', 'Intelligent', 'Protective', 'Sensitive', 'Loyal', 'Spirited', 'Trainable', 'Watchful'] as Temperaments[];
const interests = ['Playing fetch', 'Going for walks', 'Swimming', 'Digging', 'Fetching balls', 'Going to the park', 'Giving paw', 'Rolling over', 'Going for hikes', 'Playing dead', 'Begging for treats', 'Flyball'] as Interests[];

export function SignUpStep3() {
    const [temperamentsSelected, setTemperamentsSelected] = useState<string[]>([]);
    const [interestsSelected, setInterestsSelected] = useState<string[]>([]);

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const { signIn } = useAuth();

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Container>
                        <ProgressSteps
                            numberArray={3}
                            currentIndex={2}
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

                        <BadgeSelected
                            title='Temperament:'
                            options={temperaments}
                            selected={temperamentsSelected}
                            onChangeSelected={(temperament) => {
                                const temperamentIndexByName = temperamentsSelected.findIndex((temperamentSelect) => temperamentSelect === temperament);

                                if (temperamentIndexByName === -1) {
                                    setTemperamentsSelected([...temperamentsSelected, temperament]);
                                } else {
                                    const newTemperaments = temperamentsSelected;

                                    newTemperaments.splice(temperamentIndexByName, 1);

                                    setTemperamentsSelected([...newTemperaments]);
                                }
                            }}
                        />

                        <BadgeSelected
                            title='Interests:'
                            options={interests}
                            selected={interestsSelected}
                            onChangeSelected={(interest) => {
                                const interestIndexByName = interestsSelected.findIndex((interestSelect) => interestSelect === interest);

                                if (interestIndexByName === -1) {
                                    setInterestsSelected([...interestsSelected, interest]);
                                } else {
                                    const newInterests = interestsSelected;

                                    newInterests.splice(interestIndexByName, 1);

                                    setInterestsSelected([...newInterests]);
                                }
                            }}
                        />

                        <Button
                            type='PRIMARY'
                            title='Continue'
                            onPress={() => signIn('mcspipoca47@gmail.com', '123456789')}
                        />
                    </Container>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
