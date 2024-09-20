/* eslint-disable prettier/prettier */
"use client";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import TabsForms from "./tabs-form";
import { useSearchParams } from "next/navigation";

export default function App(): React.JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "signup";

  return (
    <>
      <Button onPress={onOpen}>Iniciar sesión</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        radius="lg"
        isKeyboardDismissDisabled={true}
        isDismissable={false}
        size="5xl"
        className="h-[35rem] bg-white/5 w-full"
      >
        <ModalContent>
          <>
            <div className="flex flex-row w-full h-full text-white justify-center bg-transparent ">
              <div className="flex w-3/5 h-full p-5 justify-center">
                <TabsForms></TabsForms>
              </div>
              {selectedTab === "login" && (
                <div className="flex w-2/5 h-full justify-center flex-col items-center p-8">
                  <div
                    id="login"
                    className="px-10 pt-10 flex flex-col justify-between items-center bg-neutral-900 w-full h-full rounded-r-lg"
                  >
                    <p className="font-IBM text-3xl text-center">
                      Welcome to Quickbet Movies!
                    </p>
                    <p className="font-IBM text-md">
                      🎬 Ready to unlock a universe of cinematic delights? Sign
                      up now and start your journey with us!
                    </p>
                    <div>
                      <Image
                        src="/loginUser.svg"
                        alt="login_user"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "signup" && (
                <div className="flex w-2/5 h-full justify-center flex-col items-center p-8">
                  <div
                    id="signup"
                    className="px-10 pt-10 flex flex-col justify-between items-center bg-neutral-900 w-full h-full rounded-r-lg"
                  >
                    <p className="font-IBM text-3xl text-center">
                      Welcome back to Quickbet Movies!
                    </p>
                    <p className="font-IBM text-md">
                      🍿 Ready to dive into the world of unlimited
                      entertainment? Enter your credentials and let the
                      cinematic adventure begin!
                    </p>
                    <div>
                      <Image
                        src="/signUp.svg"
                        alt="signup_user"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
