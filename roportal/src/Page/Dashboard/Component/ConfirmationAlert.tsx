import '../../../Style/component/ButtonStyle.css';
import '../../../Style/component/Typography.css';
import '../../../Style/component/CustomDialog.css';
import { ReactComponent as Alert } from '../../../Assests/Icons/Alert.svg';
import { Typography, Button } from '@mui/material';

type ConfirmationAlertProps = {
    primaryLable: string,
    secondaryLabel: string,
    conFirmOnClick: any
}
const ConfirmationAlert = (props: ConfirmationAlertProps) => {
    const { primaryLable,  secondaryLabel, conFirmOnClick } = props
    return (
        <div className='root'>
            <div style={{ margin: "33px 65px", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: 28 }}>
                    <div>
                        <Alert />
                    </div>
                    <div style={{ gap: 25, display: "flex", flexDirection: "column" }}>
                        <div style={{ gap: "inherit", display: "flex", flexDirection: "column" }}>
                            <Typography className='typo-Roboto-Medium-primary60-14'>{primaryLable}</Typography>
                            <Typography className='typo-Roboto-Regoular-primary3-16'>{secondaryLabel}</Typography>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: 20 }}>
                            <Button className='cancel-button' onClick={conFirmOnClick}>
                                <Typography className='typo-Roboto-Regoular-primary59-14'>{"Cancel"}</Typography>
                            </Button>
                            <Button className='yes-button' onClick={conFirmOnClick}>
                                <Typography className='typo-Roboto-Medium-primary2-14'>{"Yes"}</Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConfirmationAlert;