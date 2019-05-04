import React from 'react';
import './signUpForm.css'


const signUpForm = () => {

    return(
<div  className="signup center">
            <article class="pa4 black-80 shadow-2">
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                <div class="mt3">
                        <label class="db fw4 grow lh-copy f10" for="fullname">Full Name </label>
                        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="string" name="string"  id="string"/>
                </div>

                <div class="mt3">
                        <label class="db fw4 lh-copy f10" for="email-address">Email address* </label>
                        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                </div>
                <div class="mt3">
                        <label class="db fw4 lh-copy f10" for="email-address">Mobile Number </label>
                        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="12345865" name="number"  id="number"/>
                </div>

                <div class="mt3">
                    <label class="db fw4 lh-copy f10" for="password">Password*</label>
                    <input class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
                </div>

                </fieldset>

                <div class="mt3">
                <input class="b ph3 pv2 input-reset grow ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/>
                </div>

            </form>
            </article>
</div>         

);


}

export default signUpForm;