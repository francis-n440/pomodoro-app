const Timer = () => {

    const options = ["Pomodoro", "Short Break", "Long Break"]

    return (
        <div className="timer-container">
            <div className="timer-top">
                {
                    options.map((option, index) => {
                        return (
                            <button key={index} className='timer-top-btn'>{option}</button>
                        )
                    })
                }
            </div>
            <div id="timeOutput" className="timer-middle">00:00</div>
            <div className="timer-bottom">
              <button id="startBtn" className="timer-bottom-btn">START</button>
            </div>      
        </div>
    )
}

export default Timer;