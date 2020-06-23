//按需引入element-ui
import { 
     Container, Header,Main,Footer,Aside,Row,Col,
     Avatar,Menu, MenuItem,MenuItemGroup,Carousel,CarouselItem,
     Button,Card
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
    Vue.use(Card)
    Vue.use(Row)
  }
}

export default elementUI;

