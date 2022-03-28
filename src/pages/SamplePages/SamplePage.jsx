import { SamplePageContainer } from "./SamplePage.style";
import { useParams } from "react-router-dom";

const SamplePage = () => {
  const { path } = useParams();
  // Capitilizes path
  const title = path.charAt(0).toUpperCase() + path.substring(1);

  return (
    <SamplePageContainer>
      <h1>{title}</h1>
      <p>Data for other pages would go here.</p>
    </SamplePageContainer>
  );
};

export default SamplePage;
