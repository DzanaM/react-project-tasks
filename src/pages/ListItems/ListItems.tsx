import React, {useState} from 'react';
import * as yup from "yup";
import {useFormik} from "formik";
import {Box, Button, IconButton, List, ListItem, ListItemText, TextField, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

type Item = {
    id: number;
    text: string;
};

const validationSchema = yup.object({
    item: yup
        .string()
        .required('Item is required'),
});


const ListItems = () => {
    const [listData, setListData] = useState<Item[]>([]);

    const formik = useFormik({
        initialValues: {
            item: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit ', values)
            alert(JSON.stringify(values, null, 2));


            const newItem: Item = {
                id: Math.random(),
                text: values.item,
            };

            setListData((prevItems) => {
                values.item = '';
                return prevItems.concat([newItem]);
            });
        },
    });

    const deleteItem = (id: number) => {
        setListData((prevItems) => {
            return prevItems.filter((item) => item.id !== id);
        });

    }

    const deleteAllItemsHandler = () => {
        setListData([]);
    }

    return (
        <Box mt={5}>
            <Typography variant="h3" align="center">List items</Typography>
            <Box p={5}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <TextField
                            id="item"
                            name="item"
                            label="Enter item"
                            value={formik.values.item}
                            onChange={formik.handleChange}
                            error={formik.touched.item && Boolean(formik.errors.item)}
                            helperText={formik.touched.item && formik.errors.item}
                        />
                        <Button variant="contained" type="submit" sx={{m: 1}}>
                            Add Item
                        </Button>
                    </div>
                </form>
            </Box>

            <Box justifyContent="center">
                <List>
                    {listData.map((item) => (
                            <ListItem
                                key={item.id}
                                disableGutters
                                secondaryAction={
                                    <IconButton aria-label="comment" onClick={() => deleteItem(item.id)}>
                                        <ClearIcon/>
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
            {listData.length ? <Button color="primary" variant="contained" onClick={deleteAllItemsHandler}>
                Delete All Tasks
            </Button> : null
            }
        </Box>

    );
};
export default ListItems;



