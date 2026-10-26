import { useTranslation } from "react-i18next";
import { SettingsCard } from "@app/components/shared/config/SettingsCard";
import HelpSection from "@app/components/shared/config/configSections/HelpSection";
import LegalSection from "@app/components/shared/config/configSections/LegalSection";
import "@app/components/shared/config/configSections/AboutSection.css";

export interface AboutSectionProps {
  isAdmin: boolean;
  /** Tours need the settings page out of the way before they can run. */
  onRequestClose: () => void;
}

/**
 * The reference material: tours and the privacy statement. Each card's id is
 * the `#slug` that deep links and search results address.
 */
export default function AboutSection({
  isAdmin,
  onRequestClose,
}: AboutSectionProps) {
  const { t } = useTranslation();
  return (
    <div className="settings-section-container">
      <div className="about-section">
        <SettingsCard
          id="help"
          title={t("settings.help.label", "Tours")}
          description={t(
            "settings.help.description",
            "Guided walkthroughs of the editor and the admin area.",
          )}
        >
          <HelpSection isAdmin={isAdmin} onRequestClose={onRequestClose} />
        </SettingsCard>

        <SettingsCard
          id="legal"
          title={t("settings.legal.label", "Legal")}
          description={t(
            "settings.legal.description",
            "How your data is handled.",
          )}
        >
          <LegalSection />
        </SettingsCard>
      </div>
    </div>
  );
}
