import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({name}) {
    if(name == "circle"){
        return <FaRegCircle/>
    } else if(name == "crose"){
        return <FaTimes/>
    } else {
        return <FaPen/>
    }
}

export default Icon;
