"use client"; // style
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { schemaSignup } from "@validations";
import { Signup } from "@auth-interface";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterStore } from "@store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { MaskedInput } from "@ui";
import { toast } from "react-toastify";

export default function Signin() {
  const navigate = useNavigate();
  const { signup } = useRegisterStore();

  const initialValues: Signup = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: Signup) => {
    const phone_number = values.phone_number.replace(/\D/g, "");
    const payload = { ...values, phone_number: `+${phone_number}` };

    try {
      const response = await signup(payload);
      if (response.status === 200) {
        toast.success("You registrated! 🤗");
        navigate("/");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-96">
        <h1 className="text-center text-[#0e7490] my-3 text-2xl font-semibold dark:text-white">
          Sign Up
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaSignup}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-2">
              <Field
                name="first_name"
                type="text"
                as={TextInput}
                placeholder="First name"
                helperText={
                  <ErrorMessage
                    name="first_name"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <Field
                name="last_name"
                type="text"
                as={TextInput}
                placeholder="Last name"
                helperText={
                  <ErrorMessage
                    name="last_name"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <MaskedInput
                name="phone_number"
                type="tel"
                mask="+998 (__) ___-__-__"
                placeholder="+998 (__) ___-__-__"
              />

              <Field
                name="email"
                type="email"
                as={TextInput}
                placeholder="Email"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-[red]"
                  />
                }
              />
              <Field
                name="password"
                type="password"
                as={TextInput}
                placeholder="Password"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <div className="flex justify-between my-3">
                <small>Already registered?</small>
                <Link to="/" className="text-[13px] text-sky-500">
                  Sign In
                </Link>
              </div>

              <Button type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />{" "}
                    Submitting
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <DarkModeButton />
    </div>
  );
}
