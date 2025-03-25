interface ShowroomProps {
  key: number;
}

export const ExtraCard: React.FC<ShowroomProps> = ({ key }) => {
  return (
    <section
      key={key}
      className='bg-[#383838] row-span-1  rounded-3xl p-4 font-bold'>
      <h3 className='text-white'>Showroom</h3>
      <figcaption className='text-[#b2aeab]'>9810 Irvine Center Dr, Irvine, CA 92618</figcaption>
    </section>
  );
};
