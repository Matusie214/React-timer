import React from 'react';
import "./CountDown.css";
import{hourMinuteToSeconds, secondsToHourMinuteSecond} from "./utils";
import PropTypes from 'prop-types';
import Overlay from "./Overlay"
const Countdown= props =>{
    const eventInSeconds=(hourMinuteToSeconds(props.hour,props.minute))
    const nowInSeconds=(hourMinuteToSeconds(props.timeNow.hour,props.timeNow.minute))+props.timeNow.seconds;
    
    const diff=(eventInSeconds-nowInSeconds)
    const diffText=diff>0?secondsToHourMinuteSecond(diff):"tommorow"
    return(<div className="countDown">
        <strong>{props.name}</strong> - {diffText}
        <div className="countdown_icons">
            <i className="icon edit" onClick={()=>props.onEditInit(props.id)}></i>
            <i className="icon times" onClick={()=>props.onRemove(props.id)}></i>
        </div>
        <Overlay>
            <h1>{props.name}</h1>
            <p>{props.hour.toString().padStart(2,0)}:{props.minute.toString().padStart(2,0)}</p>
        </Overlay>

    </div>);
};

Countdown.propTypes={
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    timeNow: PropTypes.shape({
        hour:PropTypes.number,
        minute: PropTypes.number,
        seconds: PropTypes.number
    }),
    onEditInit: PropTypes.func,
    onRemove: PropTypes.func

}

export default Countdown;