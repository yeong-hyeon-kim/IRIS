import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import InputGroup from "react-bootstrap/InputGroup";

function SignIn() {
  return (
    <>
      <div className="Form-SignIn">
        <InputGroup className="mb-3">
          <h1 className="Form-Control">Sign In</h1>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="email"
            placeholder="Username"
            aria-label="Username"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="Password"
            placeholder="Password"
            aria-label="Password"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormCheck aria-label="Checkbox for following text input" />
          <Form.Label>&nbsp; 로그인 유지</Form.Label>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Label>&copy; Silica</Form.Label>
        </InputGroup>
        <InputGroup className="mb-3">
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            로그인
          </button>
        </InputGroup>
      </div>
    </>
  );
}

export default SignIn;
