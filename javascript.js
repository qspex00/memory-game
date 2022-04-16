const cards = [
    {
        name: "1",
        flipped: "https://i.ytimg.com/vi/e90eWYPNtJ8/mqdefault.jpg"
    },
    {
        name: "2",
        flipped: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGPtYenYgNMPEJ7RjhNKtVQ0cFWZSBUm8F6K557E8f1jfjNzvoaxKQrU9z_2t0fCBxGk&usqp=CAU"
    },
    {
        name: "3",
        flipped: "https://www.thesprucepets.com/thmb/TZ__BkPT8-TASbf4HD0impfZ_CQ=/2121x1193/smart/filters:no_upscale()/GettyImages-481523341-acc726247c9e4f5abef6f4bd13559691.jpg"
    },
    {
        name: "4",
        flipped: "https://i.ytimg.com/vi/CjLqyKDiXN4/maxresdefault.jpg"
    },
    {
        name: "5",
        flipped: "https://external-preview.redd.it/VtttNmzlGvKj6xvJcCmTheMhBllpXM7mN_sQu6JuShk.jpg?auto=webp&s=e17abb12d3199598b9ebbf43760c59efa07d2470"
    },
    {
        name: "6",
        flipped: "https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2013/3/25/0/Original_pekin-ducklings.jpg.rend.hgtvcom.616.462.suffix/1452644968297.jpeg"
    },
    {
        name: "7",
        flipped: "https://i.pinimg.com/originals/dd/60/0d/dd600d8aa28b3889bd4ac28f89a507b8.jpg"
    },
    {
        name: "8",
        flipped: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOnsLOEXSkjDDqr91Ar2hg5KLSl00uDRYTg&usqp=CAU"
    },{
        name: "1",
        flipped: "https://i.ytimg.com/vi/e90eWYPNtJ8/mqdefault.jpg"
    },
    {
        name: "2",
        flipped: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGPtYenYgNMPEJ7RjhNKtVQ0cFWZSBUm8F6K557E8f1jfjNzvoaxKQrU9z_2t0fCBxGk&usqp=CAU"
    },
    {
        name: "3",
        flipped: "https://www.thesprucepets.com/thmb/TZ__BkPT8-TASbf4HD0impfZ_CQ=/2121x1193/smart/filters:no_upscale()/GettyImages-481523341-acc726247c9e4f5abef6f4bd13559691.jpg"
    },
    {
        name: "4",
        flipped: "https://i.ytimg.com/vi/CjLqyKDiXN4/maxresdefault.jpg"
    },
    {
        name: "5",
        flipped: "https://external-preview.redd.it/VtttNmzlGvKj6xvJcCmTheMhBllpXM7mN_sQu6JuShk.jpg?auto=webp&s=e17abb12d3199598b9ebbf43760c59efa07d2470"
    },
    {
        name: "6",
        flipped: "https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2013/3/25/0/Original_pekin-ducklings.jpg.rend.hgtvcom.616.462.suffix/1452644968297.jpeg"
    },
    {
        name: "7",
        flipped: "https://i.pinimg.com/originals/dd/60/0d/dd600d8aa28b3889bd4ac28f89a507b8.jpg"
    },
    {
        name: "8",
        flipped: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOnsLOEXSkjDDqr91Ar2hg5KLSl00uDRYTg&usqp=CAU"
    }
];
cards.sort(() => 0.5 - Math.random())

  const game = document.querySelector(".game")
  const endGame = document.querySelector('.game-end')
  const flipResult = document.querySelector(".flip-result")
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []


  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/003/607/599/original/baby-duck-cartoon-cute-isolated-illustrations-vector.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      game.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/003/607/599/original/baby-duck-cartoon-cute-isolated-illustrations-vector.jpg')
      cards[optionTwoId].setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/003/607/599/original/baby-duck-cartoon-cute-isolated-illustrations-vector.jpg')
      flipResult.textContent = "You clicked the same card";
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        flipResult.textContent = "Bingo";
      cards[optionOneId].setAttribute('src', 'https://c8.alamy.com/zooms/9/89a1fe9b6c92463a987700bff0598e0d/frexnh.jpg')
      cards[optionTwoId].setAttribute('src', 'https://c8.alamy.com/zooms/9/89a1fe9b6c92463a987700bff0598e0d/frexnh.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/003/607/599/original/baby-duck-cartoon-cute-isolated-illustrations-vector.jpg')
      cards[optionTwoId].setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/003/607/599/original/baby-duck-cartoon-cute-isolated-illustrations-vector.jpg')
      flipResult.textContent = "The cards doesn't match, please try again...";
    }
    cardsChosen = []
    cardsChosenId = []
    endGame.textContent = 'You found: ' + cardsWon.length + ' pairs'
    if  (cardsWon.length === cards.length/2) {
      endGame.textContent = 'Congratulations! You found them all!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].flipped)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()

