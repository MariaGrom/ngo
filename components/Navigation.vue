<template>
    <nav class="navigation">
        <nuxt-link to="/">
        <Logo :title="logoText" />
    </nuxt-link>
        <nuxt-link v-for="elem in routes" class="link" :to="elem.path" :key="elem.name">
            {{ elem.name }}
        </nuxt-link>
        <button class="button" @click="toggleModal('example', $event)">{{ text }}</button>
        <Modal v-show="showModal" @modalClose="toggleModal" />
        
    </nav>
</template>

<script>
import UserCard from './UserCard.vue'
import Logo from './navigation/logo'
export default {
    components: {
    Logo,
    UserCard
},
    data() {
        return {
            text: 'Enter',
            logoText: 'НКО-проект',
            linksArray: [
                { to: '/', title: 'Main' },
                { to: '/about', title: 'About page' }
            ],
            showModal: false,
        }
    },
    methods: {
        toggleModal(data, event) {
            console.log(data)
            console.log('event', event)
            this.showModal = !this.showModal
        }
    },
  computed:{
    routes(){
        return this.$router.options.routes.filter((elem)=> !elem.path.includes(':'))
    }
  }
}
</script>

<style scoped>
.navigation {
    width: 100%;
    height: 80px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button {
    width: 100px;
    padding: 10px 15px;
    background: white;
    color: black;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;
    transition: .3s;
}

.button:hover {
    background: black;
    color: white;
    transition: .3s;
}

.link {
    color: black;
}
</style>