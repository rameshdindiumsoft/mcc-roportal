import * as React from 'react';
import { ReactComponent as UserIcon } from '../../Assests/Icons/UserIcon.svg';
import { ReactComponent as CopyPasteIcon } from '../../Assests/Icons/CopyPasteIcon.svg';
import { ReactComponent as Editicon } from '../../Assests/Icons/Edit icon.svg';
import { Icon, IconButton, ListItemButton, Typography } from '@mui/material';
import { ReactComponent as Logout } from '../../Assests/Icons/Logout.svg';
import { sideNavigation } from './utils/contants';
import '../../Style/component/Typography.css';
import '../../Style/component/ButtonStyle.css';
import './utils/Sidebar.css';

export default function Sidebar() {
	const currentPath = window.location.pathname;
	return (
		<div>
			<div className='rootDiv'>
				<div className='rootDivPrimary'>
					<UserIcon />
				</div>
				<div className='rootDivPrimary1'>
					<div className='rootDivPrimary2'>
						<span className='typo-Roboto-Bold-primary7-18'>{"Joey Winget"}</span>
						<IconButton className='list-button iconEditBtn' size='medium'>
							<Editicon className='svgIcon' />
						</IconButton>
					</div>
					<div className='rootDivPrimary3'>
						<span className='typo-Roboto-Regoular-14'>{"joey.winget@gmail.com"}</span>
						<IconButton className='list-button' size='small' >
							<CopyPasteIcon className='svgIcon' />
						</IconButton>
					</div>
				</div>
			</div>
			<div className='rootDivPrimary4'>
				{sideNavigation?.map((item) => (
					<ListItemButton key={item.id} className={currentPath === item.path ?`buttonCurrent iconBtn`: `list-button iconBtn`}>
						<Icon className='svgIcon iconTag'>{item.icon} </Icon>
						<Typography className={currentPath === item.path ?`typo-Roboto-Regoular-primary10-16-21lh typoalign`:'typo-Roboto-Regoular-primary3-16-21lh hocss typoalign'}>{item.label}</Typography>
					</ListItemButton>
				))}
				<ListItemButton className='list-button iconLogotBtn'>
					<Logout />
					<Typography className='typo-Roboto-Regoular-primary9-16-21lh typoalign'>{"Logout"}</Typography>
				</ListItemButton>
			</div>
		</div>
	);
}
