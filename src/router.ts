import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDoc from './components/SwitchDoc.vue'
import ButtonDoc from './components/ButtonDoc.vue'
import DialogDoc from './components/DialogDoc.vue'
import DocInfo from './components/DocInfo.vue'
import MenuDoc from './components/MenuDoc.vue'
import AlertDoc from './components/AlertDoc.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: Home},
    {path:'/document', component: Doc, children: [
        {path: '', component: DocInfo},
        {path: 'switch', component: SwitchDoc},
        {path: 'button', component: ButtonDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'menu', component: MenuDoc},
        {path: 'alert', component: AlertDoc},
      ]}
  ]
})


export {router}
