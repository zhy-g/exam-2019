<template>
    <div class="text">
        <div v-for="item of TextList" :key="item.id">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-content">&nbsp;&nbsp;{{ item.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeText',
    data () {
        return {
            TextList: [
                {
                    id: '001',
                    title: '前端(网站前台部分)',
                    content: '前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，完美的动效设计，给用户带来极高的用户体验'
                },
                {
                    id: '002',
                    title: '核心技术',
                    content: 'HTML、CSS、JavaScript 这三个是前端开发中最基本也是最必须的三个技能。前端的开发中，在页面的布局时， HTML将元素进行定义，CSS对展示的元素进行定位，再通过JavaScript实现相应的效果和交互。虽然表面看起来很简单，但这里面需要掌握的东西绝对不会少。在进行开发前，需要对这些概念弄清楚、弄明白，这样在开发的过程中才会得心应手。'
                },
                {
                    id: '003',
                    title: 'Vue.js框架',
                    content: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合'
                }

            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
  .text
    padding: .4rem
    overflow hidden
    .item-title
      font-size: .5rem
      font-weight 900
      height: .8rem
    .item-content
      padding-bottom .3rem
      line-height .3rem
</style>