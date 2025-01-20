import { SignUp } from "@clerk/clerk-react";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-[100vh-80px]">
      <SignUp signInUrl="/login" />
    </div>
  );
}
