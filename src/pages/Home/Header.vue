<template>
   <div class="wrapper">
       <router-link to="./html5">
       <div :option="swiperOption">
           <!-- slides -->
           <div  v-for="item of swiperList" :key='item.id' @click="handleClick(item.content)">
               {{item.content}}
           </div>
           <!-- Optional controls -->
           <!-- 利用v-for来循环遍历 swiperList 数组，添加绑定Key值来实现轮播的顺序 -->
           <div class="swiper-pagination" slot="pagination"></div>
       </div>
       </router-link>
   </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    methods: {
        handleClick (item) {
            // alert(item)
            // if (item == HTML5)
            //    console.log('html5')
            // else (item == CSS)
            //     console.log('CSS')
        }
    },
    data () {
        return {
            // swiperOption: {
            //     // 添加pagination的选项并赋值.swiper-pagination来实现轮播图上圆点选项
            //     pagination: '.swiper-pagination',
            //     // 添加loop选项来实现轮播图的循环
            // },
            swiperList: [
                {
                    id: '001',
                    content: 'HTML5'
                },
                {
                    id: '002',
                    content: 'CSS'
                },
                {
                    id: '003',
                    content: 'Vue'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    background: #f93
    width: 100%
    height: 3rem
    text-align center
    
</style>