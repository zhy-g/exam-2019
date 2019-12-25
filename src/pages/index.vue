<template>
    <div>
        <home-header></home-header>
        <home-text></home-text>
    </div>
</template>

<script>
import HomeHeader from './Home/Header'
import HomeText from './Home/Text'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeText
    }
}
</script>