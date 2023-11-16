import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { GroupsAvatar } from '../../components/GroupsAvatar';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { VerifiedUser } from '../../components/VerifiedUser';

import {
    Container,
    EventContainer,
    EventDate,
    EventDescription,
    EventInfo,
    EventInfoLocale,
    EventInfoLocaleContainer,
    EventInfoTitle,
    FlatList,
    HeaderOptionContainer,
    OptionContainer,
    PopularDogDescription,
    PopularDogImage,
    PopularDogInfo,
    PopularDogName,
    PopularDogNameContainer,
    PopularDogs,
    ScrollView,
    SeeAll,
    Title,
    TopEvent
} from './styles';

export function Home() {
    const navigation = useNavigation<AppNavigatorStackRoutesProps>();

    return (
        <ScrollView>
            <Container>
                <Header
                    isHome
                    title='Home'
                />

                <Input
                    placeholder='Search'
                    placeholderTextColor='#726c7d'
                    icon={<Feather
                        name="search"
                        size={24}
                        color="#726C7D"
                        style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                        }}
                    />}
                />

                <OptionContainer>
                    <HeaderOptionContainer>
                        <Title>New Matches</Title>

                        <SeeAll>See all</SeeAll>
                    </HeaderOptionContainer>

                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => (
                            <Avatar
                                size='MEDIUM'
                                status='ONLINE'
                                url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            />
                        )}
                        contentContainerStyle={{ gap: 15 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </OptionContainer>

                <OptionContainer>
                    <HeaderOptionContainer>
                        <Title>Popular Dogs</Title>

                        <SeeAll>See all</SeeAll>
                    </HeaderOptionContainer>

                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => (
                            <PopularDogs>
                                <PopularDogImage
                                    source={{ uri: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                />

                                <PopularDogInfo>
                                    <PopularDogNameContainer>
                                        <PopularDogName>Bobi</PopularDogName>

                                        <VerifiedUser
                                            verified
                                        />
                                    </PopularDogNameContainer>

                                    <PopularDogDescription>1 Yo, Poil Long</PopularDogDescription>
                                </PopularDogInfo>
                            </PopularDogs>
                        )}
                        contentContainerStyle={{ gap: 5 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </OptionContainer>

                <OptionContainer>
                    <HeaderOptionContainer>
                        <Title>Top Events</Title>

                        <SeeAll>See all</SeeAll>
                    </HeaderOptionContainer>

                    <FlatList
                        data={[1, 2, 3]}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => (
                            <TopEvent>
                                <EventDate>September 30, 2023</EventDate>

                                <EventInfo>
                                    <EventInfoTitle>Puppy Playdate</EventInfoTitle>

                                    <EventInfoLocaleContainer>
                                        <Feather name="map-pin" size={16} color="white" />

                                        <EventInfoLocale>Dog Park</EventInfoLocale>
                                    </EventInfoLocaleContainer>
                                </EventInfo>

                                <EventDescription>
                                    Bring your 🐶 friend for a day of fun and socialization with other puppies. There ...
                                </EventDescription>

                                <EventContainer>
                                    <GroupsAvatar
                                        avatars={[
                                            'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                            'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                            'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                            'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                            'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        ]}
                                    />

                                    <Badge
                                        type='OUTLINE'
                                        title='Join Us'
                                        onPress={() => navigation.navigate('event')}
                                    />
                                </EventContainer>
                            </TopEvent>
                        )}
                        contentContainerStyle={{ gap: 15 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </OptionContainer>
            </Container>
        </ScrollView>
    );
}
