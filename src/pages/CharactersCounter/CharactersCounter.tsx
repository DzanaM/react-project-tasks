import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import * as yup from "yup";
import {useFormik} from "formik";


const validationSchema = yup.object({
    text: yup
        .string()
});

const CharactersCounter = () => {

    const [characterCount, setCharacterCount] = useState(0);

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit ', values)
        },
    });


    const handleNameChange = (event: any) => {
        setCharacterCount(event.target.value.length);
    };

    const resetHandler = () => {
        formik.resetForm()
    }

    return (
        <Box mt={5}>
            <Typography variant="h3" align="center">Characters counter</Typography>
            <Box p={5}>
                <Typography variant="h6">Write some text! </Typography>

                <TextField
                    fullWidth
                    id="text"
                    name="text"
                    onChange={handleNameChange}
                    placeholder="Text"
                    color="primary"
                />
                <Typography variant="h6">Number of characters in text: {characterCount} </Typography>
                <Button
                    variant="contained"
                    type="reset"
                    onClick={() => formik.resetForm()}
                    // onClick={resetHandler}
                ><RestartAltIcon/></Button>
            </Box>
        </Box>
    );
};

export default CharactersCounter;