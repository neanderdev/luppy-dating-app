import { Entypo, Feather } from '@expo/vector-icons';

import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Input } from '../../components/Input';

import {
    BadgeContainer,
    Container,
    Footer,
    FooterIconButton,
    Header,
    HeaderCallsIcons,
    HeaderIconButton,
    HeaderInfo,
    HeaderInfoContainer,
    HeaderInfoName,
    HeaderInfoNameAndStatus,
    HeaderInfoStatus,
    InputContainer,
    Message,
    MessageName,
    MessageText,
    MessageTextContainer,
    Messages,
    MessagesContainer,
    Separator
} from "./styles";

export function Chat() {
    return (
        <Container>
            <Header>
                <HeaderInfoContainer>
                    <HeaderIconButton>
                        <Feather name="chevron-left" size={24} color="white" />
                    </HeaderIconButton>

                    <HeaderInfo>
                        <Avatar
                            size='SMALL'
                            status='ONLINE'
                            url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />

                        <HeaderInfoNameAndStatus>
                            <HeaderInfoName>Luna Cutipie</HeaderInfoName>

                            <HeaderInfoStatus>Active Now</HeaderInfoStatus>
                        </HeaderInfoNameAndStatus>
                    </HeaderInfo>
                </HeaderInfoContainer>

                <HeaderCallsIcons>
                    <HeaderIconButton>
                        <Feather name="video" size={24} color="white" />
                    </HeaderIconButton>

                    <HeaderIconButton>
                        <Feather name="phone" size={24} color="white" />
                    </HeaderIconButton>
                </HeaderCallsIcons>
            </Header>

            <Separator />

            <BadgeContainer>
                <Badge
                    type='SECONDARY'
                    title='today'
                    onPress={() => { }}
                />
            </BadgeContainer>

            <MessagesContainer
                data={[1, 2]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => (
                    <Messages author={Number(item) % 2 === 0}>
                        {Number(item) % 2 !== 0 && (
                            <Avatar
                                size='SMALL'
                                status='OFFLINE'
                                url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            />
                        )}

                        <Message author={Number(item) % 2 === 0}>
                            <MessageName>Luna Cutiepie</MessageName>

                            <MessageTextContainer>
                                <MessageText>Hi, Loki</MessageText>
                            </MessageTextContainer>

                            <MessageTextContainer>
                                <MessageText>Are you free today?</MessageText>
                            </MessageTextContainer>
                        </Message>

                        {Number(item) % 2 === 0 && (
                            <Avatar
                                size='SMALL'
                                status='ONLINE'
                                url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            />
                        )}
                    </Messages>
                )}
                contentContainerStyle={{ gap: 10 }}
            />

            <Separator />

            <Footer>
                <FooterIconButton>
                    <Feather name="archive" size={24} color="white" />
                </FooterIconButton>

                <InputContainer>
                    <Input
                        placeholder='Write your message'
                        placeholderTextColor='white'
                        icon={<FooterIconButton
                            style={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                            }}
                        >
                            <Feather
                                name='send'
                                size={24}
                                color="white"
                            />
                        </FooterIconButton>}
                    />
                </InputContainer>

                <FooterIconButton>
                    <Entypo name="attachment" size={24} color="white" />
                </FooterIconButton>
            </Footer>
        </Container>
    )
}
