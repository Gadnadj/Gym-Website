import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HTest";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Build strength and improve your endurance with our weight training classes, designed for all fitness levels.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description:
            "Find your inner peace and enhance flexibility with our yoga sessions, perfect for relaxation and stress relief.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Strengthen your core muscles and achieve better balance and stability in our specialized ab core classes.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Experience fitness with a twist through our adventure classes that combine fun and challenging activities.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description:
            "Stay motivated and achieve your goals with our high-energy fitness classes tailored for all fitness levels.",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Get personalized attention and expert guidance in our training classes, designed to maximize your potential.",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Explore a variety of classes tailored to meet your fitness goals.
                            From weight training to yoga, we offer something for everyone to stay active and motivated.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;