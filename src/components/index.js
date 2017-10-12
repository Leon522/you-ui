import Toast from './toast'
import Dialog from './dialog'
import Indicator from './indicator'
import LazyLoad from './lazyload'
import InfiniteScroll from './infinite-scroll'
import CellSwipe from './cell-swiper'
import goTop from './go-top'

const install = (Vue, options) => {
    if (install.installed) {
        return
    }
    Vue.component(CellSwipe.name, CellSwipe);
    Vue.component(goTop.name, goTop);
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$dailog = Vue.prototype.$dailog = Dialog;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;

    Vue.use(LazyLoad)
    Vue.use(InfiniteScroll)
}

export default install