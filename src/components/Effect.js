import React from 'react';
import useSound from 'use-sound';

import click1 from '../components/assets/sounds/01-C3.mp3';



function Effect() {

    const [playclick1] = useSound(click1);

    return (
        <div>

            <div>
                Effects (Metronome for now) Component Here
            </div>

            <div>
                <button onClick={playclick1}>Sound!</button>
            </div>

        </div>
    )

}


export default Effect;