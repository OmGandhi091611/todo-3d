import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

export default function TabsBasicExample() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div className="mb-3 p-10">
      <div className="items-start">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          className="mb-4 w-32 rounded-lg"
          alt="Avatar"
        />
        <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
        <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
      </div>
      <TETabs justify>
        <TETabsItem
          color="danger"
          onClick={() => handleBasicClick("tab1")}
          active={basicActive === "tab1"}
        >
          Home
        </TETabsItem>
        <TETabsItem
          color="danger"
          onClick={() => handleBasicClick("tab2")}
          active={basicActive === "tab2"}
        >
          Profile
        </TETabsItem>
        <TETabsItem
          color="danger"
          onClick={() => handleBasicClick("tab3")}
          active={basicActive === "tab3"}
        >
          Messages
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab4")}
          active={basicActive === "tab4"}
          disabled
        >
          Contact
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={basicActive === "tab1"}>Tab 1 content</TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>Tab 2 content</TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>Tab 3 content</TETabsPane>
        <TETabsPane show={basicActive === "tab4"}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  );
}
