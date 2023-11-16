import {
    Container,
    Progress
} from './styles';

interface Props {
    percentage: number;
}

export function ProgressBar({ percentage }: Props) {
    return (
        <Container>
            <Progress
                percentage={percentage}
            />
        </Container>
    );
}
