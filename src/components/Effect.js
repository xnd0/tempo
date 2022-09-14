import React from 'react';
import useSound from 'use-sound';

import click1 from '../components/assets/sounds/clapclick.mp3';



function Effect() {

    const [playclick1] = useSound(click1);

    function metroLoop() {
        setInterval(() => {
            playclick1();
        }, 1000);

    }


    return (
        <div>

            <div>
                Effects (Metronome for now) Component Here
            </div>

            <div>
                <button onClick={metroLoop}>Sound Forever (1000ms)!</button>
            </div>

        </div>
    )

}


export default Effect;