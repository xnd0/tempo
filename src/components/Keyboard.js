import { React, useEffect } from 'react';
import useSound from 'use-sound';

import C3 from '../components/assets/sounds/synth_audio/01-C3.mp3';
import Cs3 from '../components/assets/sounds/synth_audio/02-Cs3.mp3';
import D3 from '../components/assets/sounds/synth_audio/03-D3.mp3';
import Ds3 from '../components/assets/sounds/synth_audio/04-Ds3.mp3';
import E3 from '../components/assets/sounds/synth_audio/05-E3.mp3';
import F3 from '../components/assets/sounds/synth_audio/06-F3.mp3';
import Fs3 from '../components/assets/sounds/synth_audio/07-Fs3.mp3';
import G3 from '../components/assets/sounds/synth_audio/08-G3.mp3';
import Gs3 from '../components/assets/sounds/synth_audio/09-Gs3.mp3';
import A4 from '../components/assets/sounds/synth_audio/10-A4.mp3';
import As4 from '../components/assets/sounds/synth_audio/11-As4.mp3';
import B4 from '../components/assets/sounds/synth_audio/12-B4.mp3';

import C4 from '../components/assets/sounds/synth_audio/13-C4.mp3';
import Cs4 from '../components/assets/sounds/synth_audio/14-Cs4.mp3';
import D4 from '../components/assets/sounds/synth_audio/15-D4.mp3';
import Ds4 from '../components/assets/sounds/synth_audio/16-Ds4.mp3';
import E4 from '../components/assets/sounds/synth_audio/17-E4.mp3';



function Keyboard() {

    const [playC3] = useSound(C3);
    const [playCs3] = useSound(Cs3);
    const [playD3] = useSound(D3);
    const [playDs3] = useSound(Ds3);
    const [playE3] = useSound(E3);
    const [playF3] = useSound(F3);
    const [playFs3] = useSound(Fs3);
    const [playG3] = useSound(G3);
    const [playGs3] = useSound(Gs3);
    const [playA4] = useSound(A4);
    const [playAs4] = useSound(As4);
    const [playB4] = useSound(B4);

    const [playC4] = useSound(C4);
    const [playCs4] = useSound(Cs4);
    const [playD4] = useSound(D4);
    const [playDs4] = useSound(Ds4);
    const [playE4] = useSound(E4);



    useEffect(() => {
        document.addEventListener('keydown', WhichKey)
    }, [])

    const WhichKey = (e) => {
        console.log("Key Press Is: ", e.key);

        if (e.key === 's') {
            playC3();
        };
        if (e.key === 'e') {
            playCs3();
        };
        if (e.key === 'd') {
            playD3();
        };
        if (e.key === 'r') {
            playDs3();
        };
        if (e.key === 'f') {
            playE3();
        };
        if (e.key === 'g') {
            playF3();
        };
        if (e.key === 'y') {
            playFs3();
        };
        if (e.key === 'h') {
            playG3();
        };
        if (e.key === 'u') {
            playGs3();
        };
        if (e.key === 'j') {
            playA4();
        };
        if (e.key === 'i') {
            playAs4();
        };
        if (e.key === 'k') {
            playB4();
        };
        if (e.key === 'l') {
            playC4();
        };
        if (e.key === 'p') {
            playCs4();
        };
        if (e.key === ';') {
            playD4();
        };
        if (e.key === '[') {
            playDs4();
        };
        if (e.key === "'") {
            playDs4();
        };










    };



    return (
        <div>

            <div>
                Keyboard Component Here
            </div>


            {/* <!-- piano keys --> */}
            <section>
                <div className="piano">
                    <div className="key white" data-note="C3"
                    onClick={playC3}></div>
                    <div className="key black" data-note="Cs3"
                    onClick={playCs3}></div>
                    <div className="key white" data-note="D3"
                    onClick={playD3}></div>
                    <div className="key black" data-note="Ds3"
                    onClick={playDs3}></div>
                    <div className="key white" data-note="E3"
                    onClick={playE3}></div>
                    <div className="key white" data-note="F3"
                    onClick={playF3}></div>
                    <div className="key black" data-note="Fs3"
                    onClick={playFs3}></div>
                    <div className="key white" data-note="G3"
                    onClick={playG3}></div>
                    <div className="key black" data-note="Gs3"
                    onClick={playGs3}></div>
                    <div className="key white" data-note="A4"
                    onClick={playA4}></div>
                    <div className="key black" data-note="As4"
                    onClick={playAs4}></div>
                    <div className="key white" data-note="B4"
                    onClick={playB4}></div>

                    <div className="key white" data-note="C4"
                    onClick={playC4}></div>
                    <div className="key black" data-note="Cs4"
                    onClick={playCs4}></div>
                    <div className="key white" data-note="D4"
                    onClick={playD4}></div>
                    <div className="key black" data-note="Ds4"
                    onClick={playDs4}></div>
                    <div className="key white" data-note="E4"
                    onClick={playE4}></div>
                    {/* <!-- <div className="key white" data-note="F4"></div> 
            <div className="key black" data-note="Fs4"></div> 
            <div className="key white" data-note="G4"></div> 
            <div className="key black" data-note="Gs4"></div> 
            <div className="key white" data-note="A4"></div> 
            <div className="key black" data-note="As4"></div> 
            <div className="key white" data-note="B4"></div> --> */}
                </div>
            </section>

        </div>
    );

};

export default Keyboard;