import { FormButton, FormContainer, FormContent, FormField, FormFieldSpan, FormHead, FormInput, FormText } from "./style";
import { PiUserListDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";

const Form = () => {

    return (
        <FormContainer>
            <FormContent>
                <FormHead>
                    Register
                </FormHead>
                <FormText>
                    <p>Already have an account?</p>
                    <div >
                        <span> Go to login</span>
                    </div>
                </FormText>
                <form action="#">
                    <FormField>
                        <FormInput required={true} type="text" placeholder='Full Name' name='first_name'></FormInput>
                        <FormFieldSpan>
                            <PiUserListDuotone />
                        </FormFieldSpan>
                    </FormField>
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
                    <FormButton>Register</FormButton>
                </form>
            </FormContent>
        </FormContainer>
    )

}

export default Form;