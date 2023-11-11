/*
    App Icons
    To Add New Icons -> https://react-icons.github.io/react-icons/
*/

import {
    FiSlash,
    FiMenu,
    FiArrowUp,
    FiArrowDown,
    FiArrowLeft,
    FiArrowRight,
    FiChevronDown,
    FiChevronLeft,
    FiChevronRight,
    FiChevronUp,
    FiEdit,
    FiPause,
    FiPlay,
    FiPlus,
    FiRefreshCcw,
    FiRotateCcw,
    FiSettings,
    FiSearch,
    FiShare,
    FiStar,
    FiTrash,
    FiX,
    FiUser,
    FiMoon,
    FiSun,
    FiSave,
    FiMail,
    FiLogIn,
    FiLogOut,
    FiInfo,
    FiImage,
    FiGift,
    FiFlag,
    FiCamera,
    FiAward,
    FiAlertTriangle,
    FiCopy,
    FiCalendar,
    FiTool,
    FiLayers,
    FiClock,
} from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import {
    GoGrabber,
    GoHome
} from "react-icons/go"

import {
    BiSolidCircleHalf,
    BiSolidColorFill,
    BiLock,
    BiSolidGame
} from "react-icons/bi"

import {
    IoMdHelp,
	IoMdCreate
} from "react-icons/io"


const Icon = (params) => {

    const type = params.type || ''
    const style = params.style || 'stroke-app-light'
    const size = params.size || 20

    // React icons
    switch (type) {
		case 'qalam':
			return <IoMdCreate className={style} size={size} />
        case 'game':
            return <BiSolidGame className={style} size={size} />
        case 'menu':
            return <FiMenu className={style} size={size} />
        case 'check':
            return <FiCheck className={style} size={size} />
        case 'edit':
            return <FiEdit className={style} size={size} />
        case 'chevronDown':
            return <FiChevronDown className={style} size={size} />
        case 'chevronLeft':
            return <FiChevronLeft className={style} size={size} />
        case 'chevronRight':
            return <FiChevronRight className={style} size={size} />
        case 'chevronUp':
            return <FiChevronUp className={style} size={size} />
        case 'arrowUp':
            return <FiArrowUp className={style} size={size} />
        case 'arrowDown':
            return <FiArrowDown className={style} size={size} />
        case 'arrowLeft':
            return <FiArrowLeft className={style} size={size} />
        case 'arrowRight':
            return <FiArrowRight className={style} size={size} />
        case 'pause':
            return <FiPause className={style} size={size} />
        case 'play':
            return <FiPlay className={style} size={size} />
        case 'add':
            return <FiPlus className={style} size={size} />
        case 'refresh':
            return <FiRefreshCcw className={style} size={size} />
        case 'rest':
            return <FiRotateCcw className={style} size={size} />
        case 'settings':
            return <FiSettings className={style} size={size} />
        case 'search':
            return <FiSearch className={style} size={size} />
        case 'share':
            return <FiShare className={style} size={size} />
        case 'star':
            return <FiStar className={style} size={size} />
        case 'trash':
            return <FiTrash className={style} size={size} />
        case 'remove':
            return <FiX className={style} size={size} />
        case 'user':
            return <FiUser className={style} size={size} />
        case 'moon':
            return <FiMoon className={style} size={size} />
        case 'sun':
            return <FiSun className={style} size={size} />
        case 'half':
            return <BiSolidCircleHalf className={style} size={size} />
        case 'save':
            return <FiSave className={style} size={size} />
        case 'mail':
            return <FiMail className={style} size={size} />
        case 'logIn':
            return <FiLogIn className={style} size={size} />
        case 'logOut':
            return <FiLogOut className={style} size={size} />
        case 'info':
            return <FiInfo className={style} size={size} />
        case 'help':
            return <IoMdHelp className={style} size={size} />
        case 'image':
            return <FiImage className={style} size={size} />
        case 'gift':
            return <FiGift className={style} size={size} />
        case 'award':
            return <FiAward className={style} size={size} />
        case 'flag':
            return <FiFlag className={style} size={size} />
        case 'camera':
            return <FiCamera className={style} size={size} />
        case 'alert':
            return <FiAlertTriangle className={style} size={size} />
        case 'copy':
            return <FiCopy className={style} size={size} />
        case 'calendar':
            return <FiCalendar className={style} size={size} />
        case 'tool':
            return <FiTool className={style} size={size} />
        case 'grab':
            return <GoGrabber className={style} size={size} />
        case 'color':
            return <BiSolidColorFill className={style} size={size} />
        case 'animation':
            return <FiLayers className={style} size={size} />
        case 'home':
            return <GoHome className={style} size={size} />
        case 'mail':
            return <FiMail className={style} size={size} />
        case 'lock':
            return <BiLock className={style} size={size} />
        case 'clock':
            return <FiClock className={style} size={size} />
        case 'google':
            return <FcGoogle className={style} size={size}/>
    }

    return <FiSlash size={size} className={style} />

}

export { Icon }