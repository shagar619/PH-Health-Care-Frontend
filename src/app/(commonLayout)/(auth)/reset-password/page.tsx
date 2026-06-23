// import ResetPasswordForm from "@/components/ResetPasswordForm";

import ResetPasswordForm from "@/components/ResetPasswordForm";




// const ResetPasswordPage = async ({
//      searchParams,
// }: { searchParams?: Promise<{ redirect?: string; email?: string; token?: string }>;
// }) => {

//      const params = (await searchParams) || {};
//      const { redirect, email, token } = params;

//      return (
//      <div className="flex min-h-screen items-center justify-center">
//      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
//      <div className="space-y-2 text-center">
//           <h1 className="text-3xl font-bold">Reset Your Password</h1>
//           <p className="text-muted-foreground">
//           Enter your new password below to reset your account password
//           </p>
//      </div>
//      <ResetPasswordForm redirect={redirect} email={email} token={token} />
//      </div>
//      </div>
// );
// };

// export default ResetPasswordPage;














const ResetPasswordPage = async ({
  searchParams,
}: { 
  searchParams?: Promise<{ redirect?: string; email?: string; token?: string }>;
}) => {
  const params = (await searchParams) || {};
  const { redirect, email, token } = params;

  return (
    <main className="flex min-h-[90vh] items-center justify-center bg-[#F8FAFC] p-4 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#0A3D54]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Form Container */}
      <div className="w-full max-w-[500px] z-10 relative">
        <ResetPasswordForm redirect={redirect} email={email} token={token} />
      </div>
      
    </main>
  );
};

export default ResetPasswordPage;