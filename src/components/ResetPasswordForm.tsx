/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { KeyRound, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { resetPassword } from "@/services/auth/auth.service";
import InputFieldError from "./shared/InputFieldError";

interface ResetPasswordFormProps {
  redirect?: string;
  email?: string;
  token?: string;
}

const ResetPasswordForm = ({
  redirect,
  email,
  token,
}: ResetPasswordFormProps) => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(resetPassword, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }

    if (state && state.success && state.redirectToLogin) {
      toast.success(state.message);
      setTimeout(() => {
        router.push(redirect || "/login");
      }, 1500);
    }
  }, [state, router, redirect]);

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-12 shadow-sm">
      
      {/* Visual Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6">
          <KeyRound className="w-8 h-8 text-[#00B4D8]" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-bold text-[#0A3D54] mb-3">Reset Password</h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
          Your new password must be different from previously used passwords to ensure account security.
        </p>
      </div>

      <form action={formAction}>
        {/* Hidden Fields */}
        {redirect && <Input type="hidden" name="redirect" value={redirect} />}
        {email && <Input type="hidden" name="email" value={email} />}
        {token && <Input type="hidden" name="token" value={token} />}
        {email && token && (
          <Input type="hidden" name="isEmailReset" value="true" />
        )}
        <Input
          type="hidden"
          name="isEmailReset"
          value={email && token ? "true" : "false"}
        />

        <FieldGroup>
          <div className="grid grid-cols-1 gap-5">
            {/* New Password */}
            <Field>
              <FieldLabel htmlFor="newPassword" className="text-slate-700 font-medium text-sm ml-1">
                New Password
              </FieldLabel>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                autoComplete="new-password"
                className="bg-slate-50 border-slate-200 mt-2 focus-visible:ring-[#00B4D8] focus-visible:border-transparent transition-all"
              />
              <InputFieldError field="newPassword" state={state as any} />
            </Field>

            {/* Confirm Password */}
            <Field>
              <FieldLabel htmlFor="confirmPassword" className="text-slate-700 font-medium text-sm ml-1">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                autoComplete="new-password"
                className="bg-slate-50 border-slate-200 mt-2 focus-visible:ring-[#00B4D8] focus-visible:border-transparent transition-all"
              />
              <InputFieldError field="confirmPassword" state={state as any} />
            </Field>
          </div>

          <FieldGroup className="mt-8">
            <Field>
              <Button 
                type="submit" 
                disabled={isPending} 
                className="w-full bg-[#0A3D54] text-white rounded-xl py-6 font-bold uppercase tracking-wider hover:bg-[#083043] transition-colors cursor-pointer"
              >
                {isPending ? "Resetting..." : "Reset Password"}
              </Button>

              <FieldDescription className="text-center mt-8">
                <a 
                  href="/login" 
                  className="inline-flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-[#00B4D8] transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </div>
  );
};

export default ResetPasswordForm;