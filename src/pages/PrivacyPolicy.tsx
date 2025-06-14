import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1>Privacy Policy for Etherion AI</h1>
        <p>Last Updated: {lastUpdatedDate}</p>

        <h2>1. Introduction</h2>
        <p>Welcome to Etherion AI ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://etherion.ai, interact with our advertisements (such as on LinkedIn), or use our services.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
        <ul>
          <li><strong>Personal Data:</strong> Name, email address, phone number, job title, company name, and other similar contact data.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, such as your IP address, browser type, operating system, referring URLs, access times, and pages viewed.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to track the activity on our website and hold certain information.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect or receive:</p>
        <ul>
          <li>To provide, operate, and maintain our website and services.</li>
          <li>To improve, personalize, and expand our website and services.</li>
          <li>To understand and analyze how you use our website and services.</li>
          <li>To develop new products, services, features, and functionality.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          <li>To process your transactions.</li>
          <li>To send you emails.</li>
          <li>To find and prevent fraud.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>We may share your information in the following situations:</p>
        <ul>
          <li><strong>With Service Providers:</strong> We may share your personal information with service providers to monitor and analyze the use of our website, to contact you.</li>
          <li><strong>For Business Transfers:</strong> We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</li>
          <li><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
          <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
        </ul>

        <h2>5. Cookies and Web Beacons</h2>
        <p>Like any other website, Etherion AI uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2>6. Data Security</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.</p>

        <h2>7. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>8. Children's Privacy</h2>
        <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul>
          <li>By email: privacy@etherion.ai</li>
          <li>By visiting this page on our website: https://etherion.ai/contact</li>
        </ul>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
```
