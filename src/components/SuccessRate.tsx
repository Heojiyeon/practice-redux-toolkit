import { useAppSelector } from "../redux/hooks";
import { selectSuccessRate } from "../redux/modules/todo";

export default function SuccessRate() {
    const successRate = useAppSelector(selectSuccessRate);

    return (
        <div>
            SuccessRate {successRate}%
        </div>
    )
}