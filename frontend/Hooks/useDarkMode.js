
import {useLocalStorage} from './useLocalStorage'


export const useDarkMode = bool => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', bool)
    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return [ darkMode, setDarkMode, toggleMode]
}