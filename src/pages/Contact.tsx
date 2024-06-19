import styled from "@emotion/styled";
const Contact = () => {
  return (
    <ContactContainer>
      <h3>(CONTACT)</h3>
      <div className="content">
        <div>
          <p>Orders / Customer Service:</p>
          <p>service@wearebraindead.com</p>
        </div>
        <div>
          <p>Press:</p>
          <p>press@wearebraindead.com</p>
        </div>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 460px;
  height: calc(100vh - 153px);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 153px auto 0;
  box-sizing: border-box;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
      width: 100%;
      text-align: center;
      margin: 0 auto 1rem;
      p {
        width: 100%;
      }
    }
  }
  h3 {
    padding: 2.5rem 0;
    width: 100%;
    text-align: center;
  }
`;
export default Contact;
