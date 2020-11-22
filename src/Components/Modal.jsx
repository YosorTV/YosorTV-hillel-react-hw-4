import React from 'react'
import {Field, Form, Formik} from 'formik'
import { useHistory } from 'react-router-dom'

const Modal = ({sticker, onSave}) => {
    const history = useHistory();
    
    const close = () => history.push('/');
    

    const onSubmit = values => {
        onSave(values);
        close();
    }

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = "*Empty Field"
        }

        if (!values.description) {
            errors.description = "*Empty Field"
        }
        return errors;
    }


    return (
        <>
        <Formik 
            initialValues={sticker}
            onSubmit={onSubmit}
            validate={validate}
            >
            {({errors, dirty, isValid}) => (
                <>
                    <div className="fadeIn" onClick={close}></div>
                    <div className="modal">
                    <Form autoComplete="off">
                        <div className="fields">
                        <label htmlFor="title">Title: </label>
                            <Field as="input" name="title"/>
                            {errors.title && <span>{errors.title}</span>}
                        <label htmlFor="desctption">Desctption: </label>
                            <Field as="textarea" name="description"/>
                            {errors.description && <span>{errors.description}</span>}
                        </div>
                        <div className="btnWrapper">
                            <button type="submit" disabled={!dirty || !isValid}>Save</button>
                            <button type="reset" onClick={close}>Cancel</button>
                        </div>
                        </Form>
                    </div>
                </>
            )}
        </Formik>
        </>
    )
}

export default Modal