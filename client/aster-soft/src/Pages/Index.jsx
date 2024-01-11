import React, { useEffect, useState } from 'react'
import './temp.css'
import Login from './Login'

const Index = () => {

  const [welcomTrigger, setwelcomTrigger] = useState(false)
  const [welcomeWord, setWelcomeWord] = useState([])
  const [signUpToggle, setSignUpToggle] = useState(false)

  const showWordTimer = () => {
    setTimeout(() => {
      setwelcomTrigger(true)
    }, 3000);
  }

  const sets = {
    signUpToggle,
    setSignUpToggle
  }

  useEffect(() => {
    const tempWordArr = []
    const tempWord = 'AsterSoft 게임 세계에 오신 것을 환영합니다.'
    for (let i = 0; i < tempWord.length; i++) {
      if (tempWord[i] == ' ') {

      }
      tempWordArr.push(tempWord[i])
    }
    setWelcomeWord(tempWordArr)
    showWordTimer()

    return () => {
    }
  }, [])


  return (
    <div id='loginBack'>

      <div id="preloader">
        <div id="first"></div>
        <div id="second"></div>
        {
          welcomTrigger && <h1 id='welcome'>
            {
              welcomeWord.map((chr, index) =>
                <span style={{ animationDelay: `${0.5 + index * 0.05}s` }}>
                  {chr}
                </span>
              )
            }
          </h1>
        }
      </div>
      {/* 로그인 및 회원가입 컴포넌트 */}
        <Login sets={sets}>

        </Login>
    </div>


  )
}

export default Index