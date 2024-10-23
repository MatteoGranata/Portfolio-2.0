const AboutPage = () => import('../views/AboutPage.vue')
import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const PrimoPortfolio = () => import('../components/Works/PrimoPorfolioPage.vue')
const PortfolioRagusa = () => import('../components/Works/PortfolioRagusaPage.vue')
const Counter = () => import('../components/Works/CounterPage.vue')
const ReadBooks = () => import('../components/Works/ReadBooksPage.vue')
const Moove = () => import('../components/Works/MoovePage.vue')
const TicTacToe = () => import('../components/Works/TicTacToePage.vue')
const Sunnee = () => import('../components/Works/SunneePage.vue')
const Orizon = () => import('../components/Works/OrizonPage.vue')
const Angel = () => import('../components/Works/AngelPage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
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
    path: '/moove',
    name: 'moove',
    component: Moove
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
    path: '/orizon',
    name: 'orizon',
    component: Orizon
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

  // Comportamento scroll per gestire gli hash (#)
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Se c'è una posizione salvata (es. tornando indietro), scrolla lì
      return savedPosition
    } else {
      // Altrimenti scrolla in cima
      return { top: 0 }
    }
  }
})

export default router
