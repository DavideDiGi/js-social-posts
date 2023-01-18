/* DESCRIZIONE
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

MILESTONE 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (yyyy-mm-dd),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

MILESTONE 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

MILESTONE 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

CONSIGLI DEL GIORNO:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole. */

const container = document.getElementById('container');

posts.forEach((singlePost) => {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    console.log('post numero: ' + singlePost.id + ' ' + singlePost.author.name)
    newPost.innerHTML = `
                        <div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${singlePost.author.image}" alt="${singlePost.author.name}">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${singlePost.author.name}</div>
                                    <div class="post-meta__time">${singlePost.created}</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">${singlePost.content}</div>
                        <div class="post__image">
                            <img src="${singlePost.media}" alt="">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="##" data-postid="${singlePost.id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id=${singlePost.id} class="js-likes-counter">${singlePost.likes}</b> persone
                                </div>
                            </div> 
                        </div>
                        `;
    container.append(newPost);
}); 

const singlePostLikesCounter = [];
const button = document.querySelectorAll('.likes__cta');

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', () => {
        const buttonClicked = document.querySelectorAll('.js-like-button');
        let likesCounter = document.querySelectorAll('.js-likes-counter');

        if (buttonClicked[i].classList.contains('like-button--liked') == true){
            buttonClicked[i].classList.remove('like-button--liked');
            likesCounter[i].innerHTML --;
        }
        else{
            buttonClicked[i].classList.add('like-button--liked');
            likesCounter[i].innerHTML ++;
            singlePostLikesCounter.push(posts.id)
        }
    }
    
    )
}

