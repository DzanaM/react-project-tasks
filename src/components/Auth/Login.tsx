import React, {useContext} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box, Button, TextField, Typography} from "@mui/material";
import styles from "../../config/Styles.module.css";
import AuthContext from "../../context/auth-context";


const Login = () => {
    const {onLogin} = useContext(AuthContext)


    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(4, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: ({email, password}) => {
            onLogin(email, password)
        },
    });


    return (
        < >
            <Box sx={{display: {xs: 'none', md: 'flex'}}} className={styles.display}>

                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h3" align="center"> Welcome to login form </Typography>
                    <Box m={5}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error_msg">{formik.errors.email}</div>
                        ) : null}
                    </Box>
                    <Box m={5}>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error_msg">{formik.errors.password}</div>
                        ) : null}
                    </Box>
                    <Button color="primary" variant="contained" fullWidth type="submit">Login</Button>
                </form>
            </Box>


            <Box sx={{display: {xs: 'flex', md: 'none'}}} m={5}>
                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h3" align="center"> Welcome to login form </Typography>

                    <Box m={5}>

                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error_msg">{formik.errors.email}</div>
                        ) : null}
                    </Box>
                    <Box m={5}>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error_msg">{formik.errors.password}</div>
                        ) : null}
                    </Box>
                    <Button color="primary" variant="contained" fullWidth type="submit">Login</Button>
                </form>
            </Box>
        </>
    );
};


export default Login;
