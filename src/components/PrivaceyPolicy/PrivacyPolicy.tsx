
import Link from "next/link";
import React from "react";
const PrivacyPolicy = () => {
  return (
    <div className="tab-pane fade active show" id="tab_privacy_policy" role="tabpanel">
      <div className="terms_conditions_content">
        <h3 className="warpper_title">Privacy Policy for Soliono</h3> 
        <p>Last Updated: 3rd January 2024 </p>
        <p>
          Thank you for choosing Soliono . This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your personal information. By
          using our website, you agree to the terms of this Privacy Policy.
        </p>
        <h4 className="info_title">Information We Collect:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1. Personal Information</strong>:We may collect personal
              information such as your name, email address, phone number,
              resume, and other relevant details when you create an account or
              apply for jobs on our platform.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>2. Usage Information</strong>: We collect information
              about your interactions with our website, including your browsing
              activities, the pages you view, and the features you access.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>3.Device and Location Information</strong>: We may collect
              information about your device and approximate location for
              analytical and service improvement purposes.
            </span>
          </li>
        </ul>

        <h4 className="info_title">How We Use Your Information:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Job Matching</strong>: We use your personal information
              to match you with relevant job opportunities based on your skills,
              experience, and preferences.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>2. Communication</strong>: We may use your contact
              information to send you job alerts, updates, newsletters, and
              other relevant communications.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>3. Improving Services</strong>:Your data helps us enhance
              our services, customize your experience, and improve the
              functionality and performance of our website.
            </span>
          </li>
        </ul>
        <h4 className="info_title">Information Sharing:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Employers</strong>:When you apply for a job, your resume
              and relevant information may be shared with the prospective
              employer.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>2.Service Providers</strong>: We may share your
              information with third-party service providers who assist us in
              delivering our services, such as hosting, analytics, and
              marketing.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>3.Legal Requirements</strong>:We may disclose your
              information if required by law, regulation, or legal process.
            </span>
          </li>
        </ul>

        <h4 className="info_title">Your Choices:</h4>
        <ul className="icon_list unordered_list_block">
          <li>
            <span className="list_item_text">
              <strong>1.Account Settings</strong>: You can manage your account
              settings, update your profile, and control communication
              preferences through your account dashboard.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>1.Opt-out</strong>: You may opt-out of receiving certain
              communications from us by following the instructions provided in
              the communication.
            </span>
          </li>
          <li>
            <span className="list_item_text">
              <strong>1.Employers</strong>:
            </span>
          </li>
        </ul>
        <h4 className="info_title">Security</h4>
        <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
        <h4 className="info_title">{`Children's`} Privacy</h4>
        <p>Our website is not intended for individuals under the age of 16. We do not knowingly collect personal information from children.</p>
        <h4 className="info_title">Changes to this Privacy Policy</h4>
        <p>We reserve the right to modify this Privacy Policy at any time. We will notify you of any significant changes through the website or other means.</p>
        <h4 className="info_title">Contact Us</h4>
        <p>If you have questions or concerns about this Privacy Policy, please contact us at <Link href="mailto:support@yahoo.com">support@yahoo.com</Link> .</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
