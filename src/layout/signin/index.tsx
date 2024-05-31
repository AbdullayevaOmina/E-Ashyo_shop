"use client"; // style
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { schemaSignin } from "@validations";
import { Signin } from "@auth-interface";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterStore } from "@store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const { signin } = useRegisterStore();

  const initialValues: Signin = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: Signin) => {
    try {
      const response = await signin(values);
      if (response.status === 201) {
        toast.success("Welcome! 🤗");
        navigate("/main");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-96">
        <h1 className="text-center text-[#0e7490] my-3 text-2xl font-semibold dark:text-white">
          Sign In
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaSignin}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-2">
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

              <div className="flex justify-between mb-4">
                <small className="dark:text-gray-300">
                  You have not registered yet??
                </small>
                <Link to="/signup" className="text-[13px] text-sky-500">
                  Sign Up
                </Link>
              </div>

              <Button type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner aria-label="Default status example" size="md" />{" "}
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
