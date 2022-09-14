import React from 'react';


function Keyboard() {



    return (
        <div>

        <div>
            Keyboard Component Here
        </div>

        {/* <!-- piano keys --> */}
    <section>
        <div class="piano"> 
            <div class="key white" data-note="C3"></div> 
            <div class="key black" data-note="Cs3"></div> 
            <div class="key white" data-note="D3"></div> 
            <div class="key black" data-note="Ds3"></div> 
            <div class="key white" data-note="E3"></div> 
            <div class="key white" data-note="F3"></div> 
            <div class="key black" data-note="Fs3"></div> 
            <div class="key white" data-note="G3"></div> 
            <div class="key black" data-note="Gs3"></div> 
            <div class="key white" data-note="A4"></div> 
            <div class="key black" data-note="As4"></div> 
            <div class="key white" data-note="B4"></div>

            <div class="key white" data-note="C4"></div> 
            <div class="key black" data-note="Cs4"></div> 
            <div class="key white" data-note="D4"></div> 
            <div class="key black" data-note="Ds4"></div> 
            <div class="key white" data-note="E4"></div> 
            {/* <!-- <div class="key white" data-note="F4"></div> 
            <div class="key black" data-note="Fs4"></div> 
            <div class="key white" data-note="G4"></div> 
            <div class="key black" data-note="Gs4"></div> 
            <div class="key white" data-note="A4"></div> 
            <div class="key black" data-note="As4"></div> 
            <div class="key white" data-note="B4"></div> --> */}
        </div>
    </section>

        </div>
    );

};

export default Keyboard;