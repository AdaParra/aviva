import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header/Main'
import subHeader from '@/components/Header/subHeader'
import Hero from '@/components/Hero/Main'
import Card from '@/components/Cards/Main'
import viewCards from '@/components/Cards/viewCards'
import Tabs from '@/components/Tabs/tabs'
import About from '@/components/About/about'
import Shepherds from '@/components/Shepherds/shepherds'
import shepherdsView from '@/components/Shepherds/shepherdsView'
import Valores from '@/components/Valores/valores'
import Material from '@/components/Material/Main'
import Detail from '@/components/Cards/Detail/detail'
import tabsWhite from '@/components/Tabs/tabsWhite'
import Team from '@/components/Team/team'
import Estructura from '@/components/Estructura/estructura'
import Modal from '@/components/Modal/modal'
import Footer from '@/components/Footer/footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/ministerios', name: 'viewcards', component: viewCards },
    { path: '/estructura', name: 'estructura', component: Estructura },
    { path: '/detalle/:id/detail', name: 'detail', component: Detail, props: true },
    { path: '/menu', name: 'menu', component: Header },
    { path: '/subheader/:id/detail', name: 'subHeader', component: subHeader, props: true },
    { path: '/hero', name: 'hero', component: Hero },
    { path: '/cards/:id/detail', name: 'card', component: Card, props: true },
    { path: '/tabs', name: 'tabs', component: Tabs, props: true },
    { path: '/tabswhite', name: 'tabswhite', component: tabsWhite, props: true },
    { path: '/conocenos', name: 'about', component: About },
    { path: '/pastores', name: 'shepherds', component: Shepherds },
    { path: '/apostoles', name: 'shepherdsview', component: shepherdsView },
    { path: '/valores', name: 'valores', component: Valores },
    { path: '/material', name: 'material', component: Material, props: true },
    { path: '/team', name: 'team', component: Team, props: true },
    { path: '/modal', name: 'modal', component: Modal },
    { path: '/footer', name: 'footer', component: Footer }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
