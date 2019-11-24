import Highway from '@dogstudio/highway';

import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition{
    in({from, to, done}){

        const tl = new TimelineLite();
        tl
        .fromTo(to, 1, {opacity: "0"}, {opacity: "1",
        onComplete: function(){
            from.remove();
            done();
        }});
    }

    out({from, done}){
        done();
    }
}

export default Fade;