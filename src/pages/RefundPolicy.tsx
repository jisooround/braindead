import styled from "@emotion/styled";
import PolicyNav from "../components/PolicyNav";

const RefundPolicy = () => {
  return (
    <RefundContainer>
      <PolicyNav />
      <h3>(SHIPPING & RETURNS POLICY)</h3>
      <div className="content">
        <ul>
          <li data-mce-style="font-weight: 400; text-align: left;">
            Due to production timelines, specialty products may incur a shipping delay on your order. Please refer to individual product descriptions for fulfillment&nbsp;estimates.&nbsp;For products without indicated shipping estimates,&nbsp; <span data-mce-fragment="1">order processing may take 4-5 business days, but often ships sooner.</span>
          </li>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div data-mce-style="text-align: center;">
            <strong></strong>
          </div>
          <div data-mce-style="text-align: center;">
            <strong>DOMESTIC&nbsp;(US)&nbsp;SHIPPING&nbsp;POLICY:</strong>
          </div>
          <div data-mce-style="text-align: left;">
            <strong></strong>
          </div>
          <br />
          <ul>
            <li data-mce-style="font-weight: 400;">We offer free shipping on National (US) orders above $400. With exceptions for some dangerous goods and heavyweight/bulky items.</li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li data-mce-style="font-weight: 400;">Domestic (US) addresses ship with FedEx Standard. P.O. Box addresses ship with USPS tracking.</li>
          </ul>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div data-mce-style="text-align: center;">
            <strong>INTERNATIONAL&nbsp;(NON US) SHIPPING POLICY:</strong>
          </div>
          <div data-mce-style="text-align: left;">
            <strong>&nbsp;</strong>
          </div>
          <ul>
            <li data-mce-style="font-weight: 400;">International orders ship via DHL Worldwide, Fedex International, Royal Mail (UK orders), or DPD Standard (European orders).</li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li data-mce-style="font-weight: 400;">We ship to most countries worldwide excluding Cuba, Iran, Indonesia, North Korea, Syria, Ukraine, Russia, Venezuela, and Belarus.</li>
            <p>&nbsp;</p>
            <li>Applicable duties and import taxes are calculated at checkout</li>
            <p>&nbsp;</p>
            <li>While it is our hope that all packages arrive at their intended destinations in a timely manner, sometimes carriers mishandle packages. We waive all responsibility once the package lands in the destination country as we do not have any jurisdiction over international countries and their postal systems.</li>
            <p>&nbsp;</p>
            <li>Should any issues arise after the package has landed in the destination country, the recipient is responsible for contacting their local postal service to remedy the situation. The recipient is also responsible for all customs fees, taxes, and brokerage charges.</li>
            <p>&nbsp;</p>
            <li>
              While many orders make it through customs without issues, the customs agency in your country may require you to sign any required forms before receiving your package. It is the recipient's responsibility to check with their country's customs office to verify any fees as we are unable to provide the recipient with the exact amount of the charges. By completing your order you agree to
              pay all applicable fees.
            </li>
            <p>&nbsp;</p>
            <li>
              If your package is seized by customs officials for any reason whatsoever, we will not issue a refund unless all products are returned to us in their original condition. If you refuse or return your order, no international shipping charges or fees paid to local government will be refunded. If you have any questions, we encourage you to contact your local customs office, as we cannot
              advise you about your country's customs policies.
            </li>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </ul>
        </ul>
      </div>
    </RefundContainer>
  );
};

const RefundContainer = styled.div`
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

export default RefundPolicy;
