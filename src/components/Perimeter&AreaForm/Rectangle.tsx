import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";


const validationSchema = yup.object({
    length: yup
        .number()
        .required('Length is required'),
    width: yup
        .number()
        .required('Width is required'),
});


const Rectangle = () => {
    const [areaOfRectangle, setAreaOfRectangle] = useState(0);
    const [perimeterOfRectangle, setPerimeterOfRectangle] = useState(0);
    const [isValid, setIsValid] = useState(false);


    const formik = useFormik({
        initialValues: {
            length: 0,
            width: 0,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit ', values)
            setAreaOfRectangle(values.length * values.width)
            setPerimeterOfRectangle(2 * values.length * 2 * values.width)

            setIsValid(true)
        },
    });


    const resetHandler = () => {
        formik.resetForm()
        setIsValid(false)
    }


    return (
        <Grid sx={{display: "flex", justifyContent: "center"}}>
            <Box>
                <Typography variant="h4" align="center">Rectangle</Typography>
                <p> Enter length of rectangle: </p>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="length"
                        name="length"
                        value={formik.values.length}
                        onChange={formik.handleChange}
                        error={formik.touched.length && Boolean(formik.errors.length)}
                        helperText={formik.touched.length && formik.errors.length}
                    />
                    <p> Enter width of rectangle: </p>
                    <TextField
                        fullWidth
                        id="width"
                        name="width"
                        value={formik.values.width}
                        onChange={formik.handleChange}
                        error={formik.touched.width && Boolean(formik.errors.width)}
                        helperText={formik.touched.width && formik.errors.width}
                    />
                    <Box textAlign={"center"} p={2}>
                        <Button color="primary" variant="contained" type="submit" sx={{width: 1 / 2}}>
                            Calculate
                        </Button>
                    </Box>

                    {
                        isValid &&
                        <Box p={2}>
                            <Typography>Area of rectangle is: {areaOfRectangle} cm</Typography>
                            <Typography>Perimeter of rectangle is: {perimeterOfRectangle} cm</Typography>
                            <Button variant="contained" onClick={resetHandler}><RestartAltIcon/></Button>
                        </Box>
                    }
                </form>
            </Box>
        </Grid>
    );
};

export default Rectangle;
