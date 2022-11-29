// Basic data validation usign yup library
import * as yup from "yup";

const validation = yup.object().shape({
  title: yup.string("Please enter a valid title").required("Required"),
  author: yup.string("Please enter a valid author").required("Required"),
  article: yup
    .string("Please enter a valid article")
    .min(30, "At least 30 characters")
    .max(10000, "At most 10000 words")
    .required("Required"),
});

export { validation };