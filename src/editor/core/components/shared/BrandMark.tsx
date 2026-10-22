import { Icon } from "@app/ui/Icon";
import "@app/components/shared/BrandMark.css";

interface BrandMarkProps {
  /** Height of the mark (CSS length). */
  height?: string;
  className?: string;
}

/**
 * The NEODOC logo mark, rendered inline (not as an <img>) so it inherits the
 * shared Icon sizing.
 */
export function BrandMark({ height = "1.6rem", className }: BrandMarkProps) {
  return (
    <Icon
      name="stirling-mark"
      size={height}
      className={`sui-brandmark${className ? ` ${className}` : ""}`}
      title="NEODOC"
    />
  );
}
