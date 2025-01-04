import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedbull from '@/assets/SponsorRedbull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import { motion } from 'framer-motion';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            {/* Image and Main Header */}
            <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 '>
                {/* Main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* Headings */}
                    <motion.div className='md:-mt-20'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='relative'>
                            <div className='md:before:absolute md:before:-top-20 md:before:-left-20 md:before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className='mt-8 text-sm '>
                            Unrivaled Gym. Unparalleled Training Fitnes Classes. World Class Studios to get the Body Shapes That you Dream of... Get Your Dream Body Now.
                        </p>
                    </motion.div>
                    {/* Action */}
                    <div className='mt-8 flex items-center gap-8'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>
                                Learn More
                            </p>
                        </AnchorLink>
                    </div>
                </div>

                {/* Image */}
                <div className='flex basis-3/5 justify-center z-10 md:ml-40 md:mt-16 md:jusiify-items-end'>
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </div>
            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6 '>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className='flex w-full items-center justify-between'>
                            <img src={SponsorRedbull} alt="redbull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home;