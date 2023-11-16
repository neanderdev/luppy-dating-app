import {
    Badge,
    BadgeTitle,
    Badges,
    Container,
    Title
} from './styles';

interface Props {
    title: string;
    options: any[];
    selected: string[];
    onChangeSelected: (option: any) => void;
}

export function BadgeSelected({ title, options, selected, onChangeSelected }: Props) {
    return (
        <Container>
            <Title>{title}</Title>

            <Badges>
                {options.map((option, index) => (
                    <Badge
                        key={String(index)}
                        selected={selected.includes(option)}
                        onPress={() => onChangeSelected(option)}
                    >
                        <BadgeTitle
                            selected={selected.includes(option)}
                        >
                            {option}
                        </BadgeTitle>
                    </Badge>
                ))}
            </Badges>
        </Container>
    );
}
