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

const INITIAL_FORM_STATE = {
    location: '',
    patientAccount:'',
    orgTin:'',
    speciality:'',
    mrn:'',
    encounterCollection:''
};

const FORM_VALIDATION = Yup.object().shape({
    location: Yup.string().required('*Required'),
    patientAccount: Yup.string().required('*Required'),
    orgTin: Yup.string().required('*Required'),
    speciality: Yup.string().required('*Required'),
    mrn: Yup.string().required('*Required'),
    encounterCollection: Yup.string().required('*Required')
});

export default function AddTask() {
    const [status, setStatus] = React.useState(statusMenuItem[0].label);
    // const [statusFlag, setStatusFlag] = React.useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
        // setStatusFlag(true)
    };
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
                            <CustomeSelect value={undefined} handleChange={undefined} children={undefined} />
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
                            <CustomeSelect value={undefined} handleChange={undefined} children={undefined}/>
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Speciality"}</Typography>
                            <TextFieldWrapper name='speciality' />
                        </AddTaskFiledDiv>
                        <AddTaskFiledDiv>
                            <Typography className="typo-Roboto-Bold-primary3-14">{"Patient Name"}</Typography>
                            <CustomeSelect value={undefined} handleChange={undefined} children={undefined}/>
                        </AddTaskFiledDiv>
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
                            <CustomeSelect value={undefined} handleChange={undefined} children={undefined}/>
                        </AddTaskFiledDiv>
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