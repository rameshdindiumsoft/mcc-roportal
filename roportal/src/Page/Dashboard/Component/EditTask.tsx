import { Button, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import { AddTaskRootDiv, AddTaskFiledDiv, HeaderDiv, StatusTypography } from "../utils/style";
import '../../../Style/component/Typography.css';
import '../../../Style/component/ButtonStyle.css';
import CustomeSelect from "../../Common/CustomeSelect";
import CustomDatePicker from "../../Common/CustomDatePicker";
import React from "react";
import StatusDropdown from "../../Common/StatusDropdown";
import { statusMenuItem } from '../utils/contants';
import TextFieldWrapper from "../../Common/Form/TextFieldWrapper";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AvatarFun } from "../utils/action";

const INITIAL_FORM_STATE = {
    location: 'Specialist Ward',
    patientAccount:'874598898384',
    orgTin:'1234566',
    speciality:'General Physician',
    mrn:'123455666',
    encounterCollection:'4',
    patientGender:"Male",
    comment: "Transcript Complete..."
};

const FORM_VALIDATION = Yup.object().shape({
    location: Yup.string().required('*Required'),
    patientAccount: Yup.string().required('*Required'),
    orgTin: Yup.string().required('*Required'),
    speciality: Yup.string().required('*Required'),
    mrn: Yup.string().required('*Required'),
    encounterCollection: Yup.string().required('*Required'),
    patientGender: Yup.string().required('*Required'),
    comment: Yup.string().required('*Required')
});

export default function EditTask() {
    const [status, setStatus] = React.useState(statusMenuItem[0].label);
    const [statusFlag, setStatusFlag] = React.useState(false);
    const [user, setUser] = React.useState('Matt Wingate');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
        setStatusFlag(true)
    };
    const handleUserChange = (value: string) => {
        setUser('Matt Wingate')
    }
    return (<>
        <HeaderDiv>
            <StatusDropdown handleChange={handleChange} value={status} >
                {statusMenuItem?.map((item) => (
                    <MenuItem sx={{
                        padding: "8px"
                    }} key={item.id} value={item.label}>
                        <div className={item.divcss}>
                            <StatusTypography className={item.typographycss}>{item.label}</StatusTypography>
                        </div>
                    </MenuItem>
                ))}
            </StatusDropdown>
        </HeaderDiv>
        <div style={{ overflow: "auto" }}>
            <AddTaskRootDiv>
                <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    <Form>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Auditor"}</Typography>
                            <CustomeSelect value={user} handleChange={handleUserChange}>
                            <MenuItem sx={{
                                    padding:"8px"
                            }} key={'Matt Wingate'} value={user}>
                                    <AvatarFun name='Matt Wingate' showName={true}/>
                        </MenuItem>
                            </CustomeSelect>
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Organisation Tin"}</Typography>
                            <TextFieldWrapper name='orgTin' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Location"}</Typography>
                            <TextFieldWrapper name='location' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Provider Name"}</Typography>
                            <CustomeSelect value={user} handleChange={handleUserChange}>
                            <MenuItem sx={{
                                    padding:"8px"
                            }} key={'Matt Wingate'} value={user}>
                                    <AvatarFun name='Matt Wingate' showName={true}/>
                        </MenuItem>
                            </CustomeSelect>                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Speciality"}</Typography>
                            <TextFieldWrapper name='speciality' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Patient Name"}</Typography>
                            <CustomeSelect value={user} handleChange={handleUserChange}>
                            <MenuItem sx={{
                                    padding:"8px"
                            }} key={'Matt Wingate'} value={user}>
                                    <AvatarFun name='Matt Wingate' showName={true}/>
                        </MenuItem>
                            </CustomeSelect>                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"MRN"}</Typography>
                            <TextFieldWrapper name='mrn' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Patient Account"}</Typography>
                            <TextFieldWrapper name='patientAccount' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Patient Dob"}</Typography>
                            <CustomDatePicker />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Patient Gender"}</Typography>
                            <CustomeSelect value={user} handleChange={handleUserChange}>
                            <MenuItem sx={{
                                    padding:"8px"
                            }} key={'Matt Wingate'} value={user}>
                                    <AvatarFun name='Matt Wingate' showName={true}/>
                        </MenuItem>
                            </CustomeSelect>                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Encounter Collection"}</Typography>
                            <TextFieldWrapper name='encounterCollection' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Start Date"}</Typography>
                            <CustomDatePicker />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"End Date"}</Typography>
                            <CustomDatePicker />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Audio"}</Typography>
                            <Button className="uploadButton" variant="contained" component="label" sx={{ justifyContent: "flex-start" }}>
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Comment"}</Typography>
                            <TextFieldWrapper name='comment' />
                        </AddTaskFiledDiv>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginTop: "60px" }}>
                            <Button className='cancel-button'>
                                <Typography className='typo-Roboto-Regoular-primary59-14'>{"Cancel"}</Typography>
                            </Button>
                            <Button className='yes-button'>
                                <Typography className='typo-Roboto-Medium-primary2-14'>{"Submit"}</Typography>
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </AddTaskRootDiv>
        </div>
    </>
    )
}