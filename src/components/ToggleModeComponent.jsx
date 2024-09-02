
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";

function ToggleModeComponent( {darkMode, setDarkMode} ) {

    function handleMode() {
        setDarkMode(!darkMode)
    }

    return (
        <div 
        className='flex items-center justify-center my-[20px] cursor-pointer'
        onClick={handleMode}
        >
            {darkMode 
            ? <MdDarkMode size={42} /> 
            : <CiSun size={42} />
            }
        </div>
    )

}

export default ToggleModeComponent