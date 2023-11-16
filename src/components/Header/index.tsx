import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorStackRoutesProps } from '../../routes/app.stack.routes';

import {
    ButtonIcon,
    Container,
    IconsContainer,
    Logo,
    Title,
    TitleContainer
} from './styles';

interface Props {
    isHome?: boolean;
    isNotifications?: boolean;
    title: string;
}

export function Header({ isHome = false, isNotifications = false, title }: Props) {
    const navigation = useNavigation<AppNavigatorStackRoutesProps>();

    return (
        <Container>
            {
                isHome
                    ? <Logo />
                    : isNotifications
                        ? (
                            <TitleContainer>
                                <ButtonIcon onPress={() => navigation.goBack()}>
                                    <Feather name="chevron-left" size={24} color="white" />
                                </ButtonIcon>

                                <Title>{title}</Title>
                            </TitleContainer>
                        )
                        : (
                            <>
                                <ButtonIcon onPress={() => navigation.goBack()}>
                                    <Feather name="chevron-left" size={24} color="white" />
                                </ButtonIcon>

                                <Title>{title}</Title>
                            </>
                        )
            }

            {
                isNotifications
                    ? (
                        <IconsContainer>
                            <ButtonIcon>
                                <Feather name="info" size={24} color="white" />
                            </ButtonIcon>
                        </IconsContainer>
                    )
                    : (
                        <IconsContainer>
                            <ButtonIcon onPress={() => navigation.navigate('notifications')}>
                                <Feather name="bell" size={24} color="white" />
                            </ButtonIcon>

                            <ButtonIcon>
                                <Feather name="menu" size={24} color="white" />
                            </ButtonIcon>
                        </IconsContainer>
                    )
            }
        </Container>
    );
}

