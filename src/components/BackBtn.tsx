import {BiArrowBack} from 'react-icons/bi'
import { useDarkGray } from '../utils/theme'

const BackBtn = () => {
  const darkGray = useDarkGray()
  return (
    <>
      <BiArrowBack size={30} color={darkGray} />
    </>
  )

}

export default BackBtn