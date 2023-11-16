import {
    Container,
    Tab,
    Title
} from './styles';

interface Props {
    tabs: {
        title: string;
        onPress: () => void;
    }[];
    tabSelected: string;
}

export function Tabs({ tabs, tabSelected }: Props) {
    return (
        <Container>
            {tabs.map((tab, index) => (
                <Tab
                    key={String(index)}
                    selected={tab.title === tabSelected}
                    onPress={() => tab.onPress()}
                >
                    <Title
                        selected={tab.title === tabSelected}
                    >
                        {tab.title}
                    </Title>
                </Tab>
            ))}
        </Container>
    );
}
