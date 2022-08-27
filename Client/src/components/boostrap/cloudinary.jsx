import react, {useState} from 'react'
import {Container, FormGroup, Input} from 'reactstrap'


const SubiendoImagenes = (props) => {
    const [image, setImage] = useState("");
    const [Loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/coinplus/image/upload",

            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        console. Log(res)
        setImage(file.secure_url)
        setLoading(false)
        }
        return ( <div>
            <Container style={{textAlign: "center"}}>
                <FormGroup>
                     <Input
                        type="file"
                        name = "file"
                        placeholder= "Sube tu imagen aqui!"
                        onChange= {uploadImage}
                        />
                {Loading ? (<h3>cargando imagenes</h3>):(<img src={image} style={{width:'300px'}}/>)}
                

                 </FormGroup>
            </Container>
             </div> );
    }

    export default SubiendoImagenes