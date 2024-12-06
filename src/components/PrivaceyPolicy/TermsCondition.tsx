import Link from "next/link";
import React from "react";

const TermsCondition = () => {
  return (
    <div className="tab-pane fade" id="tab_terms_conditions" role="tabpanel">
      <div className="terms_conditions_content">
        <h3 className="warpper_title">
          Terms and Conditions Agreement for Soliono
        </h3>
        <p>Last Updated: 10th January 2024 </p>
        <p>
          Thank you for choosing Soliono . These Terms and Conditions
          {`("Terms")`} govern your access to and use of our website. By using
          our website, you agree to comply with and be bound by these Terms. If
          you do not agree to these Terms, please do not use our website.
        </p>
        <h4 className="info_title">Use of the Website:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Eligibility</strong>: You must be at least 16 years old
              to use our website. By using our website, you affirm that you are
              at least 16 years old.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>2.Account Creation</strong>:To access certain features,
              you may be required to create an account. You are responsible for
              maintaining the confidentiality of your account information and
              agree to accept responsibility for all activities that occur under
              your account.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>3.Accuracy of Information</strong>: You agree to provide
              accurate and current information when creating an account and
              using our website. We reserve the right to suspend or terminate
              your account if we suspect that the information provided is
              inaccurate or incomplete.
            </span>
          </li>
        </ul>

        <h4 className="info_title">User Content:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Submission of Content</strong>: You may have the
              opportunity to submit content, such as resumes, cover letters, and
              comments. By submitting content, you grant us a non-exclusive,
              worldwide, royalty-free, perpetual, irrevocable, and
              sublicenseable right to use, reproduce, modify, adapt, publish,
              translate, create derivative works from, distribute, and display
              such content.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>2.Content Guidelines</strong>: You agree not to submit
              content that is unlawful, defamatory, obscene, invasive of
              privacy, or otherwise objectionable. We reserve the right to
              remove or modify any content that violates these Terms.
            </span>
          </li>
        </ul>
        <h4 className="info_title">Job Listings and Applications:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Accuracy of Job Listings</strong>: We strive to provide
              accurate and up-to-date job listings, but we do not guarantee the
              accuracy of the information. Employers are responsible for the
              accuracy of their job listings.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>2. Application Process</strong>: When applying for jobs
              through our website, you understand and agree that we may share
              your application and personal information with the respective
              employer.
            </span>
          </li>
        </ul>
        <h4 className="info_title">Intellectual Property:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Ownership</strong>: All content and materials on our
              website, including text, graphics, logos, and images, are the
              property of the Company and are protected by intellectual property
              laws
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>1.License</strong>: You are granted a limited,
              non-exclusive, non-transferable license to access and use our
              website for personal, non-commercial purposes.
            </span>
          </li>
        </ul>

        <h4 className="info_title">Limitation of Liability</h4>
        <p>
          To the extent permitted by law, we shall not be liable for any
          indirect, incidental, consequential, or punitive damages arising out
          of your use of our website.
        </p>
        <h4 className="info_title">Changes to the Terms</h4>
        <p>
          We reserve the right to modify these Terms at any time. Any changes
          will be effective immediately upon posting on our website.
        </p>
        <h4 className="info_title">Governing Law</h4>
        <p>
          These Terms are governed by the laws of 154. Any disputes arising
          under or in connection with these Terms shall be subject to the
          exclusive jurisdiction of the courts in 154.
        </p>
        <h4 className="info_title">Contact Us</h4>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at contact@gmail.com
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
