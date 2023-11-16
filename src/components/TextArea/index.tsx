import { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    Label,
    TextAreaInput,
    TextAreaMessage,
    TextInputContainer
} from './styles';

interface Props extends TextInputProps {
    label?: string;
    text?: string;
}

export function TextArea({ label, text, ...rest }: Props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            {label && <Label>{label}</Label>}

            <TextInputContainer>
                <TextAreaInput
                    onFocus={() => setIsFocused(true)}
                    onSubmitEditing={() => setIsFocused(false)}
                    onEndEditing={() => setIsFocused(false)}
                    isFocused={isFocused}
                    {...rest}
                />

                {label && <TextAreaMessage>{text}</TextAreaMessage>}
            </TextInputContainer>
        </Container>
    );
}
