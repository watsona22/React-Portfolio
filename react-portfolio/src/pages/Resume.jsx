//https://medium.com/@stheodorejohn/a-guide-to-display-pdf-documents-in-react-bcd9fb0f56b0
import resume from '../assets/images/AmberWatson_Resume.pdf'
const Resume = () => {
    return (
        <div>
            <iframe src={resume} title='Resume' width="100%" height='500px' />
        </div>
    );
};
export default Resume;
