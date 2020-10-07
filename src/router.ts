import {createWebHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocInfo from './components/DocInfo.vue'
import InstallDoc from './components/InstallDoc.vue'
import ButtonDoc from './components/ButtonDoc.vue'
import SwitchDoc from './components/SwitchDoc.vue'
import DialogDoc from './components/DialogDoc.vue'
import MenuDoc from './components/MenuDoc.vue'
import AlertDoc from './components/AlertDoc.vue'

const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: Home},
    {path:'/document', component: Doc, children: [
        {path: 'guide', component: DocInfo},
        {path: 'install', component: InstallDoc},
        {path: 'button', component: ButtonDoc},
        {path: 'switch', component: SwitchDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'menu', component: MenuDoc},
        {path: 'alert', component: AlertDoc},
      ]}
  ]
})

export {router}
