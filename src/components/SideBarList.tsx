import React from 'react'
import { sidebarList } from '../data'
interface SidebarListProps {
  num: number
}
const SideBarList: React.FC<SidebarListProps> = ({num}) => {
  return (
    <ul >
      {
        sidebarList[num].map((item, index) => (
        <li key={index} className='sidelist'>
          <img src={item.img} alt={item.name} />
          <span>{item.name}</span>
        </li>
        ))
      }
    </ul>
  )
}

export default SideBarList