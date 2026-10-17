"use client";
import { Option } from "./Option";

export type OptionProps = {
  title: string;
  paragraph: string;
  src: string;
  index: number;
  key?: number;
};
export const introduce: OptionProps[] = [
  {
    title: "Using Abstract",
    paragraph:
      "Abstract lets you manage, version, and document your designs in one place.",
    src: "./icons/icon-versions.png",
    index: 0,
  },
  {
    title: "Manage your account",
    paragraph:
      "Configure your account settings, such as your email, profile details, and password.",
    src: "./icons/icon-account.png",
    index: 1,
  },
  {
    title: "Manage organizations, teams, and projects",
    paragraph:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    src: "./icons/icon-organizations.png",
    index: 2,
  },
  {
    title: "Manage billing",
    paragraph: "Change subscriptions and payment details.",
    src: "./icons/icon-billing.png",
    index: 3,
  },
  {
    title: "Authenticate to Abstract",
    paragraph: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    src: "./icons/icon-authenticate.png",
    index: 4,
  },
  {
    title: "Abstract support",
    paragraph: "Get in touch with a human.",
    src: "./icons/icon-comment.png",
    index: 5,
  },
];
export const Introduce = () => {
  return (
    <div className="flex justify-center justify-items-center pt-24 lg:px-20 px-6 py-20">
      <div className="lg:w-full w-1/2 grid lg:grid-cols-2 grid-cols-1 lg:grid-row-3 justify-center justify-items-center lg:gap-3 gap-y-6">
        {introduce.map((item) => (
          <Option
            title={item.title}
            paragraph={item.paragraph}
            src={item.src}
            key={item.index}
            index={item.index}
          />
        ))}
      </div>
    </div>
  );
};
