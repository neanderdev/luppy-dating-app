import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import { AddAvatarButton } from '../../components/AddAvatarButton';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { VerifiedUser } from '../../components/VerifiedUser';

import {
    ButtonWrapper,
    CardPlan,
    CardProfile,
    Container,
    Description,
    NamePlan,
    Plans,
    PricePlan,
    ScrollView,
    Username,
    UsernameContainer
} from './styles';

export function Profile() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigation = useNavigation<AppNavigatorStackRoutesProps>();

    return (
        <ScrollView>
            <Container>
                <Header
                    title='Profile'
                />

                <CardProfile>
                    <AddAvatarButton
                        onPress={() => console.log('add avatar')}
                    />

                    <UsernameContainer>
                        <Username>Loki</Username>

                        <VerifiedUser />
                    </UsernameContainer>

                    <Description>2 Yo, Bulldog</Description>

                    <Badge
                        type='PRIMARY'
                        title='Complete My Profile'
                        onPress={() => navigation.navigate('editProfile')}
                    />
                </CardProfile>

                <Plans
                    data={[1, 2, 3]}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item, index }) => (
                        <CardPlan
                            onPress={() => setCurrentIndex(index)}
                            selected={item === (currentIndex + 1)}
                            activeOpacity={1}
                        >
                            <Feather name="star" size={24} color="white" />

                            <NamePlan>No ads</NamePlan>

                            <PricePlan>$4,99</PricePlan>
                        </CardPlan>
                    )}
                    contentContainerStyle={{ gap: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <ButtonWrapper>
                    <Button
                        type='PRIMARY'
                        title='Upgrade from $2,99'
                    />
                </ButtonWrapper>
            </Container>
        </ScrollView>
    );
}
