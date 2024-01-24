import {type Ref, ref} from 'vue';
import {defineStore} from 'pinia';
import {type IUser} from '@/interfaces/IUser';
import ls from 'localstorage-slim';

export const useUserStore = defineStore('user', () => {
    const userFromLS: IUser = <IUser> ls.get('loggedIn'),
        isLogged: Ref<boolean> = ref(userFromLS != null),
        userLoggedIn: Ref<IUser | null> = ref(userFromLS || null);

    const setLoggedIn = (user: IUser | null = null) => {
        isLogged.value = user != null;
        userLoggedIn.value = user;
        ls.set('loggedIn', user);
    }

    const setLoggedOut = (isLoggedIn: boolean) => {
        isLogged.value = false;
        userLoggedIn.value = null;
        ls.set('loggedIn', null);
    }

    return {isLogged, setLoggedIn, userLoggedIn};
})
