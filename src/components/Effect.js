import React, { useContext } from 'react';
import useSound from 'use-sound';

import click1 from '../components/assets/sounds/clapclick.mp3';



function Effect() {

    const [playclick1] = useSound(click1);

    function metroLoop() {
        setInterval(() => {
            playclick1();
        }, 1000);
    }

    // function newAudioContext() {
    //     var context = new AudioContext();
    //     context.resume().then(() => {
    //         console.log('Playback resumed successfully');
    //       });
    // }


    return (
        <div>

            {/* <div>
                <button onClick={newAudioContext()}>AudioContext!</button>
            </div> */}

            <div>
                Effects (Metronome for now) Component Here
            </div>

            <div>
                <button onClick={metroLoop}>Metronome (1000ms)</button>
            </div>

        </div>
    )

}


export default Effect;