export function BasicTitle(
    {text, textSize, textWeight, mb }
    : { text: string; textSize:number; textWeight:number; mb: number }
) {

    const textStyle = {
        fontSize : `${textSize}px`, 
        fontWeight : textWeight, 
        letterSpacing : '-0.15px', 
        lineHeight : '20px',
        color: "#000000",
        fontFamily : "Pretendard", 
        fontStyle : "none",
        marginBottom : mb
    }

    return (
        <div>
            <p className="flex flex-row" style={textStyle}>{text}</p>
        </div>
    )
}