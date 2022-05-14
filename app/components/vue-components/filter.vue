<template>
    <div>
        <input id='searchVal' v-on:input="changeHandler" v-model="searchVal" />
        <button @click="clear" class="c-button">Clear</button>

    </div>
</template>

<script>

export default {
    name: 'filterComponent',
    data() {
        return {
            searchVal: ''
        };
    },
    methods: {
        clear() {
            this.searchVal = ''
            this.changeHandler()
        },
        changeHandler() {
            let param = this.searchVal.length > 0 ? `?filter=${this.searchVal}` : ''
            history.replaceState(null, null, param);
            this.$emit('search', this.searchVal);
        },

    }
}
</script>