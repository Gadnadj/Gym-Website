import { SelectedPage, BenefitType } from "@/shared/types";
import { HomeModernIcon, AcademicCapIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HTest";
import Benefit from "@/scenes/benefits/Benefits";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";



const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Our gym is equipped with cutting-edge technology and modern amenities to provide the best workout experience.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "We offer a wide variety of classes for all skill levels, ensuring everyone finds something they love.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Our certified trainers are dedicated to helping you achieve your fitness goals through personalized guidance.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="md:my-5  md:w-3/5">
                    <HText>
                        MORE THAN JUST A GYM.
                    </HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}

                    className="md:flex items-center justify-between gap-8 mt-5">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                    ))}
                </motion.div>
                {/* Graphics and Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />

                    {/* Description */}
                    <div>
                        {/* TItle */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "} <span className="text-primary-500">FIT.</span>.
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* Description */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">Our members have transformed their lives through our expert guidance and state-of-the-art facilities. Join a community that supports your journey to better health and fitness..</p>
                            <p className="mb-5">From personalized training plans to diverse classes, we ensure you have everything you need to succeed. Become a part of a fitness culture that prioritizes results and well-being.</p>
                        </motion.div>

                        {/* Button */}
                        <motion.div className="relative mt-16"
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default Benefits;