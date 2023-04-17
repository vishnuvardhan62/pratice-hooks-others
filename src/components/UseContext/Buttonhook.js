
import { useContext } from "react";

function ButtonHook () {
    const them = useContext(ThemeContext)

    return <button className={them}>Amazing button</button>
}
export default ButtonHook;