import React from "react";
import {
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  Anchor,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
  Paragraph,
  GhostButton,
} from './LoginComponents';

function Login() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Container>
             <SignUpContainer signinIn={signIn}>
                 <Form>
                     <Title>Create Account</Title>
                     <Input type='text' placeholder='Name' />
                     <Input type='email' placeholder='Email' />
                     <Input type='password' placeholder='Password' />
                     <Button>Sign Up</Button>
                 </Form>
             </SignUpContainer>

             <SignInContainer signinIn={signIn}>
                  <Form>
                      <Title className="text-black">Sign in</Title>
                      <Input className="text-black" type='email' placeholder='Email' />
                      <Input className="text-black" type='password' placeholder='Password' />
                      <Anchor className="text-black" href='#'>Forgot your password?</Anchor>
                      <Button>Sigin In</Button>
                  </Form>
             </SignInContainer>

             <OverlayContainer signinIn={signIn}>
                 <Overlay signinIn={signIn}>

                 <LeftOverlayPanel signinIn={signIn}>
                     <Title>Welcome Back!</Title>
                     <Paragraph>
                         To keep connected with us please login with your personal info
                     </Paragraph>
                     <GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </GhostButton>
                     </LeftOverlayPanel>

                     <RightOverlayPanel signinIn={signIn}>
                       <Title>Hello, Friend!</Title>
                       <Paragraph>
                           Enter Your personal details and start journey with us
                       </Paragraph>
                           <GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </GhostButton> 
                     </RightOverlayPanel>
 
                 </Overlay>
             </OverlayContainer>

         </Container>
     )
}

export default Login;
