import {Button, Card, TextField} from "@material-ui/core";
import'./addmovies.css';

const AddMovies = () => {
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Add new movie</h1>
                <TextField label="Title"
                           type="search"
                           variant="outlined"/>
                <TextField label="Description"
                           type="search"
                           variant="outlined"/>
                <TextField label="Rating"
                           type="search"
                           variant="outlined"/>
                <Button variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default AddMovies;