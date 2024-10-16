import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PrimoPortfolio from '../components/Works/PrimoPorfolioPage.vue'
import PortfolioRagusa from '../components/Works/PortfolioRagusaPage.vue'
import Counter from '../components/Works/CounterPage.vue'
import ReadBooks from '../components/Works/ReadBooksPage.vue'
import Moove from '../components/Works/MoovePage.vue'
import TicTacToe from '../components/Works/TicTacToePage.vue'
import Sunnee from '../components/Works/SunneePage.vue'
import Orizon from '../components/Works/OrizonPage.vue'
import Angel from '../components/Works/AngelPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
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
})

export default router
