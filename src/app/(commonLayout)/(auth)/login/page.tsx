import AuthContainer from "@/components/auth-container";


// 1. Make the component async
// 2. Wrap the searchParams type in a Promise
export default async function LoginPage({
     searchParams,
}: {
     searchParams: Promise<{ redirect?: string }>;
}) {
     // 3. Await the searchParams before using them
     const resolvedSearchParams = await searchParams;

     return (
     <div className="w-full flex justify-center py-10 md:py-20">
     {/* 4. Pass the resolved value */}
     <AuthContainer redirect={resolvedSearchParams.redirect} defaultView="login" />
     </div>
);
}


















// previously in src/app/%28commonLayout%29/%28auth%29/login/page.tsx


// import LoginForm from "@/components/login-form";


// const LoginPage = async ({
//      searchParams,
// }: {
//      searchParams?: Promise<{ redirect?: string }>;
// }) => {

//      const params = (await searchParams) || {};

//      return (
//      <div className="flex min-h-screen items-center justify-center">
//      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
//      <div className="space-y-2 text-center">
//      <h1 className="text-3xl font-bold">Welcome Back</h1>
//      <p className="text-gray-500">
//           Enter your credentials to access your account
//      </p>
//      </div>
//           <LoginForm redirect={params.redirect} />
//      </div>
// </div>
// );
// };

// export default LoginPage;