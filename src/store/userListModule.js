export const userListModule = {
    state: () => ({
        users: [
            {
                name: 'Denis',
                avatar: 'http://i.imgur.com/OvflPTZ.jpg'
            },
            {
                name: 'Lenis',
                avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg'
            },
            {
                name: 'Robin',
                avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg'
            }
        ],
        userCounter: 0,
        user: {
            name: '',
            avatar: ''
        },
        currentDate: null

    }),
    getters: {
        showUser (state) {
            return state.users.find((user, index) => {
                return index === state.userCounter
            })
        }
    },
    mutations: {
        nextUser (state) {
            if (state.userCounter !== (state.users.length - 1)) {
                state.userCounter++
            }
            },
        prevUser (state) {
            if (state.userCounter !== 0) {
                state.userCounter--
            }
        },
        newUserName (state, payload) {
            state.user.name = payload
        },
        newUserAvatar (state, payload) {
            state.user.avatar = payload
        },
        createUser(state) {
            state.users.unshift(state.user)
            state.userCounter = 0

        }
        },
    actions: {
        nextUser (context) {
            context.commit('nextUser')
        },
        prevUser(context) {
            context.commit('prevUser')
        },
        createUser(context) {
            context.commit('createUser')
        },
        newUserName(context) {
            context.commit('newUserName')
        },
        newUserAvatar(context) {
            context.commit('newUserAvatar')
        }
    }
}