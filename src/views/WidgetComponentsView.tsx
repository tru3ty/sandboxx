import Link from "next/link";

const WidgetComponentsView = () => {
  return (
    <section className='grid grid-cols-4'>
      <div className='p-16'>
        <h1 className='section-title'>Widgets</h1>
        <Link href='/widgets/product-showcase'>Product Showcase</Link>
      </div>
    </section>
  );
};

export default WidgetComponentsView;
