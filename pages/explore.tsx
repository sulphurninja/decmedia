import Explore from '../components/home/Explore'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
  wrapper: `flex justify-center h-full w-full select-none bg-[#15202b] text-white`,
  content: ` w-1/8 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar initialSelectedIcon={'Explore'} />
        <div className={style.mainContent}>
        <Explore/>
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default profile
