import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AppLogIn.css";

function LogIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const submitForm = (e) => console.log(e);
  console.log(errors);
  return (
    <Container className="Container">
        <Form onSubmit={handleSubmit(submitForm)} className="Form-box">
            <Form.Label className="form-label">Log-in</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="form-control"
              type="email"
              placeholder="Username"
              isInvalid={!!errors.email}
              {...register("email", { required: "email was required field." })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className="form-control"
              type="password"
              placeholder="Password"
              isInvalid={!!errors.password}
              {...register("password", {
                required: "password was required field.",
                validate: (v) =>
                  v.length > 8 ||
                  "password length must be greater than 8 charector",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-submit">
            Login
          </Button>
        </Form>
    </Container>
  );
}

export default LogIn;
