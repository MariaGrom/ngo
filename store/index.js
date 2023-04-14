import axios from '~/plugins/axios';

export const state = () => ({
    guests: [],
});

export const getters = {
    getCurrentGuest: (state) => (id) => {
        console.log(state)
        console.log(id, 'idididid')
        return state.guests.find((guest) => guest.id === 1)
    }
}

export const mutations = {
    SET_GUESTS(state, data){
        state.guests = data;
    }
}

export const actions = {
    getGuests({commit}){
      return axios.get('/api/guests-s')
        .then(res => {
         commit('SET_GUESTS', res.data.data )
        })
    }
}