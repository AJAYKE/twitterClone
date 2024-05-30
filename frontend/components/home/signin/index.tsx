import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const SigninContainer = () => {
  const handleSignin = (cred: CredentialResponse) => {
    const googleToken = cred.credential;
  };
  return (
    <div className="flex flex-col flex-start border-2 p-4 rounded-xl border-gray-600 gap-3">
      <div className="text-2xl font-bold">New to X?</div>
      <div className="text-sm text-gray-500">
        Sign up to get your personalized timeline!
      </div>
      <div className="flex border-collapse rounded-full">
        <GoogleLogin onSuccess={(cred) => console.log(cred)} />
      </div>
    </div>
  );
};

export default SigninContainer;
