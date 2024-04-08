// Write your code here
import {useState} from 'react'

import {
  BackgroundContainer,
  ReactHooksHeading,
  ReactParagraph,
  ReactImage,
  ReadMoreButton,
  ReactTextParagraph,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [getValue, setValue] = useState(false)

  const hooksLength = reactHooksDescription.length
  console.log(hooksLength)

  const GetClickTheBtn = () => setValue(prevsState => !prevsState)

  const text = getValue
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const btnText = getValue ? 'Read Less' : 'Read More'

  return (
    <BackgroundContainer>
      <ReactHooksHeading>React Hooks</ReactHooksHeading>
      <ReactParagraph>Hooks are a new addition to React</ReactParagraph>

      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />

      <ReactTextParagraph>{text}</ReactTextParagraph>

      <ReadMoreButton onClick={GetClickTheBtn}>{btnText}</ReadMoreButton>
    </BackgroundContainer>
  )
}

export default ReadMore
