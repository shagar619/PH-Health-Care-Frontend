// src/components/auth-container.tsx
"use client";

import { useState, useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Facebook, Github, Linkedin, Chrome } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { registerPatient } from "@/services/auth/registerPatient";
import { loginUser } from "@/services/auth/loginUser";
import InputFieldError from "./shared/InputFieldError";



// Updated imports to match your folder structure

interface AuthContainerProps {
     redirect?: string;
     defaultView?: "login" | "register"; // Tells the component which side to show first
}


export default function AuthContainer({ redirect, defaultView = "login" }: AuthContainerProps) {

     // Set initial state based on which page the user visited
     const [isSignUpActive, setIsSignUpActive] = useState(defaultView === "register");

     // Server Actions
     const [loginState, loginAction, isLoginPending] = useActionState(loginUser, null);
     const [regState, regAction, isRegPending] = useActionState(registerPatient, null);

     // Handle Toast Notifications
     useEffect(() => {
     if (loginState && !loginState.success && loginState.message) {
     toast.error(loginState.message);
     }
     }, [loginState]);

     useEffect(() => {
     if (regState && !regState.success && regState.message) {
     toast.error(regState.message);
     }
     }, [regState]);

     // Optional: Update the URL quietly when user toggles the panel 
     // so if they refresh, they stay on the right form.
     const handleToggle = (isRegister: boolean) => {
     setIsSignUpActive(isRegister);
     window.history.pushState(null, "", isRegister ? "/register" : "/login");
     };

     console.log("regState", regState);


     return (
     <div className="flex items-center justify-center p-4 w-full">
     <div className="relative overflow-hidden bg-white w-full max-w-[850px] min-h-[600px] rounded-3xl border border-slate-200 flex shadow-sm">

     {/* =========================================
          SIGN IN FORM (Left Side)
     ========================================= */}
     <div 
          className={`absolute top-0 left-0 h-full w-1/2 p-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-white ${
          isSignUpActive ? "translate-x-[100%] opacity-0 z-10" : "translate-x-0 opacity-100 z-20"
          }`}
     >
     <form action={loginAction} className="w-full max-w-[300px] flex flex-col items-center text-center">
          {redirect && <input type="hidden" name="redirect" value={redirect} />}

          <h1 className="text-3xl font-bold text-[#0A3D54] mb-4">Sign In</h1>

     <div className="flex gap-3 mb-4">
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Chrome className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Github className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Linkedin className="w-4 h-4" /></a>
     </div>

          <span className="text-xs text-slate-500 mb-6">or use your email password</span>

     <div className="w-full space-y-3 mb-4">
     <div>
          <Input id="email" name="email" type="email" placeholder="Email" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="email" state={loginState} />
     </div>
     <div>
          <Input id="password" name="password" type="password" placeholder="Password" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="password" state={loginState} />
     </div>
     </div>

          <a href="/forgot-password" className="text-xs text-slate-600 hover:text-[#00B4D8] mb-6 font-medium">
          Forget Your Password?
          </a>
     
     <Button type="submit" disabled={isLoginPending} className="w-full bg-[#0A3D54] text-white rounded-lg py-6 font-bold uppercase tracking-wider hover:bg-[#083043] transition-colors cursor-pointer">
          {isLoginPending ? "Logging in..." : "Sign In"}
     </Button>
     </form>
     </div>

     {/* =========================================
          SIGN UP FORM (Right Side)
     ========================================= */}
     <div 
          className={`absolute top-0 left-0 h-full w-1/2 p-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-white ${
          isSignUpActive ? "translate-x-[100%] opacity-100 z-20" : "translate-x-0 opacity-0 z-10 pointer-events-none"
          }`}
     >
     <form action={regAction} className="w-full max-w-[300px] flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-[#0A3D54] mb-4">Create Account</h1>

     <div className="flex gap-3 mb-4">
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Chrome className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Github className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"><Linkedin className="w-4 h-4" /></a>
     </div>

          <span className="text-xs text-slate-500 mb-6">or use your email for registration</span>

     <div className="w-full space-y-3 mb-6">
     <div>
          <Input id="name" name="name" type="text" placeholder="Full Name" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="name" state={regState} />
     </div>
     <div>
          <Input id="address" name="address" type="text" placeholder="Address" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="address" state={regState} />
     </div>
     <div>
          <Input id="email" name="email" type="email" placeholder="Email" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="email" state={regState} />
     </div>
     <div>
          <Input id="password" name="password" type="password" placeholder="Password" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="password" state={regState} />
     </div>
     <div>
          <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" className="bg-slate-50 border-slate-200" />
          <InputFieldError field="confirmPassword" state={regState} />
     </div>
     </div>

     <Button type="submit" disabled={isRegPending} className="w-full bg-[#0A3D54] text-white rounded-lg py-6 font-bold uppercase tracking-wider hover:bg-[#083043] transition-colors cursor-pointer">
          {isRegPending ? "Creating..." : "Sign Up"}
     </Button>
     </form>
     </div>

     {/* =========================================
          SLIDING TOGGLE OVERLAY
        ========================================= */}
     <div 
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-[100] ${
          isSignUpActive ? "-translate-x-full rounded-r-[150px]" : "rounded-l-[150px]"
          }`}
     >
     <div 
          className={`bg-gradient-to-r from-[#00B4D8] to-[#0A3D54] relative -left-full h-full w-[200%] transform transition-all duration-700 ease-in-out text-white ${
          isSignUpActive ? "translate-x-1/2" : "translate-x-0"
          }`}
     >
     {/* Toggle Panel - Left (Sign In CTA) */}
     <div 
          className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-12 text-center top-0 transform transition-all duration-700 ease-in-out ${
          isSignUpActive ? "translate-x-0" : "-translate-x-[200%]"
          }`}
     >
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-sm font-medium mb-8 leading-relaxed text-white/90">
               Enter your personal details to use all of site features and manage your healthcare journey.
          </p>
          <button onClick={() => handleToggle(false)} className="bg-transparent border-2 border-white text-white px-12 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A3D54] transition-colors cursor-pointer">
               Sign In
          </button>
     </div>

     {/* Toggle Panel - Right (Sign Up CTA) */}
     <div 
          className={`absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-12 text-center top-0 transform transition-all duration-700 ease-in-out ${
          isSignUpActive ? "translate-x-[200%]" : "translate-x-0"
          }`}
     >
          <h1 className="text-4xl font-bold mb-4">Hello, Friend!</h1>
          <p className="text-sm font-medium mb-8 leading-relaxed text-white/90">
               Register with your personal details to use all of site features and book your appointments.
          </p>
          <button onClick={() => handleToggle(true)} className="bg-transparent border-2 border-white text-white px-12 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A3D54] transition-colors cursor-pointer">
               Sign Up
          </button>
     </div>

     </div>
     </div>
     </div>
     </div>
);
}