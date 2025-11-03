import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldSet, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Form from "next/form";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: Linkedin,
  },
];

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup page for the application",
};

const PageSignUp = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
  };

  return (
    <div className="container">
      <h1 className="my-10 flex items-center justify-center text-3xl leading-[115%] font-semibold text-neutral-900 md:text-5xl md:leading-[115%] dark:text-neutral-100">
        Sign up
      </h1>
      <div className="mx-auto max-w-md space-y-6">
        <div className="grid gap-3">
          {loginSocials.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-brand flex w-full transform rounded-lg px-4 py-3 text-white transition-transform hover:translate-y-[-2px] sm:px-6 dark:bg-neutral-800"
            >
              {<item.icon />}
              <h3 className="grow text-center text-sm font-medium text-white sm:text-sm dark:text-neutral-300">
                {item.name}
              </h3>
            </a>
          ))}
        </div>
        {/* OR */}
        <div className="relative text-center">
          <span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
            OR
          </span>
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
        </div>
        {/* FORM */}
        <Form action={handleSubmit}>
          <FieldSet>
            <FieldGroup className="sm:space-y-6">
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                />
              </Field>
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input type="password" name="password" />
              </Field>

              <Button className="mt-2 w-full" type="submit">
                Continue
              </Button>
            </FieldGroup>
          </FieldSet>
        </Form>

        {/* ==== */}
        <span className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
          Already have an account? {` `}
          <Link className="text-primary-600 underline" href="/login">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PageSignUp;
