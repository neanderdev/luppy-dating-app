import { Feather } from '@expo/vector-icons';

import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import {
    ButtonsWrapper,
    Container,
    DateAndTime,
    Description,
    InfoContainer,
    Location,
    MemberAddParticipant,
    MemberAdminContainer,
    MemberAdminInfo,
    MemberAdminName,
    MemberAdminRole,
    Members,
    Name,
    ScrollView,
    SeeAll,
    Title,
    TitleContainer
} from './styles';

export function Event() {
    return (
        <ScrollView>
            <Container>
                <Header
                    title='Home'
                />

                <InfoContainer>
                    <Title>Event Name</Title>

                    <Name>Dog Costume Contest</Name>
                </InfoContainer>

                <InfoContainer>
                    <Title>Event Description</Title>

                    <Description>Dress up your dog in their most outrageous costume for a chance to win prizes! There will be categories for funniest, most creative, and best overall costume.</Description>
                </InfoContainer>

                <InfoContainer>
                    <Title>Event Date & Time</Title>

                    <DateAndTime>October 28, 2023 . 10:00 AM - 2:00 PM</DateAndTime>
                </InfoContainer>

                <InfoContainer>
                    <Title>Event Location</Title>

                    <Location>Bark Park 123 Main Street - Anytown, CA 12345</Location>
                </InfoContainer>

                <InfoContainer>
                    <TitleContainer>
                        <Title>Members</Title>

                        <SeeAll>See all</SeeAll>
                    </TitleContainer>

                    <Members>
                        <Avatar
                            size='MEDIUM'
                            status='ONLINE'
                            url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />

                        <Avatar
                            size='MEDIUM'
                            status='ONLINE'
                            url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />

                        <Avatar
                            size='MEDIUM'
                            status='ONLINE'
                            url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />

                        <Avatar
                            size='MEDIUM'
                            status='ONLINE'
                            url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />

                        <MemberAddParticipant>
                            <Feather name="plus" size={24} color="#E2DAEC" />
                        </MemberAddParticipant>
                    </Members>
                </InfoContainer>

                <InfoContainer>
                    <Title>Group Admin</Title>

                    <MemberAdminContainer>
                        <Avatar
                            size='MEDIUM'
                            status='ONLINE'
                            url='https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />

                        <MemberAdminInfo>
                            <MemberAdminName>Luna Cutipie</MemberAdminName>

                            <MemberAdminRole>Admin</MemberAdminRole>
                        </MemberAdminInfo>
                    </MemberAdminContainer>
                </InfoContainer>

                <ButtonsWrapper>
                    <Button
                        type='PRIMARY'
                        title='Join Us'
                    />

                    <Button
                        type='OUTLINE'
                        title='Create Event'
                    />
                </ButtonsWrapper>
            </Container>
        </ScrollView>
    );
}
