import { FormButton, FormClose, FormContainer, FormContent, FormField, FormFieldSpan, FormHead, FormInput, FormLoginOptions, FormText } from "./style";
import { PiUserListDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

type FormProps = {
    formType: string
}

const Form = (props: FormProps) => {

    const { formType } = props;

    return (
        <FormContainer>
            <FormContent>
                <FormHead>
                    {formType == "login" ? "Login" : 'Register'}
                </FormHead>
                {formType == "login" ? <></> : <FormText>
                    <p>Already have an account?</p>
                    <div >
                        <span> Go to login</span>
                    </div>
                </FormText>}
                <form action="#">
                    {formType == "login" ? <></> : <FormField>
                        <FormInput required={true} type="text" placeholder='Full Name' name='first_name'></FormInput>
                        <FormFieldSpan>
                            <PiUserListDuotone />
                        </FormFieldSpan>
                    </FormField>}
                    <FormField>
                        <FormInput required={true} type="text" name='email' placeholder='Email'></FormInput>
                        <FormFieldSpan>
                            <AiTwotoneMail />
                        </FormFieldSpan>
                    </FormField>
                    <FormField>
                        <FormInput required={true} type="password" name='password' placeholder='Password'>
                        </FormInput>
                        <FormFieldSpan>
                            <AiTwotoneLock />
                        </FormFieldSpan>
                    </FormField>
                    <FormButton>{formType == "login" ? "Login" : 'Register'}</FormButton>
                    {formType == "login" ? <></> :
                        <>
                            <FormLoginOptions>
                                <p>--- Or ---</p>
                                <button >
                                    <FcGoogle />
                                </button>
                            </FormLoginOptions>
                            <FormText>
                                <p>Prefer not to join?</p>
                                <div >
                                    <span>Continue as a guest</span>
                                </div>
                            </FormText>
                        </>
                    }
                </form>
                <FormClose>
                    <IoClose />
                </FormClose>
            </FormContent>
        </FormContainer>
    )

}

export default Form;