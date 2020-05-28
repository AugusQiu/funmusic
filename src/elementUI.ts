//按需引入element-ui
import { 
     Container, Header,Main,Footer,Aside,Col,
     Avatar,Menu, MenuItem,MenuItemGroup,Carousel,CarouselItem,
     Button
  } from 'element-ui'

const elementUI = {
  install:(Vue:any) =>{
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Aside)
    Vue.use(Col)
    Vue.use(Avatar)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Button)
  }
}

export default elementUI;

