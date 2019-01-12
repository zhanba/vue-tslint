<template>
    <span>test</span>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: {
        name: 'wang',
        count: 0
    },
    methods: {
        add() {
            return this.count + '2';
        }
    }
})
</script>
