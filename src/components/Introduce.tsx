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
    src: "./images/icon-versions.png",
    index: 0,
  },
  {
    title: "Manage your account",
    paragraph:
      "Configure your account settings, such as your email, profile details, and password.",
    src: "./images/icon-account.png",
    index: 1,
  },
  {
    title: "Manage organizations, teams, and projects",
    paragraph:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    src: "./images/icon-organizations.png",
    index: 2,
  },
  {
    title: "Manage billing",
    paragraph: "Change subscriptions and payment details.",
    src: "./images/icon-billing.png",
    index: 3,
  },
  {
    title: "Authenticate to Abstract",
    paragraph: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    src: "./images/icon-authenticate.png",
    index: 4,
  },
  {
    title: "Abstract support",
    paragraph: "Get in touch with a human.",
    src: "./images/icon-comment.png",
    index: 5,
  },
];
export const Introduce = () => {
  return (
    <div className="min-h-screen flex justify-center justify-items-center">
      <div className="w-250 grid grid-cols-2 grid-row-3 gap-x-28 my-24">
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
