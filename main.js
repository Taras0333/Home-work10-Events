
         function playSound (sourse){
             const sound = new Audio();
             sound.preload = 'auto';
             sound.src = sourse;
             sound.play();
        }

const btn = document.querySelectorAll('.item');


document.addEventListener('keydown', function(event) {
        switch (event.code){
                case 'KeyA':
                        playSound ('.//sounds/10302_1369836097.mp3');
                        break;
                case 'KeyS':
                        playSound ('.//sounds/14152_1459951867.mp3');
                        break;
                case 'KeyD':
                        playSound ('.//sounds/14153_1459951867.mp3');
                        break;
                case 'KeyF':
                        playSound ('.//sounds/14741_1460058298.mp3);
                        break;
                case 'KeyG':
                        playSound ('.//sounds/19117_MusicBass_DIGIJ03-93-2.mp3');
                        break;
                case 'KeyH':
                        playSound ('.//sounds/103031369836097.mp3');
                        break;
        }

});

        for(let i = 0; i < btn.length; i++){
                btn[i].classList += ' item' + [i + 1];
        }

         for(let i = 0; i < btn.length; i++){
                 btn[i].addEventListener('click', function(el){
                         if(el.target.classList.contains('item1')){
                                 playSound('.//sounds/10302_1369836097.mp3');
                         } else if(el.target.classList.contains('item2')){
                                 playSound ('.//sounds/14152_1459951867.mp3')
                         } else if(el.target.classList.contains('item3')){
                                 playSound ('.//sounds/14153_1459951867.mp3')
                         } else if(el.target.classList.contains('item4')){
                                 playSound ('.//sounds/14741_1460058298.mp3')
                         } else if(el.target.classList.contains('item5')){
                                 playSound ('.//sounds/19117_MusicBass_DIGIJ03-93-2.mp3')
                         } else if(el.target.classList.contains('item6')){
                                 playSound ('.//sounds/103031369836097.mp3')
                         }



                             });

         }
