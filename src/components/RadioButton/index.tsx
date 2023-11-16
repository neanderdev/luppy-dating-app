import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    RadioButtonContainer,
    RadioButtonOption,
    RadioButtonOptionContent,
    RadioButtonOptionTitle,
    Title
} from './styles';

interface Props {
    title: string;
    options: any[];
    selected: string;
    onChangeSelected: (option: any) => void;
}

export function RadioButton({ title, options, selected, onChangeSelected }: Props) {
    return (
        <Container>
            <Title>{title}</Title>

            <RadioButtonContainer>
                {options.map((option, index) => (
                    <RadioButtonOptionContent key={String(index)}>
                        <RadioButtonOption
                            checked={selected === option}
                            onPress={() => onChangeSelected(option)}
                        >
                            {selected === option && <MaterialIcons name="check" size={20} color="#FFFFFF" />}
                        </RadioButtonOption>

                        <RadioButtonOptionTitle>{option}</RadioButtonOptionTitle>
                    </RadioButtonOptionContent>
                ))}
            </RadioButtonContainer>
        </Container>
    );
}
