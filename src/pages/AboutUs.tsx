import styled from "@emotion/styled";
const AboutUs = () => {
  return (
    <AboutContainer>
      <h3>(ABOUT BRAIN DEAD)</h3>
      <div className="content">
        <p>
          Brain Dead is a catalyst for creative minds from around the world. With its unique, disruptive approach, the brand interprets the cultural landscape through clothes, objects, and artworks. A meeting place for a network of contemporary subcultures, Brain Dead bridges different worlds, scenes, and perspectives under the same roof.
          <br />
          <br />
          Brain Dead is ultimately about people, their cultures, and their attitudes.
        </p>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 460px;
  height: calc(100vh - 153px);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 153px auto 0;
  box-sizing: border-box;
  .content {
    text-align: left;
    overflow-wrap: break-word;
    line-height: 1.25rem;
    p {
      margin-bottom: 1rem;
    }
  }
  h3 {
    padding: 2.5rem 0;
    width: 100%;
    text-align: center;
  }
`;
export default AboutUs;
