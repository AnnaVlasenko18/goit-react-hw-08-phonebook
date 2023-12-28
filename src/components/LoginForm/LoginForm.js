import * as Yup from 'yup';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { selectIsError } from '../../redux/auth/authSelector';
import { useEffect } from 'react';
import { resetError } from '../../redux/auth/authSlice';
import toast from 'react-hot-toast';
import { StyledLoginPage } from '../LoginForm/LoginFormStyled';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too short').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error('Your email or password is incorrect');
      dispatch(resetError());
    }
  }, [isError, dispatch]);

  return (
    <StyledLoginPage>
      <Flex align="center" justify="center" marginTop="25%">
        <Box bg="black" p={6} rounded="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  variant="outline"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.password && formik.errors.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  variant="outline"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                width="full"
                marginTop="4"
                color="black"
                bg="white"
                fontSize="18px"
                fontWeight="bold"
              >
                LOG IN
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </StyledLoginPage>
  );
};
