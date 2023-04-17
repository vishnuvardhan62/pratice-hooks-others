
const ThemeContext = React.createContext('dark')

function Button () {
    return <ThemeContext.Consumer>
        {them => <button className={them}></button>}
    </ThemeContext.Consumer>
}
export default Button;