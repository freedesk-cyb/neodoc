import { Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useFooterInfo } from "@app/hooks/useFooterInfo";

interface FooterProps {
  accessibilityStatement?: string;
  impressum?: string;
}

export default function Footer({
  accessibilityStatement,
  impressum,
}: FooterProps) {
  const { t } = useTranslation();
  const { footerInfo } = useFooterInfo();

  const finalAccessibilityStatement =
    accessibilityStatement ?? footerInfo?.accessibilityStatement;
  const finalImpressum = impressum ?? footerInfo?.impressum;

  const isValidLink = (link?: string) => link && link.trim().length > 0;

  return (
    <div
      style={{
        height: "var(--footer-height)",
        backgroundColor: "var(--c-surface)",
        borderTop: "1px solid var(--c-border-subtle)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        style={{
          fontSize: "0.75rem",
        }}
      >
        <a
          className="footer-link px-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/Cn8pWhQRxZ"
        >
          {t("footer.discord", "Discord")}
        </a>
        <a
          className="footer-link px-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Stirling-Tools/Stirling-PDF"
        >
          {t("footer.issues", "GitHub")}
        </a>
        {isValidLink(finalAccessibilityStatement) && (
          <a
            className="footer-link px-3"
            target="_blank"
            rel="noopener noreferrer"
            href={finalAccessibilityStatement}
          >
            {t("legal.accessibility", "Accessibility")}
          </a>
        )}
        {isValidLink(finalImpressum) && (
          <a
            className="footer-link px-3"
            target="_blank"
            rel="noopener noreferrer"
            href={finalImpressum}
          >
            {t("legal.impressum", "Impressum")}
          </a>
        )}
      </Flex>
    </div>
  );
}
