import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Form = () => {
  let regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      //   age: 0
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .min(5, "firstname is too short")
        .max(15, "firstname is too long")
        .required("firstname cannot be empty"),
      lastname: yup
        .string()
        .min(5, "lastname is too short")
        .max(15, "lastname is too long")
        .required("lastname cannot be empty"),
      email: yup
        .string()
        .email("Email is not valid")
        .required("email cannot be empty"),
      //   age:yup.number("value is not a number").optional(),
      password: yup
        .string()
        .matches(
          regex,
          "Password must contain at least one capital letter, lowercase, a number, a special character and must be 8 characters long"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  console.log(formik.errors);

  return (
    <>
      <h2>SignUp</h2>
      <form className="w-50" onSubmit={formik.handleSubmit}>
        <label className="form-group" htmlFor="">
          Firstname:
        </label>

        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="firstname"
          className="form-control"
          type="text"
          value={formik.values.firstname}
        />
        {/* display error */}
        <p className="text-danger">
          {formik.touched.firstname && formik.errors.firstname ? (
            <span> {formik.errors.firstname} </span>
          ) : (
            " "
          )}
        </p>

        <label className="form-group" htmlFor="">
          Lastname:
        </label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="lastname"
          className="form-control"
          type="text"
          value={formik.values.lastname}
        />
        {/* display error */}
        <p className="text-danger">
          {formik.touched.lastname && formik.errors.lastname ? (
            <span> {formik.errors.lastname} </span>
          ) : (
            " "
          )}
        </p>

        <label className="form-group" htmlFor="">
          Email:
        </label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          className="form-control"
          type="email"
          value={formik.values.email}
        />
        {/* display error */}
        <p className="text-danger">
          {formik.touched.email && formik.errors.email ? (
            <span> {formik.errors.email} </span>
          ) : (
            " "
          )}
        </p>

        <label className="form-group" htmlFor="">
          Password:
        </label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          className="form-control"
          type="text"
          value={formik.values.password}
        />
        {/* display error */}
        <p className="text-danger">
          {formik.touched.password && formik.errors.password ? (
            <span> {formik.errors.password} </span>
          ) : (
            " "
          )}
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
