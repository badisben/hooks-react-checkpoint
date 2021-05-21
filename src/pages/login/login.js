import './login.css'
import {Button, Card, TextField} from "@material-ui/core";

const Login = () => {
    return (
        <div className={'login-container'}>
            <Card className={'login-card'}>
                <h1>Connexion</h1>

                <TextField label="Email"
                           type="search"
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           variant="outlined"/>
                <Button variant="contained" color="primary">
                   Connexion
                </Button>
            </Card>
        </div>
    )
}
export default Login