import { useEffect } from "react";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | DoomsdayClock.net";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-wide max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: April 6, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Introduction
            </h2>
            <p>
              DoomsdayClock.net ("the Site") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you visit the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
              Information You Provide
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Email address:</strong> When you subscribe to our email
                updates or create a forum account
              </li>
              <li>
                <strong>Account information:</strong> Username and password when
                you register for the community forum
              </li>
              <li>
                <strong>Forum posts:</strong> Content you voluntarily post in
                our community forum
              </li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
              Information Collected Automatically
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Usage data:</strong> Pages visited, time spent on the
                Site, and referring URLs
              </li>
              <li>
                <strong>Device information:</strong> Browser type, operating
                system, and screen resolution
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your device
                to enhance your browsing experience
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Operate and maintain the Site</li>
              <li>Send email updates about Doomsday Clock changes (if subscribed)</li>
              <li>Manage your forum account and display your posts</li>
              <li>Analyze Site usage to improve content and user experience</li>
              <li>Display relevant advertisements</li>
              <li>Prevent abuse and enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Advertising and Cookies
            </h2>
            <p>
              We use Google AdSense to display advertisements on the Site.
              Google AdSense and its partners may use cookies and web beacons to
              serve ads based on your prior visits to the Site or other websites.
              Google's use of advertising cookies enables it and its partners to
              serve ads based on your browsing activity.
            </p>
            <p className="mt-2">
              You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-atomic hover:underline"
              >
                Google Ads Settings
              </a>
              . You can also opt out of third-party vendor cookies by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-atomic hover:underline"
              >
                aboutads.info
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Third-Party Services
            </h2>
            <p>We use the following third-party services that may collect data:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Google AdSense:</strong> For serving advertisements
              </li>
              <li>
                <strong>Google Apps Script:</strong> For processing email
                subscriptions
              </li>
              <li>
                <strong>Ko-fi:</strong> For processing voluntary donations
              </li>
            </ul>
            <p className="mt-2">
              Each of these services has its own privacy policy governing the
              data they collect. We encourage you to review their respective
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Data Storage and Security
            </h2>
            <p>
              We take reasonable measures to protect your information. Email
              subscriptions are stored securely via Google Sheets. Forum data is
              stored in our database with appropriate security measures. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from email updates at any time</li>
              <li>Delete your forum account</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us through the
              Site's communication channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Children's Privacy
            </h2>
            <p>
              The Site is intended for general audiences and is educational in
              nature. We do not knowingly collect personal information from
              children under 13. If you believe we have collected information
              from a child under 13, please contact us so we can promptly remove
              it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. Your
              continued use of the Site after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              10. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or your data,
              please contact us through the Site's communication channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
