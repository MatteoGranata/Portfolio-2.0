import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const PrimoPortfolio = () => import('../components/Works/PrimoPorfolioPage.vue')
const PortfolioRagusa = () => import('../components/Works/PortfolioRagusaPage.vue')
const Counter = () => import('../components/Works/CounterPage.vue')
const ReadBooks = () => import('../components/Works/ReadBooksPage.vue')
const TicTacToe = () => import('../components/Works/TicTacToePage.vue')
const Sunnee = () => import('../components/Works/SunneePage.vue')
const NytClone = () => import('../components/Works/NyClonePage.vue')
const Angel = () => import('../components/Works/AngelPage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/primo-portfolio',
    name: 'primoportfolio',
    component: PrimoPortfolio
  },
  {
    path: '/portfolio-ragusa',
    name: 'portfolioragusa',
    component: PortfolioRagusa
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  },
  {
    path: '/readbooks',
    name: 'readbooks',
    component: ReadBooks
  },
  {
    path: '/tic-tac-toe',
    name: 'tictactoe',
    component: TicTacToe
  },
  {
    path: '/sunnee',
    name: 'sunnee',
    component: Sunnee
  },
  {
    path: '/nyt-clone',
    name: 'nyt-clone',
    component: NytClone
  },
  {
    path: '/angel',
    name: 'angel',
    component: Angel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
