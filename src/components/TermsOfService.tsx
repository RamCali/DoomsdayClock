import { useEffect } from "react";

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | DoomsdayClock.net";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-wide max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: April 6, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using DoomsdayClock.net ("the Site"), you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Description of Service
            </h2>
            <p>
              DoomsdayClock.net is an educational website that tracks and
              provides information about the Doomsday Clock, maintained by the
              Bulletin of the Atomic Scientists. The Site includes historical
              data, blog articles, interactive tools, community forums, and
              related educational content.
            </p>
            <p className="mt-2">
              This site is independently maintained and is not affiliated with,
              endorsed by, or connected to the Bulletin of the Atomic Scientists.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Educational Purpose
            </h2>
            <p>
              All content on the Site is provided for educational and
              informational purposes only. The Doomsday Clock data is sourced
              from the Bulletin of the Atomic Scientists, and we make reasonable
              efforts to keep it accurate and up-to-date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. User Accounts
            </h2>
            <p>
              Certain features of the Site, such as the community forum, may
              require you to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and for
              all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. User-Generated Content
            </h2>
            <p>
              Users may post content in the community forum and other interactive
              areas. By posting content, you grant DoomsdayClock.net a
              non-exclusive, royalty-free license to display, distribute, and
              moderate that content on the Site. You are solely responsible for
              the content you post and agree not to post content that is:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Illegal, harmful, threatening, or harassing</li>
              <li>Defamatory, obscene, or otherwise objectionable</li>
              <li>Infringing on any intellectual property rights</li>
              <li>Spam, advertising, or unsolicited promotional material</li>
            </ul>
            <p className="mt-2">
              We reserve the right to remove any user-generated content at our
              discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Intellectual Property
            </h2>
            <p>
              The Site's design, layout, original content, and code are the
              property of DoomsdayClock.net. Doomsday Clock data and related
              trademarks belong to the Bulletin of the Atomic Scientists and are
              used here for educational purposes under fair use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Third-Party Links and Services
            </h2>
            <p>
              The Site may contain links to third-party websites and services,
              including the Bulletin of the Atomic Scientists, Ko-fi, and
              product listings. We are not responsible for the content, privacy
              practices, or availability of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Advertisements
            </h2>
            <p>
              The Site may display advertisements through third-party ad
              networks, including Google AdSense. These ad networks may use
              cookies and similar technologies to serve relevant ads. Your
              interaction with advertisements is governed by the respective
              advertiser's terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Disclaimer of Warranties
            </h2>
            <p>
              The Site is provided "as is" and "as available" without warranties
              of any kind, either express or implied. We do not guarantee the
              accuracy, completeness, or timeliness of any information on the
              Site. The Site should not be used as the sole basis for any
              decisions regarding personal safety or emergency preparedness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, DoomsdayClock.net and its
              operators shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of your
              use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to the Site.
              Your continued use of the Site after changes constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              12. Contact
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us through the Site's communication channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
