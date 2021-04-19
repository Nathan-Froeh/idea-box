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
import { 
  Formik, 
  Field, 
  Form, 
  // useFormik,
 } from 'formik';


export function SideNav() {

  function validate(value) {
    let error
    if (!value) {
      error = "Required"
    }
    return error
  }

  const sub = (event) => {
    event.preventDefault()
    console.log('submit', event.target)
  }

  return (
    <Box className="side-nav" w='300px'>

      <Formik
        initialValues={{ title: "", message: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}>
        {(props) => (
          <Form onSubmit={sub}>
            <Field name="title" validate={validate}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.title && form.touched.title}>
                  <FormLabel>Title</FormLabel>
                  <Input {...field} id="title"/>
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message" validate={validate}>
             {({ field, form }) => (
                <FormControl isInvalid={form.errors.message && form.touched.message}>
                  <FormLabel>Message</FormLabel>
                  <Textarea {...field} id="message" onChange={form.handleChange} value={form.values.message}/>
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box m="4">
              <Button colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                Submit
              </Button>
              <Button colorScheme="teal" type="reset" variant="outline">
                Clear
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )

}

