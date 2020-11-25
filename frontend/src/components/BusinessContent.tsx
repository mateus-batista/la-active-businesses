/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Business } from "../model/Business";
import { Title } from "./layout/Title";
import { OpenStreetMapFrame } from "./map/OpenStreetMapFrame";

export interface BusinessContentProps {
  business: Business;
}

export function BusinessContent(props: BusinessContentProps) {
  const { business } = props;

  return (
    <div
      css={css`
        align-self: center;
      `}
    >
      <Title
        css={css`
          font-size: 1.25rem;
        `}
      >
        {business.name}
      </Title>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        {business.location && (
          <OpenStreetMapFrame location={business.location} />
        )}
        <div
          css={css`
            margin: 0 1rem;
          `}
        >
          <LabbeledItem label="Address">{business.address}</LabbeledItem>
          <LabbeledItem label="City">{business.city}</LabbeledItem>
          <LabbeledItem label="Zip code">{business.zipCode}</LabbeledItem>
          <LabbeledItem label="Start date">
            {business.startDate || "Unknown"}
          </LabbeledItem>
          <LabbeledItem label="End date">
            {business.endDate || "Unknown"}
          </LabbeledItem>
        </div>
      </div>
    </div>
  );
}

const LabbeledItem = (props: { label: string; children: ReactNode }) => {
  const { label, children } = props;

  return (
    <div
      css={css`
        padding: 0.5rem;
      `}
    >
      <label htmlFor={label}>
        <b>{label}</b>
      </label>
      <div id={label}>{children}</div>
    </div>
  );
};
