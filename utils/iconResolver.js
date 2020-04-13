import ListIcon from '../public/icons/list.svg'
import StarIcon from '../public/icons/star2.svg'
import BagIcon from '../public/icons/bag.svg'
import FreezerIcon from '../public/icons/freezer.svg'
import FireIcon from '../public/icons/fire.svg'
import HouseIcon from '../public/icons/house.svg'
import StackIcon from '../public/icons/stack.svg'

const icons = {
  'list': <ListIcon></ListIcon>,
  'star': <StarIcon></StarIcon>,
  'bag': <BagIcon></BagIcon>,
  'freezer': <FreezerIcon></FreezerIcon>,
  'fire': <FireIcon></FireIcon>,
  'house': <HouseIcon></HouseIcon>,
  'stack': <StackIcon></StackIcon>,
}

export default (iconName) => {
  return icons[iconName] || icons['list'];
};
