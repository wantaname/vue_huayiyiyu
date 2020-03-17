import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem,Input,Select,Option,Carousel,CarouselItem} from 'element-ui'
import {Message,MessageBox,Container,Header,Main,Aside,Tooltip,Pagination,Menu,Submenu,MenuItemGroup,MenuItem,Breadcrumb,BreadcrumbItem,Card,Row,Dialog,Col,TabPane,Table,TableColumn,Switch} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm