/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Image as CHI,
} from "@chakra-ui/react";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";
import type { ReactElement } from "react";
import { BiCodeAlt } from "react-icons/bi";
// import { FaDiscord, FaRust, FaReact, FaEthereum } from "react-icons/fa";
// import { ImPaintFormat } from "react-icons/im";
import { SiScratch } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

interface TextImageProps {
  text: string;
  reverse: boolean;
  image: string;
  alt: string;
  height: number;
  width: number;
  cw: string;
}

interface TimelineElementProps {
  date: string;
  icon: ReactElement<any, any>;
  heading: string;
  description: string;
  location: string;
  bg: string;
}

const TimelineElement = ({
  date,
  icon,
  heading,
  description,
  location,
  bg,
}: TimelineElementProps) => {
  const box_bg = useColorModeValue("#EDF2F7", "#212930");
  const text_c = useColorModeValue("#000", "#fff");
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ background: box_bg, color: text_c }}
      dateClassName="timelinedatestyle"
      contentArrowStyle={{ borderRight: `7px solid  ${box_bg}` }}
      date={date}
      iconStyle={{
        boxShadow: `0 0 0 4px ${box_bg}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`,
        background: bg,
        color: "#fff",
      }}
      icon={icon}
    >
      <Heading size="lg" as="h3">
        {heading}
      </Heading>
      <Heading size="md" as="h4">
        {location}
      </Heading>
      <Text>{description}</Text>
    </VerticalTimelineElement>
  );
};

const TextImage = ({
  text,
  reverse,
  image,
  alt,
  height,
  width,
  cw,
}: TextImageProps) => {
  return (
    <Flex
      marginY={{ base: 0, md: "2%" }}
      paddingX={{ base: 0, md: 4, xl: 10 }}
      marginX={{ base: 0, xl: "10%" }}
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
    >
      <Box
        mr={{ base: 0, md: 3 }}
        ml={{ base: 0, md: 3 }}
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: cw }}
      >
        <Text>{text}</Text>
      </Box>
      <Box>
        <Image height={height} width={width} src={image} alt={alt} />
      </Box>
    </Flex>
  );
};

