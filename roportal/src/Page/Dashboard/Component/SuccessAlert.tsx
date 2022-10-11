import '../../../Style/component/ButtonStyle.css';
import '../../../Style/component/Typography.css';
import '../../../Style/component/CustomDialog.css';
import { ReactComponent as Success } from '../../../Assests/Icons/success.svg';
import { Typography, Button, DialogContent } from '@mui/material';

type SuccessAlertProps = {
    primaryLable: string,
    conFirmOnClick: any
}
const SuccessAlert = (props: SuccessAlertProps) => {
    const { primaryLable, conFirmOnClick } = props;
    return (
        <div className='sucessroot'>
            <Success style={{position:"absolute", top:"-30px"}} />
            <DialogContent>
                <Typography className='typo-Roboto-Medium-primary60-14'>{primaryLable}</Typography>
                <Button style={{marginTop:"25px"}} className='ok-button' onClick={conFirmOnClick}>
                    <Typography className='typo-Roboto-Medium-primary2-14'>{"Ok"}</Typography>
                </Button>
            </DialogContent>
        </div>
    )
}
export default SuccessAlert;