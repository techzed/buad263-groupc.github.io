const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
meme_img.style.paddingBottom = '10px';
if (mostRecentScore == 0){
    meme_img.setAttribute('src', '../game/score-0.jpg')
} else if (mostRecentScore >= 1 && mostRecentScore <= 800){
    meme_img.setAttribute('src', '../game/poor.jpg')
} else if (mostRecentScore >= 801 && mostRecentScore <= 1600){
    meme_img.setAttribute('src', '../game/pass.jpg')
} else if (mostRecentScore >= 1601 && mostRecentScore <= 2400){
    meme_img.setAttribute('src', '../game/not-bad.jpg')
} else if (mostRecentScore > 2400){
    meme_img.setAttribute('src', '../game/awesome.jpg')
}
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('index.html')

    
}
