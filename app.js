const label = document.querySelector('label');
const checkbox = document.getElementById
('checkbox');
const ball = document.getElementById('ball');
const topBox = document.getElementById('topbox');
const topCards = document.querySelectorAll('.card1');
const bottomCards = document.querySelectorAll('.card2');
const text = document.getElementsByTagName('p');

checkbox.addEventListener('change', () => {

    // change theme from light to dark 
        document.body.classList.toggle('dark');
        label.classList.toggle('darklabel');
        ball.classList.toggle('balldark');
        topBox.classList.toggle('bg-box-dark');
        topCards.forEach(card => {
            card.classList.toggle('card1dark');

        });

        bottomCards.forEach(card => {
            card.classList.toggle('card2dark');

        });


        // firstcard.classList.toggle('card1dark');
        // lastcard.classList.toggle('card1dark');
        
        });

        // for (i = 0; i < text.length; i++) {
        //     checkbox.addEventListener('change', () => {

        //         text.classList.toggle('pdark')
                    
        //             });
        //   }