// import * as Yup from 'yup';
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   Text,
//   VStack,
// } from '@chakra-ui/react';
// import { useFormik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../../redux/auth/authOperations';
// import { useEffect } from 'react';
// import { resetError } from '../../redux/auth/authSlice';
// import { selectError } from '../../redux/contacts/selectors';
// import toast from 'react-hot-toast';

// const schema = Yup.object().shape({
//   name: Yup.string().min(3, 'Too short').required('Required'),
//   email: Yup.string().email().required('Required'),
//   password: Yup.string().min(7, 'Too short').required('Required'),
// });

// export const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const isError = useSelector(selectError);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//     validationSchema: schema,
//     onSubmit: values => {
//       dispatch(register(values));
//     },
//   });

//   useEffect(() => {
//     if (isError) {
//       toast.error('Your email is invalid or already registered');
//       dispatch(resetError());
//     }
//   }, [isError, dispatch]);

//   return (
//     <Flex bg="gray.100" align="center" justify="center" marginTop="10%">
//       <Box bg="white" p={8} rounded="md">
//         <form onSubmit={formik.handleSubmit}>
//           <VStack spacing={4} align="flex-start">
//             <Text
//               fontSize="2xl"
//               fontWeight="bold"
//               marginRight="auto"
//               marginLeft="auto"
//             >
//               Create Account
//             </Text>
//             <FormControl isInvalid={formik.touched.name && formik.errors.name}>
//               <FormLabel htmlFor="name">Your Name</FormLabel>
//               <Input
//                 name="name"
//                 id="name"
//                 type="name"
//                 variant="outline"
//                 onChange={formik.handleChange}
//                 value={formik.values.name}
//                 onBlur={formik.handleBlur}
//               />
//               <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
//             </FormControl>
//             <FormControl
//               isInvalid={formik.touched.email && formik.errors.email}
//             >
//               <FormLabel htmlFor="email">Email Address</FormLabel>
//               <Input
//                 name="email"
//                 id="email"
//                 type="email"
//                 variant="outline"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//                 onBlur={formik.handleBlur}
//               />
//               <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//             </FormControl>
//             <FormControl
//               isInvalid={formik.touched.password && formik.errors.password}
//             >
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 variant="outline"
//                 onChange={formik.handleChange}
//                 value={formik.values.password}
//                 onBlur={formik.handleBlur}
//               />
//               <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//             </FormControl>
//             <Button
//               type="submit"
//               colorScheme="purple"
//               width="full"
//               marginTop="4"
//             >
//               Sign Up
//             </Button>
//           </VStack>
//         </form>
//       </Box>
//     </Flex>
//   );
// };
