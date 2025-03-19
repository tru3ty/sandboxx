import MainPageLink from "@/shared/ui/main-page-link";

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-mono my-12'>mxerf & lnkpv components sandbox</h1>
      <div className='flex gap-4 items-center justify-center'>
        <MainPageLink href={"./ui"}>Ui Components</MainPageLink>
        <MainPageLink href={"./widgets"}>Widget Components</MainPageLink>
      </div>
    </main>
  );
}
