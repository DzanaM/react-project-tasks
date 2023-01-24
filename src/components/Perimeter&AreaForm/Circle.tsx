import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";


const validationSchema = yup.object({
    radius: yup
        .number()
        .required('Number is required'),
});


const Circle = () => {
    const [areaOfCircle, setAreaOfCircle] = useState(0);
    const [perimeterOfCircle, setPerimeterOfCircle] = useState(0);
    const [isValid, setIsValid] = useState(false);


    const formik = useFormik({
        initialValues: {
            radius: 0,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit ', values)
            setAreaOfCircle(values.radius * values.radius * Math.PI)
            setPerimeterOfCircle(2 * values.radius * Math.PI)
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
                <Typography variant="h4" align="center">Circle</Typography>
                <p> Enter radius of circle: </p>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="radius"
                        name="radius"
                        value={formik.values.radius}
                        onChange={formik.handleChange}
                        error={formik.touched.radius && Boolean(formik.errors.radius)}
                        helperText={formik.touched.radius && formik.errors.radius}
                    />
                    <Box textAlign={"center"} p={2}>
                        <Button variant="contained" type="submit" sx={{width: 1 / 2}}>
                            Calculate
                        </Button>
                    </Box>
                    {
                        isValid &&
                        <Box textAlign={"center"} p={2}>
                            <Typography>Area of circle is: {areaOfCircle} cm</Typography>
                            <Typography>Perimeter of circle is: {perimeterOfCircle} cm</Typography>
                            <Button variant="contained" onClick={resetHandler}><RestartAltIcon/></Button>
                        </Box>
                    }
                </form>
            </Box>
        </Grid>
    );
};

export default Circle;
