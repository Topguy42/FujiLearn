import AuroraText from '@/shared/ui/components/magicui/AuroraText';

/** Toggle between aurora gradient heading (true) and original heading style (false) */
const USE_AURORA_MAIN_MENU_HEADING = false;

const FujiLearnBanner = () => {
  return (
    <h1 className='flex w-1/2 flex-col items-start justify-center gap-1 text-4xl font-bold sm:w-2/3 md:pb-2 lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-2'>
      {USE_AURORA_MAIN_MENU_HEADING ? (
        <>
          <AuroraText lang='en'>FujiLearn</AuroraText>
          <AuroraText lang='ja' className='font-normal'>
            富士まなび
          </AuroraText>
        </>
      ) : (
        <>
          <span lang='en'>FujiLearn</span>
          <span lang='ja' className='font-normal text-(--secondary-color)'>
            富士まなび
          </span>
        </>
      )}
    </h1>
  );
};

export default FujiLearnBanner;

