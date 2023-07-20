import React from 'react'
import Context from '../context/Context'
import styles from './AnimatedIntro.module.css'

function AnimatedIntro() {
  const {isShown, setIsShown} = React.useContext(Context);

  return (    
    <div className={styles.mainDiv}>
      <div className={styles.animatedFrameIndigo}>
        <p className={styles.animateTextIndigo}><i>Enlightened mind</i></p>
      </div>
      <div className={styles.animatedFrameOrange}>
      <p className={styles.animateTextOrange}><i>Imaginative</i></p>
      </div>
      <div className={styles.animatedFrameBlue}>
      <p className={styles.animateTextBlue}><i>Sensitive</i></p>
      </div>
      <div className={styles.animatedFrameYellow}>
      <p className={styles.animateTextYellow}><i>Researcher</i></p>
      </div>
    </div>
    
  )
}

export default AnimatedIntro
