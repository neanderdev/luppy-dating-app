import { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    ErrorMessage,
    Label,
    TextInput,
    TextInputContainer
} from './styles';

export interface Props extends TextInputProps {
    label?: string;
    error?: null | undefined | string;
    icon?: ReactNode;
}

export function Input({ label, icon, error, ...rest }: Props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            {label && <Label>{label}</Label>}

            <TextInputContainer>
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onSubmitEditing={() => setIsFocused(false)}
                    onEndEditing={() => setIsFocused(false)}
                    isFocused={isFocused}
                    {...rest}
                />

                {icon}
            </TextInputContainer>

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
}
