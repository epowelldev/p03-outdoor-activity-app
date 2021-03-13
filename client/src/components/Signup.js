function Signup(){
    return(
    <div>
        <h1>Signup</h1>
        <TextInput
            id="TextInput-4"
            label="First Name"
        />
        <TextInput
            id="TextInput-4"
            label="Last Name"
        />
        <TextInput
            email
            id="TextInput-4"
            label="Email"
            validate
      />
        <TextInput
            id="TextInput-4"
            label="Password"
            password
        />
        <Button
            node="button"
            type="submit"
            waves="light"
        >
            Signup
            <Icon right>
                send
            </Icon>
        </Button>
    </div>
    );
    }
    
    export default Signup;