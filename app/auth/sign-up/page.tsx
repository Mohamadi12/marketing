import ButtonHandler from "@/app/components/forms/sign-up/button-handler"
import SignUpFormProvider from "@/app/components/forms/sign-up/form-provider"
import HighLightBar from "@/app/components/forms/sign-up/highlight-bar"
import RegistrationFormStep from "@/app/components/forms/sign-up/registration-step"

type Props = {
  children: React.ReactNode
}

const SignUp = ({children}: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep/>
            <ButtonHandler/>
          </div>
          <HighLightBar/>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp