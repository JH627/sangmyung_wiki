import { useState } from "react";

import CreateAccountId from "../../component/member/CreateAccountForm";
import EmailAuthForm from "../../component/member/EmailAuthForm";
import AllowedEmailMessage from "../../component/member/AllowedEmailMessage";
import styles from "../../component/Login.module.css";

export default function CreateAccount() {
  const authUrls = {
    email: "/signin/email/1",
    code: "/signin/email/2",
  };

  const [email, setEmail] = useState();

  function handleEmailAuth(res) {
    setEmail(res.data.email);
  }

  return (
    <>
      {!email && (
        <EmailAuthForm authUrl={authUrls} handleResult={handleEmailAuth}>
          <AllowedEmailMessage />
        </EmailAuthForm>
      )}
      {email && <CreateAccountId email={email} />}
    </>
  );
}
