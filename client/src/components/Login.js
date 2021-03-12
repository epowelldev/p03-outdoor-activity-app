function Login(){
return(
<div>
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
        Login 
        <Icon right>
            send
        </Icon>
    </Button>
</div>
);
}

export default Login;