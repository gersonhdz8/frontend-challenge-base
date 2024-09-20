/* eslint-disable prettier/prettier */
import Banner from "@/components/home/banner";
import Aside from "@/components/ui/aside";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      <Banner></Banner>
      <div className="flex w-full h-full flex-row">
        <Aside></Aside>
        <section className="w-full p-3 border border-slate-600/50">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </>
  );
}
