import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-[100vh-80px]">
      <SignIn signUpUrl="/register" />
    </div>
  );
}
