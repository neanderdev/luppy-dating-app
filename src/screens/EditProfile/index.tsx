import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { Badge } from '../../components/Badge';
import { BadgeSelected } from '../../components/BadgeSelected';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { RadioButton } from '../../components/RadioButton';
import { SliderRange } from '../../components/SliderRange';
import { Switch } from '../../components/Switch';
import { Tabs } from '../../components/Tabs';
import { TextArea } from '../../components/TextArea';

import {
    BasicInformationContainer,
    Container,
    Description,
    Info,
    InterestsAndPreferencesContainer,
    OptionContainer,
    OptionTitle,
    Picture,
    PictureAddButton,
    Pictures,
    PicturesContainer,
    ProfilePicturesContainer,
    ScrollView,
    Separator,
    SocialMedia,
    SocialMediaContainer,
    SocialMediaIcon,
    SocialMediaTitle,
    Title,
    TitleContainer
} from './styles';

type Genders = 'Male' | 'Female';
type Sizes = 'S' | 'M' | 'L';
type Temperaments = 'Playful' | 'Friendly' | 'Energetic' | 'Adaptable' | 'Calm' | 'Intelligent' | 'Protective' | 'Sensitive' | 'Loyal' | 'Spirited' | 'Trainable' | 'Watchful';
type Interests = 'Playing fetch' | 'Going for walks' | 'Swimming' | 'Digging' | 'Fetching balls' | 'Going to the park' | 'Giving paw' | 'Rolling over' | 'Going for hikes' | 'Playing dead' | 'Begging for treats' | 'Flyball';
type Training = 'Yes' | 'No';
type SpecialNeeds = 'None' | 'Deaf' | 'Blind' | 'Disabled' | 'Other';

const genders = ['Male', 'Female'] as Genders[];
const sizes = ['S', 'M', 'L'] as Sizes[];
const temperaments = ['Playful', 'Friendly', 'Energetic', 'Adaptable', 'Calm', 'Intelligent', 'Protective', 'Sensitive', 'Loyal', 'Spirited', 'Trainable', 'Watchful'] as Temperaments[];
const interests = ['Playing fetch', 'Going for walks', 'Swimming', 'Digging', 'Fetching balls', 'Going to the park', 'Giving paw', 'Rolling over', 'Going for hikes', 'Playing dead', 'Begging for treats', 'Flyball'] as Interests[];
const training = ['Yes', 'No'] as Training[];
const specialNeeds = ['None', 'Deaf', 'Blind', 'Disabled', 'Other'] as SpecialNeeds[];

