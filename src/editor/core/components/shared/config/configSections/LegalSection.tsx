import React from "react";
import { Paper, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const LegalSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="lg">
      <Paper withBorder p="md" radius="md">
        <Stack gap="sm">
          <Text fw={600} size="sm">
            {t("settings.legal.statement.title", "Privacy and data")}
          </Text>
          <Text size="sm">
            {t(
              "settings.legal.statement.noCollection",
              "NEODOC does not collect user registration data or licence information. There are no accounts, sign-in or licences to register or validate.",
            )}
          </Text>
          <Text size="sm">
            {t(
              "settings.legal.statement.localOnly",
              "Your PDFs are opened, edited and exported only in your browser. No document or data is sent, saved or collected on any server, at any time.",
            )}
          </Text>
          <Text size="sm" c="dimmed">
            {t(
              "settings.legal.statement.noTracking",
              "No tracking cookies or analytics tools are used.",
            )}
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default LegalSection;