const About = () => {
  const bl = useColorModeValue("brand.400", "brand.600");
  const b = useColorModeValue("#EDF2F7", "#212930");
  return (
    <Box>
      <Flex alignItems="center" direction="column">
        <Heading as="h2" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: bl,
              zIndex: -1,
            }}
          >
            About Me
          </Text>
        </Heading>
        <Box marginY="5%">
          <TextImage
            text="Hello! I'm Joshua Cancio, a dedicated student pursuing a Computer Science degree, driven by my passion for software engineering and my ambitions for a rewarding career in this field. My journey with computers began in middle school, where I discovered the world of programming. I started by creating games in Scratch, ventured into web development, and explored the fundamentals of Java. When it came time to choose my university major, I faced a significant decision between IT, computer science, and cybersecurity. Ultimately, I selected computer science to delve deeper into coding techniques and leverage my six years of programming experience for becoming a proficient developer. The potential of machine learning and artificial intelligence has always fascinated me, and I see their integration into our society as incredibly promising. Aside from my passions of computers, I also enjoy playing sports such as basketball and volleyball. Additionally, I love to play the piano and saxophone for my friends and family."
            image="/IMG_3290.png"
            height={600}
            cw="60%"
            width={600}
            alt="Dagbot logo"
            reverse={false}
          />
          <TextImage
            text="
            During my internship, I had the opportunity to immerse myself in various methodologies such as waterfall, agile, and scrum, which equipped me with the flexibility to adapt to diverse project requirements and constraints. This experience honed my ability to collaborate effectively, communicate efficiently, and manage tasks within fixed timeframes, ensuring successful project outcomes. Furthermore, I spearheaded the configuration of a Transport Form using Visual Studio, Microsoft Azure, SQL database, and ASP.NET Core framework. This user-friendly web form facilitated the efficient logging of development, testing, and production processes, streamlining transport migration requests for the DevOps team.

            My internship also provided me with opportunities to enhance my proficiency in coding languages such as C#, HTML, and CSS, which I applied to develop and improve web applications. Additionally, I collaborated closely with the DevOps team to bring the Technical Account Manager (TAM) application to fruition, contributing to its successful implementation and functionality."
            image="/IMG_5401.png"
            alt="Github homescreen"
            reverse
            cw="70%"
            height={470}
            width={799}
          />
          <TextImage
            text="Apart  from programming, I really enjoy hanging out with friends and family. Whether it's having a nice meal together at home, going on outdoor adventures, or just sharing jokes and stories, these times mean a lot to me. I love the connections we build through these shared experiences. Whether it's a last-minute trip or a relaxed evening chatting, being with loved ones makes me really happy. They're like my rock, always there to support me and make me laugh. It's these simple moments that remind me of the importance of spending time with the people who matter most."
            image="/IMG_7462.png"
            alt="Github homescreen"
            cw="50%"
            reverse={false}
            height={250}
            width={162}
          />
          <TextImage
            text="Looking ahead, I am excited to continue my journey as a software engineer, fueled by a passion for creating innovative solutions that make a meaningful impact. Armed with the experiences gained during my internship and the skills honed along the way, I am eager to tackle new challenges and push the boundaries of what is possible in the realm of technology. Whether it's developing cutting-edge applications, refining existing processes, or pioneering entirely new approaches, I am committed to leveraging my expertise to drive positive change. With a steadfast dedication to lifelong learning and a spirit of innovation, I am confident in my ability to contribute to the ever-evolving landscape of software engineering, shaping the future one line of code at a time."
            image="/1709598708581.png"
            alt="Github homescreen"
            cw="50%"
            reverse
            height={320}
            width={320}
          />
        </Box>
      </Flex>
      <Flex alignItems="center" direction="column">
        <Heading as="h3" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: b,
              zIndex: -1,
            }}
          >
            My Journey
          </Text>
        </Heading>
        <VerticalTimeline lineColor={b}>
          <TimelineElement
            icon={<BiCodeAlt />}
            location="Fairfax, VA"
            bg="#149414"
            heading="Started Programming"
            date="2011"
            description="Started Learning to code (code.org)"
          />
          <TimelineElement
            icon={<SiScratch />}
            location="Fairfax, VA"
            bg="#f6ab3c"
            heading="Scratch Game Development"
            date="2015"
            description="Via School's hour of code and external classes I started making games in scratch. Mostly simple games, this developed an early interest in code and taught me logical thinking! "
          />

          <TimelineElement
            icon={<CHI src="201510560d50b5bcbf0.png" />}
            location="Fairfax, VA"
            bg="#ff9bd3"
            heading="Computer Science Classes"
            date="2017 - 2023"
            description="My whole middle school and high school career was spent learning computer science. I learnt python, java, html, css, js and more. I also took part in many clubs and coding competitions."
          />
          <TimelineElement
            icon={<CHI src="th.png" />}
            location="Arlington, VA"
            bg="#5865F2"
            heading="Cyber AI Camp"
            date="2021"
            description="I participated in an opportunity to learn about artificial intelligence and the increasingly important role of advancing and protecting our nation through cybersecurity. The camp went over Data and Statistics for AI, Programming Techniques with Python, Machine Learning, and Natural Language Processing (NLP). Guest speakers such as an FBI agent in digital forensics came to talk about their experiences in their field. Additionally, the final project assigned required information throughout the camp to construct an AI-related build to persuade investors to invest in a product. The project winners were my team out of the many other teams that participated submitting an AI powered water filter."
          />
          <TimelineElement
            icon={<CHI src="vasts.png" />}
            location="Hampton, VA"
            bg="#5865F2"
            heading="Virginia Aerospace Science and Technology Scholars (VASTS)"
            date="2022"
            description="The VASTS program is an interactive on-line science, technology, engineering and mathematics learning experience. Students who performed highly in the online program can be potentially invited to a seven-day residential summer academy at NASA Langley Research Center (LaRC) in Hampton, VA. I was selected in the Summer Academy program to be immersed in NASA-related research through interaction with scientists, engineers, and technologists. During the online course, I was instructed to write APA technical reports that were about Shuttle Ethics, Extra Vehicular Activity Innovation design, Mars Mission Design, Lunar Base Design, Risk Management, and a Long Duration Experiment. I was selected out of the many to be part of the Summer Academy where I was interviewed to be a budget analyst for one out of the five teams called Human Factors. The role of a budget analyst was in charge of itemizing and calculating the total expenses my team made. Throughout the camp, my team prepared for a panel presentation in front of Aerospace Engineers, Langley Scientists, and more.            "
          />
          <TimelineElement
            icon={<CHI src="pace-university.png" />}
            location="New York, NY"
            bg="#f44d1d"
            heading="Pace University STEM Institute"
            date="2022"
            description="During the summer of 2022, I attended a STEM Institute where I learned how to code with Python to create models, use design thinking, explore Billion Oyster Project (BOP) data, and worked in teams. This program supported the Billion Oyster Project whose goal is to restore one Billion live Oysters to New York Harbor by helping organize Data using Data visualization coded in Python. Worked with pandas, sklearn, matplotlib and more to finish a capstone with interactive maps! It really felt good after the program because it gave me insight on what data science was about and how it applies in working to solve a local environmental challenge. I realized its importance in real-world Applications."
          />
          <TimelineElement
            icon={<CHI src="VESSSLogo.png" />}
            location="Hampton, VA"
            bg="#67daf9"
            heading="Virginia Earth System Science Scholars (VESSS)"
            date="2022 - 2023"
            description="Completed eight professional technical reports during online program to gain selection for competitive residential summer academy at NASA Langley Research Center. 

            Although accepted for the summer academy, I had to make the tough decision to not attend in an effort to continue the Department of Information Technology internship, but I'm hoping to return to the NASA Langley Research Center as an intern."
          />
          <TimelineElement
            icon={<CHI src="OIP1.png" />}
            location="Fairfax, VA"
            bg="#ff9bd3"
            heading="CompTia A+"
            date="2023"
            description="Passed the two part exam to become CompTia A+ certified. This certification is a starting point for a career in IT. It covers mobile devices, networking technology, hardware, virtualization and cloud computing and network troubleshooting."
          />
          <TimelineElement
            icon={<CHI src="OIP.png" />}
            location="Fairfax, VA"
            bg="#67daf9"
            heading="Department of Information Technology Internship"
            date="2023"
            description="I had an amazing time during my summer internship with the Fairfax County Department of Information Technology, where I teamed up with the DevOps crew to bring the TAMS application to life. Using tools like Visual Studio and an SQL database, I created a user-friendly web form that made creating and managing transport migration requests a breeze. This not only smoothed out the process but also standardized data input, giving our efficiency a real boost.

            Working hand in hand with my fellow interns and the Department of Tax Administration, we took on the challenge of simplifying the print process. Working with Power Apps and Power Automate, we crafted a solution that revamps how documents are processed. Looking back, I'm truly grateful for this chance and amazed by the welcoming and collaborative atmosphere. The future looks exciting, and I can't help but hope for an opportunity to rejoin the innovative projects at Fairfax County once again. It's not just about the work; it's about the incredible people and the positive vibe that make Fairfax County shine."
          />
          <TimelineElement
            icon={<CHI src="\LogoLockup2ColorRGB.png" />}
            location="Manassas, VA"
            bg="#000"
            heading="NOVA Summer Bridge Program (OSHA 10, Pneumatics, Data Center Tour)"
            date="2023"
            description="I received an introduction to Engineering Technology, toured regional employers, and met NOVA faculty, students and staff. An aspect of Engineering Technology that I’ve learned was how pneumatics functions such as utilizing pneumatic cylinders, flow controls, directional control valves, an air motor, pressure gauges, rotameter, manometer, and air filters. The skills acquired by completing the basic pneumatics training system prepared me for more advanced concepts and pneumatic applications, including Amatrol’s Intermediate Pneumatics (85-IP) and Advanced Pneumatics (85-AP) systems. I was also given the opportunity to tour a data center known as STACK Infrastructure. I was able to meet with the vice president and also was taught how air flow and HVACs work from his instruction."
          />
        </VerticalTimeline>
        <Heading as="h3" size="2xl">
          <Text
            as="span"
            position="relative"
            _before={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              top: 1,
              left: 0,
              bg: b,
              zIndex: -1,
            }}
          >
            The journey continues...
          </Text>
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
