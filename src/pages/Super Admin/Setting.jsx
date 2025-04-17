import React , {useState} from 'react'
import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
// import './Sidebar.css';

function Setting() {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [username, setUsername] = useState("Superadmin");
  const [email, setEmail] = useState("superadmin@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Settings Saved:", {
      username,
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <Container className="mt-5 vh-100">
    <h2 className='fw-bold mb-3'>Settings</h2>
    <Form className="settings-form" onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label >Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`${darkMode ? "card-dark" : null }`}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label className={`${darkMode ? "text-white" : null }`} >Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${darkMode ? "card-dark" : null }`}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label className={`${darkMode ? "text-white" : null }`} >Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${darkMode ? "card-dark" : null }`}
        />
      </Form.Group>

      <Form.Group controlId="confirm-password">
        <Form.Label className={`${darkMode ? "text-white" : null }`} >Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`${darkMode ? "card-dark" : null }`}
        />
      </Form.Group>

      <Button type="submit" variant="" className="mt-2" style={{backgroundColor:"#082f49",color:"white"}}>
        Save Changes
      </Button>
    </Form>
  </Container>
  )
}

export default Setting
