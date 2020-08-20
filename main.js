
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
                        playSound ('.//burps/1.mp3');
                        break;
                case 'KeyS':
                        playSound ('.//burps/2.mp3');
                        break;
                case 'KeyD':
                        playSound ('.//burps/3.mp3');
                        break;
                case 'KeyF':
                        playSound ('.//burps/4.mp3');
                        break;
                case 'KeyG':
                        playSound ('.//burps/5.mp3');
                        break;
                case 'KeyH':
                        playSound ('.//burps/6.mp3');
                        break;
        }

});

        for(let i = 0; i < btn.length; i++){
                btn[i].classList += ' item' + [i + 1];
        }

         for(let i = 0; i < btn.length; i++){
                 btn[i].addEventListener('click', function(el){
                         if(el.target.classList.contains('item1')){
                                 playSound('.//burps/1.mp3');
                         } else if(el.target.classList.contains('item2')){
                                 playSound ('.//burps/2.mp3')
                         } else if(el.target.classList.contains('item3')){
                                 playSound ('.//burps/3.mp3')
                         } else if(el.target.classList.contains('item4')){
                                 playSound ('.//burps/4.mp3')
                         } else if(el.target.classList.contains('item5')){
                                 playSound ('.//burps/5.mp3')
                         } else if(el.target.classList.contains('item6')){
                                 playSound ('.//burps/6.mp3')
                         }



                             });

         }
