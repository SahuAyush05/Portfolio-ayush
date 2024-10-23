import React from 'react';
import SkillBubble from './SkillBubble';
import { useSpring, animated } from '@react-spring/web';
import Typewriter from 'react-typewriter-effect';
import { useInView } from 'react-intersection-observer';

const skills = [
  { 
    skill: 'JavaScript', 
    percentage: 70, 
    description: 'Proficient in JavaScript. Used in projects like AI Planet Chatbot.', 
    color: '#F7DF1E', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' 
  },
  { 
    skill: 'Mongo-DB', 
    percentage: 70, 
    description: 'Experienced in MongoDB. Used in projects like WhiteBoard.', 
    color: '#F7DF1E', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/768px-Antu_mongodb.svg.png?20160706123547' 
  },
  { 
    skill: 'React', 
    percentage: 75, 
    description: 'Experienced in React. Used in projects like Mzone and GrievEase.', 
    color: '#61DAFB', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
  },
  { 
    skill: 'NodeJS', 
    percentage: 75, 
    description: 'Proficient in NodeJS. Used in projects like RealTime-Whiteboard.', 
    color: '#3776AB', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' 
  },
  { 
    skill: 'Python', 
    percentage: 75, 
    description: 'Proficient in Python. Used in project: AI Planet Chatbot.', 
    color: '#3776AB', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' 
  },
  { 
    skill: 'Java', 
    percentage: 80, 
    description: 'Proficient in Java. Used in project: GrievEase.', 
    color: '#007396', 
    icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' 
  },
  { 
    skill: 'SQL', 
    percentage: 65, 
    description: 'Excellent in SQL. Used in database management projects.', 
    color: '#4479A1', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' 
  },
  { 
    skill: 'Git', 
    percentage: 50, 
    description: 'Proficient in Git for version control in various projects.', 
    color: '#F05032', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' 
  },
];



const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <div ref={ref} style={{ minHeight: '75vh' }} className="relative">
      <animated.h1 style={headingStyles} className='text-center py-2 mb-3 mt-24 font-semibold text-7xl'>
        Skills
      </animated.h1>
      <animated.h2 style={headingStyles} className='text-center py-2 mt-5 mb-3'>
      <Typewriter
  options={{
    strings: ['Proficiencies in various technologies'], // Ensure this is an array
    autoStart: true,
    loop: false,
  }}
/>

      </animated.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
      
          <AnimatedBubble 
            key={index} 
            skill={skill.skill} 
            percentage={skill.percentage} 
            description={skill.description} 
            icon={skill.icon} 
            color={skill.color}
           
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedBubble = ({ skill, percentage, description, icon }) => {
  const [hovered, setHovered] = React.useState(false);

  const { x, y } = useSpring({
    from: { x: 0, y: 0 },
    to: { x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 },
    config: { duration: 2000 },
    reset: true,
    reverse: hovered,
    onRest: () => !hovered && setHovered(false),
  });

  return (
    <animated.div
      style={{
        transform: x.to((x) => `translate3d(${x}%, ${y}%, 0)`),
      }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SkillBubble skill={skill} percentage={percentage} description={description} icon={icon} />
    </animated.div>
  );
};

export default SkillsSection;
