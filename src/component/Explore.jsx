import Nav from "./Nav";

const Explore = () => {

    const formData = new FormData();
    formData.append("name", "Amos");
    console.log(formData);

    return (
        <div>
            <Nav />
        </div>
    );
}
 
export default Explore;

