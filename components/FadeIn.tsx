import { motion } from 'framer-motion'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

export const FadeIn: React.FC = ({ children }) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <Waypoint onEnter={() => setVisible(true)} onLeave={() => setVisible(true)}>
      <motion.div
        transition={{ duration: 1 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 10,
        }}
      >
        {children}
      </motion.div>
    </Waypoint>
  )
}
