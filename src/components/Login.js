import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";
import {
  IonButton,
  IonPage,
  IonCard,
  IonItem,
  IonLabel,
  IonInput,
  useIonAlert,
} from "@ionic/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit() {
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <IonPage>
      <div className="loginbackground">
        {" "}
        <IonCard>
          {" "}
          <div className="logincontainer">
            <div className="space8"> </div>
            <div className="centertext">
              <h2>Strength&amp;Numbers</h2>
            </div>
            <div className="logincontainer">
              <IonItem>
                <IonLabel position="fixed">Email</IonLabel>
                <IonInput
                  value={email}
                  placeholder="biglift@gmail.com"
                  onIonChange={(e) => setEmail(e.detail.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Password</IonLabel>
                <IonInput
                  value={password}
                  type="password"
                  placeholder="•••••••••"
                  onIonChange={(e) => setPassword(e.detail.value)}
                ></IonInput>
              </IonItem>
              <div className="space8"> </div>
              <IonButton onClick={handleSubmit} expand="block">Login</IonButton>
            </div>{" "}
            <div className="centertext">
              <div className="logincontainer">
                <div className="space4"> </div>
                <IonButton
                  //onClick={() => setViewState("signup")}
                  expand="block"
                  fill="outline"
                >
                  Sign Up
                </IonButton>
                <div className="space8"> </div>
                <a>Forgot Your Password?</a>
                <div className="space8"> </div>
              </div>
            </div>
          </div>
        </IonCard>{" "}
      </div>
    </IonPage>

    /*
   
   
   <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </> */
  );
}
