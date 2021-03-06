/* eslint-disable no-unused-vars */
import './sideNav.scss';
import { 
  Box,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex
} from "@chakra-ui/react"
import { 
  Formik, 
  Field, 
  Form, 
 } from 'formik';
 import React, { useState, useContext } from 'react';
import { Context } from '../Store/Store';
import { v4 as uuidv4 } from 'uuid';


export function SideNav() {
  const {state, dispatch} = useContext(Context);

  function validate(value) {
    let error
    if (!value) {
      error = "Required"
    }
    return error
  }

  const submit = (event) => {
    event.preventDefault()
    const {title, message} = event.target;

    dispatch({type: 'ADD-IDEA', payload: {
      id: uuidv4(),
      favorite: false,
      title: title.value, 
      message: message.value
    }})
  }

  return (
    <Box className="side-nav" w='300px' p="5">

      <Formik
        initialValues={{ title: "", message: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}>
        {(props) => (
          <Form onSubmit={submit}>
            <Field name="title" validate={validate} mb="10">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.title && form.touched.title}>
                  <FormLabel>Title</FormLabel>
                  <Input {...field} id="title"/>
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message" validate={validate} mb="10">
             {({ field, form }) => (
                <FormControl isInvalid={form.errors.message && form.touched.message}>
                  <FormLabel>Message</FormLabel>
                  <Textarea {...field} id="message" onChange={form.handleChange} value={form.values.message}/>
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex align="center" justify="space-between">

              <Button colorScheme="teal" type="reset" variant="outline">
                Clear
              </Button>
              <Button colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  )

}

