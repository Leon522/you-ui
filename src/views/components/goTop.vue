<template>
    <div class="youyu-content">
        <ul class="infinite-scroll-wrap">
            <li v-for="(list, index) in dataList" :key="index">{{list}}</li>
        </ul>
        <back-top　:scrollmyself = 'true'></back-top>
    </div>
</template>

<script>
'use strict'

export default {
    data: () => ({
        dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25],
    }),
    mounted() {
        
    },
    methods: {
        
    }
}
</script>


<style>
.infinite-scroll-wrap{
    width: 100%;
}
.infinite-scroll-wrap li{
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
