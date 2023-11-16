import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { Input, Props } from '../Input';

export function ControlledInput<FormType extends FieldValues>({
    control,
    name,
    ...rest
}: UseControllerProps<FormType> & Props) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur } }) => (
                <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    {...rest}
                />
            )}
        />
    );
}
