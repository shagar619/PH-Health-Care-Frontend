// "use client";

// import { forgotPassword } from "@/services/auth/auth.service";
// import { useActionState } from "react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Button } from "@/components/ui/button";
// import { Field } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { CheckCircle, Loader2, Mail } from "lucide-react";




// const ForgotPasswordForm = () => {

//      const [state, formAction, isPending] = useActionState(forgotPassword, null);


//      return (
//      <form action={formAction} className="space-y-6">
//      {state?.success && (
//      <Alert className="border-green-500 bg-green-50 text-green-900">
//           <CheckCircle className="h-4 w-4" />
//           <AlertDescription>{state.message}</AlertDescription>
//      </Alert>
//      )}

//      {state?.success === false && (
//      <Alert variant="destructive">
//           <AlertDescription>{state.message}</AlertDescription>
//      </Alert>
//      )}

//      <Field>
//      <Label htmlFor="email">Email Address</Label>
//      <div className="relative">
//           <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//           <Input
//                id="email"
//                name="email"
//                type="email"
//                placeholder="Enter your email"
//                className="pl-10"
//                defaultValue={state?.formData?.email || ""}
//                required
//                disabled={isPending}
//           />
//      </div>
//      {state?.errors?.find((e) => e.field === "email") && (
//           <p className="text-sm text-red-500">
//           {state.errors.find((e) => e.field === "email")?.message}
//           </p>
//      )}
//      </Field>

//      <Button type="submit" disabled={isPending} className="w-full">
//      {isPending ? (
//      <>
//      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           Sending Reset Link...
//      </>
//      ) : (
//           "Send Reset Link"
//      )}
//      </Button>
//      </form>
// );
// };

// export default ForgotPasswordForm;

















// updated version of the ForgotPasswordForm component with improved styling and structure
"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Mail, ArrowLeft, ShieldQuestion } from "lucide-react";
import { forgotPassword } from "@/services/auth/auth.service";


const ForgotPasswordForm = () => {

     const [state, formAction, isPending] = useActionState(forgotPassword, null);

     return (
     <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-12 shadow-sm">

     {/* Visual Header */}
     <div className="flex flex-col items-center mb-10 text-center">
     <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6">
          <ShieldQuestion className="w-8 h-8 text-[#00B4D8]" strokeWidth={1.5} />
     </div>
          <h1 className="text-3xl font-bold text-[#0A3D54] mb-3">Forgot Password</h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-[300px]">
          Enter your email address and we&apos;ll send you a secure link to reset your password.
          </p>
     </div>

     <form action={formAction} className="space-y-6">

     {/* Form Alerts */}
     {state?.success && (
          <Alert className="border-green-200 bg-green-50 text-green-800 rounded-xl">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="ml-2 font-medium">{state.message}</AlertDescription>
          </Alert>
     )}

     {state?.success === false && (
          <Alert variant="destructive" className="rounded-xl">
          <AlertDescription>{state.message}</AlertDescription>
          </Alert>
     )}

     {/* Email Input Field */}
     <Field>
          <Label htmlFor="email" className="text-slate-700 font-medium text-sm ml-1">
               Email Address
          </Label>
     <div className="relative mt-2">
          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <Input
               id="email"
               name="email"
               type="email"
               placeholder="Enter your email"
               className="pl-12 bg-slate-50 border-slate-200 h-12 rounded-xl focus-visible:ring-[#00B4D8] focus-visible:border-transparent transition-all"
               defaultValue={state?.formData?.email || ""}
               required
               disabled={isPending}
          />
          </div>
          {state?.errors?.find((e) => e.field === "email") && (
          <p className="text-sm text-red-500 mt-2 ml-1 font-medium">
          {state.errors.find((e) => e.field === "email")?.message}
          </p>
          )}
     </Field>

     {/* Submit Action & Footer Links */}
     <div className="pt-4 space-y-6">
          <Button 
               type="submit" 
               disabled={isPending} 
               className="w-full bg-[#0A3D54] text-white rounded-xl py-6 font-bold uppercase tracking-wider hover:bg-[#083043] transition-colors cursor-pointer"
          >
          {isPending ? (
          <>
               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
               Sending Link...
          </>
          ) : (
          "Send Reset Link"
          )}
          </Button>

     <div className="text-center">
          <Link 
               href="/login" 
               className="inline-flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-[#00B4D8] transition-colors font-medium"
          >
          <ArrowLeft className="w-4 h-4" />
               Back to Login
          </Link>
     </div>
     </div>

     </form>
     </div>
);
};

export default ForgotPasswordForm;