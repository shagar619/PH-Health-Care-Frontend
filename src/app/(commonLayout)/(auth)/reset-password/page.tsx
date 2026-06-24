import ResetPasswordForm from "@/components/ResetPasswordForm";


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