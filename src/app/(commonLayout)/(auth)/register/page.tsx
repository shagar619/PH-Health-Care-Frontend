import AuthContainer from "@/components/auth-container";


export default function RegisterPage() {

     return (
     <div className="w-full flex justify-center py-10 md:py-20">
     {/* Pass defaultView="register" */}
     <AuthContainer defaultView="register" />
     </div>
);
}








// previously in src/app/%28commonLayout%29/%28auth%29/register/page.tsx



// import RegisterForm from "@/components/register-form";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";




// const RegisterPage = () => {
// return (
//      <>
//      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
//      <div className="w-full max-w-xl">
//           <Card>
//           <CardHeader>
//           <CardTitle>Create an account</CardTitle>
//           <CardDescription>
//                Enter your information below to create your account
//           </CardDescription>
//           </CardHeader>
//           <CardContent>
//                <RegisterForm />
//           </CardContent>
//           </Card>
//      </div>
//      </div>
//      </>
// );
// };

// export default RegisterPage;