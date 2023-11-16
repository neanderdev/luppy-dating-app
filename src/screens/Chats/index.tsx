import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { Avatar } from '../../components/Avatar';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import {
    Container,
    MatchesList,
    Message,
    MessageContainer,
    MessageInfo,
    MessageInfoDate,
    MessageInfoMessage,
    MessageInfoMessageAndDate,
    MessageInfoName,
    Messages,
    NewMatchesContainer,
    NewMatchesInfoContainer,
    NewMatchesInfoSeeAll,
    NewMatchesInfoTitle,
    ScrollView,
    Separator
} from './styles';

export function Chats() {
    const navigation = useNavigation<AppNavigatorStackRoutesProps>();

    return (
        <ScrollView>
            <Container>
                <Header
                    title='Chats'
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

                <NewMatchesContainer>
                    <NewMatchesInfoContainer>
                        <NewMatchesInfoTitle>New Matches</NewMatchesInfoTitle>

                        <NewMatchesInfoSeeAll>See all</NewMatchesInfoSeeAll>
                    </NewMatchesInfoContainer>

                    <MatchesList
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
                </NewMatchesContainer>

                <Messages>
                    <Separator />

                    {[1, 2, 3, 4, 5].map((item) => (
                        <MessageContainer key={String(item)} onPress={() => navigation.navigate('chat')}>
                            <Message>
                                <Avatar
                                    size='MEDIUM'
                                    status='OFFLINE'
                                    url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                />

                                <MessageInfo>
                                    <MessageInfoName>Luna Cutipie</MessageInfoName>

                                    <MessageInfoMessageAndDate>
                                        <MessageInfoMessage>OK! sounds good.</MessageInfoMessage>

                                        <MessageInfoDate>10:05 AM</MessageInfoDate>
                                    </MessageInfoMessageAndDate>
                                </MessageInfo>
                            </Message>

                            <Separator />
                        </MessageContainer>
                    ))}
                </Messages>
            </Container>
        </ScrollView>
    );
}
