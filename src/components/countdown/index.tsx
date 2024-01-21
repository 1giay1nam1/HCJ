import { useEffect, useRef, useState } from "react";

export default function CountDown() {
    const [countDown, setCountDown] = useState(100);
    const [isValueCount, setIsValueCount] = useState(false);
    const countRef = useRef<number>();

    useEffect(() => {
        if (isValueCount) {
            countRef.current = window.setInterval(() => {
                setCountDown((prevCount) => prevCount - 1);
            }, 1000);
        } else {
            clearInterval(countRef.current);
        }

        return () => clearInterval(countRef.current);
    }, [isValueCount]);

    const handlePlay = () => {
        setIsValueCount(true);
    };

    const handlePause = () => {
        setIsValueCount(false);
    };

    const handleClear = () => {
        setIsValueCount(false);
        setCountDown(100);
    };

    return (
        <div>
            <h1>{countDown}</h1>
            <div>
                {!isValueCount && <button onClick={handlePlay}>Play </button>}
                {isValueCount && <button onClick={handlePause}>Pause</button>} {/* Corrected condition */}
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    );
}
