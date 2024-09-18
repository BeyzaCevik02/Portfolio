const ProgressBar = ({ value, max, backgroundColor, height, borderRadius }) => {
    const width = `${(value / max) * 100}%`;

    const progressBarStyle = {
        width,
        backgroundColor,
        height,
        borderRadius,
        transition: 'width 0.5s ease', 
    };

    return (
        <div
            className="progress__bar"
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax={max}
            style={progressBarStyle}
        />
    );
};

export default ProgressBar;
