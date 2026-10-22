import { lazy, useMemo } from "react";
import { Icon } from "@app/ui/Icon";
import { useTranslation } from "react-i18next";
import {
  SubcategoryId,
  ToolCategoryId,
  ToolRegistry,
  RegularToolRegistry,
  SuperToolRegistry,
  LinkToolRegistry,
} from "@app/data/toolsTaxonomy";
import { isSuperToolId, isLinkToolId } from "@app/types/toolId";
import { getSynonyms } from "@app/utils/toolSynonyms";
import { useProprietaryToolRegistry } from "@app/data/useProprietaryToolRegistry";
import { ToolId } from "@app/types/toolId";

export interface TranslatedToolCatalog {
  allTools: ToolRegistry;
  regularTools: RegularToolRegistry;
  superTools: SuperToolRegistry;
  linkTools: LinkToolRegistry;
}

/**
 * NEODOC editor build: only the PDF text editor is exposed.
 * The tool catalogue is intentionally trimmed to keep the bundle small and to
 * avoid surfacing tools that depend on a backend this deployment does not have.
 */
export function useTranslatedToolCatalog(): TranslatedToolCatalog {
  const { t } = useTranslation();
  const proprietaryTools = useProprietaryToolRegistry();

  return useMemo(() => {
    const allTools: ToolRegistry = {
      ...proprietaryTools,
      pdfTextEditor: {
        icon: <Icon name="square-pen" size="1.5rem" />,
        name: t("home.pdfTextEditor.title", "PDF Text Editor"),
        component: lazy(() => import("@app/tools/pdfTextEditor/PdfTextEditor")),
        description: t(
          "home.pdfTextEditor.desc",
          "Review and edit text and images in PDFs with grouped text editing and PDF regeneration",
        ),
        categoryId: ToolCategoryId.RECOMMENDED_TOOLS,
        subcategoryId: SubcategoryId.GENERAL,
        maxFiles: 1,
        endpoints: ["text-editor-pdf"],
        synonyms: getSynonyms(t, "pdfTextEditor"),
        supportsAutomate: false,
        automationSettings: null,
      },
    };

    const regularTools = {} as RegularToolRegistry;
    const superTools = {} as SuperToolRegistry;
    const linkTools = {} as LinkToolRegistry;

    Object.entries(allTools).forEach(([key, entry]) => {
      const toolId = key as ToolId;
      if (isSuperToolId(toolId)) {
        superTools[toolId] = entry;
      } else if (isLinkToolId(toolId)) {
        linkTools[toolId] = entry;
      } else {
        regularTools[toolId] = entry;
      }
    });

    return {
      allTools,
      regularTools,
      superTools,
      linkTools,
    };
  }, [t, proprietaryTools]);
}
