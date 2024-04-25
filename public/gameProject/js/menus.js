// Top-level menu containers
const menuContainerNode = $('.menus')
const menuMainNode = $('.menu--main')
const menuPauseNode = $('.menu--pause')
const menuScoreNode = $('.menu--score')

const finalScoreLblNode = $('.final-score-lbl')
const highScoreLblNode = $('.high-score-lbl')
const span1 = document.querySelector('#span1')
const span2 = document.querySelector('#span2')
const span3 = document.querySelector('#span3')

function showMenu(node) {
  node.classList.add('active')
}

function hideMenu(node) {
  node.classList.remove('active')
}

function renderMenus() {
  hideMenu(menuMainNode)
  hideMenu(menuPauseNode)
  hideMenu(menuScoreNode)

  switch (state.menus.active) {
    case MENU_MAIN:
      showMenu(menuMainNode)
      break
    case MENU_PAUSE:
      showMenu(menuPauseNode)
      break
    case MENU_SCORE:
      // finalScoreLblNode.textContent = formatNumber(state.game.score)
      var finalContent = `${state.game.score}<span style="font-size:0.6em;"> kg微塑料</span>`
      finalScoreLblNode.innerHTML = finalContent
      span1.textContent = state.game.score * 6
      span2.textContent = state.game.score * 9
      span3.textContent = state.game.score * 21
      // console.log(span1)
      if (isNewHighScore()) {
        highScoreLblNode.textContent = 'New High Score!'
      } else {
        highScoreLblNode.textContent = `High Score: ${formatNumber(getHighScore())}`
      }
      showMenu(menuScoreNode)
      break
  }

  setHudVisibility(!isMenuVisible())
  menuContainerNode.classList.toggle('has-active', isMenuVisible())
  menuContainerNode.classList.toggle('interactive-mode', isMenuVisible() && pointerIsDown)
}

renderMenus()

////////////////////
// Button Actions //
////////////////////

// Main Menu
handleClick($('.play-normal-btn'), () => {
  setGameMode(GAME_MODE_RANKED)
  setActiveMenu(null)
  resetGame()
})

handleClick($('.play-casual-btn'), () => {
  setGameMode(GAME_MODE_CASUAL)
  setActiveMenu(null)
  resetGame()
})

// Pause Menu
handleClick($('.resume-btn'), () => resumeGame())
handleClick($('.menu-btn--pause'), () => setActiveMenu(MENU_MAIN))

// Score Menu
handleClick($('.play-again-btn'), () => {
  setActiveMenu(null)
  resetGame()
})

handleClick($('.menu-btn--score'), () => setActiveMenu(MENU_MAIN))
