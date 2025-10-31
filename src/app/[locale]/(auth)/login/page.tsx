"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldSet, FieldLabel } from "@/components/ui/field";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/validations/auth/login";

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

const PageLogin = () => {
  const t = useTranslations("Auth");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    // setError("");
    const res = await signIn("credentials", {
      email: "superadmin@massarates.ma",
      password: "Fdgx9!kQ",
      redirect: false, // prevent automatic redirect
    });

    if (res?.error) {
      // setError("Invalid credentials");
    } else {
      window.location.href = "/"; // redirect manually
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="my-10 flex items-center justify-center text-3xl leading-[115%] font-semibold text-neutral-900 md:text-5xl md:leading-[115%] dark:text-neutral-100">
          Login
        </h1>
        <div className="mx-auto flex max-w-md flex-col gap-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-brand flex w-full rounded-lg px-4 py-3 text-white transition-transform hover:-translate-y-0.5 sm:px-6"
              >
                {<item.icon />}
                <h3 className="grow text-center text-sm font-medium sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          <div className="relative text-center">
            <span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
              OR
            </span>
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldSet>
              <FieldGroup className="sm:space-y-6">
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <FieldLabel className="flex items-center justify-between gap-2">
                    <span>Password</span>
                    <Link
                      className="text-primary-600 text-sm font-normal"
                      href={ROUTES.AUTH.FORGOT_PASSWORD}
                    >
                      Forgot password?
                    </Link>
                  </FieldLabel>
                  <Input
                    type="password"
                    {...register("password")}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                </Field>
                <Button className="mt-2 w-full" type="submit">
                  Continue
                </Button>
              </FieldGroup>
            </FieldSet>
          </form>
          <span className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link
              className="text-primary-600 underline"
              href={ROUTES.AUTH.SIGNUP}
            >
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
