import styled from "@emotion/styled";
import PolicyNav from "../components/PolicyNav";

const PrivacyPolicy: React.FC = () => {
  return (
    <PrivacyContainer>
      <PolicyNav />
      <h3>(PRIVACY POLICY)</h3>
      <div className="content">
        <ul>
          <li data-mce-style="font-weight: 400; text-align: left;">Privacy Policy of Brain Dead This Website collects some Personal Data from its Users.</li>
          <p>&nbsp;</p>
          <div data-mce-style="text-align: center;">
            <strong></strong>
          </div>
          <ul>
            <li data-mce-style="font-weight: 400;">Users may be subject to different protection standards and broader standards may therefore apply to some. Users can contact the Owner, to learn more about such standards.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to Users in the European Union and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to California consumers and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to Virginia consumers and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to Colorado consumers and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to Connecticut consumers and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to Utah consumers and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document contains a section dedicated to Brazilian Users and their privacy rights.</li>
            <p>&nbsp;</p>
            <li>This document can be printed for reference by using the print command in the settings of any browser.</li>
            <p>&nbsp;</p>
            <li>This docu ment can be printed for reference by using the print command in the settings of any browser.</li>
            <p>&nbsp;</p>
            <li>
              Owner and Data Controller
              <br />
              Brain Dead Amusements,
              <br />
              LLC 2045 Violet St. Los Angeles, CA 90021
            </li>
            <p>&nbsp;</p>
            <li>Owner contact email: digital@wearebraindead.com </li>
            <p>&nbsp;</p>
            <li>Types of Data collected Among the types of Personal Data that this Website collects, by itself or through third parties, there are: Usage Data; Trackers; various types of Data; email address; first name; last name; phone number; physical address; username; password; VAT Number; billing address.</li>
            <p>&nbsp;</p>
            <li>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.</li>
            <p>&nbsp;</p>
            <li>Personal Data may be freely provided by the User, or, in case of Usage Data,</li>
            <p>&nbsp;</p>
            <li>collected automatically when using this Website. Unless specified otherwise, all Data requested by this Website is mandatory and failure to provide this Data may make it impossible for this Website to provide its services.</li>
            <li></li>In cases where this Website specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service. Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. Any use of Cookies – or of other tracking tools — by this Website or by the
            owners of third-party services used by this Website serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy. Users are responsible for any third-party Personal Data obtained, published or shared through this Website. Mode and place of processing the Data Methods of processing The
            Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain
            types of persons in charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested
            from the Owner at any time. Place The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located. Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the
            section containing details about the processing of Personal Data. Retention time Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent. The purposes of processing The Data concerning the
            User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Platform services and hosting, Displaying content from external platforms, Heat mapping and session recording,
            Handling payments, Managing contacts and sending messages, Tag Management, Contacting the User, Registration and authentication provided directly by this Website, Analytics and Infrastructure monitoring. For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”. Detailed
            information on the processing of Personal Data Personal Data is collected for the following purposes and using the following services: Analytics The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior. Google Analytics (Universal Analytics) (Google LLC) Google Analytics (Universal Analytics) is a web
            analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. In order to understand Google's use of Data, consult Google's
            partner policy. Personal Data processed: Trackers; Usage Data. Place of processing: United States – Privacy Policy – Opt Out. Category of personal information collected according to the CCPA: internet or other electronic network activity information.
          </ul>
          <p>&nbsp;</p>
        </ul>
      </div>
    </PrivacyContainer>
  );
};

const PrivacyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 460px;
  margin: 153px auto 96px;
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
  p {
  }
`;

export default PrivacyPolicy;
