/* eslint-disable prettier/prettier */
"use client";
import { Tabs, Tab, Button, Input } from "@nextui-org/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function TabsForms(): React.JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = searchParams.get("tab") || "signup";

  const [selectedTab, setSelectedTab] = useState(initialTab);

  useEffect(() => {
    const currentTab = searchParams.get("tab");
    if (currentTab && currentTab !== selectedTab) {
      setSelectedTab(currentTab);
    }
  }, [searchParams, selectedTab]);

  const handleTabChange = (key: string | number): void => {
    const tabKey = String(key);
    setSelectedTab(tabKey);
    router.push(`?tab=${key}`);
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Tabs
        aria-label="Options"
        selectedKey={selectedTab}
        onSelectionChange={handleTabChange}
        className="flex items-center justify-center"
      >
        <Tab
          key="signup"
          title="Sign up"
          className="w-full h-full flex justify-center items-center"
        >
          <Button className="w-80 bg-yellow-500 text-black">
            Ingresar con correo electronico
          </Button>
        </Tab>
        <Tab
          key="login"
          title="Login"
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <Input
            key="outside"
            type="email"
            label="Email"
            labelPlacement="outside"
            className="w-80"
          />
          <Input
            key="outside"
            type="password"
            label="Contraseña"
            labelPlacement="outside"
            className="w-80"
          />
          <Button className="w-80 mt-5 bg-yellow-500 text-black">
            Ingresar
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}