export function EditProfile() {
    const [genderSelected, setGenderSelected] = useState<'Male' | 'Female'>('Male');
    const [sizeSelected, setSizeSelected] = useState<'S' | 'M' | 'L'>('S');
    const [temperamentsSelected, setTemperamentsSelected] = useState<string[]>([]);
    const [interestsSelected, setInterestsSelected] = useState<string[]>([]);
    const [trainingSelected, setTrainingSelected] = useState<'Yes' | 'No'>('Yes');
    const [specialNeedsSelected, setSpecialNeedsSelected] = useState<'None' | 'Deaf' | 'Blind' | 'Disabled' | 'Other'>('None');
    const [socialMedia, setSocialMedia] = useState(false);

    const navigation = useNavigation<AppNavigatorStackRoutesProps>();

    return (
        <ScrollView>
            <Container>
                <Header
                    title='Edit Profile'
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
                    tabSelected='Edit'
                />

                <ProfilePicturesContainer>
                    <Info>
                        <Title>Profile pictures:</Title>

                        <Description>Upload a new profile picture for your dog.</Description>
                    </Info>

                    <PicturesContainer>
                        <Pictures>
                            <PictureAddButton url='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'>
                                <Picture
                                    source={{ uri: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8' }}
                                />
                            </PictureAddButton>

                            <PictureAddButton url='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'>
                                <Picture
                                    source={{ uri: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8' }}
                                />
                            </PictureAddButton>

                            <PictureAddButton url={null}>
                                <Feather name="plus-circle" size={24} color="#E2DAEC" />
                            </PictureAddButton>
                        </Pictures>

                        <Pictures>
                            <PictureAddButton url={null}>
                                <Feather name="plus-circle" size={24} color="#E2DAEC" />
                            </PictureAddButton>

                            <PictureAddButton url={null}>
                                <Feather name="plus-circle" size={24} color="#E2DAEC" />
                            </PictureAddButton>

                            <PictureAddButton url={null}>
                                <Feather name="plus-circle" size={24} color="#E2DAEC" />
                            </PictureAddButton>
                        </Pictures>
                    </PicturesContainer>
                </ProfilePicturesContainer>

                <Separator />

                <BasicInformationContainer>
                    <Info>
                        <Title>Basic Information</Title>

                        <Description>Tell us more about your 🐶’ friend</Description>
                    </Info>

                    <Input
                        label="Dog's Name"
                        placeholder="Enter your dog's name"
                        placeholderTextColor='#726c7d'
                    />

                    <TextArea
                        label="About Your 🐶"
                        placeholder="Tell us about your dog."
                        placeholderTextColor='#726c7d'
                        multiline
                        numberOfLines={15}
                        text='0/450'
                    />

                    <Input
                        label="Dog's Age"
                        placeholder="Enter your dog's age"
                        keyboardType='number-pad'
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
                </BasicInformationContainer>

                <Separator />

                <InterestsAndPreferencesContainer>
                    <Info>
                        <Title>Interests and Preferences</Title>

                        <Description>What does your dog love?</Description>
                    </Info>

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

                    <OptionContainer>
                        <OptionTitle>Energy Level</OptionTitle>

                        <SliderRange
                            minimumValue={1}
                            maximumValue={10}
                            step={1}
                            minimumTrackTintColor="#E9525F"
                            maximumTrackTintColor="#E2DAEC"
                            thumbTintColor="#E2DAEC"
                            value={5}
                        />
                    </OptionContainer>

                    <RadioButton
                        title='Training:'
                        options={training}
                        selected={trainingSelected}
                        onChangeSelected={(option) => setTrainingSelected(option)}
                    />

                    <RadioButton
                        title='Special Needs:'
                        options={specialNeeds}
                        selected={specialNeedsSelected}
                        onChangeSelected={(option) => setSpecialNeedsSelected(option)}
                    />
                </InterestsAndPreferencesContainer>

                <Separator />

                <SocialMediaContainer>
                    <Info>
                        <TitleContainer>
                            <Title>Social Media</Title>

                            <Switch
                                trackColor={{ false: '#ffffff', true: '#C0325D' }}
                                ios_backgroundColor='#ffffff'
                                thumbColor={socialMedia ? '#ffffff' : '#726C7D'}
                                value={socialMedia}
                                onChange={() => setSocialMedia(!socialMedia)}
                            />
                        </TitleContainer>

                        <Description>Connect with your dog's pawsome pack</Description>
                    </Info>

                    <SocialMedia>
                        <SocialMediaIcon>
                            <FontAwesome name="instagram" size={24} color="#FFFFFF" />

                            <SocialMediaTitle>Instagram</SocialMediaTitle>
                        </SocialMediaIcon>

                        <Badge
                            type='OUTLINE'
                            title='Connect'
                            onPress={() => { }}
                        />
                    </SocialMedia>

                    <SocialMedia>
                        <SocialMediaIcon>
                            <FontAwesome name="whatsapp" size={24} color="#FFFFFF" />

                            <SocialMediaTitle>WhatsApp</SocialMediaTitle>
                        </SocialMediaIcon>

                        <Badge
                            type='OUTLINE'
                            title='Connect'
                            onPress={() => { }}
                        />
                    </SocialMedia>

                    <SocialMedia>
                        <SocialMediaIcon>
                            <FontAwesome name="facebook-square" size={24} color="#FFFFFF" />

                            <SocialMediaTitle>Facebook</SocialMediaTitle>
                        </SocialMediaIcon>

                        <Badge
                            type='OUTLINE'
                            title='Connect'
                            onPress={() => { }}
                        />
                    </SocialMedia>
                </SocialMediaContainer>
            </Container>
        </ScrollView>
    );
}
