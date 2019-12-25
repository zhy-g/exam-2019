<template>
   <div class="wrapper">
       <swiper :option="swiperOption">
           <!-- slides -->
           <swiper-slide  v-for="item of swiperList" :key='item.id'>
               <span >{{item.content}}</span>
           </swiper-slide>
           <!-- Optional controls -->
           <!-- 利用v-for来循环遍历 swiperList 数组，添加绑定Key值来实现轮播的顺序 -->
           <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
   </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    data () {
        return {
            swiperOption: {
                // 添加pagination的选项并赋值.swiper-pagination来实现轮播图上圆点选项
                pagination: '.swiper-pagination',
                // 添加loop选项来实现轮播图的循环
            },
            swiperList: [
                {
                    id: '001',
                    content: 'HTML'
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

</style>