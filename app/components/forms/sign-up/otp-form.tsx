import React from "react";
import OPTInput from "../../otp";

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  onOTP: string;
};

const OTPForm = ({ setOTP, onOTP }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-iridium md:text-sm">
        Enter the one time password that was sent to your email
      </p>
      <div className="w-full justify-center flex py-5">
        <OPTInput otp={onOTP} setOTP={setOTP} />
      </div>
    </>
  );
};

export default OTPForm;