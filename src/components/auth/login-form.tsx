"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useRouter } from "@/i18n/routing";
import { Icon } from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { loginSchema, LoginFormData } from "@/lib/validations/auth/login";

const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const [passwordType, setPasswordType] = React.useState("password");

  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "all",
    defaultValues: {
      email: "dashcode@codeshaper.net",
      password: "password",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    startTransition(async () => {
      try {
        const response = {
          error: false,
        };

        if (!!response.error) {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          });
        } else {
          router.push("/dashboard/analytics");
          toast.success("Successfully logged in");
        }
      } catch (err: any) {
        toast.error(err.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4 2xl:mt-7">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-default-600 font-medium">
          Email{" "}
        </Label>
        <Input
          size="lg"
          disabled={isPending}
          {...register("email")}
          type="email"
          id="email"
          className={cn("", {
            "border-destructive": errors.email,
          })}
        />
      </div>
      {errors.email && (
        <div className="text-destructive mt-2 text-sm">
          {errors.email.message}
        </div>
      )}

      <div className="mt-3.5 space-y-2">
        <Label htmlFor="password" className="text-default-600 mb-2 font-medium">
          Password{" "}
        </Label>
        <div className="relative">
          <Input
            size="lg"
            disabled={isPending}
            {...register("password")}
            type={passwordType}
            id="password"
            className="peer"
            placeholder=" "
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 cursor-pointer ltr:right-4 rtl:left-4"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
              <Icon icon="heroicons:eye" className="text-default-400 h-5 w-5" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="text-default-400 h-5 w-5"
              />
            )}
          </div>
        </div>
      </div>
      {errors.password && (
        <div className="text-destructive mt-2 text-sm">
          {errors.password.message}
        </div>
      )}

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="checkbox" defaultChecked />
          <Label htmlFor="checkbox">Keep Me Signed In</Label>
        </div>
        <Link
          href="/auth/forgot-password"
          className="text-default-800 dark:text-default-400 text-sm leading-6 font-medium"
        >
          Forgot Password?
        </Link>
      </div>
      <Button fullWidth disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Loading..." : "Sign In"}
      </Button>
    </form>
  );
};
export default LoginForm;
