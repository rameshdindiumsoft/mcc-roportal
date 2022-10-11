import { ReactComponent as Taskselected } from '../../../Assests/Icons/Task selected.svg';
import { ReactComponent as Settings } from '../../../Assests/Icons/Settings.svg';
import { ReactComponent as Auditor } from '../../../Assests/Icons/Auditor.svg';
export const sideNavigation = [
    {
        id:1,
        label:"Task Manager",
        icon: <Taskselected />
    },
    {
        id:2,
        label:"Auditors",
        icon: <Auditor />
    },
    {
        id:3,
        label:"Settings",
        icon: <Settings />
    },
]