// import ForgotPasswordForm from "@/components/ForgotPasswordForm";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import {
//      Card,
//      CardContent,
//      CardDescription,
//      CardHeader,
//      CardTitle,
// } from "@/components/ui/card";
// import { AlertCircle } from "lucide-react";
// import Link from "next/link";


// interface ForgotPasswordPageProps {
//      searchParams: Promise<{ error?: string }>;
// }


// const ForgotPasswordPage = async ({
//      searchParams,
// }: ForgotPasswordPageProps) => {

//      const params = await searchParams;

//      const error = params.error;

//      return (
//      <div className="flex min-h-screen items-center justify-center bg-muted/10 p-4">
//      <Card className="w-full max-w-md">
//      <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
//           <CardDescription>
//           Enter your email address and we&apos;ll send you a link to reset
//           your password.
//           </CardDescription>
//      </CardHeader>
//      <CardContent>
//           {error === "invalid-link" && (
//           <Alert variant="destructive" className="mb-4">
//           <AlertCircle className="h-4 w-4" />
//           <AlertDescription>
//                Invalid password reset link. The email or token does not match.
//           </AlertDescription>
//           </Alert>
//      )}
//      {error === "expired-link" && (
//           <Alert variant="destructive" className="mb-4">
//           <AlertCircle className="h-4 w-4" />
//           <AlertDescription>
//                Your password reset link has expired. Please request a new one.
//           </AlertDescription>
//           </Alert>
//      )}
//      <ForgotPasswordForm />
//      <div className="mt-4 text-center text-sm">
//           Remember your password?{" "}
//           <Link href="/login" className="text-primary hover:underline">
//           Back to Login
//           </Link>
//      </div>
//      </CardContent>
//      </Card>
//      </div>
// );
// };

// export default ForgotPasswordPage;












// updated version of the ForgotPasswordPage component with improved styling and structure
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";


interface ForgotPasswordPageProps {
     searchParams: Promise<{ error?: string }>;
}

const ForgotPasswordPage = async ({
     searchParams,
}: ForgotPasswordPageProps) => {

     const params = await searchParams;
     const error = params.error;

     return (
     <main className="flex min-h-[90vh] items-center justify-center bg-[#F8FAFC] p-4 relative overflow-hidden">

     {/* Decorative Background Elements */}
     <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
     <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#0A3D54]/5 rounded-full blur-3xl pointer-events-none" />

     {/* Form Container */}
     <div className="w-full max-w-[500px] z-10 relative">

     {/* URL Error Alerts */}
     {error === "invalid-link" && (
          <Alert variant="destructive" className="mb-6 bg-red-50 border-red-200 text-red-800 rounded-2xl">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">
          Invalid password reset link. The email or token does not match.
          </AlertDescription>
          </Alert>
     )}

     {error === "expired-link" && (
          <Alert variant="destructive" className="mb-6 bg-red-50 border-red-200 text-red-800 rounded-2xl">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">
          Your password reset link has expired. Please request a new one.
          </AlertDescription>
          </Alert>
     )}

     <ForgotPasswordForm />
     </div>

     </main>
);
};

export default ForgotPasswordPage;