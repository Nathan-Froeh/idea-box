import './sideNav.scss';
import { 
  Box,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  
} from "@chakra-ui/react"
import { Formik, Field, Form, useFormik } from 'formik';


export function SideNav() {


  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.message) {
      errors.message = 'Required';
    }
    console.log('errors', errors)
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: '1',
      message: '2'
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box className="side-nav" w='300px'>
      <Formik
        initialValues={{  title: '1', message: '2' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
      {(props) => (
        <Form>
          <Field name="title">
            {({ field, form }) => (
              <FormControl isInvalid={formik.errors.title && formik.touched.title}>
                <FormLabel>Title</FormLabel>
                <Input {...field} id="title" onChange={formik.handleChange} value={formik.values.title} placeholder="title" />
                <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message">
            {({ field, form }) => (
              <FormControl isInvalid={formik.errors.message && formik.touched.message}>
                <FormLabel>Message</FormLabel>
                <Textarea {...field} id="message" placeholder="message" onChange={formik.handleChange} value={formik.values.message}/>
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </Box>
  )
}

