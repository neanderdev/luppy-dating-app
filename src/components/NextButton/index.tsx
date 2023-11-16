import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Circle, G } from "react-native-svg";

import {
    Button,
    Container
} from './styles';

interface Props {
    percentage: number;
    scrollTo: () => void;
}

export function NextButton({ percentage, scrollTo }: Props) {
    const size = 84;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressRef = useRef<any>(null);
    const progressAnimation = useRef(new Animated.Value(0)).current;

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        });

        return () => {
            progressAnimation.removeAllListeners();
        }
    });

    return (
        <Container>
            <Svg width={size} height={size} fill="transparent">
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke="transparent"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />

                    <Circle
                        ref={progressRef}
                        stroke="#ef7d85"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>

            <Button onPress={scrollTo} activeOpacity={0.6}>
                <AntDesign name="arrowright" size={24} color="#FFFFFF" />
            </Button>
        </Container>
    )
}