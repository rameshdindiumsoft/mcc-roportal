import { TextField } from "@mui/material";
import { useField } from "formik";

type TextFieldProps = {
    name: string,
}
const TextFieldWrapper = ({
    name,
    ...otherProps
}: TextFieldProps) => {
    const [field, meta] = useField(name);

    const configTextField = {
        helperText: '',
        error: false,
        ...field,
        ...otherProps
    }
    const error = meta && meta.touched && meta.error ? true : false;
    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }
    return (
        <TextField placeholder='Type here...'
            variant="outlined"
            sx={{
                height: "40px",
                "& input::placeholder": {
                    fontSize: "14px",
                    fontStyle: "italic",
                },
                "& .MuiInputBase-root": {
                    height: "40px !important",
                    background: "#F5F5F5 0% 0% no-repeat padding-box",
                    minHeight: "40px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                        borderWidth: 0
                    }
                },
            }} {...configTextField} error={error} />
    )
}
export default TextFieldWrapper;
