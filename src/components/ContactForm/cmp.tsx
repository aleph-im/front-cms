import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownOption,
  TextArea,
  TextInput,
} from "@aleph-front/core";

export const ContactForm = () => {
  const [dropdownValue, setDropdownValue] = useState<string | string[]>();

  return (
    <form
      action="https://aleph.us17.list-manage.com/subscribe/post?u=40af570491d53f28c5ae6f1ab&amp;id=4850a3195f"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      rel="noopener noreferrer"
      noValidate
    >
      <div className="fx-grain-2" tw="p-6 w-full sm:w-1/2 mx-auto">
        <div
          style={{ position: "absolute", left: "-4500px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_40af570491d53f28c5ae6f1ab_4850a3195f"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div tw="pb-6 mb-4">
          <TextInput
            label="Name"
            placeholder="Name"
            name="NAME"
            id="mce-NAME"
            required={true}
          />
        </div>
        <div tw="pb-6 mb-4">
          <TextInput
            type="email"
            label="Email"
            placeholder="Email"
            name="EMAIL"
            id="mce-EMAIL"
            required={true}
          />
        </div>
        <div tw="pb-6 mb-4">
          <Dropdown
            label="Interested in"
            name="MMERGE2"
            id="mce-MMERGE2"
            placeholder="Choose an option"
            required={true}
            value={dropdownValue}
            onChange={setDropdownValue}
          >
            <DropdownOption
              key="Host a Core Channel Node"
              value="Host a Core Channel Node"
            >
              Host a Core Channel Node
            </DropdownOption>
            <DropdownOption
              key="Become a Twentysix Cloud partner"
              value="Become a Twentysix Cloud partner"
            >
              Become a Twentysix Cloud partner
            </DropdownOption>
            <DropdownOption
              key="Building an application"
              value="Building an application"
            >
              Building an application
            </DropdownOption>
            <DropdownOption
              key="Get support with computing"
              value="Get support with computing"
            >
              Get support with computing
            </DropdownOption>
            <DropdownOption
              key="Get support with storage"
              value="Get support with storage"
            >
              Get support with storage
            </DropdownOption>
            <DropdownOption key="Careers" value="Careers">
              Careers
            </DropdownOption>
            <DropdownOption
              key="Other (please describe it below)"
              value="Other (please describe it below)"
            >
              Other (please describe it below)
            </DropdownOption>
          </Dropdown>
        </div>
        <div tw="pb-6">
          <TextArea
            label="Message"
            name="MMERGE5"
            id="mce-MMERGE5"
            placeholder="Tell us more."
            required={true}
            tw="h-48"
          />
        </div>
      </div>
      <div tw="p-6 w-1/2 mx-auto mt-2.5 text-center">
        <Button
          type="submit"
          href=""
          target="_blank"
          kind="gradient"
          variant="primary"
          size="lg"
          color="main0"
          tw="!my-0"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
