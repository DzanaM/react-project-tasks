import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";


const validationSchema = yup.object({
    side: yup
        .number()
        .required('Number is required'),
});


const Square = () => {
    const [areaOfSquare, setAreaOfSquare] = useState(0);
    const [perimeterOfSquare, setPerimeterOfSquare] = useState(0);
    const [isValid, setIsValid] = useState(false);


    const formik = useFormik({
        initialValues: {
            side: 0,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit ', values)
            setAreaOfSquare(values.side * values.side)
            setPerimeterOfSquare(2 * values.side + 2 * values.side)
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
                <Typography variant="h4" align="center">Square</Typography>
                <p> Enter side of square: </p>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="side"
                        name="side"
                        value={formik.values.side}
                        onChange={formik.handleChange}
                        error={formik.touched.side && Boolean(formik.errors.side)}
                        helperText={formik.touched.side && formik.errors.side}
                    />
                    <Box textAlign={"center"} p={2}>
                        <Button color="primary" variant="contained" type="submit" sx={{width: 1 / 2}}>
                            Calculate
                        </Button>
                    </Box>

                    {
                        isValid &&
                        <Box p={2}>
                            <Typography>Area of square is: {areaOfSquare} cm</Typography>
                            <Typography>Perimeter of square is: {perimeterOfSquare} cm</Typography>
                            <Button variant="contained" onClick={resetHandler}><RestartAltIcon/></Button>
                        </Box>
                    }
                </form>
            </Box>
        </Grid>
    );
};

export default Square;
