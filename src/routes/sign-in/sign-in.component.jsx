import { sighInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await sighInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn