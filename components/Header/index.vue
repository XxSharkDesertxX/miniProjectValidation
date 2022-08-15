<template>
    <v-card>
        <ul class="d-flex justify-space-around teal ">
            <li class="items">
                <nuxt-link to="/" class="text-decoration-none black--text">{{one | Capi}}</nuxt-link>
            </li>
            <li class="items">
                <nuxt-link to="/Tow" class="text-decoration-none black--text">{{tow | Capi}}</nuxt-link>
            </li>
            <li class="items">
                <nuxt-link to="/Three" class="text-decoration-none black--text">{{three | Capi}}</nuxt-link>
            </li>
        </ul>
    </v-card>
</template>

<script>
export default {
    name:"Header",
    data() {
        return {
            one:"one",
            tow:'tow',
            three:'three'
        }
    },
}
</script>

<style lang="css">
    .items{
        list-style: none;
        margin: 1rem 0;
        font-size: 1.3rem;
        color: #000;
        cursor: pointer;
    }
</style>