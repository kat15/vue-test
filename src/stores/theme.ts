import {type Ref, ref} from 'vue'
import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const background:Ref<string> = ref('dark'),
        text:Ref<string> = ref('white'),
        theme:Ref<string> = ref('dark');

    const setLightTheme = () => {
        theme.value = 'light';
        text.value = 'dark';
        background.value = theme.value;
    }

    const setDarkTheme = () => {
        theme.value = 'dark';
        text.value = 'light';
        background.value = theme.value;
    }

    return {background, text, theme, setLightTheme, setDarkTheme};
})
